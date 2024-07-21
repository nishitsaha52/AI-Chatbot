const axios = require('axios');
const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');
const Replicate = require('replicate');
const dotenv = require('dotenv');
dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const visionController = async (req, res) => {
  try {
    const { imageUrl } = req.body;
    if (!imageUrl) return res.status(400).json({ message: 'Image URL is required' });

    console.log("Received image URL:", imageUrl);

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'What’s in this image?' },
          { role: 'user', content: imageUrl }
        ],
        max_tokens: 300,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log("OpenAI response:", response);

    if (response.data && response.data.choices && response.data.choices.length > 0 && response.data.choices[0].message.content) {
      return res.status(200).json({ summary: response.data.choices[0].message.content.trim() });
    } else {
      console.error("Failed to generate summary, OpenAI response structure:", response);
      return res.status(500).json({ message: 'Failed to generate summary' });
    }
  } catch (err) {
    console.error('Error generating summary:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: 'Text is required' });

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'Write a detailed paragraph about the following topic:' },
          { role: 'user', content: text }
        ],
        max_tokens: 300,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data && response.data.choices && response.data.choices.length > 0 && response.data.choices[0].message.content) {
      return res.status(200).json({ response: response.data.choices[0].message.content.trim() });
    } else {
      return res.status(500).json({ message: 'Failed to generate response' });
    }
  } catch (err) {
    console.error('Error generating paragraph:', err.response ? err.response.data : err.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const chatbotController = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: 'Text is required' });

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: text }
        ],
        max_tokens: 300,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data && response.data.choices && response.data.choices.length > 0 && response.data.choices[0].message.content) {
      return res.status(200).json({ response: response.data.choices[0].message.content.trim() });
    } else {
      return res.status(500).json({ message: 'Failed to generate response' });
    }
  } catch (err) {
    console.error('Error generating chatbot response:', err.response ? err.response.data : err.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const tchatController = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: 'Text is required' });

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are Nishit Saha, a mischievous and humorous young boy. Answer in a playful and cheeky manner.' },
          { role: 'user', content: text }
        ],
        max_tokens: 300,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data && response.data.choices && response.data.choices.length > 0 && response.data.choices[0].message.content) {
      return res.status(200).json({ response: response.data.choices[0].message.content.trim() });
    } else {
      return res.status(500).json({ message: 'Failed to generate response' });
    }
  } catch (err) {
    console.error('Error generating chatbot response:', err.response ? err.response.data : err.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


const jsconverterController = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: 'Text is required' });

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'Convert the following instructions into JavaScript code:' },
          { role: 'user', content: text }
        ],
        max_tokens: 300,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data && response.data.choices && response.data.choices.length > 0 && response.data.choices[0].message.content) {
      return res.status(200).json({ response: response.data.choices[0].message.content.trim() });
    } else {
      return res.status (500).json({ message: 'Failed to generate response' });
    }
  } catch (err) {
    console.error('Error generating JS conversion:', err.response ? err.response.data : err.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const scifiImageController = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: 'Text is required' });

    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        model: "dall-e-3",
        prompt: `Generate a sci-fi image of ${text}`,
        n: 1,
        size: '1024x1024' // Updated to a supported size
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log(response.data); // Log the entire response for debugging

    if (response.data && response.data.data && response.data.data.length > 0 && response.data.data[0].url) {
      return res.status(200).json({ imageUrl: response.data.data[0].url });
    } else {
      return res.status(500).json({ message: 'Failed to generate image' });
    }
  } catch (err) {
    console.error('Error generating sci-fi image:', err.response ? err.response.data : err.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const ImageController = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: 'Text is required' });

    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        model: "dall-e-3",
        prompt: `Generate a image of ${text}`,
        n: 1,
        size: '1024x1024' // Updated to a supported size
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log(response.data); // Log the entire response for debugging

    if (response.data && response.data.data && response.data.data.length > 0 && response.data.data[0].url) {
      return res.status(200).json({ imageUrl: response.data.data[0].url });
    } else {
      return res.status(500).json({ message: 'Failed to generate image' });
    }
  } catch (err) {
    console.error('Error generating sci-fi image:', err.response ? err.response.data : err.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const musicController = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: 'Text is required' });

    const response = await replicate.run(
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          alpha: 0.5,
          prompt_a: text,
          prompt_b: "90's rap",
          denoising: 0.75,
          seed_image_id: "vibes",
          num_inference_steps: 50
        }
      }
    );

    if (response.output && response.output[0]) {
      return res.status(200).json({ response: response.output[0] });
    } else {
      return res.status(500).json({ message: 'Failed to generate music' });
    }
  } catch (err) {
    console.error('Error generating music:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const ttsController = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: 'Text is required' });

    console.log("Received text:", text);

    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: text,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());
    const speechFile = path.join(__dirname, '..', 'public', 'speech.mp3');
    await fs.promises.writeFile(speechFile, buffer);

    // Return the relative path
    return res.status(200).json({ message: 'Speech file generated successfully', path: '/static/speech.mp3' });
  } catch (err) {
    console.error('Error generating speech:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const sttController = async (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Access the file path from the req.file object
    const filePath = req.file.path;

    // Perform transcription using filePath
    const fileStream = fs.createReadStream(filePath);
    const transcription = await openai.audio.transcriptions.create({
      file: fileStream,
      model: 'whisper-1',
      response_format: 'text',
    });

    // Delete the uploaded file after processing
    fs.unlinkSync(filePath);

    // Send the transcription text in the response
    res.json({ text: transcription });
  } catch (error) {
    console.error('Error during transcription:', error.message);
    res.status(500).json({ error: 'Transcription failed' });
  }
};


module.exports = {
  visionController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
  ImageController,
  musicController,
  ttsController,
  sttController,
  tchatController
};