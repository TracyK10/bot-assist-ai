const BACKEND_URL = process.env.BACKEND_URL === 'production' ? process.env.NEXT_PUBLIC_AI_BACKEND_URL : 'http://localhost:3001';

export async function generateResponse(message, conversationHistory) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, conversationHistory }),
    });

    if (!response.ok) {
      throw new Error("Failed to generate response");
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error generating response:", error);
    return { error: "Failed to generate response. Please try again." };
  }
}