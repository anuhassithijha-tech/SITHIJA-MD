const { cmd } = require("../lib/command");

module.exports = async (conn, msg) => {

    try {

        if (msg.key && msg.key.remoteJid === "status@broadcast") {

            await conn.readMessages([msg.key]);

            const reactions = ["❤️", "🔥", "⚡", "😍", "💚", "🤖"];

            const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];

            await conn.sendMessage(
                msg.key.remoteJid,
                {
                    react: {
                        key: msg.key,
                        text: randomReaction
                    }
                }
            );

            console.log("AUTO STATUS REACT DONE");
        }

    } catch (e) {
        console.log(e);
    }
};
