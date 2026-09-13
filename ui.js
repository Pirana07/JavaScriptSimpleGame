import { spawnMonster } from "./enemy.js";
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