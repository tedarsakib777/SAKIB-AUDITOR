module.exports.config = {
  name: "info",
  version: "1.0.0",
  permission: 0,
  credits: "farhan",
  prefix: true,
  description: "search results on google",
  category: "without prefix",
  usages: "google [text]",
  cooldowns: 5,
  dependencies: 
{
  "request":"",
  "fs-extra":"",
  "axios":""
}
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/ZnbXhYTY/inbound2931345345072188232.jpg", 

            "https://i.postimg.cc/2SSjxmhD/inbound4755129997776083166.jpg", 

            "https://i.postimg.cc/rz6yJt1Z/inbound6885868082530802578.jpg",

"https://i.postimg.cc/0QxyKgYW/inbound4628190817202335261.jpg",

            ""];

var callback = () => api.sendMessage({body:`𝙸𝙽𝙵𝙾 𝙰𝙽𝙳 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽
________________________________________

❇️𝙱𝙾𝚃 𝙽𝙰𝙼𝙴 : ${global.config.BOTNAME}

❇️𝙱𝙾𝚃 𝙰𝙳𝙼𝙸𝙽 :『 𝙽𝙰𝚈𝙴𝙼-𝚅𝙰𝚆 』

❇️𝙰𝙳𝙳𝚁𝙴𝚂𝚂 : 𝙿𝚃𝙺

_____________𝙲𝙾𝙽𝚃𝙰𝙲𝚃_____________

❇️𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝙸𝙳 : https://www.facebook.com/NAYEM.KING.OKY

❇️𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝚔 𝙿𝙰𝙶𝙴: 

❇️𝙱𝙾𝚃 𝙿𝚁𝙴𝙵𝙸𝚇 : ${global.config.PREFIX}

❇️𝙱𝙾𝚃 𝙾𝚆𝙽𝙴𝚁 :  𝙽𝙰𝚈𝙴𝙼-𝚅𝙰𝚆

𝙾𝚃𝙷𝙴𝚁 𝙸𝙽𝙵𝙾𝙼𝙰𝚃𝙸𝙾𝙽____________________

𝚃𝚈𝙿𝙴 /𝚊𝚍𝚖𝚒𝚗

➟ 𝚄𝙿𝚃𝙸𝙼𝙴

𝚃𝙾𝙳𝙰𝚈 𝙸𝚂 𝚃𝙸𝙼𝙴 : ${juswa} 

𝙱𝙾𝚃 𝙸𝚂 𝚁𝚄𝙽𝙽𝙸𝙽𝙶 ${hours}:${minutes}:${seconds}.

𝚃𝙷𝙰𝙽𝙺𝚂 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 ${global.config.BOTNAME} 『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   }; 
