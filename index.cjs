const TelegramBot = require('node-telegram-bot-api');

const token = '7872655345:AAF0xgOjei1PlVdmYSCCrS4tRF4oML0R_cY';

const bot = new TelegramBot(token, { polling: true });

// bot.on('message', async (msg) => {
//   const chatId = msg.chat.id;
//
//   if (msg.text === '/start') {
//     await bot.sendMessage(chatId, 'Добрый день. Перейдите на сайт', {
//       reply_markup: {
//         inline_keyboard: [[{ text: 'Перейти', web_app: { url: webAppURL } }]],
//       },
//     });
//   } else {
//     await bot.sendMessage(chatId, 'Используйте /start для работы');
//   }
// });
