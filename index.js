const Telegraf = require("telegraf");

let TOKEN = "BOT_TOKEN";
const bot = new Telegraf(TOKEN);

bot.catch((err) => {
  if (err.error_code === 403) {
    console.log("bot was blocked by the user - skip");
  } else {
    console.log(err);
  }
});

bot.command("start", async (ctx) => {
  await ctx.reply("🤝 Xush kelibsiz");
  return ctx.replyWithSticker(
    "CAACAgIAAxkBAAIW6F8sO6CKYDgyO7nQrOIW11PBH3hNAAJ0AAM7YCQUs8te1W3kR_QaBA"
  );
});

bot.command("help", async ({ reply, replyWithSticker }) => {
  await reply(
    `
    📚 Botga fayllar mavjud bo'lishi uchun: 
    1) Faylni botga yuboring.
    2) Bu yerga fayl bilan xabarni yuboring
    `.replace(/ {16}/g, "")
  );
  return replyWithSticker(
    "CAACAgUAAxkBAAI7bV-V92efOgf_86-ac4z21So0C0aEAAIgAAPg6vAdDBEzrevKwoAbBA"
  );
});

bot.on("photo", async (ctx) => {
  let file_id =
    ctx.update.message.photo[ctx.update.message.photo.length - 1].file_id;
  let file_unique_id =
    ctx.update.message.photo[ctx.update.message.photo.length - 1]
      .file_unique_id;

  return ctx.replyWithPhoto(file_id, {
    caption: `📃 file_id: ${file_id} \n\n 🪐 file_unique_id: ${file_unique_id}`,
  });
});

bot.on("sticker", async (ctx) => {
  let file_id = ctx.update.message.sticker.file_id;
  let file_unique_id = ctx.update.message.sticker.file_unique_id;

  await ctx.replyWithSticker(file_id);
  return ctx.reply(
    `📃 file_id: ${file_id} \n\n 🪐 file_unique_id: ${file_unique_id}`
  );
});

bot.on("voice", async (ctx) => {
  let file_id = ctx.update.message.voice.file_id;
  let file_unique_id = ctx.update.message.voice.file_unique_id;

  return ctx.replyWithVoice(file_id, {
    caption: `📃 file_id: ${file_id} \n\n 🪐 file_unique_id: ${file_unique_id}`,
  });
});

bot.on("gif", async (ctx) => {
  let file_id = ctx.update.message.gif.file_id;
  let file_unique_id = ctx.update.message.gif.file_unique_id;

  return ctx.replyWithGif(file_id, {
    caption: `📃 file_id: ${file_id} \n\n 🪐 file_unique_id: ${file_unique_id}`,
  });
});

bot.on("audio", async (ctx) => {
  let file_id = ctx.update.message.audio.file_id;
  let file_unique_id = ctx.update.message.audio.file_unique_id;

  return ctx.replyWithAudio(file_id, {
    caption: `📃 file_id: ${file_id} \n\n 🪐 file_unique_id: ${file_unique_id}`,
  });
});

bot.on("video", async (ctx) => {
  let file_id = ctx.update.message.video.file_id;
  let file_unique_id = ctx.update.message.video.file_unique_id;

  return ctx.replyWithVideo(file_id, {
    caption: `📃 file_id: ${file_id} \n\n 🪐 file_unique_id: ${file_unique_id}`,
  });
});

bot.on("document", async (ctx) => {
  let file_id = ctx.update.message.document.file_id;
  let file_unique_id = ctx.update.message.document.file_unique_id;

  return ctx.replyWithDocument(file_id, {
    caption: `📃 file_id: ${file_id} \n\n 🪐 file_unique_id: ${file_unique_id}`,
  });
});

bot.on("message", async (ctx) => {
  return ctx.reply(
    `
  🔸 file_id olish uchun yuboring:
- 🙂 Stiker
- 🌄 Surat
- 🕳 GIF
- 📹 Video
- 🔈 Audio
- 🗣 ​​Ovozli xabar
- 🗂 Hujjat
- 📝 Biriktirma qoʻllanmasi /help`.replace(/ {16}/g, "")
  );
});

bot.launch();
