module.exports.config = {
  name: "goibot",
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

  var tl = ["╭───────────────❍\n╰➤🗣️আমি এখন সাকিব মাহমুদ বস এ রসাথে বিজি আছি\n╰───────────────➤", "╭───────────────❍\n╰➤🗣️আই লাভ ইউ 🫣🫣\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺\n╰───────────────➤ " , "╭───────────────❍\n╰➤🗣️jan i love you 😘🫣\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "jan ummma 💋\n╰───────────────➤", "╭───────────────❍\n╰➤🗣️হা বলো😒,কি করতে পারি😐😑?\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️এতো ডাকছিস কোনো?গালি শুনবি নাকি? 🤬\n╰───────────────➤","╭───────────────❍\n╰➤🗣️মে হলে সাকিব মাহমুদ বসের সাথে প্রেম করো🙈??. \n╰───────────────➤" ,  "╭───────────────❍\n╰➤🗣️আরে Bolo আমার জান ,কেমন আসো?😚 \n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️Bot বলে অসম্মান করচ্ছিছ,😰😿\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️কাছে এসে কিস দেই 💋💋\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️Bot না , জানু বল জানু 😘 \n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️আমার সাকিব জানু এর সাথে ব্যাস্ত আসি😋\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️কাছে এসে কিস দেই জান 💋😘\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 \n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️বট বট না করে সাকিব মাহমুদ বস এর চিপায় আসো 😉\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️হা জানু , এইদিক এ আসো কিস দেই🤭 😘\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস  😉😋🤣\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 \n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️আমাকে ডেকো না,আমি ব্যাস্ত আসি\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️কি হলো ,মিস টিস করচ্ছিস নাকি🤣\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️কালকে দেখা করিস তো একটু 😈\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️হা বলো, শুনছি আমি 😏\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️আর কত বার ডাকবি ,শুনছি তো\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️সাকিব মাহমুদ কে Ummmmha দে 😒\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️বলো কি করতে পারি তোমার জন্য\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️আমি তো অন্ধ কিছু দেখি না🐸 😎\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️Bot না জানু,বল 😌\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️বলো জানু 🌚\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️তোর কি চোখে পড়ে না আমি সাকিব মাহমুদ এর সাথে ব্যাস্ত আসি😒\n╰───────────────➤"  , "╭───────────────❍\n╰➤🗣️হুম বলো\n╰───────────────➤" , "╭───────────────❍\n╰➤🗣️amr Jan lagbe,Tumi ki single aso?\n╰───────────────➤", "╭───────────────❍\n╰➤🗣️জান তোমারে আমার অনেক ভালো লাগে 💋\n╰───────────────➤"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("_আগে brush করে আই তারপর কিস দিস_!😼😒", threadID);
   };

    if ((event.body.toLowerCase() =="🙋‍♂️" ) || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage(",Group এ হাত মারতে নিষেধ করেছে ", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. এটা সারা কি কিছু বলতে প্যারিস না তুই?😒", threadID);
   };

   if ((event.body.toLowerCase() == "Bot boss") || (event.body.toLowerCase() == "sakib কে")) {
     return api.sendMessage("𝗦𝗔𝗞𝗜𝗕 𝗠𝗔𝗛𝗠𝗨𝗗\nhttps://www.facebook.com/SAKIB.MAHMUD.V1", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage("lol mne lots of love 😘", threadID);
   };

   if ((event.body.toLowerCase() == "gd morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "কেমন আছো") || (event.body.toLowerCase() == "Kamon aso")) {
     return api.sendMessage("𝘼𝙡𝙝𝙖𝙢𝙙𝙪𝙡𝙡𝙞𝙖𝙝 𝙫𝙡𝙤__𝙩𝙢𝙞? ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "SAKIB") || (event.body.toLowerCase() == "সাকিব") || (event.body.toLowerCase() == "Sakib") || (event.body.toLowerCase() == "sakib")) {
     return api.sendMessage( "আবে ওই সয়তান তুই কি ওজু করছো 𝗦𝗔𝗞𝗜𝗕 𝗠𝗔𝗛𝗠𝗨𝗗 বসের নাম লও? 😘",threadID);


   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "creator")) {
     return api.sendMessage("‎[Bot owner :亗 BOSS SAKIB MAHMUD亗 \n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 Picchi in English . Facebook id: https://www.facebook.com/SAKIB.MAHMUD.V1  ", threadID);
   };

   if ((event.body.toLowerCase() == "bot কে বানাইছে") || (event.body.toLowerCase() == "tumke banaise ke?")) {
     return api.sendMessage("Boss SAKIB is My Creator🥰. He loves me & Edit Me Daily. He is a good boy 😊", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "botka admin kon ha")) {
     return api.sendMessage("He is SAKIB MAHMUD Boss\n He Gives his name,_You're nex't cru'sh everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "bot love you") || (event.body.toLowerCase() == "Bot love you")) {
     return api.sendMessage("না,আমি তো রোবট আমি love করমু কিভাবে,মে হলে তুমি আমার বস সাকিব মাহমুদ এর সাথে প্রেম করো 🥰", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kor")) {
     return api.sendMessage("Nh ami চুপ থাকবো না.😼 নাঈম বস আমারে কথা বলতে বলছে🤭", threadID);
   };

   if ((event.body.toLowerCase() == "Bts") || (event.body.toLowerCase() == "bts")) {
     return api.sendMessage("Bts মানে হিজড়া_🤣🤣তুই কি bts নাকি_🤨?", threadID);
   };

   if ((event.body.toLowerCase() == "Boss er sate beyadopi") || (event.body.toLowerCase() == "বস এর সাথে বেয়াদপি") || (event.body.toLowerCase() == "ki bolli ata") || (event.body.toLowerCase() == "opoman korli")) {
     return api.sendMessage("__sorry boss😔😔 মাফ করে দেন আমাকে ,আর এমন হবে না 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "চুম্মা দাও") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️ আমি দিবো না,😒 সাকিব মাহমুদ বস কে বলো দিতে🐸", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you Farhan")) {
     return api.sendMessage("️ Welcome সাকিব মাহমুদ বসের পক্ষে থেকে 🥰🥰.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️ এত রাগ করে না baby🥺. এই নাও ummmmah😘", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Kore . এক বারে বলো Hey marry me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "🥵🥵") || (event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🤤")) {
     return api.sendMessage("️এই গুলা কেন দেও বুঝি, সব বুঝি uff,আর তুমি নাহ বুঝলে আমার বস কে ডাক দেও🙈🙈 ??🤔", threadID);
   };

   if ((event.body.toLowerCase() == "🔥") || (event.body.toLowerCase() == "❤️‍🔥")) {
     return api.sendMessage("️️️ও ভাই গুরুপে আগুন লাগছে আমার ভয় লাগে, আমার বস সাকিব মাহমুদ কে কেউ ফোন দেও😛", threadID);
   };

   if ((event.body.toLowerCase() == "pic daw") || (event.body.toLowerCase() == "photo daw")) {
     return api.sendMessage("️বসের inbox a জাও ওখানে দিছি😵", threadID);
   };

   if ((event.body.toLowerCase() == "বট দেও") || (event.body.toLowerCase() == "বট বানাইয়া দাও")) {
     return api.sendMessage("️ তুমি নিজেই বানাই নাও 😒😼, সাকিব মাহমুদ অনেক ব্যস্ত্ এখন", threadID);
   };

   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ ওইদিক এ কি দেখো জানু,আমি তো এইদিক এ 🤭😽", threadID);
   };

   if ((event.body.toLowerCase() == "আমাকে কেউ ভালোবাসে নাহ") || (event.body.toLowerCase() == "kew valobashe na amk") || (event.body.toLowerCase() == "কেউ ভালোবাসে না আমাকে")) {
     return api.sendMessage("️ আবে ওই শালী 😡 আমার নাঈম বস কে i love you বল🥰", threadID);
   };

   if ((event.body.toLowerCase() == "🤦‍♀️") || (event.body.toLowerCase() == "🤦") || (event.body.toLowerCase() == "🤦🏻‍♂️")) {
     return api.sendMessage("আরে ভাই,মাথায় বারি মারিই না,মাথা ফেটে যাবে😬", threadID);
   };

  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "🤣")) {
     return api.sendMessage("__আরে আস্তে হাসতে হাসতে দাঁত খুলে যাবে 🤣🤣 তখন আর মাংস খেতে পারবি না 🐸", threadID);
   };

   if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "👉👈") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "🤭")) {
     return api.sendMessage("__মনে কি লাড্ডু ফুটছে?🥰", threadID);
   };

   if ((event.body.toLowerCase() == "Kamon aco?") || (event.body.toLowerCase() == "কেমন আছেন সবাই") || (event.body.toLowerCase() == "kamon aco sobi?") || (event.body.toLowerCase() == "কেমন আছো সবাই?") || (event.body.toLowerCase() == "kamon aso?")) {
     return api.sendMessage("alhamdulilah valo tmi🥰", threadID);
   };

   if ((event.body.toLowerCase() == "@everyone call a aso") || (event.body.toLowerCase() == "কলে আসো")) {
     return api.sendMessage("আসালামু ওয়ালাইকুম আমি নাঈম এর বট বলতে আছি আমি কলে আসতে পারি না", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("এৃঁতোৃঁ ভাৃঁলোৃঁবাৃঁসাৃঁ কৃঁইৃঁ পাৃঁওৃঁ আৃঁমাৃঁরৃঁ বৃঁসৃ্ঁ নাৃঁঈৃঁমৃঁঁ কেৃঁ এৃঁকৃঁটুৃঁ দেৃঁওৃঁ🥰", threadID);
   };

   if ((event.body.toLowerCase() == "bot ঘুমাও") || (event.body.toLowerCase() == "Bot ঘুমাবা কখন?")) {
     return api.sendMessage("আমি bot, আমার ঘুমানোর দরকার নাই😊তুমি ঘুমাও<🐒", threadID);
   };

   if ((event.body.toLowerCase() == "Miss you bot") || (event.body.toLowerCase() == "I miss you bot")) {
     return api.sendMessage("Miss you to🥰 জান ত্যাহ", threadID);
   };

   if ((event.body.toLowerCase() == "আমি") || (event.body.toLowerCase() == "Ami")) {
     return api.sendMessage("হ্যা, তুই আমার বাল_<😊", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
