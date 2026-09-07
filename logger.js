function log(message) {
    const time = new Date().toLocaleTimeString();
    console.log(`[\x1b[36m${time}\x1b[0m] ${message}`);
}

module.exports = log;