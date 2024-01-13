import { watchFile, unwatchFile } from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import fs from "fs";
import fetch from "node-fetch";
import axios from "axios";

global.owner = [["254100512703", "Darkanon", true], [""], [""]]; //Number of owners
//global.pairingNumber = "" //put your bot number here
global.mods = ["254100512703"];
global.prems = ["254100512703"];
global.allowed = [];
global.keysZens = ["c2459db922", "37CC845916", "6fb0eff124"];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = [
  "29d4b59a4aa687ca",
  "5LTV57azwaid7dXfz5fzJu",
  "cb15ed422c71a2fb",
  "5bd33b276d41d6b4",
  "HIRO",
  "kurrxd09",
  "ebb6251cc00f9c63",
];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ["GataDios"];

global.APIs = {
  // API Prefix
  // name: 'https://website'
  xteam: "https://api.xteam.xyz",
  nrtm: "https://fg-nrtm.ddns.net",
  bg: "http://bochil.ddns.net",
  fgmods: "https://api.fgmods.xyz",
};
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  "https://api.xteam.xyz": "d90a9e986e18778b",
  "https://zenzapis.xyz": "675e34de8a",
  "https://api.fgmods.xyz": "dEBWvxCY",
};

// Sticker WM
global.botname = "CARLTECH";
global.princebot = "🛡️ CARLTECH BOT🛡️";
global.packname = "Darkanon♥️";
global.author = "Darkanon♥️";
global.Darkanonig = "https://www.instagram.com/ih_kenya/";
global.Darkanon = "https://chat.whatsapp.com/E1MmhbJG0VDDq26Bj6PWfi";
global.menuvid = "https://i.imgur.com/GFAAXqw.mp4";
global.global.carltech_whatsapp_bot =
  "https://github.com/optimus-glitch/carltech-whatsapp-bot.git";
global.carltechyt = "https://www.youtube.com/channel/UCy2BSPemZCJIQfNfm7FSNDg";
global.carltechpic =
  "https://asset.cloudinary.com/dgqitmzcg/de0e83b08a87a494d64db012621dbc28";
global.thumb = fs.readFileSync("./Assets/carltech_5.jpg");

global.wait = "*♻️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 𝙵𝙸𝙻𝙴 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*";
global.imgs = "*🖼️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 ɪᴍᴀɢᴇs 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*";
global.rwait = "♻️";
global.dmoji = "🤭";
global.done = "✅";
global.error = "❌";
global.xmoji = "🌀";

global.multiplier = 69;
global.maxwarn = "3"; // máxima advertencias

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
