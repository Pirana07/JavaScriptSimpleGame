import { player } from "./player.js";
import { Monster } from "./monster.model.js"

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


export function generateMonsters() {
    let generatedMonster = monsterTypes[Math.floor(Math.random() * monsterTypes.length)];
    return structuredClone(generatedMonster); //makes clone of original so original blueprint never changes
}

//monster Variable
export let monster = new Monster(...Object.values(generateMonsters()));

export function spawnMonster() {
    monster = generateMonsters()
    alert("You have summond " + monster.name);
}


export function enemydied() {
    console.log(`${monster.name} died!`);
    player.gold += monster.gold;
    player.xp += monster.xp;
}