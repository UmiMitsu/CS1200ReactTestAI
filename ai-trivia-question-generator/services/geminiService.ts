
import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from '../types';

if (!import.meta.env.VITE_API_KEY) {
  // In a real application, you'd want to handle this more gracefully.
  // For this example, we'll alert the user.
  // The environment variable is expected to be set by the platform.
  console.error("VITE_API_KEY environment variable not set.");
  // alert("Error: Gemini API Key is not configured. Please contact support.");
}

function validateResponse(response: AIResponse): AIResponse {
  let { answer, tone } = response;

  // Fix common AI glitches
  answer = answer.replace(/H\s*M\s*2\s*M\s*O/gi, "H₂O");
  answer = answer.replace(/\s+/g, " ").trim();

  // Ensure tone is one of expected values
  const allowedTones = ["Formal", "Informative", "Casual", "Apologetic"];
  if (!allowedTones.includes(tone)) {
    tone = "Informative";
  }

  return { answer, tone };
}

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    answer: {
      type: Type.STRING,
      description: 'A concise answer to the trivia question (less than 200 words).',
    },
    tone: {
      type: Type.STRING,
      description: 'The tone of the answer, described in one or two words (e.g., Formal, Informative, Casual).',
    },
  },
  required: ['answer', 'tone'],
};

const getAIResponse = async (prompt: string, systemInstruction: string): Promise<AIResponse> => {
  try {
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.7,
      },
    });
    
    const jsonText = response.text.trim();
    const parsedResponse = JSON.parse(jsonText) as AIResponse;
    return validateResponse(parsedResponse);
    // return parsedResponse as AIResponse;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Provide a fallback response on error
    return {
      answer: "Sorry, I couldn't generate an answer at this moment. Please try again later.",
      tone: "Apologetic"
    };
  }
};


export const getAIAnswer = (question: string): Promise<AIResponse> => {
  const systemInstruction = "You are a trivia game expert. Your task is to provide a concise and accurate answer to the following trivia question. The answer must be 200 words or less. You must also analyze the tone of your own answer and describe it in one or two words (e.g., Formal, Informative, Casual).";
  return getAIResponse(question, systemInstruction);
};

export const rephraseAIAnswer = (question: string, originalAnswer: string): Promise<AIResponse> => {
  const prompt = `Rephrase the following answer for the trivia question "${question}":\n\nOriginal Answer: ${originalAnswer}`;
  const systemInstruction = "You are a trivia game expert. Your task is to rephrase the given answer, keeping the meaning the same but using different wording. The new answer must be 200 words or less. You must also analyze the tone of your new answer and describe it in one or two words (e.g., Formal, Informative, Casual).";
  return getAIResponse(prompt, systemInstruction);
};
