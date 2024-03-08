import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const TELEGRAM_BOT_MESSAGE = process.env.TELEGRAM_BOT_MESSAGE;
const CRON_RULE = process.env.CRON_RULE;

if (
  !TELEGRAM_BOT_TOKEN ||
  !TELEGRAM_CHAT_ID ||
  !TELEGRAM_BOT_MESSAGE ||
  !CRON_RULE
) {
  throw new Error("failed .env");
}

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN);

export default async function handler() {
  // const today = new Date();
  // const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  // const isLastDayOfMonthToday = today.getDate() === lastDayOfMonth.getDate();

  if (TELEGRAM_CHAT_ID && TELEGRAM_BOT_MESSAGE) {
    bot.sendMessage(TELEGRAM_CHAT_ID, TELEGRAM_BOT_MESSAGE);
  }
}
