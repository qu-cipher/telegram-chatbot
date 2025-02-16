import { AiResponse } from "./types.ts";
import { ENDPOINT, TOKEN, MODEL_NAME } from "./vars.ts";

export async function sendRequestToAI(question: string): Promise<AiResponse> {
    if (question.length === 0 
      || question.trim() === "") {
        return { msg : "Please provide a question" } as AiResponse;
    }
  try {
    const response = await fetch(`${ENDPOINT}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': TOKEN
      },
      body: JSON.stringify({
        messages: [
          { role: "user", content: question }
        ],
        max_tokens: 1000,
        model: MODEL_NAME
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { msg : errorData.error?.message || 'API_FAILED' } as AiResponse;
    }

    const data = await response.json();
    return { msg: format(data.choices[0].message.content) } as AiResponse;


  } catch (err) {
    console.error("The sample encountered an error:", err);
    return { msg : "UNKNOWN_ERROR" } as AiResponse;
  }
}

export function format(input: string): string {
  return input.replace(/<think>[\s\S]*?<\/think>/g, '').trimStart();
}