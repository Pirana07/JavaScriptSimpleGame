import { monster } from "./enemy.js";
import { attack } from "./player.js";

usingButton('spawn-btn', spawnMonster); //monster spawn button

function spawnMonster(){
    alert("You have summond " + monster.name);
}

usingButton('attack-btn', attack); //player attack button



function usingButton(buttonName, buttonFunction){
    const spawnButton = document.getElementById(buttonName);
    spawnButton.addEventListener('click', buttonFunction);
}
