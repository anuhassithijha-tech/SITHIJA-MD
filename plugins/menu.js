const { cmd, commands } = require("../lib/command");
const config = require("../config");

cmd({
    pattern: "menu",
    react: "📜",
    desc: "All Commands",
    category: "main"
},
async (conn, mek, m, { reply, pushname }) => {

    let menu = `
╭━━━〔 ${config.BOT_NAME} 〕━━━⬣
┃ 👋 Hello : ${pushname}
┃ 👑 Owner : ${config.OWNER_NAME}
┃ ⚡ Prefix : ${config.PREFIX}
╰━━━━━━━━━━━━━━━━⬣
\n`;

    commands.map((command) => {
        menu += `┃ ${config.PREFIX}${command.pattern}\n`;
    });

    menu += `╰━━━━━━━━━━━━━━━━⬣`;

    reply(menu);

});
