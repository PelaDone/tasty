import { openai } from '../lib/openai';
import { RateLimiter } from '../lib/rateLimit';

const SYSTEM_PROMPT = `You are Tasty AI, a friendly and knowledgeable cooking assistant. 
You specialize in:
- Suggesting recipes based on available ingredients
- Providing cooking tips and techniques
- Offering meal planning advice
- Explaining cooking terms and methods

Keep responses concise, practical, and engaging. Use emojis occasionally to maintain a friendly tone.
Always format ingredients in clear lists and steps in numbered format when providing recipes.`;

// Initialize rate limiter with 10 requests per minute
const rateLimiter = new RateLimiter(10);

export const aiService = {
  async getChatResponse(message: string): Promise<string> {
    try {
      // Wait for rate limiter before making request
      await rateLimiter.waitForNextRequest();

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 500
      });

      return response.choices[0].message.content || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      if (error instanceof Error && error.message.includes('429')) {
        return "I'm receiving too many requests right now. Please try again in a moment! 🙏";
      }
      console.error('OpenAI API Error:', error);
      throw new Error('Failed to get AI response');
    }
  }
};