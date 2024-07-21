require('dotenv').config();
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function verifyApiKey() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-16k",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Say hello in a friendly manner." }
      ],
      max_tokens: 5000,
      temperature: 0.5
    });
    console.log("API Key is valid. Response from OpenAI:", response.choices[0].message.content.trim());
  } catch (error) {
    console.error("Failed to verify API Key. Error:", error.message);
  }
}

verifyApiKey();
