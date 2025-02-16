// deno-lint-ignore-file
import { Bot, webhookCallback } from "https://deno.land/x/grammy@v1.33.0/mod.ts";
import { BOT_SECRET } from "../_shared/vars.ts";
import { sendToAi } from "./handlers/sendToAI.ts";

const bot = new Bot(BOT_SECRET);

bot.command("start", (ctx) => ctx.reply(`
Hello and Welcome to the **QC - Artificial intelligence** chat bot! 🤖

I am here to help you with your questions. Just ask your question and I will try to provide you with the best answer I can find. (Powered by Deepseek-R1)`, {
  parse_mode: "Markdown",
}));

bot.on("message", async (ctx) => {
  if (ctx.message.text && !ctx.message.text.startsWith("/")) {
    const wait = await ctx.reply("⏳");
    await sendToAi(ctx, ctx.message.text);
    await ctx.api.deleteMessage(wait.chat.id, wait.message_id);
  }
});

Deno.serve(webhookCallback(bot, "std/http"));