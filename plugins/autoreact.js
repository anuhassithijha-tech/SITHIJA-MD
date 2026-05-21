module.exports = async (conn, msg) => {

    try {

        if (!msg.message) return;

        const emojis = ["⚡", "🔥", "💚", "🤖", "✨"];

        const emoji = emojis[Math.floor(Math.random() * emojis.length)];

        await conn.sendMessage(msg.key.remoteJid, {
            react: {
                text: emoji,
                key: msg.key
            }
        });

    } catch (e) {
        console.log(e);
    }
};
