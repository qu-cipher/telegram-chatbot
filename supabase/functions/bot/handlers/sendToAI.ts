// deno-lint-ignore-file
import { Context } from "https://deno.land/x/grammy@v1.33.0/context.ts";
import { sendRequestToAI } from "../../_shared/utils.ts";
import { AiResponse } from "../../_shared/types.ts";

export async function sendToAi(ctx: Context, text: string) {
    const response: AiResponse = await sendRequestToAI(text);
    if (response.msg === "Please provide a question") {
        return;
    } else if (response.msg === "API_FAILED") {
        await ctx.reply("Sorry, I am unable to process your request at the moment. Please try again later.");
        return;
    } else if (response.msg === "UNKNOWN_ERROR") {
        await ctx.reply("Sorry, I encountered an unknown error while processing your request. Please try again later.");
        return;
    }

    await ctx.reply(response.msg, {
        parse_mode: "Markdown"
    });
}