import { player, playerDied, rewardGain } from "./player.js";
import { Monster } from "./monster.model.js"
import {uiState, usingText, logMessage} from "./ui.js"

export const monsterTypes = [
    {
        name: 'slime',
        health: 10,
        attack: 3,
        gold: 5,
        xp: 2
    },
    {
        name: "orc",
        health: 25,
        attack: 25,
        gold: 10,
        xp: 4
    },
    {
        name: "witch",
        health: 120,
        attack: 10,
        gold: 3,
        xp: 15
    },
    {
        name: "dragon",
        health: 150,
        attack: 20,
        gold: 20,
        xp: 25
    }
];


export function generateMonster() {
    let generatedMonster = monsterTypes[Math.floor(Math.random() * monsterTypes.length)];
    return structuredClone(generatedMonster); //makes clone of original so original blueprint never changes
}

//monster Variable
export let monster = new Monster(...Object.values(generateMonster()));

export function spawnMonster() {
    monster = generateMonster();
    uiState("Spawn Enemy");
}

export function enemyAttack(){
    player.health -= monster.attack;
    logMessage(monster.name + " attacked!");
    logMessage("Player has " + player.health + "hp left!");
    usingText("health-text", "HP: " + player.health)
    if (player.health <= 0) {
        playerDied();
    }else{
        logMessage("players turn!");
    }
}


export function enemyDefeated() {
    rewardGain();
    console.log(`${monster.name} died!`);
    uiState("Enemy Defeated");
}