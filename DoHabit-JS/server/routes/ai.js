const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const router = express.Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

router.post("/habit-coach", async (req, res) => {
  try {
    const { goal } = req.body;

    if (!goal) {
      return res.status(400).json({
        success: false,
        message: "Goal is required.",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are an expert AI Habit Coach.

The user's goal is:
"${goal}"

Generate exactly 5 habits.

Return ONLY a valid JSON array.

Format:

[
  {
    "title": "Wake up at 6 AM",
    "description": "Wake up early every day to build consistency.",
    "frequency": "Daily"
  },
  {
    "title": "Exercise",
    "description": "Exercise for at least 30 minutes.",
    "frequency": "Daily"
  }
]

Rules:
- Return ONLY JSON.
- Do NOT use markdown.
- Do NOT use \`\`\`.
- Do NOT explain anything.
`,
    });

    let text = response.text;

    // Remove markdown if Gemini accidentally returns it
    text = text.replace(/```json/g, "");
    text = text.replace(/```/g, "");
    text = text.trim();

    const plan = JSON.parse(text);

    res.status(200).json({
      success: true,
      plan,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;