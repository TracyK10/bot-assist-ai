require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { GoogleAuth } = require('google-auth-library');
const { VertexAI } = require('@google-cloud/vertexai');


/* INITIALIZATION */
const app = express();
app.use(cors());
app.use(express.json());

/* Check if GOOGLE_CLOUD_PROJECT_ID is set */
const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;
if (!projectId) {
  console.error('Error: GOOGLE_CLOUD_PROJECT_ID environment variable is not set.');
  process.exit(1); // Exit the process with an error code
}

/* READ JSON FILE */
const rawData = fs.readFileSync(path.join(__dirname, 'customer_responses.json'));
const dataset = JSON.parse(rawData);

/* ROUTES */
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

    // Check if the message exists in the dataset
    const predefinedResponse = findResponse(message);
    const response = predefinedResponse || aiResponse;
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

function findResponse(input) {
  const response = dataset.find(item => item.input === input);
  return response ? response.response : null;
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));