export type ResourceCategory = 'all' | 'ai-tools' | 'learning' | 'newsletters' | 'reading' | 'local';

export interface Resource {
  name: string;
  description: string;
  url: string;
  category: Exclude<ResourceCategory, 'all'>;
  tags: string[];
  free: boolean;
  communityPick?: boolean;
}

export const CATEGORY_LABELS: Record<ResourceCategory, string> = {
  all: 'All',
  'ai-tools': 'AI Coding Tools',
  learning: 'Learning',
  newsletters: 'Newsletters',
  reading: 'Papers & Reading',
  local: 'NZ & Local',
};

export const RESOURCES: Resource[] = [
  // ── AI Coding Tools ────────────────────────────────────────────────────────
  {
    name: 'Claude Code',
    description: "Anthropic's agentic CLI that reasons, writes, and edits code across your entire codebase. Runs in your terminal, VS Code, JetBrains, and as a GitHub Action.",
    url: 'https://claude.ai/code',
    category: 'ai-tools',
    tags: ['CLI', 'Agentic', 'Anthropic'],
    free: false,
    communityPick: true,
  },
  {
    name: 'Cursor',
    description: 'AI-first code editor built on VS Code. Best-in-class for navigating and editing large existing codebases. The go-to for daily development work.',
    url: 'https://cursor.com',
    category: 'ai-tools',
    tags: ['IDE', 'Editor', 'Codebase'],
    free: false,
    communityPick: true,
  },
  {
    name: 'GitHub Copilot',
    description: "The original AI pair programmer. Still the most widely adopted at work — fast inline suggestions, code review, and a chat panel built into VS Code and JetBrains.",
    url: 'https://github.com/features/copilot',
    category: 'ai-tools',
    tags: ['Autocomplete', 'VS Code', 'GitHub'],
    free: false,
  },
  {
    name: 'Replit',
    description: 'Build and deploy full apps from your browser. Agent 4 turns plain English into working software — no terminal, no setup. Great for rapid prototyping and hackathons.',
    url: 'https://replit.com',
    category: 'ai-tools',
    tags: ['Browser', 'Full Stack', 'No Setup'],
    free: true,
  },
  {
    name: 'Bolt.new',
    description: 'Full-stack web app builder powered by Claude. Describe what you want, get a working app with frontend, backend, and database. StackBlitz-hosted, deploys in one click.',
    url: 'https://bolt.new',
    category: 'ai-tools',
    tags: ['Full Stack', 'Browser', 'Rapid Build'],
    free: true,
    communityPick: true,
  },
  {
    name: 'v0 by Vercel',
    description: 'Generate production-ready UI components from a text prompt. Outputs clean React + Tailwind code you can copy straight into your project.',
    url: 'https://v0.dev',
    category: 'ai-tools',
    tags: ['UI', 'React', 'Tailwind', 'Vercel'],
    free: true,
  },
  {
    name: 'Windsurf',
    description: "Codeium's agentic IDE. Strong at multi-file edits and keeping context across a session. A serious alternative to Cursor worth evaluating.",
    url: 'https://codeium.com/windsurf',
    category: 'ai-tools',
    tags: ['IDE', 'Agentic', 'Codeium'],
    free: false,
  },
  {
    name: 'Grok Build',
    description: "xAI's new coding agent with real-time access to developer discussions and release notes. Best for fast-moving ecosystems where documentation lags behind reality.",
    url: 'https://x.ai/grok',
    category: 'ai-tools',
    tags: ['Agent', 'Real-time', 'xAI'],
    free: false,
  },
  {
    name: 'Google Gemini Antigravity',
    description: 'Google\'s agent-first development platform. Managed Agents API spins up isolated Linux environments for cloud-native agentic workflows with a single API call.',
    url: 'https://ai.google.dev',
    category: 'ai-tools',
    tags: ['Agent', 'Cloud', 'Google', 'API'],
    free: false,
  },

  // ── Learning ───────────────────────────────────────────────────────────────
  {
    name: 'fast.ai',
    description: 'Practical deep learning for coders. Top-down, hands-on approach — you build real things before going deep on theory. Free, and genuinely one of the best ML courses available.',
    url: 'https://fast.ai',
    category: 'learning',
    tags: ['Deep Learning', 'Python', 'Free Course'],
    free: true,
    communityPick: true,
  },
  {
    name: 'DeepLearning.AI Short Courses',
    description: "Andrew Ng's bite-sized courses on LLMs, agents, prompt engineering, and RAG. Most are free, all are practical, and new ones ship regularly as the field moves.",
    url: 'https://deeplearning.ai/short-courses',
    category: 'learning',
    tags: ['LLMs', 'Agents', 'Andrew Ng', 'Free'],
    free: true,
    communityPick: true,
  },
  {
    name: 'Andrej Karpathy on YouTube',
    description: 'Neural networks from absolute scratch. The "Zero to Hero" series is the clearest explanation of how modern AI actually works that exists anywhere.',
    url: 'https://www.youtube.com/@AndrejKarpathy',
    category: 'learning',
    tags: ['Neural Networks', 'From Scratch', 'YouTube'],
    free: true,
  },
  {
    name: 'CS50 by Harvard',
    description: "Harvard's intro to computer science — free, rigorous, and used by millions. The best starting point if you're new to programming and want a solid foundation.",
    url: 'https://cs50.harvard.edu',
    category: 'learning',
    tags: ['Fundamentals', 'Beginners', 'Free'],
    free: true,
  },
  {
    name: 'The Odin Project',
    description: 'Free, open-source full-stack curriculum. Covers HTML, CSS, JavaScript, React, Node, and more. Project-based and community-maintained.',
    url: 'https://theodinproject.com',
    category: 'learning',
    tags: ['Full Stack', 'JavaScript', 'Free', 'Open Source'],
    free: true,
  },
  {
    name: 'Prompt Engineering Guide',
    description: 'Comprehensive, community-maintained guide to prompting techniques — zero-shot, few-shot, chain-of-thought, RAG, and more. Practical and well-referenced.',
    url: 'https://promptingguide.ai',
    category: 'learning',
    tags: ['Prompting', 'LLMs', 'Techniques'],
    free: true,
  },

  // ── Newsletters ────────────────────────────────────────────────────────────
  {
    name: 'The Rundown AI',
    description: "Daily AI news digest. Covers the biggest model releases, product launches, and research in under 5 minutes. Good for staying across the field without drowning in it.",
    url: 'https://therundown.ai',
    category: 'newsletters',
    tags: ['Daily', 'News', 'Digest'],
    free: true,
  },
  {
    name: 'TLDR AI',
    description: "Three-times-a-week roundup of AI research, products, and industry news. Short, scannable, and consistent. Good signal-to-noise ratio.",
    url: 'https://tldr.tech/ai',
    category: 'newsletters',
    tags: ['Weekly', 'Research', 'Industry'],
    free: true,
    communityPick: true,
  },
  {
    name: "Simon Willison's Blog",
    description: "Deep, thoughtful analysis of LLMs and AI tools from one of the most respected voices in the field. Not a newsletter in the traditional sense — more like essential reading.",
    url: 'https://simonwillison.net',
    category: 'newsletters',
    tags: ['Analysis', 'LLMs', 'Tools', 'In-depth'],
    free: true,
  },
  {
    name: 'The Batch by DeepLearning.AI',
    description: "Andrew Ng's weekly newsletter. Covers AI research, business, and policy with context and nuance. One of the better options for understanding the broader picture.",
    url: 'https://deeplearning.ai/the-batch',
    category: 'newsletters',
    tags: ['Weekly', 'Research', 'Business'],
    free: true,
  },

  // ── Papers & Reading ───────────────────────────────────────────────────────
  {
    name: 'Attention Is All You Need',
    description: 'The 2017 paper that introduced the Transformer architecture. Everything in modern AI traces back to this. Worth reading even if you skip the maths.',
    url: 'https://arxiv.org/abs/1706.03762',
    category: 'reading',
    tags: ['Transformers', 'Foundational', 'arxiv'],
    free: true,
  },
  {
    name: 'ReAct: Reasoning + Acting in LLMs',
    description: 'The paper that formalized how LLMs can interleave reasoning and action to solve tasks. Foundational reading for anyone building agents.',
    url: 'https://arxiv.org/abs/2210.03629',
    category: 'reading',
    tags: ['Agents', 'Reasoning', 'Foundational'],
    free: true,
  },
  {
    name: 'Anthropic\'s Model Specification',
    description: "A detailed look at how Anthropic thinks about Claude's values, goals, and behaviour. Unusually transparent — essential reading for anyone using or building with LLMs.",
    url: 'https://anthropic.com/model-spec',
    category: 'reading',
    tags: ['Anthropic', 'AI Safety', 'Values'],
    free: true,
  },
  {
    name: '2026 Agentic Coding Trends Report',
    description: "Anthropic's research report on how coding agents are reshaping software development. Based on real usage data — more grounded than most AI trend pieces.",
    url: 'https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf',
    category: 'reading',
    tags: ['Agents', 'Coding', 'Research', '2026'],
    free: true,
    communityPick: true,
  },
  {
    name: 'MIT Technology Review — Generative Coding',
    description: "MIT's 2026 Breakthrough Technologies feature on generative coding. Good high-level overview for sharing with people outside the engineering world.",
    url: 'https://technologyreview.com/2026/01/12/1130027/generative-coding-ai-software-2026-breakthrough-technology/',
    category: 'reading',
    tags: ['Overview', 'MIT', 'Generative AI'],
    free: false,
  },

  // ── NZ & Local ─────────────────────────────────────────────────────────────
  {
    name: 'NZ AI Forum',
    description: "New Zealand's peak body for AI. Publishes research, policy submissions, and hosts national events. Worth following if you care about how AI develops in NZ.",
    url: 'https://aiforum.org.nz',
    category: 'local',
    tags: ['NZ', 'Policy', 'Research', 'Forum'],
    free: true,
  },
  {
    name: 'NZ Tech Alliance',
    description: 'The umbrella body for New Zealand tech associations. Good source for local industry news, workforce reports, and advocacy updates.',
    url: 'https://nztech.org.nz',
    category: 'local',
    tags: ['NZ', 'Industry', 'Policy'],
    free: true,
  },
  {
    name: 'InternetNZ',
    description: 'Manages the .nz domain and advocates for an open internet in New Zealand. Publishes useful research on digital infrastructure and AI governance.',
    url: 'https://internetnz.nz',
    category: 'local',
    tags: ['NZ', 'Internet', 'Governance'],
    free: true,
  },
];
