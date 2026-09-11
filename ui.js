import { monsterTypes, generateMonsters } from "./enemy.js";

function spawnMonster(){
    alert(generateMonsters());
}
const spawnButton = document.getElementById('spawn-btn');
spawnButton.addEventListener('click', spawnMonster);