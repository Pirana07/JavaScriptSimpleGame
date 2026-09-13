import { player, playerDied } from "./player.js";
import { Monster } from "./monster.model.js"
import {buttonState} from "./ui.js"

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
    monster = generateMonster()
    alert("You have summond " + monster.name);
    buttonState("attack-btn", "");
}

export function enemyAttack(){
    player.health -= monster.attack;
    console.log(monster.name + " attacked!");
    console.log("Player has " + player.health + "hp left!");
    if (player.health <= 0) {
        playerDied();
    }else{
        console.log("players turn!")
    }
}


export function enemyDefeated() {
    buttonState("attack-btn", "none");
    console.log(`${monster.name} died!`);
    player.gold += monster.gold;
    player.xp += monster.xp;
    console.log ("player Xp: " + player.xp + " player gold: " + player.gold);
}