import { HuggingFaceInference } from "@langchain/community/llms/hf";

const apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY;

if (!apiKey) {
  throw new Error('Missing Hugging Face API key');
}

export const hfModel = new HuggingFaceInference({
  model: "tiiuae/falcon-7b-instruct",
  apiKey,
  temperature: 0.7,
  maxTokens: 700,
});