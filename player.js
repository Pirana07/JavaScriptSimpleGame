import { monster, enemydied } from "./enemy.js";

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
let damage = 0; // damage dealt to enemy


export function attack(){
    if(monster.health <= 0) return;

    let isItCrit = Number(Math.random() < player.critChance);
    if(isItCrit){
        damage = (player.attack * player.critDamage);
    }else{
        damage = player.attack;
    }
    monster.health -= damage;
    console.log(monster.name + " has " + monster.health + "hp left!");

  if (monster.health <= 0) {
        enemydied();
  }
}
export function heal(){
    player.health = Math.min(Math.floor(Math.random() * player.mana), player.maxHealth);
}