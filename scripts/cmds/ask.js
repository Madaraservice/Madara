const axios = require('axios');

async function fetchFromAI(url, params) {
 try {
 const response = await axios.get(url, { params });
 return response.data;
 } catch (error) {
 console.error(error);
 return null;
 }
}

async function getAIResponse(input, userId, messageID) {
 const services = [
 { url: 'https://ai-tools.replit.app/gpt', params: { prompt: input, uid: userId } },
 { url: 'https://openaikey-x20f.onrender.com/api', params: { prompt: input } },
 { url: 'http://fi1.bot-hosting.net:6518/gpt', params: { query: input } },
 { url: 'https://ai-chat-gpt-4-lite.onrender.com/api/hercai', params: { question: input } }
 ];

 let response = "●▬🗻ᎬΝϴᏟᏦ🗻▬●\n●▬▬▬▬▬๑۩۩๑▬▬▬▬▬▬●\n🔍𝘚𝘢𝘭𝘶𝘵!! 𝘔𝘰𝘪 𝘤'𝘦𝘴𝘵 𝘌𝘯𝘰𝘤𝘬 𝘱𝘳𝘰𝘱𝘰𝘴𝘦 𝘮𝘰𝘪 𝘵𝘰𝘯 𝘱𝘳𝘰𝘣𝘭è𝘮𝘦...🔎";
 let currentIndex = 0;

 for (let i = 0; i < services.length; i++) {
 const service = services[currentIndex];
 const data = await fetchFromAI(service.url, service.params);
 if (data && (data.gpt4 || data.reply || data.response)) {
 response = data.gpt4 || data.reply || data.response;
 break;
 }
 currentIndex = (currentIndex + 1) % services.length; // Move to the next service in the cycle
 }

 return { response, messageID };
}

module.exports = {
 config: {
 name: 'ask',
 author: 'Arn',
 role: 0,
 category: 'ai',
 shortDescription: 'ai to ask anything',
 },
 onStart: async function ({ api, event, arns }) {
          const helpListImages = [
        "https://tinyurl.com/27lldnwf", // add image link here
        "https://tinyurl.com/2yxokypt",
        "https://tinyurl.com/2chpu8hn",
        "https://tinyurl.com/2d76p34a",
        "https://tinyurl.com/2dmdw9qh",
        // Add more image links as needed
      ];

      const helpListImage = helpListImages[Math.floor(Math.random() * helpListImages.length)];

      await message.reply({
        body: msg,
        attachment: await global.utils.getStreamFromURL(helpListImage),
      });
 const input = args.join(' ').trim();
 if (!input) {
 api.sendMessage(``, event.threadID, event.messageID);
 return;
 }

const fonts = {

 mathsans: {

 a: "𝖺", b: "𝖻", c: "𝖼", d: "𝖽", e: "𝖾", f: "𝖿", g: "𝗀", h: "𝗁", i: "𝗂",

 j: "𝗃", k: "𝗄", l: "𝗅", m: "𝗆", n: "𝗇", o: "𝗈", p: "𝗉", q: "𝗊", r: "𝗋",

 s: "𝗌", t: "𝗍", u: "𝗎", v: "𝗏", w: "𝗐", x: "𝗑", y: "𝗒", z: "𝗓",

 A: "𝖠", B: "𝖡", C: "𝖢", D: "𝖣", E: "𝖤", F: "𝖥", G: "𝖦", H: "𝖧", I: "𝖨",

 J: "𝖩", K: "𝖪", L: "𝖫", M: "𝖬", N: "𝖭", O: "𝖮", P: "𝖯", Q: "𝖰", R: "𝖱",

 S: "𝖲", T: "𝖳", U: "𝖴", V: "𝖵", W: "𝖶", X: "𝖷", Y: "𝖸", Z: "𝖹",
 }
};

 
 const { response, messageID } = await getAIResponse(input, event.senderID, event.messageID);
 api.sendMessage(` ${response} `, event.threadID, messageID);
 },
 onChat: async function ({ event, message }) {
 const messageContent = event.body.trim().toLowerCase();
 if (messageContent.startsWith("shisui")) {
 const input = messageContent.replace(/^shisui\*/, "").trim();
 const { response, messageID } = await getAIResponse(input, event.senderID, message.messageID);
 message.reply( `●▬🗻ᎬΝϴᏟᏦ🗻▬●\n●▬▬▬▬▬๑۩۩๑▬▬▬▬▬▬●\n🔍${response}🔎`, messageID);
 }
 }
  }
