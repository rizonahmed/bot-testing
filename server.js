// Import Telegram API
const TelegramBot = require('node-telegram-bot-api');

// Bot Token from BotFather
const token = '8425115436:AAGmoZVWv59xaLLG8b8RjK2vcq6fJbwjMXw';

// Create bot with polling
const bot = new TelegramBot(token, { polling: true });

// Debug log to check if bot is online
console.log("Bot is running...");

// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const username = msg.from.username || msg.from.first_name;

  console.log(`/start received from: ${username} (ID: ${chatId})`);

  // Send message with inline WebApp button
  bot.sendMessage(chatId, `Welcome ${username}! Click below to open the Airdrop:`, {
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

// Optional: log all messages for debugging
bot.on('message', (msg) => {
  console.log('Message received:', msg.text);
});
