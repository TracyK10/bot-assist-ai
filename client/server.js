require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { VertexAI } = require('@google-cloud/vertexai');


/* INITIALIZATION */
const app = express();
app.use(cors());
app.use(express.json());

/* ROUTES */
const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;
const location = 'us-central1';
const vertexAI = new VertexAI({ project: projectId, location: location });
const generativeModel = vertexAI.getGenerativeModel({
  model: 'gemini-1.5-flash-001',
});

/* API */
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;
    const prompt = generatePrompt(message, conversationHistory);
    const resp = await generativeModel.generateContent(prompt);
    const contentResponse = await resp.response;
    const aiResponse = contentResponse.candidates[0].content.parts[0].text;
    res.json({ response: aiResponse });
  } catch (error) {
    console.error("Error generating response:", error);
    res.status(500).json({ error: "Failed to generate response. Please try again." });
  }
});

function generatePrompt(message, conversationHistory) {
  const conversationContext = conversationHistory
    .map(msg => `${msg.sender === 'user' ? 'Human' : 'AI'}: ${msg.text}`)
    .join('\n');

  return `The following is a conversation with an AI customer support assistant. The assistant is helpful, creative, clever, and very friendly.

${conversationContext}
Human: ${message}
AI:`;
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));