const crypto = require("crypto");
const log = require("./logger");

log("Dice simulator started.");

for (let rollNumber = 1; rollNumber <= 5; rollNumber++) {
    const value = crypto.randomInt(1, 7);
    log(`Roll ${rollNumber} produced: ${value}`);
}

log("Dice simulator finished.");