import { NextResponse } from "next/server";

const AI_KEYWORDS = ["ai", "llm", "gpt", "claude", "gemini", "openai", "anthropic", "machine learning", "neural", "deep learning", "language model", "artificial intelligence", "chatgpt", "mistral", "llama", "diffusion", "vector database", "embedding", "fine-tun", "transformer", "copilot", "cursor", "ai agent", "large language", "rag", "inference"];

interface HNStory { id: number; title: string; url: string; score: number; by: string; time: number; descendants: number; }

let hnCache: { stories: HNStory[]; timestamp: number } | null = null;
const HN_CACHE_TTL = 30 * 60 * 1000;

export async function GET() {
  try {
    if (hnCache && Date.now() - hnCache.timestamp < HN_CACHE_TTL) {
      return NextResponse.json(hnCache.stories);
    }

    const topIdsRes = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
    const topIds: number[] = await topIdsRes.json();

    const batch = topIds.slice(0, 100);
    const items = await Promise.all(
      batch.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then((r) => r.json())
          .catch(() => null)
      )
    );

    const aiStories: HNStory[] = items
      .filter((item): item is HNStory => item && item.type === "story" && item.title && AI_KEYWORDS.some((kw) => item.title.toLowerCase().includes(kw)))
      .slice(0, 5);

    hnCache = { stories: aiStories, timestamp: Date.now() };
    return NextResponse.json(aiStories);
  } catch (error) {
    console.error("Failed to fetch HN stories:", error);
    return NextResponse.json({ error: "Failed to fetch HN stories" }, { status: 500 });
  }
}
