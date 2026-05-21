const { cmd } = require("../lib/command");

cmd({
    pattern: "ping",
    react: "🏓",
    desc: "Bot Speed",
    category: "main"
},
async (conn, mek, m, { reply }) => {

    const start = new Date().getTime();

    const end = new Date().getTime();

    reply(`🏓 Pong : ${end - start} ms`);

});
