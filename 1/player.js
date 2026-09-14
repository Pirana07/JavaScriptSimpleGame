import { enemyDefeated, monster, enemyAttack } from "./enemy.js";
import { uiState, usingText, logMessage } from "./ui.js";

export const player = {
    name: "pirana",
    health: 100,
    maxHealth: 100,
    attack: 5,
    mana: 20,
    critChance: 0.5,
    critDamage: 1.2,
    xp: 0,
    gold: 0,
}

export function attack(){
    if(monster.health <= 0) return;

    monster.health -= playerDamage();
    usingText("enemyHp-text", "Enemy Hp: " + monster.health);
    logMessage(monster.name + " has " + monster.health + "hp left!");
    if (monster.health <= 0) {
        enemyDefeated();
     }else{
        enemyAttack();
    } 
}

export function heal(){
    if(player.xp <= 0) return;
    player.health = Math.min(player.health + (Math.floor(Math.random() * player.mana)), player.maxHealth);
    logMessage("player healed and has " + player.health + "hp");
    usingText("health-text", "HP: " + player.health)
    player.xp -= 1;
}

export function rewardGain(){
    player.gold += monster.gold;
    player.xp += monster.xp;
    logMessage("player Xp: " + player.xp + " player gold: " + player.gold);
}

export function playerDied(){
    uiState("Game Over");
}

function playerDamage(){
    let isItCrit = Math.random() < player.critChance;
    if(isItCrit) return player.attack * player.critDamage;
    return player.attack; 
}