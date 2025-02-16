// deno-lint-ignore-file
import { Bot, webhookCallback } from "https://deno.land/x/grammy@v1.33.0/mod.ts";

const bot = new Bot("BOT_SECRET");

bot.command("start", (ctx) => ctx.reply("Hello!"));
/**
 * WebHook & Endpoints
 */
Deno.serve(webhookCallback(bot, "std/http"));