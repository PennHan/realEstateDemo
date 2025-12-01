import { GoogleGenAI } from "@google/genai";
import { UserData } from "../types";

const getClient = () => {
    // Check if API key exists to prevent crash, though standard env usually provides it.
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        console.warn("API Key is missing. Persona generation will use fallback.");
        return null;
    }
    return new GoogleGenAI({ apiKey });
};

export const generateUserPersona = async (userData: UserData): Promise<{ title: string; description: string }> => {
  const ai = getClient();
  
  if (!ai) {
    return {
        title: "远见卓识的领袖",
        description: "您的品味定义了奢华。您珍视隐私与独特性，精心策划着宏大而又私密的生活方式。"
    };
  }

  const prompt = `
    Analyze the following real estate app user data and generate a creative "User Persona" for their annual report in Chinese.
    
    User Data:
    - Total Days: ${userData.totalDays}
    - Top Category: ${userData.topCategory}
    - Niche Interest: ${userData.taste.niche}
    - Interaction Style: Active in community (${userData.interactions.neighborhoodPosts} posts)
    - Late night activity: ${userData.records.latestActive.time}
    
    Output JSON format only:
    {
      "title": "A short, creative, premium 2-4 word title in Chinese (e.g., 深夜建筑师, 社区灵魂人物)",
      "description": "A 30-word elegant, poetic description of their lifestyle and living philosophy in Chinese based on the data. Tone: Sophisticated, Warm, Exclusive."
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text");
    return JSON.parse(text);

  } catch (error) {
    console.error("Gemini generation failed", error);
    return {
      title: "尊贵的社区领袖",
      description: "作为社区的中流砥柱，您的存在为每一次互动增添了价值。您在现代便利与永恒优雅之间找到了完美的平衡。"
    };
  }
};