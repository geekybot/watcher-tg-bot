require('dotenv').config()
console.log(process.env.BOT_TOKEN)
import TelegramBot from 'node-telegram-bot-api';
const token = process.env.BOT_TOKEN || ""; // Replace with your own bot token
const bot = new TelegramBot(token, { polling: true });
const chatId = -1001977486222;

// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   const messageText = msg.text;
//     console.log(chatId);
    
//   if (messageText === '/start') {
//     bot.sendMessage(chatId, 'Welcome to the bot!');
//   }
// });
export async function handleSwap(message: string, token: string) {
    const msg = `Swap detected: ${message} for ${token}`;
    bot.sendMessage(chatId, msg);
    return 'OK';
    
}