import { hfModel } from '../lib/huggingface';
import { RateLimiter } from '../lib/rateLimit';

const SYSTEM_PROMPT = `You are Tasty AI, a friendly and knowledgeable cooking assistant. 
You specialize in:
- Suggesting recipes based on available ingredients
- Providing cooking tips and techniques
- Offering meal planning advice
- Explaining cooking terms and methods

Keep responses concise, practical, and engaging. Use emojis occasionally to maintain a friendly tone.
Always format ingredients in clear lists and steps in numbered format when providing recipes.`;

const rateLimiter = new RateLimiter(10);

export const aiService = {
  async getChatResponse(message: string): Promise<string> {
    try {
      await rateLimiter.waitForNextRequest();

      const formattedPrompt = `[INST] <<SYS>>\n${SYSTEM_PROMPT}\n<</SYS>>\n\n${message} [/INST]`;

      const response = await hfModel.invoke(formattedPrompt);
      
      // Limpiar respuesta si es necesario
      const cleanedResponse = response.replace(/<\/?s>|\[INST\]/g, '').trim();
      
      return cleanedResponse || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      if (error instanceof Error && error.message.includes('429')) {
        return "I'm receiving too many requests right now. Please try again in a moment! 🙏";
      }
      console.error('Hugging Face API Error:', error);
      throw new Error('Failed to get AI response');
    }
  }
};