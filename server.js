// Import Telegram API
const TelegramBot = require('node-telegram-bot-api');

// Bot Token from BotFather
const token = '8425115436:AAGmoZVWv59xaLLG8b8RjK2vcq6fJbwjMXw';

// Create bot with polling
const bot = new TelegramBot(token, { polling: true });

// Debug log to check if bot is online
console.log("Bot is running...");

// Set Web App Menu Button so that it shows immediately when bot opens
bot.setChatMenuButton({
  type: 'web_app',
  web_app: { url: 'https://dodi-token.netlify.app/' }
}).then(() => {
  console.log("WebApp menu button set successfully!");
}).catch((err) => {
  console.log("Error setting WebApp button:", err);
});

// Optional: log all messages for debugging
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log('Message received from', msg.from.username || msg.from.first_name, ':', msg.text);

  // If you want, you can also send the button as a fallback on any message
  bot.sendMessage(chatId, 'Click below to open the Airdrop:', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Open Airdrop',
            web_app: { url: 'https://dodi-token.netlify.app/' },
          },
        ],
      ],
    },
  });
});
