import { generateMonsters } from "./enemy.js";
import { attack, heal } from "./player.js";

export var monster;
usingButton('spawn-btn', spawnMonster); //monster spawn button

function spawnMonster(){
    monster = generateMonsters()
    alert("You have summond " + monster.name);
}

usingButton('attack-btn', attack); //player attack button
usingButton('heal-btn', heal); //player attack button



function usingButton(buttonName, buttonFunction){
    const spawnButton = document.getElementById(buttonName);
    spawnButton.addEventListener('click', buttonFunction);
}

//  if(monster.health <= 0){
//     enemydied();
//     }