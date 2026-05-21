const commands = [];

function cmd(info, func) {
    commands.push({ ...info, function: func });
}

module.exports = {
    cmd,
    commands
};
