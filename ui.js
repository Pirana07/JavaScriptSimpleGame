import { spawnMonster, monster } from "./enemy.js";
import { attack, heal, player } from "./player.js";

const log = document.getElementById("battle-log");
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

export function usingText(textName, text) {
    let textElement = document.getElementById(textName);
    textElement.textContent = text
}

    export function logMessage(message){
        let line = document.createElement("p");
        line.textContent = message;
        log.appendChild(line);

    }

export function uiState(gameState){
    switch (gameState) {
        case "Spawn Enemy":
            alert("You have summond " + monster.name);
            buttonState("attack-btn", "");
            usingText("enemy-text", "\\. " + monster.name + " ./");
            usingText("enemyHp-text", "Enemy Hp: " + monster.health)
            break;
        case "Enemy Defeated":
            buttonState("attack-btn", "none");
            usingText("xp-text", "XP: " + player.xp);
            usingText("enemyHp-text", "Enemy Defeated")

            break;
        case "Game Over":
            alert("You died! Refreshing....");
            location.reload();
            break;
    }
}