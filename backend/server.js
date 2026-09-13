const express = require('express');
const Groq = require('groq-sdk');

const app = express();
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post('/translate', async (req, res) => {
  try {
    const { text, model = 'llama-3.3-70b-versatile' } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const message = await groq.messages.create({
      model: model,
      messages: [
        {
          role: 'user',
          content: `Translate this text: ${text}`,
        },
      ],
      max_tokens: 1024,
    });

    res.json({
      original: text,
      translated: message.content[0].text,
      model: model,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
