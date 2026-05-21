const { cmd } = require("../lib/command");
const axios = require("axios");

cmd({
    pattern: "tt",
    react: "🎵",
    desc: "TikTok Downloader",
    category: "download"
},
async (conn, mek, m, { args, from, reply }) => {

if (!args[0]) return reply("Enter TikTok URL");

try {

const api = await axios.get(`https://api.darksadas.xyz/dl/tiktok?url=${args[0]}`);

const data = api.data.result;

await conn.sendMessage(from, {
video: { url: data.video },
caption: "SITHIJA-MD TIKTOK DOWNLOADER"
}, { quoted: mek });

} catch {
reply("Download Failed");
}

});
