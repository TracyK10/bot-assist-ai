const { Translate } = require('@google-cloud/translate');
const translate = new Translate();

const BACKEND_URL = process.env.BACKEND_URL === 'production' ? process.env.NEXT_PUBLIC_AI_BACKEND_URL : 'http://localhost:3001';

export async function generateResponse(message, conversationHistory) {
  try {
    // Translate message to English
    const [translatedMessage] = await translate.translate(message, 'en');

    const response = await fetch(`${BACKEND_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: translatedMessage, conversationHistory }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate response");
    }

    const data = await response.json();

    // Translate response to original language
    const [translatedResponse] = await translate.translate(data.response, targetLanguage);
    return translatedResponse;
  } catch (error) {
    console.error("Error generating response:", error);
    throw new Error("Failed to generate response. Please try again later.");
  }
}