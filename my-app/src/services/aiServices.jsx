import axios from "axios";

const API_URL = "http://localhost:1234/v1/chat/completions"; // LM Studio local endpoint

export async function getAIResponse(prompt) {
  const response = await axios.post(API_URL, {
    model: "your-model-name",
    messages: [{ role: "user", content: prompt }],
  });
  return response.data.choices[0].message.content;
}
