import type { VercelRequest, VercelResponse } from "@vercel/node";

const AI_KEYWORDS = [
  'ai', 'llm', 'gpt', 'claude', 'gemini', 'openai', 'anthropic',
  'machine learning', 'neural', 'deep learning', 'language model',
  'artificial intelligence', 'chatgpt', 'mistral', 'llama', 'diffusion',
  'vector database', 'embedding', 'fine-tun', 'transformer',
  'copilot', 'cursor', 'ai agent', 'large language', 'rag', 'inference',
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const topIdsRes = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
    const topIds: number[] = await topIdsRes.json();

    const items = await Promise.all(
      topIds.slice(0, 100).map(id =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then(r => r.json())
          .catch(() => null)
      )
    );

    const aiStories = items
      .filter((item): item is Record<string, any> =>
        item &&
        item.type === "story" &&
        typeof item.title === "string" &&
        AI_KEYWORDS.some(kw => item.title.toLowerCase().includes(kw))
      )
      .slice(0, 5)
      .map(({ id, title, url, score, by, time, descendants }) => ({
        id, title, url, score, by, time, descendants,
      }));

    res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate");
    res.status(200).json(aiStories);
  } catch (error) {
    console.error("Failed to fetch HN stories:", error);
    res.status(500).json({ error: "Failed to fetch HN stories" });
  }
}
