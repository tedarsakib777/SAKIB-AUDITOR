module.exports.config = {
  name: "bot",
  version: "1.0.0",
  permission: 0,
  credits: "ryuko",
  prefix: true,
  description: "goibot",
  category: "noprefix",
  usages: "admin",
  cooldowns: 5
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["আমি এখন সাকিব মাহমুদ বস এ রসাথে বিজি আছি", "আই লাভ ইউ 🫣🫣" , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , "jan i love you 😘🫣" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "jan ummma 💋", "হা বলো😒,কি করতে পারি😐😑?" , "এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬","মে হলে সাকিব মাহমুদ বসের সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "কাছে এসে কিস দেই 💋💋" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "আমার সাকিব জানু এর সাথে ব্যাস্ত আসি😋" , "কাছে এসে কিস দেই জান 💋😘" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "বট বট না করে সাকিব মাহমুদ বস এর চিপায় আসো 😉" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , "কালকে দেখা করিস তো একটু 😈" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "সাকিব মাহমুদ কে Ummmmha দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি সাকিব মাহমুদ এর সাথে ব্যাস্ত আসি😒"  , "হুম বলো" , "amr Jan lagbe,Tumi ki single aso?", "জান তোমারে আমার অনেক ভালো লাগে 💋"];
  var rand = tl[Math.floor(Math.random() * tl.length)]


  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `╭────────────❍\n╰➤ 👤 𝐃𝐞𝐚𝐫 『 ${name} 』,\n\n╰➤ 🗣️${rand}\n╰─────────────────➤`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
