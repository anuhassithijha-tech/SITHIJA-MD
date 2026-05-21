const { cmd } = require("../lib/command");
const config = require("../config");

cmd({
    pattern: "alive",
    react: "✅",
    desc: "Bot Status",
    category: "main"
},
async (conn, mek, m, { reply }) => {

    reply(`
╭━━━〔 ${config.BOT_NAME} 〕━━━⬣
┃ 🤖 Bot Online
┃ 🚀 Speed Fast
┃ 👑 Owner : ${config.OWNER_NAME}
╰━━━━━━━━━━━━━━━━⬣
`);

});
