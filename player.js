import { monster } from "./enemy.js";

const player = {
    name: "pirana",
    health: 100,
    defence: 10,
    attack: 5,
    critChance: 0.5,
    critDamage: 1.2,
    level: 0,
    xp: 0,
    gold: 0,
}
var damage = 0; // damage dealt to enemy


export function attack(){
    var isItCrit = Number(Math.random(0, 1) < player.critChance);
    if(isItCrit){
        damage = (player.attack * player.critDamage);
    }else{
        damage = player.attack;
    }
    monster.health -= damage;
    console.log(monster.name + " has left " + monster.health + "hp");
}