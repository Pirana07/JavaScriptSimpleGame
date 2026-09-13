import { spawnMonster, monster } from "./enemy.js";
import { attack, heal } from "./player.js";

buttonState("attack-btn", "none");

usingButton('spawn-btn', spawnMonster); //monster spawn button
usingButton('attack-btn', attack); //player attack button
usingButton('heal-btn', heal); //player attack button



function usingButton(buttonName, buttonFunction) {
    let button = document.getElementById(buttonName);
    button.addEventListener('click', buttonFunction);
}

export function buttonState(buttonName, buttonState) {
    let button = document.getElementById(buttonName);
    button.style.display = buttonState;
}


export function uiState(gameState){
    switch (gameState) {
        case "Spawn Enemy":
            alert("You have summond " + monster.name);
            buttonState("attack-btn", "");
            break;
        case "Enemy Defeated":
            buttonState("attack-btn", "none");
            break;
        case "Game Over":
            alert("You died! Refreshing....");
            location.reload();
            break;
    }
}