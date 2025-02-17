## 🤖 AI Telegram Chatbot 
This is a Telegram AI chatbot built using TypeScript as a Supabase Edge Function. It responds to user queries by fetching answers from an AI model like Deepseek-R1.


## 👾 Usage
1. Create a Github developer api key from [here](https://github.com/settings/tokens)

2. Create a telegram bot in [BotFather](https://t.me/BotFather)

3. Clone this repository:
```bash
git clone https://github.com/qu-cipher/telegram-chatbot.git
``` 

4. Create a vars.ts file in `functions/_shared` like this:

```ts
export const BOT_SECRET = 'TELEGRAM_BOT_TOKEN';

export const TOKEN = 'GITHUB_DEVELOPER_API_KEY';

export const ENDPOINT = "https://models.inference.ai.azure.com";
export const MODEL_NAME = "DeepSeek-R1"; // You can write your own
```
5. When done, deploy your function with
```bash
supabase functions deploy bot --no-verify-jwt
```
* or if you have npm, then do
```bash
npm run deploy
```
