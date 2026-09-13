import { enemyDefeated, monster, enemyAttack } from "./enemy.js";
import { uiState } from "./ui.js";

export const player = {
    name: "pirana",
    health: 100,
    maxHealth: 100,
    attack: 5,
    mana: 20,
    critChance: 0.5,
    critDamage: 1.2,
    level: 0,
    xp: 0,
    gold: 0,
}

export function attack(){
    if(monster.health <= 0) return;

    monster.health -= playerDamage();
    console.log(monster.name + " has " + monster.health + "hp left!");
    if (monster.health <= 0) {
        enemyDefeated();
     }else{
        enemyAttack();
    } 
}

export function heal(){
    player.health = Math.min(player.health + (Math.floor(Math.random() * player.mana)), player.maxHealth);
    console.log("player healed and has " + player.health + "hp")
}

export function rewardGain(){
    player.gold += monster.gold;
    player.xp += monster.xp;
    console.log ("player Xp: " + player.xp + " player gold: " + player.gold);
}

export function playerDied(){
    uiState("Game Over");
}

function playerDamage(){
    let isItCrit = Math.random() < player.critChance;
    if(isItCrit) return player.attack * player.critDamage;
    return player.attack; 
}