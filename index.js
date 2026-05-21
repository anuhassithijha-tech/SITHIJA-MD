const {
            const msg = mek.messages[0];

            if (!msg.message) return;

            msg.message =
                Object.keys(msg.message)[0] === "ephemeralMessage"
                    ? msg.message.ephemeralMessage.message
                    : msg.message;

            const from = msg.key.remoteJid;

            const type = Object.keys(msg.message)[0];

            const body =
                type === "conversation"
                    ? msg.message.conversation
                    : type === "extendedTextMessage"
                    ? msg.message.extendedTextMessage.text
                    : type === "imageMessage"
                    ? msg.message.imageMessage.caption
                    : type === "videoMessage"
                    ? msg.message.videoMessage.caption
                    : "";

            const sender = msg.key.participant || msg.key.remoteJid;

            const pushname = msg.pushName || "No Name";

            const isCmd = body.startsWith(config.PREFIX);

            const command = isCmd
                ? body.slice(config.PREFIX.length).trim().split(" ")[0].toLowerCase()
                : "";

            const args = body.trim().split(/ +/).slice(1);

            const reply = (text) => conn.sendMessage(from, { text }, { quoted: msg });

            const cmdData = commands.find((cmd) => cmd.pattern === command);

            if (cmdData) {

                if (cmdData.react) {
                    await conn.sendMessage(from, {
                        react: {
                            text: cmdData.react,
                            key: msg.key
                        }
                    });
                }

                cmdData.function(conn, msg, mek, {
                    from,
                    body,
                    isCmd,
                    command,
                    args,
                    reply,
                    sender,
                    pushname
                });
            }

        } catch (e) {
            console.log(e);
        }

    });
}

startBot();
