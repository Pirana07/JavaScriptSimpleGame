import { player } from "./player.js";
import { logMessage } from "./ui.js";


export function buySword() {
    player.gold -= 0;
    player.attack += 1;
    logMessage("Attack Upgraded! " + player.attack);
}