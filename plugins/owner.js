const { cmd } = require("../lib/command");
const config = require("../config");

cmd({
    pattern: "owner",
    react: "👑",
    desc: "Owner Contact",
    category: "main"
},
async (conn, mek, m, { from }) => {

    await conn.sendMessage(from, {
        contacts: {
            displayName: config.OWNER_NAME,
            contacts: [
                {
                    displayName: config.OWNER_NAME,
                    vcard:
`BEGIN:VCARD
VERSION:3.0
FN:${config.OWNER_NAME}
TEL;type=CELL;type=VOICE;waid=${config.OWNER_NUMBER}:${config.OWNER_NUMBER}
END:VCARD`
                }
            ]
        }
    }, { quoted: mek });

});
