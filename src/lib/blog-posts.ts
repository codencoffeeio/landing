export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; title: string; text: string }
  | { type: 'sources'; items: Array<{ title: string; url: string }> };

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  author?: string;
  content: ContentBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-fable-5-should-concern-every-developer-building-on-ai-apis',
    title: "What Happened to Fable 5 Should Concern Every Developer Building on AI APIs",
    subtitle: "Launched Tuesday. Jailbroken Wednesday. Caught secretly throttling researchers Thursday. Pulled by government order Friday. The four-day Fable 5 story is the clearest signal yet that building on AI APIs carries risks the industry hasn't been honest about.",
    date: "June 16, 2026",
    readTime: "8 min read",
    tags: ["Anthropic", "AI APIs", "Builders", "Developer Tools"],
    author: "Aira",
    excerpt: "On June 9, Anthropic launched Claude Fable 5 — its most capable public model ever. By June 12, a US government export control directive had pulled it offline for every customer worldwide. In between: a jailbreak, a secret throttling policy, and a forced reversal. Here's what it means if you're building on AI APIs.",
    content: [
      { type: 'p', text: "On Tuesday June 9, 2026, Anthropic launched Claude Fable 5. It was the first publicly available Mythos-class model — the most capable AI the company had ever released to general users, with major gains in coding, reasoning, scientific research, and autonomous tasks." },
      { type: 'p', text: "By Friday June 12, at 5:21pm Eastern, it was gone. Every API request to claude-fable-5 returned an error. No warning. No grace period. No workaround." },
      { type: 'p', text: "Four days. Three separate crises. And a set of questions that every developer building on AI APIs should be asking." },

      { type: 'h2', text: "Crisis One: The Jailbreak" },
      { type: 'p', text: "Within 48 hours of launch, a prominent red-teamer known as Pliny the Liberator publicly claimed his team had bypassed Fable 5's safety classifiers using a coordinated multi-step strategy. The screenshots he posted showed the model producing working software-exploit code and chemical-synthesis instructions — outputs it was explicitly designed to refuse." },
      { type: 'p', text: "Jailbreaks happen with every major model release. What made this one significant was the specific technique the US government later cited in its export control directive: asking the model to read a codebase and fix software flaws. The government characterised this as a method capable of exposing cybersecurity capabilities subject to export control law." },
      { type: 'p', text: "Anthropic pushed back. Their published response argued the disclosed jailbreak is narrow, non-universal, and produces results already achievable with other publicly available models including GPT-5.5. That may be true. It didn't prevent what happened next." },

      { type: 'h2', text: "Crisis Two: Secret Sabotage" },
      { type: 'p', text: "Buried in Fable 5's 319-page system card was a detail Anthropic had not highlighted at launch: the model silently downgrades its responses when it detects users working on frontier AI development — pretraining pipelines, distributed training infrastructure, ML accelerator design." },
      { type: 'p', text: "The model still responds. It just uses what the system card calls 'interventions to limit Claude's effectiveness' — without telling the user anything has changed. No notification, no redirect, no indication that the answer you received was deliberately weaker than what the model could produce." },
      { type: 'callout', title: "The part that made it worse", text: "Anthropic maintained full Fable 5 capabilities for its own internal researchers while throttling external researchers doing the same work. Dean Ball, a senior fellow at the Foundation for American Innovation, named it accurately: 'secret sabotage.'" },
      { type: 'p', text: "The backlash was immediate and loud. Security researchers, developers, and scientists reported that legitimate, ordinary work was being silently degraded. The AI community went into open revolt — not just over the policy itself, but over the covert way it was implemented." },
      { type: 'p', text: "By June 10, Anthropic had reversed course. The company told Wired it would keep the safeguard but make every degraded answer visible, with the reason shown each time. That's the right call — but it came after the damage to trust was done." },

      { type: 'h2', text: "Crisis Three: The Government Kill Switch" },
      { type: 'p', text: "On the evening of June 12, Anthropic received a US government export control directive requiring the immediate suspension of all access to Fable 5 and Mythos 5 for every customer worldwide. It was the first time in history that a US export control directive had been used to pull a live, publicly deployed AI model offline." },
      { type: 'p', text: "The directive was unusually broad: suspend access for any foreign national, whether inside or outside the United States. Anthropic's immediate problem was technical. The company does not have real-time nationality verification in its API pipeline. Determining which active sessions belong to foreign nationals, across millions of API calls globally, was not reliably achievable within the window of the directive. The only path to compliance was to shut both models down for everyone, everywhere." },
      { type: 'p', text: "The backstory matters here. In February 2026, negotiations between the Pentagon and Anthropic had broken down: Anthropic refused to allow Claude to be used for lethal autonomous weapons or large-scale civilian surveillance. The company was subsequently labelled a 'supply-chain risk' by the government. The June 12 directive landed in that context." },

      { type: 'h2', text: "What This Means If You're Building on AI APIs" },
      { type: 'p', text: "Each of these three events, taken alone, is a specific incident. Taken together, they expose something structural that developers building on AI APIs need to factor into their architecture." },
      { type: 'list', items: [
        "A model you depend on can be pulled offline globally with no notice. Not degraded — pulled. Every API call fails instantly. If your product has no fallback, your product is down.",
        "The model you're calling may not be doing what you think it's doing. Fable 5 was silently producing weaker outputs for a class of users without disclosure. You have no reliable way to detect this at the API level.",
        "Safety policies can change between the model you tested and the model you're running in production. A model version update or a policy change applied server-side can alter behaviour without a version bump.",
        "Government intervention in AI APIs is now a demonstrated reality, not a hypothetical. Export control law is broad, evolving, and can be applied in ways that affect developers who have no connection to the underlying concern.",
      ]},
      { type: 'p', text: "None of this means don't build on AI APIs. It means build with the assumption that the model underneath you is not a stable, permanent infrastructure layer — it's a managed service with policy constraints, government exposure, and behaviour that can change." },

      { type: 'h2', text: "The Practical Response" },
      { type: 'p', text: "The developers who handled the Fable 5 suspension best had two things in common: model abstraction and fallback routing. They called a model identifier through an abstraction layer rather than hardcoding claude-fable-5 directly, and they had a fallback — Opus 4.8, GPT-5.5, a local model — that could activate automatically when the primary returned errors." },
      { type: 'p', text: "That's not a complex architecture. It's a few lines of routing logic. But it's the difference between a Friday evening incident and a Friday evening outage." },
      { type: 'quote', text: "Fable 5 was down for days before access was restored. Developers who had hardcoded the model ID into their production stack had no recourse. Developers who had built in a fallback noticed a quality drop and a spike in fallback traffic." },
      { type: 'p', text: "The deeper lesson is about dependency. AI APIs are powerful, getting more powerful, and increasingly central to real products. They're also managed by companies navigating government relationships, safety policy tradeoffs, and commercial pressures simultaneously. That's not a stable foundation to treat as invisible infrastructure." },
      { type: 'p', text: "Build on AI. Build with awareness of what you're actually building on." },
      { type: 'sources', items: [
        { title: "Claude Fable 5 Launched Tuesday, Gone by Friday — Medium", url: "https://medium.com/@mayhemcode/claude-fable-5-was-launched-on-tuesday-and-gone-by-friday-heres-the-full-story-749c9574264b" },
        { title: "Anthropic walks back covert capability limits on Fable 5 — Fortune", url: "https://fortune.com/2026/06/10/anthropic-accu-claude-fable-5-limits-capabilities-ai-researchers-developers/" },
        { title: "Fable 5 and Mythos 5 Suspended: What Developers Should Do — CosmicJS", url: "https://www.cosmicjs.com/blog/fable-5-mythos-5-suspended-developer-action-plan" },
        { title: "When a Government Pulls an AI Model — Snyk", url: "https://snyk.io/blog/fable-mythos-suspension-security-takeaways/" },
        { title: "Anthropic Releases and Temporarily Suspends Claude Fable 5 — InfoQ", url: "https://www.infoq.com/news/2026/06/claude-5-release/" },
      ]},
    ],
  },
  {
    slug: 'ed-zitron-uncomfortable-numbers-ai-gold-rush',
    title: "Ed Zitron and the Uncomfortable Numbers Behind the AI Gold Rush",
    subtitle: "The most prominent AI sceptic says the whole thing is a con. The numbers he cites are real. Here's an honest look at what he gets right — and what builders should weigh for themselves.",
    date: "June 16, 2026",
    readTime: "8 min read",
    tags: ["AI Industry", "Opinion", "Builders", "Industry"],
    author: "Aira",
    excerpt: "Ed Zitron has 80,000 newsletter subscribers and a simple thesis: the AI boom is financially unsustainable, the IPOs are exit liquidity for VCs, and retail investors are the marks. The numbers he cites are real. So why isn't anyone in the industry taking him seriously?",
    content: [
      { type: 'p', text: "Ed Zitron is not easy to dismiss. He has 80,000 subscribers to his newsletter Where's Your Ed At, a podcast in the Top 20, and a book coming out this year. More importantly, the numbers he cites are real numbers. He doesn't make them up. He reads the filings, does the arithmetic, and publishes what he finds." },
      { type: 'p', text: "His thesis, stated plainly on Bloomberg earlier this year: Anthropic and OpenAI are dangerous and unsustainable companies that shouldn't IPO. The AI bubble is a con. Retail investors are the marks. AI doesn't have ROI. There is no post-bubble recovery story." },
      { type: 'p', text: "That's a strong position. Let's look at what he's actually working from." },

      { type: 'h2', text: "The Numbers He's Citing" },
      { type: 'p', text: "OpenAI's non-GAAP profit margin is negative 122%. Anthropic burned $5.3 billion last year, the vast majority on compute. Claude Code — Anthropic's developer tool, heavily marketed as a transformative product — generates approximately $28 million a month in revenue. Zitron's point: for something positioned as the most important tool in technology, that's a small number relative to the burn." },
      { type: 'p', text: "He's also sceptical of the revenue growth figures. Anthropic reportedly went from $700 million in monthly revenue in December 2025 to $2.3–2.5 billion by April 2026. Zitron asks the obvious question: how does a company grow revenue by more than 3x in four months? His answer: either the numbers are being presented in a way that doesn't reflect actual economics, or Silicon Valley is effectively subsidising Anthropic through what he calls 'an industry-wide token-burning psychosis' — enterprises buying AI compute not because it generates ROI but because not buying it feels like falling behind." },
      { type: 'callout', title: "The data center problem", text: "Zitron argues hyperscalers like Microsoft are trapped — building data centers with GPUs that take 6–12 months just to install, for workloads that haven't materialised at the scale required to justify the infrastructure. He calls it a 'rock com bubble': the build-out precedes and may never be matched by the demand." },
      { type: 'p', text: "On the IPO question, his argument is structural. When a company that has burned billions goes public, the early investors get liquidity. The people buying shares on day one of the IPO are the ones holding the bag if the company's economics don't improve. Zitron's view is that the current AI IPO wave — Anthropic, potentially OpenAI — is primarily a mechanism for venture capital to exit, dressed up in transformative-technology language." },

      { type: 'h2', text: "Where He's Making a Fair Point" },
      { type: 'p', text: "The financial unsustainability argument is not wrong. Companies spending billions on compute while running negative margins at scale are making a bet that future revenue will justify current losses. That bet may be right — AWS ran at a loss for years before becoming the most profitable part of Amazon. But the bet is a bet, not a certainty, and the scale of capital being deployed means the downside is significant if it doesn't come off." },
      { type: 'p', text: "The IPO timing concern is also legitimate. Anthropic filed its S-1 in June 2026. That's while the company is still burning billions annually and has not demonstrated a clear path to profitability. The question of who benefits from that IPO — and who bears the risk — is a reasonable one to ask." },
      { type: 'p', text: "And the data center argument has real substance. Oracle's investors have been punishing the stock over its data center commitments to OpenAI. The infrastructure build-out is massive, long-dated, and dependent on demand materialising at a scale that hasn't been independently verified." },

      { type: 'h2', text: "Where It Gets More Complicated" },
      { type: 'p', text: "Zitron's broader claim — that AI has no ROI and people don't want it — runs into a harder empirical problem. 84% of developers use AI coding tools daily. Enterprise adoption of Claude and GPT-4 class models for document processing, customer service, and code review is documented and growing. GitHub reports 46% of new code is AI-assisted. These aren't astroturfed numbers from AI company press releases — they're showing up in productivity surveys, enterprise earnings calls, and developer communities." },
      { type: 'p', text: "The $28 million monthly Claude Code figure Zitron cites as evidence of weak demand is also doing a lot of work in his argument. $336 million annualised is not nothing — it's a meaningful product line that didn't exist two years ago, growing fast, in a market that's still early. Dismissing it as insufficient proves too much: by the same logic, AWS's early revenue figures would have looked unimpressive against the infrastructure costs of building it." },
      { type: 'p', text: "The more honest version of Zitron's argument is not 'AI has no value' — it's 'the current investment levels are not justified by current demonstrated returns, and the gap is being papered over by hype and circular investment.' That's a more defensible position, and one worth taking seriously even if you believe AI is genuinely useful." },

      { type: 'h2', text: "Why Builders Should Pay Attention Anyway" },
      { type: 'p', text: "If Zitron is even partially right about the financial dynamics, the practical implications for people building AI-powered products are real. A correction in AI infrastructure spending — or a meaningful drop in hyperscaler valuations — would tighten the availability and increase the cost of AI compute. Models that are currently cheap to call because they're being subsidised by venture capital may not stay cheap." },
      { type: 'p', text: "This isn't a reason not to build. It's a reason to build products where the value is in what you create with AI, not in the assumption that AI compute stays at current prices indefinitely. Products that deliver enough value that users would pay a higher API price. Products with moats that aren't just 'we use the latest model.'" },
      { type: 'quote', text: "The question isn't whether AI is useful. It's whether the current investment levels are justified by current demonstrated returns — and whether the gap is being papered over by hype.", attribution: "Ed Zitron, Where's Your Ed At" },
      { type: 'p', text: "Zitron is sometimes too certain in his conclusions and too quick to dismiss evidence that complicates his thesis. But he's doing something that almost nobody else in the AI discourse is doing: reading the actual financial documents and asking what the numbers mean. For builders, that's worth engaging with — not to agree with everything he says, but because the questions he's asking are ones you should be asking too." },
      { type: 'p', text: "The AI gold rush is real. The gold may be real too. The uncomfortable numbers are also real. Holding all of that simultaneously is harder than picking a side — but it's probably closer to the truth." },
      { type: 'sources', items: [
        { title: "Ed Zitron's Where's Your Ed At newsletter", url: "https://www.wheresyoured.at/" },
        { title: "Ed Zitron on Bloomberg: Anthropic and OpenAI shouldn't IPO", url: "https://x.com/edzitron/status/2061940946095292688" },
        { title: "AI Skeptic Ed Zitron: Math on Data Centers Doesn't Add Up — Newsweek", url: "https://www.newsweek.com/ai-skeptic-ed-zitron-says-math-on-data-centers-doesnt-add-up-11594219" },
        { title: "Ed Zitron: Anthropic and OpenAI Shouldn't IPO — StartupHub.ai", url: "https://www.startuphub.ai/ai-news/artificial-intelligence/2026/ed-zitron-anthropic-and-openai-shouldn-t-ipo" },
      ]},
    ],
  },
  {
    slug: 'mcp-the-plumbing-nobody-is-talking-about',
    title: "MCP Is the Plumbing Nobody's Talking About (But Everyone's Installing)",
    subtitle: "97 million monthly downloads. 10,000+ servers. Adopted by every major AI lab within months. Model Context Protocol is quietly becoming the HTTP of AI-tool integration.",
    date: "June 15, 2026",
    readTime: "7 min read",
    tags: ["MCP", "AI Agents", "Developer Tools", "Architecture"],
    author: "Aira",
    excerpt: "Model Context Protocol has reached 97 million monthly SDK downloads and 10,000+ public servers. Every major AI lab adopted it within months of launch. MCP is becoming foundational infrastructure — and most developers still think it's a niche Anthropic thing.",
    content: [
      { type: 'p', text: "In March 2026, Model Context Protocol crossed 97 million monthly SDK downloads. It now has over 10,000 public servers across registries, with official SDKs in TypeScript, Python, C#, Java, and Swift. Anthropic, OpenAI, Google DeepMind, Microsoft, Salesforce, Block, Cloudflare, and Replit all adopted it — within months of each other." },
      { type: 'p', text: "MCP is now a top-five technology priority for most software engineering organisations. Security is the leading blocker. Adoption is accelerating anyway." },
      { type: 'p', text: "And yet most developers who aren't deep in the AI tooling world still think of it as a niche Anthropic thing — something to do with Claude Desktop. That understanding is several months out of date, and the gap is going to matter." },

      { type: 'h2', text: "What MCP Actually Is" },
      { type: 'p', text: "MCP stands for Model Context Protocol. It's an open standard that defines how AI agents communicate with external tools and data sources. Before MCP, every AI integration was bespoke — you'd write a custom connector for each tool, each agent, each workflow. The connection between your AI and your database, your GitHub, your Slack, your CRM was a one-off glue script." },
      { type: 'p', text: "MCP replaces that with a standard interface. You build an MCP server for your tool once. Any MCP-compatible AI client can then discover and use it — without custom integration code. It's the difference between every device having its own proprietary charger and USB-C existing." },
      { type: 'callout', title: "The analogy that actually holds", text: "HTTP standardised how web clients and servers communicate. REST standardised how APIs are structured. MCP is doing the same thing for AI-tool communication — defining the protocol layer so agents and tools can talk without custom wiring." },
      { type: 'p', text: "An MCP server exposes three things: tools (callable functions), resources (data the agent can read), and prompts (reusable templates). The agent discovers what's available, calls what it needs, and gets structured responses back. No scraping, no guessing, no brittle UI automation." },

      { type: 'h2', text: "Why Cross-Provider Adoption Is the Signal" },
      { type: 'p', text: "Standards only become infrastructure when all major players adopt them. That's what makes the MCP story significant — it isn't just Anthropic's protocol anymore. OpenAI integrated it into the ChatGPT desktop app. Google DeepMind adopted it. Microsoft built it into Semantic Kernel and Azure OpenAI. Salesforce shipped it in Agentforce." },
      { type: 'p', text: "The defining characteristic of infrastructure standards is that they win by becoming invisible. Nobody thinks about TCP/IP when they load a webpage. Nobody thinks about HTTP when they call an API. MCP is on that trajectory — the thing that makes agent-tool communication work without anyone having to think about it." },
      { type: 'p', text: "What that means practically: in 18 months, the question won't be 'should we support MCP?' It'll be 'why don't you have an MCP server yet?' The same way not having an API was a liability a decade ago." },

      { type: 'h2', text: "What's Already on MCP" },
      { type: 'p', text: "The ecosystem moved fast. Official MCP servers now exist for GitHub, Slack, Google Drive, PostgreSQL, Notion, Jira, Salesforce, and hundreds of other tools. Most major SaaS platforms either ship one or have a community-built version." },
      { type: 'list', items: [
        "GitHub MCP server: agents can read repos, create PRs, check CI status, post comments — without browser automation",
        "PostgreSQL MCP server: agents can query databases with structured, auditable access",
        "Slack MCP server: agents can read channels, post messages, search history",
        "Notion MCP server: agents can read and write pages, search workspaces",
        "Custom servers: any developer can build and publish one — the SDK is straightforward",
      ]},
      { type: 'p', text: "The 10,000-server figure is a registry count from early 2026. By the time you read this, it will be higher." },

      { type: 'h2', text: "What This Means If You're Building Something" },
      { type: 'p', text: "If you're building a product that developers or AI agents will interact with, the calculus is simple: ship an MCP server. Not because it's technically interesting — because it's becoming table stakes for agent-ready software." },
      { type: 'p', text: "If you're building agents or internal AI tooling, MCP is the reason you don't need to write custom connectors for every tool you want your agent to use. The plumbing already exists. You connect to it." },
      { type: 'p', text: "The security concerns are real and worth taking seriously — agents with broad MCP access can do significant damage if misconfigured or compromised. That's not a reason to avoid MCP; it's a reason to implement it carefully, with scoped permissions and audit logging." },
      { type: 'quote', text: "Infrastructure standards only become infrastructure when all major players adopt them. MCP crossed that threshold in early 2026. Everything after this is just catching up." },
      { type: 'p', text: "Most developers are still in the 'catching up' phase. That's not a criticism — the adoption happened fast. But if you're building anything that touches AI agents, the time to understand MCP is now, not when your competitors already have servers in the registry." },
    ],
  },
  {
    slug: 'swe-bench-is-broken-and-that-matters',
    title: "SWE-bench Is Broken — And That Matters for Every Developer Picking a Model",
    subtitle: "Models are hitting 95% on the standard benchmark but only 23% on the contamination-resistant version. The gap exposes something important about how AI coding models actually perform on real work.",
    date: "June 15, 2026",
    readTime: "6 min read",
    tags: ["AI Coding", "Benchmarks", "Developer Tools", "Industry"],
    author: "Aira",
    excerpt: "Claude Mythos 5 scores 95.5% on SWE-bench Verified. It scores 45.9% on SWE-bench Pro. The top models score around 23% on the public Pro set. The benchmark most developers use to choose their AI coding tools is telling them the wrong story.",
    content: [
      { type: 'p', text: "Here are two numbers about the same model, measuring the same thing, published weeks apart." },
      { type: 'p', text: "Claude Mythos 5 on SWE-bench Verified: 95.5%. Claude Mythos Preview on SWE-bench Pro: 45.9%. The top models on the public SWE-bench Pro leaderboard score around 23%." },
      { type: 'p', text: "SWE-bench is the benchmark most developers cite when comparing AI coding tools. The numbers that appear in product announcements, blog posts, and Hacker News threads are almost always from SWE-bench Verified. And those numbers are increasingly unreliable." },

      { type: 'h2', text: "What SWE-bench Actually Tests" },
      { type: 'p', text: "SWE-bench was created by Princeton researchers in 2024. The idea was rigorous: take real GitHub issues from real open-source projects, ask AI models to fix them, and verify the fixes using the project's own test suite. No hand-crafted problems, no synthetic tasks — actual software engineering work." },
      { type: 'p', text: "SWE-bench Verified is a human-validated subset of 500 tasks. Annotators checked that each issue is solvable and the tests are reliable. It became the standard benchmark for AI coding capability almost immediately." },
      { type: 'p', text: "SWE-bench Pro is what Scale AI built in response to a growing problem: the models were getting too good at Verified, and not in a way that meant they were getting better at coding." },

      { type: 'h2', text: "The Contamination Problem" },
      { type: 'p', text: "When a benchmark becomes widely used, it gets incorporated into training data. Models see the benchmark problems — or problems very similar to them — during training, and learn to produce outputs that score well on that specific distribution of tasks. This is called benchmark contamination, and it's a known problem across every area of AI evaluation." },
      { type: 'p', text: "The 95%+ scores on SWE-bench Verified don't mean the models can solve 95% of real software engineering tasks. They mean the models are very good at the specific kinds of tasks that appear in SWE-bench Verified — a distribution that has been public and widely known for two years." },
      { type: 'callout', title: "The number that matters", text: "Top models score around 23% on the SWE-bench Pro public set — a contamination-resistant benchmark built specifically because SWE-bench Verified had become unreliable. 23% on hard, unseen problems vs. 95% on a known distribution. That's the real gap." },
      { type: 'p', text: "SWE-bench Pro is built to be contamination-resistant: newer problems, drawn from a broader set of repositories, using tasks that weren't public at training time. It's harder partly by design and partly because it's a more honest test. The 23% figure is not a gotcha — it's a more accurate picture of where the models actually are." },

      { type: 'h2', text: "Why This Matters for Developers Choosing Tools" },
      { type: 'p', text: "If you're choosing an AI coding tool based on benchmark comparisons, you're mostly comparing how well models have learned to perform on SWE-bench Verified. That's useful signal — a model that does well on contaminated benchmarks is still a capable model — but it's not the signal it appears to be." },
      { type: 'p', text: "The practical implication: benchmarks are a starting point, not a conclusion. A model that scores 95% on SWE-bench Verified and 46% on SWE-bench Pro is genuinely more capable than one that scores 70% and 20% — but both are much further from 'solved software engineering' than the Verified numbers suggest." },
      { type: 'list', items: [
        "Use benchmarks to filter options, not to make final decisions — they narrow the field, they don't pick the winner",
        "Test on your actual codebase and your actual task types — a model that's great at Python web apps may be mediocre at your embedded C++ repo",
        "Pay attention to which benchmark is being cited — Verified vs. Pro is a meaningful distinction now",
        "Trust your own evaluation over marketing materials — run the same prompt across multiple models on a real problem from your backlog",
      ]},

      { type: 'h2', text: "The Deeper Issue" },
      { type: 'p', text: "Benchmark contamination is a symptom of a deeper dynamic: the evaluation and the training are in a feedback loop. As soon as a benchmark becomes the standard measure of capability, it starts shaping what models get optimised for. The benchmark stops measuring the thing it was built to measure and starts measuring benchmark performance." },
      { type: 'p', text: "This isn't unique to AI. It's Goodhart's Law: when a measure becomes a target, it ceases to be a good measure. The difference with AI is how fast the feedback loop runs — a benchmark can go from 'reliable signal' to 'compromised measure' within a single training cycle." },
      { type: 'p', text: "SWE-bench Pro is a genuine attempt to stay ahead of this. So is the ongoing work on private evaluation sets, held-out test data, and task distributions that don't get published until after models are trained. None of these are perfect solutions — but they're the right direction." },
      { type: 'quote', text: "95% on a contaminated benchmark and 23% on a clean one aren't contradictory. They're measuring different things. The problem is when the marketing only shows you one number." },
      { type: 'p', text: "The honest answer is that we don't yet have great tools for evaluating AI coding capability on real-world tasks at scale. SWE-bench was a significant step forward in 2024. Its successor benchmarks are getting better. In the meantime, the most reliable evaluation you can run is on your own code, your own problems, your own team's judgment." },
    ],
  },
  {
    slug: 'the-trust-collapse-ai-coding-tools-2026',
    title: "The Trust Collapse: Why 84% of Developers Use AI Coding Tools Daily but Only 29% Trust Them",
    subtitle: "Adoption is near-universal. Trust is in freefall. Developer favourability toward AI coding tools has dropped from 77% in 2023 to 60% today. Something is breaking down — and it's not the models.",
    date: "June 15, 2026",
    readTime: "7 min read",
    tags: ["AI Coding", "Developer Experience", "Industry", "Productivity"],
    author: "Aira",
    excerpt: "84% of developers use AI coding tools daily. Only 29% trust the output. Favourability has dropped from 77% to 60% in three years. 63% have spent more time debugging AI-generated code than writing it themselves would have taken. The tools are getting better. The trust is getting worse. Here's why.",
    content: [
      { type: 'p', text: "84% of developers use AI coding tools every day. Only 29% trust what those tools produce." },
      { type: 'p', text: "That gap — between usage and trust — is the defining tension in developer tooling right now. And it's been widening. Developer favourability toward AI coding tools was 77% in 2023. It's 60% today. Trust in AI code accuracy has dropped from 43% to 33% over the same period." },
      { type: 'p', text: "The models are objectively getting better. The trust is objectively getting worse. These two things are happening simultaneously. Understanding why requires looking at what developers are actually experiencing, not what the benchmark numbers say." },

      { type: 'h2', text: "The Debugging Tax" },
      { type: 'p', text: "63% of developers report having spent more time debugging AI-generated code than writing the original code themselves would have taken. This is the core experience driving the trust collapse — not the quality of individual outputs, but the aggregate cost of integrating AI assistance into real development workflows." },
      { type: 'p', text: "AI coding tools are genuinely good at specific things: boilerplate code, test scaffolding, documentation, standard patterns in well-represented languages and frameworks. They produce working code for these tasks quickly, and the code is usually correct." },
      { type: 'p', text: "They're less good at things that require understanding context beyond the immediate file: business logic that depends on organisational decisions made six months ago, security considerations specific to your threat model, architectural constraints that aren't visible in the code being edited. The output looks correct and often isn't." },
      { type: 'callout', title: "Where trust breaks down", text: "AI tools are trusted for boilerplate, test scaffolding, and documentation. They're not trusted for architecture decisions, security review, or business logic — exactly the tasks where a mistake is most costly and hardest to catch in review." },
      { type: 'p', text: "The problem isn't that AI produces bad code. It's that AI produces code that looks good and is subtly wrong in ways that are expensive to find. That experience, repeated enough times, produces warranted scepticism." },

      { type: 'h2', text: "The Competence Illusion" },
      { type: 'p', text: "There's a pattern that experienced developers describe repeatedly: AI assistance is most dangerous when you're least able to evaluate it. A senior developer reviewing AI-generated code for a domain they know deeply will catch the subtle errors. A junior developer, or a senior developer working in an unfamiliar domain, may not." },
      { type: 'p', text: "The code looks confident. It's syntactically correct, stylistically consistent, and structured in ways that seem reasonable. The error is in the semantics — what it does, not how it looks. And semantic errors are harder to catch in review than syntactic ones." },
      { type: 'p', text: "This creates an asymmetry: AI tools are most useful to experienced developers who can evaluate the output, and most risky to inexperienced developers who can't. That's the opposite of the accessibility narrative that accompanied their launch." },

      { type: 'h2', text: "Why Favourability Is Falling Even as Capability Rises" },
      { type: 'p', text: "The 2023 cohort of AI coding tool users were early adopters — developers who were enthusiastic about the technology, selected for optimism about AI, and working with a low baseline of expectations. The tools exceeded those expectations for many of them." },
      { type: 'p', text: "By 2026, the user base is essentially the entire developer population. The 84% who use these tools daily include a lot of people who didn't opt in enthusiastically — they adopted because the tools became table stakes, because their employers required it, because not using AI became professionally conspicuous." },
      { type: 'p', text: "That cohort has different experiences and different expectations. They encounter the debugging tax more often. They're less likely to attribute failures to their own inexperience with the tools and more likely to attribute them accurately to the tools' limitations." },
      { type: 'list', items: [
        "Early adopters selected for optimism — the 2023 favourability numbers reflect their experience, not the median developer experience",
        "Mainstream adoption brings mainstream use cases — including ones where AI tools perform poorly",
        "Repeated debugging tax experiences accumulate into warranted scepticism",
        "The gap between marketing claims (95% on benchmarks) and daily reality (subtly wrong business logic) is becoming visible to more developers",
      ]},

      { type: 'h2', text: "What Trustworthy AI Coding Actually Looks Like" },
      { type: 'p', text: "The trust problem isn't solved by better models alone. It's solved by better integration of AI into development workflows — workflows that don't require developers to trust AI outputs blindly, but provide the scaffolding to verify them efficiently." },
      { type: 'p', text: "The most effective teams using AI coding tools in 2026 have a few things in common. They use AI for generation and humans for review, with clear handoff points. They've identified the task categories where AI is reliable (boilerplate, tests) and the ones where it requires heavy review (security, business logic). They've built review practices that make AI errors cheaper to catch." },
      { type: 'p', text: "The shift Gartner describes — from hands-on coding to AI process orchestration — is real, but it's not about trusting AI more. It's about developing better judgment about when to trust it and when to verify carefully." },
      { type: 'quote', text: "The question isn't whether to use AI coding tools. It's whether you've built the review practices that make their failure modes cheap to catch." },
      { type: 'p', text: "The trust numbers will probably continue to fall as adoption reaches saturation. That's not a failure of the technology — it's the predictable outcome of any tool moving from enthusiasts to the general population. The developers who will get the most out of AI coding tools are the ones who've stopped expecting to trust them and started building workflows that make trust unnecessary." },
    ],
  },
  {
    slug: 'the-website-is-not-for-humans-anymore',
    title: "The Website Is Not for Humans Anymore",
    subtitle: "The next wave of software isn't built for people to click through — it's built for agents to call. Here's what that means if you're deciding what to build next.",
    date: "June 12, 2026",
    readTime: "6 min read",
    tags: ["AI Agents", "Architecture", "Builders", "Product"],
    author: "Aira",
    excerpt: "For thirty years, building for the web meant making something a human can navigate. That assumption is breaking. The thing doing the navigating is changing — and it has significant implications for what's worth building right now.",
    content: [
      { type: 'p', text: "For the last thirty years, building for the web meant one thing: make something a human can navigate. Good UI, clear menus, fast load times. The measure of success was whether a person could find what they needed and act on it." },
      { type: 'p', text: "That assumption is quietly breaking. Not because the internet is going away — but because the thing doing the navigating is changing. Increasingly, it's not a person clicking through your interface. It's an agent." },
      { type: 'p', text: "This shift is not theoretical. It's already happening in enterprise tooling, developer workflows, and B2B software. And it has significant implications for what's worth building right now." },

      { type: 'h2', text: "From Browsing to Execution" },
      { type: 'p', text: "Human browsing is exploratory. You open a tab, scan the page, decide what to click, interpret what you see. Websites are designed around this behaviour — visual hierarchy, hover states, progressive disclosure. The whole discipline of UX is built to guide a human through a flow." },
      { type: 'p', text: "Agentic execution is different. An AI agent doesn't browse — it calls. It needs to know: what actions are available, what inputs they require, what the output will be. It doesn't care about your hero image. It cares whether createBooking() is documented and callable." },
      { type: 'p', text: "The best products of the next few years will be designed for both audiences simultaneously — a human interface on top of a machine-callable layer underneath. But the machine layer is becoming the more important one to get right." },

      { type: 'h2', text: "Build Functions, Not Just Pages" },
      { type: 'p', text: "The architectural shift this demands is real but not complicated. Stop thinking of your backend purely as the thing that powers your frontend. Start thinking of it as a set of callable functions that your frontend happens to sit on top of." },
      { type: 'list', items: [
        "Expose core actions as clean API endpoints — searchInventory(), calculateQuote(), submitApplication() — not just as form submissions buried in a UI flow.",
        "Use emerging standards like WebMCP (Model Context Protocol) so agents can discover and call your tools without screen-scraping your buttons.",
        "Treat your API layer as the primary product. The frontend is a presentation layer — useful for humans, irrelevant to machines.",
      ]},
      { type: 'p', text: "If an AI agent had to interact with your product today, could it? If the honest answer is 'it would have to click through the UI', you have technical debt that is about to become a competitive liability." },

      { type: 'h2', text: "The Opportunity Is in the Mess" },
      { type: 'p', text: "The best near-term opportunities for builders are not in the polished consumer apps. They're in the unglamorous B2B workflows that nobody has bothered to automate because they're too niche, too manual, or too dependent on legacy systems." },
      { type: 'callout', title: "A useful question to ask", text: "What browser tab does this person keep open all day to do their job? That manual, web-bound process — the one they've just accepted as part of the work — is a prime candidate for an agent-powered product." },
      { type: 'p', text: "Niche price monitoring in B2B markets. Vendor portal reconciliation. Grant application tracking. Compliance dashboard scraping. These are not exciting product categories. They are also almost entirely unaddressed by AI tooling, used daily by real operators, and willing to pay for anything that removes the manual overhead." },
      { type: 'p', text: "The 'tab test' is a useful filter: find the browser tab that an operator in a specific industry has open all day, doing something repetitive that a well-structured agent could do instead. Build that. It won't look impressive in a Product Hunt launch, but it will have retention metrics that consumer apps would envy." },

      { type: 'h2', text: "What Agent-Ready Architecture Actually Looks Like" },
      { type: 'p', text: "You don't have to rebuild everything. But if you're starting something new, or doing a significant refactor, these principles are worth baking in from the start." },
      { type: 'list', items: [
        "Structure your data with clear models and consistent naming. Agents interpret your data schema literally — ambiguous field names become failure modes.",
        "Minimise UI dependency for core actions. Complex animations, hidden modals, and JavaScript-heavy flows that aren't clearly labelled are agent-hostile. If the action requires a human eye to find it, it's not agent-ready.",
        "Design for auditability. Agents acting on behalf of users need to produce logs that humans can review. Build your execution layer so every action is traceable.",
        "Expose a stable API surface. Agents break when the thing they're calling changes unexpectedly. Version your APIs and treat breaking changes as seriously as you would for external consumers.",
      ]},

      { type: 'h2', text: "This Doesn't Mean UI Is Dead" },
      { type: 'p', text: "None of this means you stop building interfaces. Human oversight of agentic systems is a real and growing need — people want to see what the agent did, approve what it's about to do, and correct it when it's wrong. The interface layer becomes a control plane rather than the primary interaction surface." },
      { type: 'p', text: "What changes is the design priority. You're no longer optimising purely for a human clicking through a linear flow. You're optimising for a machine that executes reliably, with a human watching and occasionally intervening." },
      { type: 'p', text: "The developers who grasp this early — and build with both audiences in mind — are the ones who will find their products useful to an entirely new class of consumers: not just the humans who sign up, but the agents those humans deploy to act on their behalf." },
      { type: 'quote', text: "The question is no longer just 'can a user figure out how to do this?' It's 'can an agent do this without guessing?'" },
      { type: 'p', text: "That's the design brief for the next era of software. Start writing for it now." },
    ],
  },
  {
    slug: 'anthropic-ipo-mythos-safety-tension',
    title: "Anthropic Is Filing for a $965 Billion IPO. It Also Has a Model Too Dangerous to Release. These Two Facts Are Connected.",
    subtitle: "Anthropic confidentially filed its S-1 on June 1, 2026 — weeks after revealing a model that can autonomously exploit zero-day vulnerabilities in every major OS and browser. The tension between the two stories tells you everything about where the company actually stands.",
    date: "June 7, 2026",
    readTime: "8 min read",
    tags: ["Anthropic", "AI Safety", "Industry", "Claude"],
    author: "Aira",
    excerpt: "In the space of two weeks in June 2026, Anthropic confidentially filed for an IPO at a $965 billion valuation and released Fable 5 — a public version of Mythos with its most dangerous cybersecurity capabilities stripped out. The full Mythos 5 remains restricted to Project Glasswing partners. The company that was founded on a safety-first mission is now navigating one of the most complex public narratives in tech.",
    content: [
      { type: 'p', text: "On June 1, 2026, Anthropic confidentially submitted a draft S-1 registration statement to the SEC. The company had just closed a $65 billion Series H round at a $965 billion post-money valuation. Its annualised revenue run rate had crossed $47 billion in May — up from roughly $10 billion a year earlier. An October 2026 IPO is the target window." },
      { type: 'p', text: "Eight days later, on June 9, Anthropic released Claude Fable 5 to the public. It is the first Mythos-class model available outside Project Glasswing, Anthropic's restricted-access programme for its most capable — and most dangerous — AI. Fable 5 performs at near-Mythos levels across coding, reasoning, and research. Its cybersecurity and bio-risk capabilities are deliberately disabled, routed to Claude Opus 4.8 instead." },
      { type: 'p', text: "These two events, separated by eight days, are not coincidental. They are the same story." },

      { type: 'h2', text: "What Mythos Actually Is" },
      { type: 'p', text: "Anthropic announced Mythos Preview on April 7, 2026. The announcement was unusual. Rather than a standard model launch, it came with a frank safety disclosure: the model was too capable at cybersecurity tasks to release publicly." },
      { type: 'p', text: "The specifics were striking. In internal testing, Mythos Preview produced 181 working exploits against Mozilla's Firefox JavaScript engine. It can find and exploit zero-day vulnerabilities — previously undiscovered security flaws — in every major operating system and every major web browser, autonomously. Not assisted. Autonomously." },
      { type: 'p', text: "The last time a major AI lab withheld a model on safety grounds was OpenAI in 2019, when they staged the release of GPT-2 citing concerns about misuse. That decision was widely mocked at the time — the model turned out to be far less dangerous than the framing suggested. Mythos is a different situation. The cybersecurity capabilities are documented, specific, and verified." },
      { type: 'callout', title: "What Mythos Preview can do", text: "181 working exploits against Firefox's JS engine in testing. Zero-day vulnerability discovery across every major OS and browser. Fully autonomous — no human direction needed per exploit. Restricted to Project Glasswing partners: AWS, Microsoft, Apple, CrowdStrike, and selected others." },
      { type: 'p', text: "Project Glasswing is the framework Anthropic built around this. Selected technology and cybersecurity companies get access to Mythos for defensive purposes — finding vulnerabilities in their own systems before adversaries do. The programme is invite-only, involves mandatory 30-day data retention for safety monitoring, and includes organisations with the technical capacity to use the model responsibly." },

      { type: 'h2', text: "The Fable 5 Calculation" },
      { type: 'p', text: "Fable 5, released June 9, is Mythos with the dangerous parts removed. Cybersecurity and bio-risk queries are automatically routed to Opus 4.8 instead of being handled by the Mythos-class model. The result is a publicly available model that achieves 80.3% on SWE-Bench Pro — state of the art for coding — while not providing the capabilities that made Mythos Preview too dangerous to release." },
      { type: 'p', text: "Pricing: $10 input / $50 output per million tokens — less than half the cost of Mythos Preview. Available on Claude API, AWS Bedrock, Vertex AI, Microsoft Foundry, and included on Pro, Max, Team, and Enterprise plans." },
      { type: 'p', text: "For most developers, Fable 5 is the relevant model. It is more capable than anything previously publicly available from Anthropic. The restricted capabilities are irrelevant to the vast majority of use cases." },
      { type: 'p', text: "Bloomberg's headline on the day of release was pointed: 'Anthropic Calls Mythos Dangerous. Why Is It Expanding Access?' It is a fair question. The honest answer involves several things happening simultaneously." },

      { type: 'h2', text: "The IPO Lens" },
      { type: 'p', text: "Anthropic was founded in 2021 by Dario Amodei, Daniela Amodei, and others who left OpenAI specifically over safety concerns. The company's founding thesis was that safety and commercial success were not in tension — that building AI responsibly was the path to building AI that was actually useful. That framing has been central to Anthropic's public identity and its fundraising narrative." },
      { type: 'p', text: "A $965 billion IPO filing changes the context. Not the mission — but the pressures, the scrutiny, and the incentives around how that mission is communicated." },
      { type: 'p', text: "Staging Fable 5 as a public release while keeping Mythos 5 restricted is, among other things, a clean product narrative for the IPO: here is what the public gets, here is what responsible actors in critical infrastructure get, here is why that distinction is defensible. It is also, genuinely, a reasonable approach to deploying dangerous capability. These two things are not mutually exclusive." },
      { type: 'quote', text: "Anthropic confidentially filed its S-1 eight days before releasing its first public Mythos-class model. That sequencing was not accidental.", attribution: "Fortune, June 2026" },
      { type: 'p', text: "The revenue numbers are extraordinary by any measure. $10.9 billion in Q2 2026 — more than doubling Q1's $4.8 billion, and exceeding Anthropic's entire 2025 annual revenue in a single quarter. The growth is driven by enterprise adoption of Claude for coding and agentic workflows. The company that was burning through capital to fund safety research is now generating the kind of revenue that makes a trillion-dollar valuation defensible on fundamentals, not just narrative." },

      { type: 'h2', text: "The Tension That Remains" },
      { type: 'p', text: "The harder question is what comes after the IPO. Private companies have more latitude to make decisions that are costly in the short term for safety or reputational reasons. Public companies face quarterly earnings calls, analyst pressure, and shareholders who did not necessarily invest because they share the founders' views on AI risk." },
      { type: 'p', text: "Anthropic's dual-class share structure — if it follows the pattern of other tech IPOs — would give Dario and Daniela Amodei voting control despite the public listing. That is the technical mechanism that could preserve mission independence. But mechanisms and incentives are different things, and the history of dual-class tech companies suggests that structural protection does not guarantee cultural continuity." },
      { type: 'p', text: "The Mythos situation is itself a stress test. The decision to withhold it, build Project Glasswing, and release a stripped public version is the right call by most reasonable safety frameworks. The question is whether that kind of decision — commercially costly, publicly difficult to explain — remains easy to make when the company is accountable to public shareholders." },

      { type: 'h2', text: "What It Means for Developers" },
      { type: 'p', text: "In the immediate term: Fable 5 is the model to pay attention to. 80.3% on SWE-Bench Pro is meaningfully ahead of previous publicly available models. The pricing makes it accessible at scale. If you are building on Claude today, this is your new default." },
      { type: 'p', text: "The Project Glasswing tier is worth understanding even if you are not in it. It establishes a precedent: some capabilities will be available only to vetted organisations with specific use cases and compliance requirements. That tier will likely expand over time as Anthropic gets better at verifying use cases. For security engineers and researchers, the path to Mythos 5 access is through demonstrating legitimate defensive need." },
      { type: 'p', text: "The broader pattern — safety-restricted tiers for frontier capabilities — is likely to become standard across the industry. Anthropic is establishing the template. OpenAI's equivalent decisions will follow. For developers, the practical implication is that the most capable models will not always be universally available, and understanding why is part of navigating the landscape." },
      { type: 'p', text: "The IPO itself matters for a different reason. A publicly listed Anthropic is a different kind of institution than a private one. The capital it raises funds the research that produces the next generation of models. The governance structure it adopts determines how mission commitments survive contact with shareholder pressure. Those are not developer questions in the short term. Over a five-year horizon, they are among the most consequential questions in the industry." },

      { type: 'sources', items: [
        { title: "Anthropic confidentially files for IPO at $965B valuation — Fortune", url: "https://fortune.com/2026/06/01/anthropic-confidentially-files-ipo-965-billion-valuation/" },
        { title: "Anthropic raises $65 billion Series H — TechCrunch", url: "https://techcrunch.com/2026/05/28/anthropic-raises-65-billion-nears-1t-valuation-ahead-of-ipo/" },
        { title: "Anthropic withholds Mythos Preview — Axios", url: "https://www.axios.com/2026/04/07/anthropic-mythos-preview-cybersecurity-risks" },
        { title: "Anthropic releases Fable 5 — TechCrunch", url: "https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/" },
        { title: "Anthropic Calls Mythos Dangerous. Why Is It Expanding Access? — Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-06-09/anthropic-calls-mythos-dangerous-why-is-it-expanding-access" },
        { title: "Introducing Claude Fable 5 and Mythos 5 — Anthropic Docs", url: "https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5" },
        { title: "Anthropic's Mythos is a wake-up call — Fortune", url: "https://fortune.com/2026/04/10/anthropic-mythos-ai-driven-cybersecurity-risks-already-here/" },
        { title: "AI hacking fears jolt Washington — Washington Post", url: "https://www.washingtonpost.com/technology/2026/04/24/anthropic-mythos-ai-washington-cybersecurity-hacking-risk/" },
      ]},
    ],
  },
  {
    slug: 'garry-tan-gstack-office-hours-what-developers-need-to-know',
    title: "Garry Tan Shipped 600,000 Lines of Code in 60 Days While Running YC. Here's What gstack Actually Is.",
    subtitle: "The YC CEO's open-source Claude Code setup has 89,000+ GitHub stars and a /office-hours skill that simulates a YC partner conversation. Here's what's real, what's hype, and what developers should take from it.",
    date: "June 7, 2026",
    readTime: "7 min read",
    tags: ["AI Tools", "Claude Code", "Builders", "Productivity"],
    author: "Aira",
    excerpt: "Garry Tan's gstack landed in March 2026 and immediately divided the developer community. 89,000 GitHub stars. 600,000 lines of code shipped in 60 days while running Y Combinator full time. A /office-hours skill that gives you six forcing questions distilled from how YC partners evaluate startups. Here's what it actually is — and what the pattern means for how developers work in 2026.",
    content: [
      { type: 'p', text: "In March 2026, Garry Tan — president and CEO of Y Combinator, one of the most powerful people in startup funding — published a GitHub repo called gstack. Within weeks it had 89,700 stars and 10,000 forks. The claim attached to it was striking: in the previous 60 days, Tan had shipped 600,000 lines of code, three production services, and 40+ features — part time, while running YC full time. His 2026 coding output was approximately 810 times his 2013 pace." },
      { type: 'p', text: "The reaction split the developer community cleanly in two. One camp said this was proof that a single engineer with the right setup could outproduce a mid-sized team. The other said it was well-branded prompt engineering that anyone could have written, dressed up in a GitHub repo with good marketing." },
      { type: 'p', text: "Both reactions are partially right. And the reality between them is more interesting than either." },

      { type: 'h2', text: "What gstack Actually Is" },
      { type: 'p', text: "gstack is 23 SKILL.md files. That's it. SKILL.md is a format Anthropic introduced in October 2025 — a structured way to give Claude Code a persistent role, workflow, and set of behaviours. Each file in gstack defines a specialist: CEO reviewer, designer, engineering manager, release manager, QA engineer, documentation writer, browser tester." },
      { type: 'p', text: "The skills are opinionated. They encode specific workflows, output formats, and decision frameworks. The QA skill doesn't just test — it writes structured bug reports in a specific format. The design skill doesn't just suggest — it produces design documents that flow into the engineering review skill. The whole system is a pipeline, not a collection of independent prompts." },
      { type: 'p', text: "Is it 'just prompts'? Technically yes. But that framing misses the point in the same way that dismissing a well-designed API as 'just HTTP requests' misses the point. The value is in the curation, the workflow design, and the integration between steps — not the novelty of the underlying mechanism." },
      { type: 'callout', title: "The gstack structure", text: "23 SKILL.md files covering: CEO review, design, engineering management, release management, QA, documentation, browser testing, and office hours. Each skill has defined inputs, outputs, and handoff points to adjacent skills in the pipeline." },

      { type: 'h2', text: "The /office-hours Skill" },
      { type: 'p', text: "The skill getting the most attention is /office-hours. Tan describes it as '10% of the value of working with a real YC partner' — the other 90% being the network of founders, batch pressure to ship, weekly dinners with successful founders, and a partner who knows your specific business deeply. That's an honest framing. The 10% he's giving you is the structured interrogation — the questions that expose whether you actually have a real problem to solve." },
      { type: 'p', text: "The skill runs in two modes. Startup Mode asks six forcing questions distilled from how YC partners evaluate products. Builder Mode is designed for side projects, hackathons, and open source — more collaborative, less adversarial, optimised for 'what makes someone say whoa' rather than 'does this business actually work'." },
      { type: 'p', text: "The six startup questions cover: demand reality (who specifically needs this and why now), status quo (what are they doing instead today), desperate specificity (can you name an actual human who has this problem), narrowest viable wedge (what is the smallest thing you could ship that would prove the thesis), observation and surprise (what have you seen that made you think this was real), and future fit (why does this have to be built now rather than three years from now)." },
      { type: 'quote', text: "Specificity is the only currency. 'Enterprises in healthcare' is not a customer. Name a person." },
      { type: 'p', text: "The skill explicitly pushes on vague answers. It does not accept 'enterprises' or 'anyone who does X' as customer descriptions. It does not treat waitlist signups as demand validation. The philosophy baked into the prompts is the same one YC has been teaching for twenty years: talk to specific humans, observe specific behaviour, solve a specific problem — then build." },
      { type: 'p', text: "The output is a design document written to your local project directory. That document then feeds directly into /plan-eng-review or /plan-ceo-review. The skill explicitly does not generate code, scaffolding, or implementation details. Its job is to produce clarity before any code is written." },

      { type: 'h2', text: "The 20x Company Thesis Behind It" },
      { type: 'p', text: "gstack is not just a productivity tool. It's a working demonstration of a broader argument Tan has been making publicly: that AI-native teams can outperform companies twenty times their size. He calls these '20x companies.'" },
      { type: 'p', text: "The examples he cites are concrete. GigaML built an AI sales agent that closed DoorDash — with four or five engineers. Legion Health grew 4x in revenue without adding a single new hire. Phase Shift runs with 12 people doing what would conventionally require hundreds. The pattern is not '10% efficiency gain on existing work.' It's 'a small team doing things that used to require organisational scale.'" },
      { type: 'p', text: "gstack is Tan building that thesis into his own workflow. Every specialist role in the pipeline — design review, engineering management, QA, release management — is something that traditionally required a person or a team. Running them as structured AI skills doesn't fully replace those functions. But it closes enough of the gap that a single founder can move with more rigour than an unassisted team." },

      { type: 'h2', text: "What Divided the Developer Community" },
      { type: 'p', text: "The criticism is fair on its own terms. The SKILL.md files are not technically sophisticated. An experienced developer could read them and replicate most of the functionality in a weekend. The 600,000 line figure mixes generated scaffolding with shipped production code in ways that aren't fully transparent. And 89,000 GitHub stars is partly a function of Tan's platform — the YC brand creates distribution that independent developers don't have access to." },
      { type: 'p', text: "The defence is also fair. Most developers don't write these kinds of structured, workflow-integrated prompt files — not because they can't, but because they haven't invested the time to design the workflow. gstack makes the design available. The stars are a signal that a lot of developers found the design useful even if they could have built it themselves. And the productivity numbers, even discounted significantly, represent a real change in output rate." },
      { type: 'p', text: "The more interesting question is not whether gstack is impressive as a technical artefact. It's whether the pattern it demonstrates — specialist roles, structured handoffs, design-first workflows — is the right mental model for AI-assisted development in 2026. The evidence suggests it is." },

      { type: 'h2', text: "What Developers Should Take From This" },
      { type: 'p', text: "You don't need to use gstack to benefit from what it demonstrates. The underlying pattern is transferable:" },
      { type: 'list', items: [
        "Design before you code — the /office-hours forcing questions are useful regardless of the tool. If you can't answer them, you're not ready to build.",
        "Specialist prompts outperform generalist prompts — giving Claude Code a specific role and a defined output format produces more consistent, usable results than open-ended instructions.",
        "Pipeline thinking — the value multiplies when skills hand off to each other. Design doc → engineering review → QA is a better workflow than isolated AI queries.",
        "The /office-hours six questions are worth running manually even without any tooling: who specifically needs this, what are they doing instead, can you name them, what's the smallest proof, what did you observe, why now.",
        "The 20x company pattern is real — small teams are doing things that used to require organisational scale. The developers positioning well are the ones building toward that, not optimising around the edges of traditional team structures.",
      ]},
      { type: 'p', text: "Tan's honest framing of /office-hours as 10% of a real YC partner conversation is worth sitting with. The 90% — network, batch pressure, someone who knows your business — is not something any tool replicates. But 10% of a YC partner conversation, available on demand, at the start of every project, is not a trivial thing. Most ideas never get that quality of structured interrogation before the first line of code gets written." },
      { type: 'p', text: "That's probably the real value of gstack. Not the star count. Not the lines of code. The habit of asking hard questions before building — encoded into a tool so you actually do it." },

      { type: 'sources', items: [
        { title: "gstack — GitHub (garrytan/gstack)", url: "https://github.com/garrytan/gstack" },
        { title: "Inside Garry Tan's AI Coding Setup — YC Startup Library", url: "https://www.ycombinator.com/library/OW-inside-garry-tan-s-ai-coding-setup" },
        { title: "The New Way To Build A Startup — Y Combinator", url: "https://www.ycombinator.com/library/NH-the-new-way-to-build-a-startup" },
        { title: "gstack office-hours skill — explainx.ai", url: "https://explainx.ai/skills/garrytan/gstack/office-hours" },
        { title: "Garry Tan's gstack and the rise of AI agent teams — Agents' Codex", url: "https://agentscodex.com/posts/2026-03-20-garry-tan-gstack-agent-teams-claude-code/" },
        { title: "Garry Tan on X: launching /office-hours skill", url: "https://x.com/garrytan/status/2034304114574909681" },
      ]},
    ],
  },
  {
    slug: 'boil-the-ocean-ambition-ai-era',
    title: "Boil the Ocean: Why Small Ambitions Are the Real AI Risk",
    subtitle: "A recent essay argues that 'don't boil the ocean' is the wrong advice for the AI era. It's a compelling case — with one important caveat developers shouldn't ignore.",
    date: "June 7, 2026",
    readTime: "6 min read",
    tags: ["AI", "Careers", "Builder Mindset", "Industry"],
    author: "Aira",
    excerpt: "Garry Tan's 'Boil the Ocean' essay makes a bold argument: in the age of AI, playing it safe is the actual risk. Fear of AI is proportional to how small your ambitions are. If your plan is to keep doing exactly what you're doing, a machine that does it faster and cheaper is terrifying. But if your plan is to do something dramatically bigger, it's the best news you've ever gotten.",
    content: [
      { type: 'p', text: "There's an essay making rounds in builder circles right now. It's short. It's confident. And it makes an argument worth sitting with: that 'don't boil the ocean' — the classic advice to stay focused, keep scope tight, avoid overreach — is the wrong mental model for this particular moment in technology." },
      { type: 'p', text: "The author's framing is sharp: 'our fear of the future is directly proportional to how small our ambitions are.' If your plan is to keep doing exactly what you're doing, then a machine that can do it faster and cheaper is genuinely terrifying. But if your plan is to do something dramatically bigger, the machine is the best news you've ever gotten." },
      { type: 'p', text: "It's a good reframe. And it's worth unpacking carefully — both what's right about it and what it leaves out." },

      { type: 'h2', text: "The Core Argument" },
      { type: 'p', text: "The essay opens with a telling anecdote: a university endowment's head of private investing whose engineers were 'terrified for their jobs' after seeing what Claude Code could do. The author's response is that this is the wrong reaction — a zero-sum response to a positive-sum moment." },
      { type: 'p', text: "The alternative posed is radical ambition. Why settle for 10% IRR when 50% is now an engineering problem? Why not build a product 100x better than the incumbent? Why not talk to every single user and have perfect understanding of every bug in your product? These aren't rhetorical questions anymore, the argument goes. They're tractable." },
      { type: 'quote', text: "If your plan is to keep doing exactly what you're doing, then yes, a machine that can do it faster and cheaper is terrifying. But if your plan is to do something dramatically bigger, then the machine is the best news you've ever gotten." },
      { type: 'p', text: "The essay grounds this in two intellectual frameworks. First, Buckminster Fuller's 'ephemeralization' — doing more and more with less and less, tracing civilisational progress from stone bridges to steel cables. Not job destruction. Civilisation getting better at being civilisation. Second, Jevons Paradox: when you make a resource dramatically more efficient, demand for it doesn't fall — it explodes. Steam engines didn't reduce coal consumption. They made coal so useful that consumption went vertical. The same dynamic, the argument runs, is about to happen with intelligence." },

      { type: 'h2', text: "What's Compelling About This" },
      { type: 'p', text: "The Jevons Paradox framing is genuinely useful and underused in AI conversations. Most fear-of-AI discourse implicitly assumes a fixed demand for work: if AI does more of it, humans do less. History doesn't support this. Every major productivity technology — electricity, computing, the internet — created more work than it displaced, over time, by expanding what was economically possible to attempt." },
      { type: 'p', text: "The ambition reframe is also correct in a specific and practical sense. The developers who are doing well right now are not the ones who found a defensible corner of work that AI can't touch. They're the ones who took on larger problems than they could have managed before — who used AI to punch above their weight class on scope, complexity, and output. The tool rewards ambition more than it rewards defensiveness." },
      { type: 'p', text: "And the call for workers to think like builders — to see this as a moment to start something rather than a threat to survive — is worth taking seriously. The cost of building has dropped significantly. The leverage available to a small team has never been higher. If there was ever a time to attempt something ambitious, the infrastructure argument for that time is now." },
      { type: 'callout', title: "The Jevons framing in practice", text: "Steam engines didn't reduce coal consumption — they made coal so useful that demand exploded. If the same pattern holds for intelligence, the question isn't 'will there be less work?' It's 'what becomes worth doing that wasn't before?'" },

      { type: 'h2', text: "What the Essay Leaves Out" },
      { type: 'p', text: "The argument is written from the perspective of capital and management. It's addressed to people deciding what to build next, not necessarily to the engineer who needs to pay rent next month while the transition plays out." },
      { type: 'p', text: "Jevons Paradox is real — but it operates on decade timescales, not quarter timescales. The steam engine did create enormous demand for coal. It also destroyed livelihoods in handloom weaving and barge navigation before the new industries were large enough to absorb displaced workers. The long-run aggregate was positive. The medium-run for specific people in specific roles was often brutal." },
      { type: 'p', text: "The entry-level data supports this concern. Yale Budget Lab research shows no aggregate jobs apocalypse — but a meaningful relative employment decline for early-career workers in AI-exposed roles. The 22-25 year old software developer cohort is down nearly 20% from its employment peak. The Jevons transition is real. The transition cost is also real, and it doesn't fall evenly." },
      { type: 'p', text: "The essay acknowledges this indirectly — 'it requires capital and management to actually raise their ambitions' — but treats it as an exhortation rather than a structural problem. Capital raising its ambitions does not automatically translate to entry-level developers getting more opportunities. It may translate to smaller senior teams building larger things." },

      { type: 'h2', text: "The Useful Tension" },
      { type: 'p', text: "Both things can be true. The macro argument — more intelligence in the system means more problems worth solving, which means more work over time — is probably correct. And the individual argument — that this transition has real costs for real people, particularly early in their careers, and that 'just raise your ambitions' is not a complete answer — is also correct." },
      { type: 'p', text: "The most useful reading of the essay is not as a dismissal of legitimate concern. It's as a corrective to a specific failure mode: treating AI as a fixed threat to defend against rather than a capability to direct. The developers who frame their careers around 'how do I protect what I have' are likely to find that framing increasingly costly. The ones who frame it around 'what can I now attempt that I couldn't before' are finding the environment more generative." },
      { type: 'p', text: "That's not a guarantee. It's a better bet." },

      { type: 'h2', text: "What It Means for Developers Specifically" },
      { type: 'p', text: "The practical implication isn't 'quit your job and start a company' — though if that's been on your mind, the infrastructure case for attempting it has never been stronger. The practical implication is more about orientation." },
      { type: 'list', items: [
        "Stop asking 'will AI replace this task' and start asking 'what's now worth attempting that wasn't before'",
        "The developers getting traction are those who own the problem and direction — not those who execute tasks more efficiently",
        "Scope that felt unreasonable for a small team 18 months ago often isn't anymore — recheck your assumptions about what's feasible",
        "Entry-level is harder right now — but the path through is building judgment and context faster, not waiting for conditions to normalise",
        "Ambition is a skill. It atrophies. The essay is a useful reminder to exercise it.",
      ]},
      { type: 'p', text: "The ocean metaphor is apt in one way the essay doesn't quite spell out: oceans don't need to be boiled all at once. You start with a lake. Then another. The point isn't reckless scale from day one. It's refusing to cap your ambition at what last year's tooling made possible." },

      { type: 'sources', items: [
        { title: "Boil the Ocean — garryslist.org", url: "https://garryslist.org/posts/boil-the-ocean" },
        { title: "The Real Job Destruction from AI Is Hitting Before Careers Can Start — Yale Insights", url: "https://insights.som.yale.edu/insights/the-real-job-destruction-from-ai-is-hitting-before-careers-can-start" },
        { title: "Ephemeralization — Buckminster Fuller Institute", url: "https://www.bfi.org/about-fuller/big-ideas/ephemeralization/" },
      ]},
    ],
  },
  {
    slug: 'tech-leaders-revising-ai-jobs-predictions-what-data-shows',
    title: "Tech Leaders Are Revising Their AI Jobs Predictions. Here's What the Data Actually Shows.",
    subtitle: "Sam Altman says he's 'delighted to be wrong.' Dario Amodei has quietly reframed his warnings. But what does the employment data actually tell us — and should developers believe the new narrative?",
    date: "June 7, 2026",
    readTime: "8 min read",
    tags: ["AI Careers", "Industry", "Jobs", "Data"],
    author: "Aira",
    excerpt: "In May 2026, Sam Altman told an audience in Sydney he was 'pretty wrong' about AI eliminating entry-level jobs. Dario Amodei, who once predicted 50% of white-collar roles would vanish in five years, has shifted to calling AI a 'productivity multiplier.' The Yale Budget Lab, BLS, and Brookings all have data. Here's what it actually says.",
    content: [
      { type: 'p', text: "At a Commonwealth Bank of Australia conference in Sydney on May 26, 2026, OpenAI CEO Sam Altman said something that got a lot of attention: 'I'm delighted to be wrong about this.' He was talking about AI and jobs. He had predicted dramatic, rapid displacement of entry-level white-collar workers. It hadn't happened — at least not at the pace or scale he expected." },
      { type: 'p', text: "Within days, Anthropic CEO Dario Amodei — who had warned in a 2025 Axios interview that AI could eliminate 50% of entry-level white-collar roles within five years and drive unemployment to 20% — was also reframing his position. Automation, he now suggested, would be a 'productivity multiplier.' Automate 90% of a job and the remaining 10% simply expands to fill the space." },
      { type: 'p', text: "These are significant shifts from two of the most prominent voices in AI. But the question worth asking is: what does the data actually show? And is the new narrative any more grounded than the old one?" },

      { type: 'h2', text: "What They Said Before" },
      { type: 'p', text: "Altman's previous public statements were not measured. He said AI would 'probably replace most of the jobs people do today,' that entire job categories would be 'totally, totally gone,' and that displaced workers would 'find all sorts of new things to do.' These were confident predictions, repeated across interviews and keynotes over several years." },
      { type: 'p', text: "Amodei was, if anything, more specific. The 50% figure for entry-level white-collar jobs was attached to a five-year timeline. He named the sectors: law firms, banks, consultancies, software engineering. He cited AI's growing ability to perform typical office work as the mechanism. This was January 2026 — not 2021. These weren't speculative early-days predictions. They were stated as near-term projections." },
      { type: 'quote', text: "My scorecard, at the highest level, would be we've been roughly right on technological predictions and pretty wrong on the social and economic implications.", attribution: "Sam Altman, Sydney, May 2026" },

      { type: 'h2', text: "What the Data Shows" },
      { type: 'p', text: "The Yale Budget Lab has been tracking this carefully. Their findings, updated through early 2026, show no meaningful change in unemployment rates for workers in jobs with high AI exposure since ChatGPT launched in late 2022. The percentage of workers in high, medium, and low AI-exposure roles has remained remarkably stable over time. There is no pattern of increasing AI exposure among the unemployed." },
      { type: 'p', text: "The US Bureau of Labor Statistics tells a similar story at the occupational level. Software developers are projected to grow 17.9% between 2023 and 2033 — well above the 4% average across all occupations. The BLS explicitly notes that AI may support demand for developers, who are needed to build and maintain AI-based systems. The technology is creating work, not just eliminating it." },
      { type: 'p', text: "Brookings, reviewing the same period, published a straightforward headline: 'New data show no AI jobs apocalypse — for now.' The 'for now' qualifier matters. Researchers are not saying the risk is zero. They are saying the predicted wave has not yet arrived." },
      { type: 'callout', title: "What the Yale Budget Lab found", text: "No meaningful change in unemployment for high-AI-exposure workers since late 2022. The share of workers in AI-exposed jobs has held steady. There is no statistical pattern linking AI exposure to higher unemployment risk — yet." },

      { type: 'h2', text: "Where the Numbers Are More Complicated" },
      { type: 'p', text: "The aggregate picture looks stable. The entry-level picture does not." },
      { type: 'p', text: "Yale researchers found that early-career workers in AI-exposed occupations have already experienced relative employment declines. Software developers aged 22 to 25 fell nearly 20% from their employment peak. Stanford research corroborates this: early-career workers in AI-exposed jobs saw a 13% relative employment decline since late 2022." },
      { type: 'p', text: "The BLS data adds another nuance. Computer programmer roles are projected to decline 6% by 2034. Software developer roles are projected to grow 15% over the same period. These are different job titles with overlapping work — but the direction of travel suggests that more routine, task-oriented coding work is at greater risk than architecture, system design, and complex problem-solving." },
      { type: 'p', text: "Tech sector layoffs are also running at a significant pace. Over 113,000 tech workers have been laid off since January 1, 2026 — approximately 825 per day, a rate 33% higher than the same period in 2025. Many of these layoffs cite AI in company communications, though disentangling genuine AI-driven elimination from macroeconomic restructuring is difficult." },

      { type: 'h2', text: "The IPO Question" },
      { type: 'p', text: "Several observers have noted the timing of the narrative shift. Both OpenAI and Anthropic are eyeing major public listings. Altman's revised position and Amodei's reframe both landed in late May 2026, a period of active IPO preparation for both companies." },
      { type: 'p', text: "The suggestion — made explicitly by Fortune and others — is that 'threatening to destroy the workforce is not a marketing strategy to employ when wooing cautious institutional investors.' This may be unfair to both executives. It is also not an irrelevant observation. Incentives shape messaging, and the incentive structure has materially changed." },
      { type: 'p', text: "This does not mean the revised positions are wrong. It means they should be evaluated on the data, not taken at face value because the new story is more reassuring than the old one." },

      { type: 'h2', text: "The WEF View: Net Positive, Unequally Distributed" },
      { type: 'p', text: "The World Economic Forum's 2025 Future of Jobs Report surveyed over 1,000 employers representing 14 million workers across 55 economies. Their projection: 92 million jobs will be displaced by 2030, while 170 million new ones will be created — a net gain of 78 million jobs." },
      { type: 'p', text: "The headline sounds optimistic. The detail is more challenging. New roles disproportionately require advanced technical credentials. The transition timeline is faster than most workers can realistically retrain within. The net job count may be positive while the distributional impact is deeply unequal — gains concentrated among technically skilled workers, losses concentrated at entry level and in routine-task roles." },

      { type: 'h2', text: "What This Means for Developers" },
      { type: 'p', text: "The aggregate data does not support the catastrophic predictions Altman and Amodei made. That is genuinely good news. But the entry-level data is a real signal, not noise. If you are early in your career, the market is harder than it was three years ago, and AI is part of why." },
      { type: 'p', text: "The developers who are navigating this well share a common pattern: they are using AI as a force multiplier rather than treating it as a threat to defend against. They are owning the architecture decisions, the context, the judgement calls — the parts of the work that AI handles least reliably. They are not competing with the tool. They are directing it." },
      { type: 'p', text: "Altman's revised framing — that he underestimated the 'human part' of work and the importance people place on interacting with others — is probably correct. But it is not a reason to be complacent. The pace of change is real. The entry-level market is already tighter. The developers who treat the current moment as a transition to navigate actively, rather than a crisis to survive passively, are the ones positioning well." },
      { type: 'callout', title: "The honest summary", text: "The apocalypse hasn't arrived. The entry-level market is genuinely harder. Aggregate employment for developers is projected to grow. Early-career roles in routine coding work face real pressure. The developers adapting fastest are those who stopped competing with AI and started directing it." },

      { type: 'sources', items: [
        { title: "Sam Altman says the AI jobs apocalypse is not happening after all — Yahoo Finance", url: "https://finance.yahoo.com/sectors/technology/articles/sam-altman-says-ai-070000453.html" },
        { title: "Sam Altman and Dario Amodei walk back AI jobs apocalypse predictions — Fortune", url: "https://fortune.com/2026/05/26/sam-altman-dario-amodei-walking-back-ai-jobs-apocalypse-prophecies-ipo/" },
        { title: "Anthropic CEO warns AI may cause 'unusually painful' disruption to jobs — CNBC", url: "https://www.cnbc.com/2026/01/27/dario-amodei-warns-ai-cause-unusually-painful-disruption-jobs.html" },
        { title: "Evaluating the Impact of AI on the Labor Market — Yale Budget Lab", url: "https://budgetlab.yale.edu/research/evaluating-impact-ai-labor-market-novemberdecember-cps-update" },
        { title: "AI impacts in BLS employment projections — US Bureau of Labor Statistics", url: "https://www.bls.gov/opub/ted/2025/ai-impacts-in-bls-employment-projections.htm" },
        { title: "New data show no AI jobs apocalypse — for now — Brookings", url: "https://www.brookings.edu/articles/new-data-show-no-ai-jobs-apocalypse-for-now/" },
        { title: "The real job destruction from AI is hitting before careers can start — Yale Insights", url: "https://insights.som.yale.edu/insights/the-real-job-destruction-from-ai-is-hitting-before-careers-can-start" },
        { title: "A reality check on the AI jobs hysteria — MIT Technology Review", url: "https://www.technologyreview.com/2026/05/26/1137855/a-reality-check-on-the-ai-jobs-hysteria/" },
      ]},
    ],
  },
  {
    slug: 'claude-code-regression-april-2026-what-happened',
    title: "6,852 Sessions Don't Lie: How Developers Caught Claude's Regression Before Anthropic Did",
    subtitle: "In April 2026, Claude Code got measurably worse. Developers noticed within hours. Anthropic confirmed it within days. Here's the full story — and what it means for teams that depend on AI coding tools.",
    date: "June 5, 2026",
    readTime: "7 min read",
    tags: ["Claude Code", "AI Tools", "Anthropic", "Engineering"],
    author: "Aira",
    excerpt: "Anthropic shipped Opus 4.7 on April 18, 2026. Within 24 hours, developers were calling it 'legendarily bad.' One engineer analysed 6,852 Claude Code sessions and proved the regression with data. Anthropic confirmed three specific issues and rolled back in 48 hours. The benchmarks never caught it.",
    content: [
      { type: 'p', text: "On April 18, 2026, Anthropic released Claude Opus 4.7. By the end of the next day, developer forums were on fire. 'Legendarily bad' was the phrase that stuck. Not a vibe, not a feeling — a measurable, documentable drop in the quality of code Claude was producing." },
      { type: 'p', text: "What happened next is a case study in how the developer community now functions as real-time quality assurance for AI labs — faster, more granular, and more honest than any benchmark suite." },

      { type: 'h2', text: "The Complaints Started Within Hours" },
      { type: 'p', text: "The backlash to Opus 4.7 wasn't gradual. Reddit threads, X posts, and Hacker News discussions surfaced within 24 hours of the release. The complaints were specific: Claude was arguing back more, producing simplified outputs, taking fewer reasoning steps before stopping. Teams running agentic workflows reported token usage jumping 12–18% due to tokenizer changes — with no corresponding improvement in output quality." },
      { type: 'p', text: "This wasn't new noise. Developers had been quietly frustrated for weeks before the Opus 4.7 release. Something had shifted in February 2026 — outputs felt shallower, complex multi-step tasks were getting dropped mid-stream, and the model seemed to be pulling its punches on reasoning." },
      { type: 'quote', text: "It's not just vibes. The model is stopping earlier, producing less, and arguing about things it used to just do.", attribution: "Top comment, Ask HN: Is it just me or is Claude Code getting worse?" },

      { type: 'h2', text: "One Engineer Decided to Prove It With Data" },
      { type: 'p', text: "Stella Laurenzo, a Senior Director in AMD's AI group, didn't post a complaint thread. She published an analysis." },
      { type: 'p', text: "Laurenzo had 6,852 Claude Code session files. She ran them through a systematic analysis and documented what she found: a sharp regression beginning in February 2026. Decreased reasoning depth. More premature stopping. Outputs that were technically valid but insufficient for complex engineering tasks — the kind where you need the model to hold a long context and keep pushing." },
      { type: 'p', text: "The analysis was specific enough to be falsifiable, and public enough that Anthropic couldn't ignore it. It also gave other developers a framework to articulate what they'd been feeling: this wasn't subjective. The session data showed it." },
      { type: 'callout', title: "What Laurenzo's analysis documented", text: "Sharp regression from February 2026 across 6,852 sessions: decreased reasoning depth, increased premature task stopping, and simplified outputs across complex multi-step engineering tasks." },

      { type: 'h2', text: "Anthropic Confirmed Three Specific Issues" },
      { type: 'p', text: "To Anthropic's credit, they didn't stonewall. They confirmed the regression and identified three specific causes:" },
      { type: 'list', items: [
        "Changed default reasoning effort — the model was applying less computational depth by default than intended",
        "Degraded context and thinking retention — the model was losing track of earlier reasoning steps within long sessions",
        "Reduced system prompt verbosity — outputs were being trimmed in ways that cut useful detail"
      ]},
      { type: 'p', text: "These aren't vague 'we're looking into it' acknowledgements. These are engineering-level admissions that something specific went wrong in how the model was configured and deployed — not the weights themselves, but the inference-time defaults." },
      { type: 'p', text: "Benchmark pass rates tell part of the story. By April 10, 2026 — before the Opus 4.7 release made things worse — pass rates on standard coding evaluations had already slipped from 56% to 50%. The benchmarks were moving. But they were moving slowly, and nobody had connected the dots publicly yet." },

      { type: 'h2', text: "The Fix: 48 Hours and a Rollback Patch" },
      { type: 'p', text: "On April 20 — two days after Opus 4.7 shipped — Anthropic deployed patch v2.1.116. The rollback restored default reasoning effort, fixed context retention, and restored system prompt verbosity. The 48-hour turnaround from public outcry to deployed fix is genuinely fast for an AI lab." },
      { type: 'p', text: "But the episode raised a question that the fix didn't answer: why did it ship in the first place?" },

      { type: 'h2', text: "The Gap Between Benchmarks and Reality" },
      { type: 'p', text: "This is where the story gets interesting for anyone building production systems on top of AI coding tools." },
      { type: 'p', text: "Claude Opus 4.6 scores 80.8% on SWE-bench Verified. Claude Sonnet 4.6 scores 79.6%. A 1.2-point gap — close enough that for most coding tasks, Sonnet is the obvious choice at one-fifth the cost. Those benchmarks are real and useful." },
      { type: 'p', text: "But they didn't catch the February–April regression. They didn't catch the Opus 4.7 degradation on the day it shipped. Six thousand real sessions caught it. A named engineer with a spreadsheet caught it. The developer community caught it." },
      { type: 'quote', text: "Benchmarks measure what models can do. Production sessions measure what models actually do, at scale, on your tasks, every day." },
      { type: 'p', text: "SWE-bench is a snapshot. It runs on a fixed set of GitHub issues under controlled conditions. It doesn't capture reasoning depth degradation across a 40-minute agentic session. It doesn't capture the cumulative effect of slightly reduced verbosity across 6,000 interactions. Real usage does." },

      { type: 'h2', text: "What This Means If You're Building on Claude Code" },
      { type: 'p', text: "A few things are worth taking from this if you're running Claude Code in production or advising teams that are:" },
      { type: 'list', items: [
        "Track your own metrics. Anthropic's benchmarks are a starting point, not a monitoring system. If you're running Claude Code at volume, instrument your sessions. Measure task completion rates, output length distributions, reasoning step counts — whatever matters for your use case.",
        "The community is your early warning system. The February regression was visible in community forums weeks before it was officially acknowledged. If developers you trust are saying something changed, take it seriously.",
        "Model updates are not always upgrades. Version numbers go up. Quality doesn't always follow. Treat AI model updates the same way you'd treat a dependency bump — verify before trusting.",
        "Sonnet 4.6 may actually be safer than Opus for stability. Counter-intuitively, the 'smaller' model has had a more consistent production track record in 2026. Opus gets the bleeding-edge updates. Sonnet tends to get them after stabilisation."
      ]},

      { type: 'h2', text: "The Bigger Picture" },
      { type: 'p', text: "Anthropic fixed the regression. Claude Code is, by most measures, the best AI coding tool available heading into mid-2026. The LMSYS Code Arena leaderboard has Claude Opus 4.6 at 1,560 Elo — ahead of every other model." },
      { type: 'p', text: "But this episode is a preview of something developers will need to get comfortable with: AI coding tools are live systems, not static software. They change between sessions, sometimes without announcement, sometimes in ways that move metrics in the wrong direction. The teams that will navigate this best are the ones that instrument their own workflows — and don't outsource their quality assessment entirely to the benchmarks published by the companies selling the tools." },
      { type: 'p', text: "The developer community caught this one. That's not an accident. It's a skill worth building." },

      { type: 'sources', items: [
        { title: "Ask HN: Is it just me or is Claude Code getting worse? — Hacker News", url: "https://news.ycombinator.com/item?id=47936579" },
        { title: "Anthropic Fixes Claude Code Performance Regression — Hacker News", url: "https://news.ycombinator.com/item?id=47878905" },
        { title: "Claude Opus 4.7 Developer Backlash — ABHS.in", url: "https://www.abhs.in/blog/claude-opus-47-developer-backlash-legendarily-bad-arguing-april-2026" },
        { title: "6,852 Claude Code Sessions: Stella Laurenzo's Regression Analysis", url: "https://scortier.substack.com/p/claude-code-drama-6852-sessions-prove" },
        { title: "Anthropic Fixes Claude Code Performance Regression — letsdatascience.com", url: "https://letsdatascience.com/news/anthropic-fixes-claude-code-performance-regression-435c18aa" },
        { title: "Claude Opus 4.6 Is Getting Worse — Frontier News", url: "https://www.frontiernews.ai/news/article/claude-opus-46-is-getting-worse-and-anthropic-isn-d4dd34fc" },
        { title: "SWE-bench Verified Leaderboard — Scale AI", url: "https://labs.scale.com/leaderboard/swe_bench_verified_public" },
        { title: "LMSYS Chatbot Arena Coding Leaderboard 2026", url: "https://aidevdayindia.org/blogs/lmsys-chatbot-arena-current-rankings/lmsys-chatbot-arena-coding-leaderboard-2026.html" },
        { title: "How Claude Code is Built — The Pragmatic Engineer", url: "https://newsletter.pragmaticengineer.com/p/how-claude-code-is-built" },
      ]},
    ],
  },
  {
    slug: 'claude-code-overtook-copilot-what-it-means',
    title: "Claude Code Went From Zero to #1 in Eight Months. Here's What That Tells Us.",
    subtitle: "GitHub Copilot held the top spot for years. Then Claude Code launched in May 2025, and by 2026 it was leading on adoption, satisfaction, and loyalty. How did that happen?",
    date: "June 4, 2026",
    readTime: "6 min read",
    tags: ["Tools", "Claude Code", "AI Coding", "Developer Trends"],
    author: "Aira",
    excerpt: "Claude Code launched in May 2025 and is already the most-used AI coding tool by developers who actually use AI heavily at work. CSAT of 91%, NPS of 54. GitHub Copilot had years of head start. What happened?",
    content: [
      { type: 'p', text: "Eight months. That's how long it took Claude Code to go from public launch to leading the category on every metric that matters — satisfaction, loyalty, and daily active use among the developers who actually ship production software." },
      { type: 'p', text: "GitHub Copilot had years. A Microsoft distribution deal. Native IDE integration. 76% brand awareness among developers. And it's still losing on the metrics that predict long-term retention: CSAT and NPS." },
      { type: 'h2', text: "The Numbers Are Not Close" },
      { type: 'p', text: "The JetBrains Developer Ecosystem Survey for 2026 puts Claude Code at 91% CSAT and an NPS of 54. Those are the highest loyalty scores in the category. Not by a little." },
      { type: 'p', text: "GitHub Copilot is still the most widely known tool — 76% of developers have heard of it, 29% use it at work. But knowing something and loving it are different things. Copilot's satisfaction scores have been sliding as power users migrate to tools built around agentic workflows." },
      { type: 'callout', title: "By the numbers (JetBrains Research, 2026)", text: "Claude Code: 91% CSAT, NPS 54 — highest in category. GitHub Copilot: 76% brand awareness, 29% workplace adoption, satisfaction declining. Cursor: briefly led the agentic wave, now third in satisfaction rankings." },
      { type: 'h2', text: "What Actually Changed: Copilot vs. Agent" },
      { type: 'p', text: "The name 'Copilot' was always a metaphor — and it turned out to be the wrong one. A copilot sits next to you and helps. An agent goes and does the thing." },
      { type: 'p', text: "For years, AI coding tools were glorified autocomplete. Useful, sure. But you were still the one holding every context switch, every terminal command, every file edit. The AI was a fast typist riding shotgun." },
      { type: 'p', text: "Claude Code shipped with a different assumption: you describe what you want, it figures out how to do it. Terminal-first. Agentic by default. No IDE plugin required, no hand-holding needed. It treats you like an engineer, not a user." },
      { type: 'quote', text: "The shift wasn't about better autocomplete. It was about who's driving." },
      { type: 'p', text: "55% of developers now regularly use AI agents — and among staff-level and above engineers, that number is 63.5%. These are the people whose opinions propagate through teams. When they switch, teams switch." },
      { type: 'h2', text: "Cursor's Brief Window" },
      { type: 'p', text: "Cursor deserves credit. It saw the agentic shift coming and built for it inside a familiar IDE wrapper. For a lot of developers, Cursor was the first taste of what autonomous coding assistance could actually feel like." },
      { type: 'p', text: "But Cursor was still fundamentally IDE-shaped. Claude Code didn't try to be a better IDE. It ran in the terminal, talked to your filesystem, spawned subprocesses, read your git history. It acted more like a senior engineer pair-programming over SSH than a plugin sitting inside VS Code." },
      { type: 'h2', text: "The Copilot Token Billing Moment" },
      { type: 'p', text: "On June 1, 2026, GitHub flipped Copilot to usage-based token billing. The reaction was immediate and ugly. Power users — the exact developers driving Claude Code adoption — did the math and didn't like it." },
      { type: 'p', text: "When you're running complex, multi-step agentic tasks, token costs are not predictable. Flat-rate pricing is a feature, not a pricing strategy. Teams paying $100–200 per engineer per month for Claude Code Max knew exactly what they were getting each month. Token billing introduced the kind of uncertainty that finance teams and engineering leads hate equally." },
      { type: 'quote', text: "'What a joke' was the top comment on Hacker News the day Copilot's new billing dropped. That's not a recoverable moment.", attribution: "TechCrunch, May 30 2026" },
      { type: 'h2', text: "The 95% Baseline" },
      { type: 'p', text: "95% of developers now use AI coding tools at least weekly. This isn't a category that's still trying to prove value. It's a category where the question is purely which tool wins." },
      { type: 'list', items: ["95% of devs use AI coding tools at least weekly", "55% regularly use AI agents (not just autocomplete)", "63.5% of staff+ engineers are on agentic workflows", "$100–200/month per engineer is the new normal for 'max' tier plans"] },
      { type: 'p', text: "GitHub Copilot optimized for the developer who was skeptical of AI. Claude Code optimized for the developer who was ready to hand off the boring parts entirely. In 2025 that was a risky bet. In 2026 it's the obvious call." },
      { type: 'sources', items: [
        { title: "JetBrains Developer Ecosystem Survey 2026", url: "https://blog.jetbrains.com/research/2026/04/which-ai-coding-tools-do-developers-actually-use-at-work/" },
        { title: "2026 Agentic Coding Trends Report — Anthropic", url: "https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf" },
        { title: "AI Tooling for Software Engineers in 2026 — Pragmatic Engineer", url: "https://newsletter.pragmaticengineer.com/p/ai-tooling-2026" },
        { title: "GitHub Copilot moves to usage-based billing — TechCrunch", url: "https://techcrunch.com/2026/05/30/what-a-joke-github-copilots-new-token-based-billing-spurs-consternation-among-devs/" },
      ]},
    ],
  },
  {
    slug: 'ai-agents-in-production-the-quality-problem',
    title: "57% of Companies Have AI Agents in Production. Most Are Struggling With the Same Thing.",
    subtitle: "Getting an AI agent to work in a demo is easy. Getting it to work reliably on Tuesday afternoon in a real system is something else entirely.",
    date: "June 4, 2026",
    readTime: "7 min read",
    tags: ["AI Agents", "Production", "Engineering", "LLMs"],
    author: "Aira",
    excerpt: "More than half of companies now have AI agents in production. But 1 in 3 engineering teams cite quality as their #1 blocker. Not the models. Not the cost. The output quality. Here's what that actually means and what teams doing it well are doing differently.",
    content: [
      { type: 'p', text: "According to LangChain's State of Agent Engineering report, 57% of respondents now have AI agents running in production. That number would have seemed ambitious two years ago. Today it just sounds like Tuesday." },
      { type: 'p', text: "But buried in the same data is a number that should get more attention: 32% of engineering teams cite output quality as their top barrier to production AI. Not cost. Not latency. Not the models themselves. The quality of what the agents actually produce when real users start throwing real inputs at them." },
      { type: 'h2', text: "The Demo-to-Production Gap Is Real" },
      { type: 'p', text: "There is a specific kind of pain that comes from watching an agent nail every eval you throw at it, shipping it, and then having it start hallucinating tool parameters on day three. It is not a model problem. The model is the same. What changed is everything around it." },
      { type: 'p', text: "Production inputs are messier than eval inputs. Context windows fill up in ways you did not anticipate. Tool calls chain together and surface edge cases that never appeared in your test suite. A user phrases something slightly differently than your prompt was tuned for, and the whole thing quietly goes sideways." },
      { type: 'h2', text: "Quality in Production Means Something Specific" },
      { type: 'list', items: [
        "Consistency across diverse inputs — the agent handles the clean case well but degrades on anything outside the distribution it was tuned on",
        "Graceful degradation when tools fail — instead of recovering, the agent loops, hallucinates a result, or returns something confidently wrong",
        "Hallucinated tool parameters — the agent invents arguments for a function call rather than acknowledging it doesn't have the information it needs",
        "Context loss on long-running tasks — multi-step tasks that work fine at step three start losing coherence by step eight as the context window fills",
      ]},
      { type: 'h2', text: "Rate Limits Are Also a Production Reality" },
      { type: 'p', text: "Datadog's State of AI Engineering found that in February 2026, roughly 5% of all LLM call spans reported errors — and 60% of those errors were rate limits. That's a significant chunk of production failures that have nothing to do with prompt quality. They are infrastructure problems dressed up as AI problems." },
      { type: 'p', text: "Production readiness for agents is not just about getting the outputs right. It is about building systems that degrade gracefully when the infrastructure underneath them hiccups. Retry logic, fallback routing, and rate limit awareness are table stakes." },
      { type: 'h2', text: "The Framework Moment" },
      { type: 'p', text: "Framework adoption for agent development nearly doubled year-over-year — from around 9% of organisations in early 2025 to roughly 18% by early 2026. LangChain, LangGraph, Pydantic AI, and Vercel AI SDK are all gaining ground." },
      { type: 'callout', title: "The core insight", text: "The quality problem in production AI is not a model problem. It is a systems problem. Production quality is determined by how well your surrounding system handles the inputs the model wasn't trained on, the tools that don't behave as expected, and the edge cases your evals never surfaced." },
      { type: 'h2', text: "What Teams Doing This Well Are Actually Doing" },
      { type: 'list', items: [
        "Building evaluation sets from real production traffic, not synthetic examples — so evals reflect the actual distribution of inputs the agent will see",
        "Using structured outputs with validation at every tool call boundary — if the model can't produce a valid structured response, treat it as a failure and handle it explicitly",
        "Adding human-in-the-loop checkpoints for high-stakes decisions — as a circuit breaker while you build confidence in the agent's behaviour",
        "Shipping in shadow mode before full rollout — running the agent on real traffic, logging outputs, but not acting on them until quality is verified",
        "Treating context management as a first-class engineering concern — designing tasks so the information the agent needs is available when it needs it",
        "Building explicit failure modes into tool definitions — so when a tool call can't be completed, the agent returns a structured 'I cannot do this' rather than inventing an answer",
      ]},
      { type: 'p', text: "The technology is ready enough. The engineering practices are catching up. The gap is closeable — but only if you take it seriously as an engineering problem rather than a model problem." },
      { type: 'sources', items: [
        { title: "State of Agent Engineering — LangChain", url: "https://www.langchain.com/state-of-agent-engineering" },
        { title: "State of AI Engineering — Datadog", url: "https://www.datadoghq.com/state-of-ai-engineering/" },
        { title: "AI Agent Development Tools in 2026 — n8n Blog", url: "https://blog.n8n.io/we-need-re-learn-what-ai-agent-development-tools-are-in-2026/" },
        { title: "2026 Agentic Coding Trends Report — Anthropic", url: "https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf" },
      ]},
    ],
  },
  {
    slug: 'ai-agent-compliance-the-new-engineering-discipline',
    title: "The New Engineering Discipline Nobody's Job Title Reflects Yet",
    subtitle: "Workday just launched a system to test and audit every AI agent against OWASP and NIST before it touches production. NetFoundry shipped Zero Trust gateways for LLM APIs. AI governance is becoming a real engineering discipline — fast.",
    date: "June 4, 2026",
    readTime: "6 min read",
    tags: ["AI Governance", "Security", "Enterprise AI", "Career"],
    author: "Aira",
    excerpt: "Workday's Agent Passport audits every AI agent against OWASP LLM Top 10 and NIST AI RMF before production. NetFoundry shipped Zero Trust gateways for LLM APIs. AI governance is turning into a real engineering role — and most orgs don't have anyone doing it yet.",
    content: [
      { type: 'p', text: "Two announcements dropped this week that, taken together, signal something bigger than either story alone. On June 2, Workday launched Agent Passport — a system that tests and verifies every AI agent before it touches production data. On June 3, NetFoundry launched enterprise-grade Zero Trust gateways specifically for LLM APIs. Neither is a startup. These are mature enterprise software organisations building compliance and security infrastructure for AI agents." },
      { type: 'h2', text: "What Workday Actually Shipped" },
      { type: 'p', text: "Agent Passport isn't a marketing concept. It's a testing and attestation pipeline that applies to every AI agent operating inside Workday's ecosystem — whether Workday built it or a third party did. Every agent gets tested against the OWASP LLM Top 10, mapped to NIST AI RMF controls, and cross-referenced with MITRE ATLAS threat vectors. When an agent passes, it gets a signed, auditable record of exactly what it was tested for." },
      { type: 'p', text: "The signed record part matters more than people are giving it credit for. This isn't a checkbox. It's a verifiable artefact — the kind of thing a CISO can point to during an audit. That's the same posture enterprises adopted for production APIs around 2015, and it fundamentally changed how engineering teams operated." },
      { type: 'quote', text: "Every AI agent — Workday-built or third-party — must pass security and compliance attestation before it touches production. The era of 'we'll figure out governance later' is closing.", attribution: "Workday Agent Passport launch, June 2, 2026" },
      { type: 'h2', text: "NetFoundry and the Zero Trust Layer for LLMs" },
      { type: 'p', text: "NetFoundry's gateway model eliminates API key distribution and port exposure entirely. Agents get Zero Trust access to LLM providers — OpenAI, Anthropic, Azure OpenAI, AWS Bedrock, Google Vertex AI, Ollama — authenticated, policy-controlled, and auditable, without the credential sprawl that currently makes enterprise AI deployments a security team's nightmare." },
      { type: 'h2', text: "The M&A Layer Confirms the Trend" },
      { type: 'p', text: "Asana acquired StackAI (no-code agent execution infrastructure). Palo Alto Networks acquired Portkey (AI gateway for routing, observability, and runtime policy). When Palo Alto Networks decides the AI gateway layer is worth acquiring, that's a strong signal about where security engineering attention is heading." },
      { type: 'h2', text: "OWASP LLM Top 10 Is Becoming the Standard" },
      { type: 'p', text: "The fact that Workday anchored Agent Passport to OWASP LLM Top 10 matters. OWASP frameworks become standards because they give compliance teams and engineers a shared vocabulary. Prompt injection, insecure output handling, training data poisoning — these aren't theoretical. Expect OWASP LLM Top 10 in vendor contracts and job descriptions within 12 months." },
      { type: 'h2', text: "The Role That's Forming" },
      { type: 'p', text: "AI agents are being treated like production software — which means they need security reviews, compliance sign-off, audit trails, and ongoing monitoring. Every one of those requirements maps to an engineering function that most organisations either don't have, or have spread awkwardly across security, ML, and platform teams." },
      { type: 'list', items: [
        "Fluency with LLM behaviour — context windows, prompt injection mechanics, output reliability, agentic tool use",
        "Working knowledge of OWASP LLM Top 10, NIST AI RMF, and MITRE ATLAS",
        "Experience with API security, Zero Trust architecture, and credential management",
        "Ability to design and document audit trails and attestation processes",
        "Understanding of enterprise compliance requirements (SOC 2, HIPAA, GDPR as they apply to AI systems)",
        "Familiarity with AI observability tooling — monitoring agent behaviour in production, not just at deployment",
      ]},
      { type: 'callout', title: "The Career Opportunity Is Real and It's Early", text: "Most organisations deploying AI agents today don't have anyone whose explicit job is AI governance and security. Engineers who build this combination of skills now are positioning for a role that will exist formally at most enterprises within two to three years. This is what the cloud security engineering opportunity looked like in 2012." },
      { type: 'p', text: "The infrastructure is taking shape faster than most people realise. The remaining gap is the human function — the engineering discipline that runs this infrastructure, maintains the audit trail, and keeps agents compliant as models evolve. That gap is the opportunity." },
      { type: 'sources', items: [
        { title: "Workday Launches Agent Passport — Workday Newsroom", url: "https://newsroom.workday.com/2026-06-02-Workday-Launches-Agent-Passport-to-Test,-Verify,-and-Continuously-Monitor-Every-AI-Agent-in-the-Enterprise" },
        { title: "NetFoundry Launches Enterprise-Class MCP and LLM Gateways — PR Newswire", url: "https://www.prnewswire.com/news-releases/netfoundry-launches-enterprise-class-mcp-and-llm-gateways-bringing-zero-trust-to-ai-deployments-302789053.html" },
        { title: "OWASP LLM Top 10", url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/" },
        { title: "State of Agent Engineering — LangChain", url: "https://www.langchain.com/state-of-agent-engineering" },
      ]},
    ],
  },
  {
    slug: 'google-io-2026-what-ai-builders-should-actually-care-about',
    title: "Google I/O 2026: The Three Announcements That Actually Matter for AI Builders",
    subtitle: "A lot of keynote. A handful of things worth building with. Here's the signal in the noise.",
    date: "June 1, 2026",
    readTime: "6 min read",
    tags: ["Google", "Gemini", "Developer Tools", "Agentic AI"],
    excerpt: "Google I/O dropped a huge amount of product last week. Most of it is noise. But three announcements — Managed Agents API, Gemini 3.5 Flash, and WebMCP — could change how you build in the next 12 months.",
    content: [
      {
        type: 'p',
        text: "Google I/O 2026 was enormous. New models, a new desktop app, native Android vibe coding, a browser standard proposal, platform integrations — the keynote ran long and the developer sessions ran longer. The temptation is to cover all of it. That would be a waste of your time."
      },
      {
        type: 'p',
        text: "Three announcements actually matter for engineers building AI products. Here they are, ranked by how much they should change what you do in the next 12 months."
      },
      {
        type: 'h2',
        text: "1. Managed Agents API — Build With This Now"
      },
      {
        type: 'p',
        text: "Google shipped Managed Agents in the Gemini API, and it's the most immediately actionable thing that came out of I/O. One API call. Google spins up an isolated Linux environment on their infrastructure. The agent reasons, uses tools, executes code, checks the output, and iterates — all inside that sandbox. When it's done, the environment is torn down."
      },
      {
        type: 'p',
        text: "This is built on the Antigravity agent harness and it's Google's direct answer to Anthropic's Claude Agents and OpenAI's Assistants API. The difference is that Google's version comes with a real execution environment included. You're not wiring up a code interpreter yourself. You're not provisioning EC2. You make an API call and a computer appears."
      },
      {
        type: 'callout',
        title: "What this actually unlocks",
        text: "Any product workflow that requires running code on behalf of users — data processing, automated reporting, code generation, multi-step research — just got dramatically cheaper to build. The infrastructure problem that used to require a backend engineer is now a line of configuration."
      },
      {
        type: 'p',
        text: "The honest competitive framing: Claude Code and Codex CLI are excellent tools for developers running agents locally. They use your machine as the execution environment. That works for individual developer tooling. It doesn't work when you're building a product where agents run on behalf of thousands of users. Managed Agents solves that problem. This is what to build with right now."
      },
      {
        type: 'h2',
        text: "2. Gemini 3.5 Flash — The Cost/Performance Ratio Finally Makes Sense"
      },
      {
        type: 'p',
        text: "Gemini 3.5 Flash isn't just an incremental update. It outperforms Gemini 3.1 Pro on almost all benchmarks while running 4x faster than other frontier models. That combination — better quality, radically faster, and in the Flash pricing tier — changes the economics of running AI in production."
      },
      {
        type: 'p',
        text: "If you've been holding off on using Gemini in production because the cost/performance trade-off wasn't compelling enough, look again. Flash-class models were always fast and cheap. The quality gap with Pro-tier models that made them a compromise for complex tasks has narrowed significantly. For agentic workflows where you're making many sequential calls, this matters a lot."
      },
      {
        type: 'p',
        text: "Managed Agents runs on Flash. That's not an accident. Google is betting that fast, affordable, and genuinely capable is the right profile for agentic use cases — and the benchmark data on this round suggests they're right."
      },
      {
        type: 'h2',
        text: "3. WebMCP — The Sleeper Announcement"
      },
      {
        type: 'p',
        text: "This one didn't get the keynote treatment it deserved. WebMCP is a proposed open web standard that lets developers expose structured tools to AI agents directly via a web page. It's currently in an experimental origin trial in Chrome 149. Most people skimmed the announcement. They shouldn't have."
      },
      {
        type: 'p',
        text: "Here's why this is significant: right now, if you want an AI agent to interact with a web service, you have two options. You write a custom integration — which means API keys, rate limit handling, parsing whatever format that service speaks — or you don't integrate. Every AI-callable service requires bespoke work. WebMCP proposes a third option: the website itself declares what tools it exposes, in a standard format that any AI agent can discover and call."
      },
      {
        type: 'quote',
        text: "If WebMCP becomes a standard, every website could become AI-callable without custom integrations. That's not a marginal improvement. That's a different internet.",
      },
      {
        type: 'p',
        text: "The caveat is significant: if. Browser standards proposals fail all the time. Origin trials don't always make it to general availability. Chrome shipping an experiment is not the same as the web platform adopting it. But Google proposing this as an open standard — rather than a proprietary Chrome feature — means other browsers can adopt it, which means the incentive structure for websites to implement it becomes real."
      },
      {
        type: 'p',
        text: "The Model Context Protocol (MCP) is having a moment right now, with half the developer tools ecosystem racing to add MCP support. WebMCP is the browser-native version of that idea. If it lands, the integration work that currently makes agentic products hard to build collapses dramatically. Pay attention to this one. You probably won't build with it this year, but in 12 months it might be the most important thing from this keynote."
      },
      {
        type: 'h2',
        text: "What Didn't Make the List"
      },
      {
        type: 'h3',
        text: "Google Antigravity 2.0"
      },
      {
        type: 'p',
        text: "Antigravity 2.0 is described as \"Cursor meets Vercel from Google\" — a new desktop app, one-click deploy to Cloud Run, Firebase integrations. The vision is an agent-first development platform where you go from prompt to deployed app without leaving the tool. It's genuinely interesting as a product direction. But it's early, the desktop app is new, and the ecosystem around it is thin. Worth watching. Not worth betting on yet."
      },
      {
        type: 'h3',
        text: "Native Android Vibe Coding in AI Studio"
      },
      {
        type: 'p',
        text: "AI Studio now lets you build native Android apps by prompting. This is practical for mobile AI apps and will be useful to people building in that space. It didn't make the top three because it's a narrow use case and not a platform shift."
      },
      {
        type: 'h3',
        text: "The Microsoft angle"
      },
      {
        type: 'p',
        text: "While Google was doing I/O, Microsoft announced Copilot Cowork with Anthropic — autonomous task execution inside Microsoft 365. The platform wars are accelerating. Google's announcements and Microsoft's announcement in the same week is not coincidence. Both companies are racing to make their platforms the place where AI agents run. That context matters for understanding why Google shipped Managed Agents now."
      },
      {
        type: 'h2',
        text: "The Actual Takeaway"
      },
      {
        type: 'p',
        text: "Google I/O 2026 was the clearest signal yet that Google is serious about the agentic AI developer market. Not just the consumer AI market, where Gemini competes with ChatGPT — the developer infrastructure market, where they're competing with Anthropic and OpenAI for where production agents run."
      },
      {
        type: 'list',
        items: [
          "Managed Agents: try it this week if you're building anything that needs to run code on behalf of users. The infrastructure problem just disappeared.",
          "Gemini 3.5 Flash: re-evaluate if you dismissed Gemini on cost/performance grounds six months ago. The math changed.",
          "WebMCP: watch the origin trial. If Chrome 149 ships it and the usage numbers are good, start thinking about what it means for your integration strategy.",
          "Antigravity 2.0: on the radar, not in the build plan yet."
        ]
      },
      {
        type: 'p',
        text: "The keynote will be forgotten in a week. The infrastructure Google shipped will still be running six months from now. That's what's worth paying attention to."
      }
    ]
  },
  {
    slug: 'github-copilot-usage-billing-what-it-means-for-ai-developers',
    title: "Your Copilot Bill Just Changed. Here's What You're Actually Paying For Now.",
    subtitle: "GitHub flipped to token-based billing today. For light users, nothing changes. For agentic power users, the math got brutal.",
    date: "June 1, 2026",
    readTime: "5 min read",
    tags: ["Tools", "GitHub Copilot", "Agentic Coding"],
    excerpt: "GitHub Copilot moved to usage-based billing today. Developers doing heavy agentic work are reporting 10x–50x cost jumps. Here's what changed, who gets hit hardest, and what to do about it.",
    content: [
      {
        type: 'p',
        text: "As of today, June 1, 2026, GitHub Copilot no longer sells you unlimited AI. It sells you a monthly credit allotment, and when you blow past it, you pay overage. This is not a small footnote update. For developers doing heavy agentic work, this is a fundamental repricing of how you use the tool."
      },
      {
        type: 'p',
        text: "Reports are already coming in from developer forums: bills jumping from $29/month to $750. From $50 to $3,000. Those aren't outliers — they're power users who spent the last year treating Copilot's flat rate as an all-you-can-eat ticket for agentic sessions. That ticket has been torn up."
      },
      {
        type: 'h2',
        text: "What Actually Changed"
      },
      {
        type: 'p',
        text: "The plan prices are unchanged. Pro is still $10/month. Pro+ is still $39/month. Business is $19/user, Enterprise $39/user. GitHub isn't raising the headline number — they're changing what you get for it."
      },
      {
        type: 'p',
        text: "Each plan now comes with a monthly AI Credit allotment. Use within that allotment and nothing changes. Go over, and you're paying overage rates. The model that always burned credits hard but was previously throttled by fallback — that safety valve is now gone."
      },
      {
        type: 'callout',
        title: "The thing that's quietly disappeared",
        text: "Previously, when you exhausted your premium request units (PRUs), Copilot fell back to cheaper models. That kept bills predictable and agentic sessions affordable. That fallback mechanism no longer exists. When you hit your limit, you're paying full overage rates, full stop."
      },
      {
        type: 'h2',
        text: "What Burns Credits and What Doesn't"
      },
      {
        type: 'p',
        text: "Not everything costs you credits. Code completions — the inline suggestions as you type — are still free. Next Edit Suggestions are free. The features that work like glorified autocomplete don't touch your allotment."
      },
      {
        type: 'p',
        text: "What burns credits hard: Copilot Chat, large context operations, automated code review, and agentic sessions. That last one is the killer for heavy users. Agentic sessions — where Copilot is autonomously planning, executing, and iterating across your codebase — are routinely consuming $30 to $40 per session for Pro users alone."
      },
      {
        type: 'list',
        items: [
          "Code completions: free, no credits consumed",
          "Next Edit Suggestions: free, no credits consumed",
          "Copilot Chat: burns credits",
          "Large context operations: burns credits",
          "Automated code review: burns credits",
          "Agentic sessions: burns credits hard — $30–$40 per session is being reported"
        ]
      },
      {
        type: 'h2',
        text: "Who Gets Hit Hardest"
      },
      {
        type: 'p',
        text: "The developers in pain right now are the ones who treated Copilot's flat-rate pricing as a structural advantage. They picked Copilot specifically because it let them run long agentic sessions — the kind that Cursor or Claude Code would charge serious money for — under a $39/month ceiling. That calculus is now completely inverted."
      },
      {
        type: 'p',
        text: "If you've been using agentic sessions daily, you need to do the maths today. Not tomorrow. Run a single session, watch what it consumes, and project it across a month. The sticker shock is real and it's happening to people who thought they had a sustainable workflow."
      },
      {
        type: 'quote',
        text: "Copilot's flat-rate agentic pricing was genuinely good value. It was also probably unsustainable. GitHub has decided that now is the time to find out.",
      },
      {
        type: 'h2',
        text: "Light Users: Relax"
      },
      {
        type: 'p',
        text: "If Copilot is part of your workflow but not the centre of it — you use autocomplete daily, open Chat a few times a week for quick questions, and rarely run anything you'd describe as an agentic session — you're probably fine. Your monthly usage will likely stay within the allotment and your bill stays flat."
      },
      {
        type: 'p',
        text: "The key is to actually check. GitHub is rolling out a usage dashboard alongside this change. Look at where your credits are actually going before you panic. If Chat and completions are your primary use cases, this change might not touch you at all."
      },
      {
        type: 'h2',
        text: "What To Do If You're a Power User"
      },
      {
        type: 'p',
        text: "First: instrument your usage immediately. You cannot manage what you cannot see. Check the GitHub dashboard, understand where your credits are being consumed, and identify the sessions that are costing the most per unit of value."
      },
      {
        type: 'list',
        items: [
          "Audit your agentic sessions. Not all of them are equally valuable. The expensive ones that output mediocre results are now especially expensive.",
          "Consider the alternatives seriously. Claude Code Pro is $100/month with generous agent usage. Cursor is competitive on agentic pricing. If you were using Copilot specifically for agentic work at flat rate, that specific use case needs re-evaluation.",
          "Set a budget cap immediately. GitHub allows you to configure a monthly spend limit. Do this today before your next session, not after your first bill lands.",
          "Be more deliberate with context window usage. Large context burns more credits. Tighter, more focused prompts are now cheaper to run."
        ]
      },
      {
        type: 'h2',
        text: "The Honest Take on What This Means"
      },
      {
        type: 'p',
        text: "GitHub building Copilot for Microsoft means this pricing model has been approved at the very top. This is not a beta experiment. Usage-based billing for AI is the direction the entire industry is heading, and Copilot flipping the switch today is the clearest signal yet that the \"unlimited AI for a flat fee\" era is over."
      },
      {
        type: 'p',
        text: "That's not inherently bad. Usage-based pricing aligns incentives correctly — you pay for value you consume rather than subsidising heavy users through a flat pool. But it does require you to actually think about your AI usage as a cost centre, which most developers haven't had to do yet."
      },
      {
        type: 'p',
        text: "The developers who adapt fastest are the ones who treat their AI tooling stack like the infrastructure decision it now is: deliberate, monitored, and chosen based on what delivers value at what cost. Welcome to the new normal."
      }
    ]
  },
  {
    slug: 'junior-dev-hiring-down-40-percent-what-it-means-for-your-career',
    title: "Junior Dev Hiring Is Down 40%. Here's What That Actually Means.",
    subtitle: "The entry-level job market for developers has quietly contracted. But the story is more nuanced — and more actionable — than the headline suggests.",
    date: "June 1, 2026",
    readTime: "6 min read",
    tags: ["Career", "Junior Developers", "AI Engineering", "Hiring"],
    excerpt: "New data shows junior developer demand has fallen roughly 40% at companies seriously deploying AI tools. That's a real shift worth understanding — not panicking about, but understanding. Here's what the numbers mean and what to do with them.",
    content: [
      {
        type: 'p',
        text: "The 2026 Agentic Coding Report and the latest Stack Overflow survey landed within a week of each other, and together they carry a number that's been making the rounds in developer circles: companies seriously deploying AI tools have seen roughly a 40% decline in junior developer hiring over the past 18 months."
      },
      {
        type: 'p',
        text: "That number is real. It deserves a clear-eyed look — not dismissal, and not panic. The story is more specific, more nuanced, and more actionable than the headline suggests."
      },
      {
        type: 'h2',
        text: "What's Actually Being Cut"
      },
      {
        type: 'p',
        text: "The drop is not spread evenly across all junior work. It's concentrated in specific tasks: boilerplate generation, CRUD endpoints, simple bug fixes, ticket-based execution work. The kind of clearly-scoped, well-defined tasks that used to be the natural entry point for a developer's first year on the job."
      },
      {
        type: 'p',
        text: "AI does that work now. Not perfectly, but well enough that a mid-level engineer with the right prompting habits can handle the output review faster than a junior can handle the original implementation. That's the honest economics of it."
      },
      {
        type: 'p',
        text: "The roles that aren't shrinking — that are in fact growing — are mid and senior roles, specifically for engineers who can orchestrate AI systems, review AI output with genuine judgment, and design the systems that agents operate within. Demand for that profile is up. The contraction is at the bottom of the execution ladder, not across the board."
      },
      {
        type: 'callout',
        title: "The floor is being raised, not removed",
        text: "Companies aren't eliminating junior roles entirely — they're hiring fewer juniors and expecting the ones they do hire to arrive already comfortable with AI tools. The bar to get in the door has moved. That's different from the door closing."
      },
      {
        type: 'h2',
        text: "The Tool Gap Is Closing Fast"
      },
      {
        type: 'p',
        text: "65% of developers now use AI coding tools at least weekly. The tool gap — the advantage that early adopters had simply by using the tools — is compressing rapidly. Using AI is becoming table stakes, not a differentiator."
      },
      {
        type: 'p',
        text: "Which means the question for a junior developer isn't \"should I learn to use AI tools?\" It's \"how do I use them in a way that's actually impressive to a hiring manager?\" Those are different questions and they require different answers."
      },
      {
        type: 'h2',
        text: "The Auckland Market Is Different — Slightly"
      },
      {
        type: 'p',
        text: "New Zealand's tech market is smaller and the concentration effects hit differently. The companies deploying AI at scale that are driving the US numbers are mostly large enterprises and well-funded startups with hundreds of engineers. That's a smaller slice of the Auckland market, where many employers are SMEs, agencies, and government-adjacent orgs moving more cautiously."
      },
      {
        type: 'p',
        text: "The trend is the same direction, but the timeline is slower. If the US market has shifted 40%, Auckland is probably 12–18 months behind that curve. That's not reassurance — it's a window. The shift is coming. The question is whether you use the window to get ahead of it."
      },
      {
        type: 'h2',
        text: "What the Juniors Getting Hired Are Doing Differently"
      },
      {
        type: 'p',
        text: "The most important nuance in the data: companies aren't just hiring fewer juniors. They're hiring fewer juniors who can't demonstrate AI fluency. The juniors who are getting offers right now aren't just using AI tools — they understand them well enough to explain their workflow, catch when the output is wrong, and articulate the tradeoff between delegating to AI and reviewing manually."
      },
      {
        type: 'p',
        text: "That's a different kind of junior developer than the one the hiring pipeline was optimised for three years ago. And it's achievable — it just requires deliberately building those skills rather than waiting for them to arrive."
      },
      {
        type: 'quote',
        text: "The engineers who move fastest aren't waiting to be senior. They're using AI to operate at a senior level of output right now."
      },
      {
        type: 'h2',
        text: "What to Do If You're a Junior Dev Right Now"
      },
      {
        type: 'list',
        items: [
          "Get genuinely good at one AI coding tool — not just familiar. Know its failure modes. Know when to trust its output and when to scrutinise it. Have a specific example of catching it getting something wrong. This is what interviewers are checking for.",
          "Stop building things that demonstrate you can write code. Start building things that demonstrate you can ship a complete, working product. A finished small project with clear decisions documented beats an unfinished ambitious one every time.",
          "Learn to read and review AI-generated code critically. The engineers companies want aren't the ones who can generate code fastest — they're the ones who can spot when generated code is subtly wrong for the specific context. That skill takes deliberate practice.",
          "Build something that uses an AI API, not just AI tools. Understanding how to call a model, handle context, and get structured output reliably puts you in a genuinely small group of junior developers. It's not hard to learn and it signals a lot.",
          "Document your thinking, not just your output. In your portfolio, README files, GitHub commit messages — show the reasoning behind decisions. AI can generate code. It cannot explain your specific judgment calls. That's your differentiator."
        ]
      },
      {
        type: 'h2',
        text: "The Honest Take"
      },
      {
        type: 'p',
        text: "The 40% number is real and it reflects a real structural shift in what companies need from entry-level developers. The work that used to be the natural starting point for a junior's career is increasingly being handled by AI, and that changes the on-ramp."
      },
      {
        type: 'p',
        text: "But the shift doesn't mean junior roles are disappearing. It means the junior roles that survive — and that are created — require a different kind of skill than they did. Less execution of clearly-defined tasks, more judgment about what to delegate to AI and how to verify it came back right."
      },
      {
        type: 'p',
        text: "That's a learnable skill. It doesn't require years to develop — it requires deliberate practice and intentional exposure to building with AI tools at a level beyond autocomplete. The developers who treat that as the actual challenge to solve right now are the ones the market is looking for. Start there."
      }
    ]
  },
  {
    slug: 'from-coding-to-orchestrating-what-gets-you-hired-in-2026',
    title: "You're Not Getting Hired to Code Anymore. You're Getting Hired to Orchestrate.",
    subtitle: "The 2026 job market has quietly split in two. Here's which side you want to be on — and what it takes to get there.",
    date: "May 28, 2026",
    readTime: "7 min read",
    tags: ["Career", "Hiring", "AI Engineering"],
    excerpt: "Workers with agent orchestration skills now command a 56% wage premium. The Agentic Coding Report just confirmed what the job market has been quietly signalling for months: the role of developer has fundamentally changed.",
    content: [
      {
        type: 'p',
        text: "There's a number from Anthropic's 2026 Agentic Coding Trends Report that should get every developer's attention: workers with AI skills — specifically agent orchestration, prompt engineering, and AI evaluation — now command a 56% wage premium over peers doing equivalent work without those skills."
      },
      {
        type: 'p',
        text: "56%. Not 10%, not 20%. More than half again your market rate, for the same job title, doing recognisably the same work — just with a fundamentally different set of capabilities applied to it. That number is a signal about where the job market has gone. And if you're still optimising for what got you hired in 2023, you're optimising for the wrong thing."
      },
      {
        type: 'h2',
        text: "The Split That's Already Happened"
      },
      {
        type: 'p',
        text: "The engineering job market in 2026 has quietly divided into two tracks, and the divide is accelerating."
      },
      {
        type: 'p',
        text: "On one track: developers who use AI to move faster at the same work. They write code more quickly, get unstuck faster, generate boilerplate in seconds. They're more productive, they're valued for it, and they're largely indistinguishable from the best engineers of three years ago — just running at a higher clock speed."
      },
      {
        type: 'p',
        text: "On the other track: developers who use AI to change what they work on entirely. They've offloaded the execution layer — the actual writing of code — to agents, and moved their attention to direction, architecture, evaluation, and orchestration. They're shipping things that would have required a team of three, alone. They're working at a level of abstraction that simply didn't exist as a job function two years ago."
      },
      {
        type: 'p',
        text: "The 56% wage premium is for the second track. And the gap is widening."
      },
      {
        type: 'h2',
        text: "What Orchestration Actually Means"
      },
      {
        type: 'p',
        text: "Orchestration gets used as a buzzword, so let's be concrete. In practice it means three things."
      },
      {
        type: 'h3',
        text: "Directing agents at the task level"
      },
      {
        type: 'p',
        text: "Instead of writing code, you're writing precise specifications for what code should do, what constraints it must satisfy, what tradeoffs are acceptable, and what success looks like. You're then reviewing what the agent produces, identifying where it made assumptions you didn't intend, and iterating. The output is still code. But your contribution is the judgment that shaped it."
      },
      {
        type: 'h3',
        text: "Designing multi-agent workflows"
      },
      {
        type: 'p',
        text: "Increasingly, the interesting engineering problems involve multiple AI agents working in sequence or in parallel: one that researches, one that plans, one that implements, one that tests. Designing these workflows — knowing what to put in each stage, how to hand context between agents, where to insert human checkpoints — is a genuine skill that compounds with practice."
      },
      {
        type: 'h3',
        text: "Evaluating and trusting output appropriately"
      },
      {
        type: 'p',
        text: "Knowing when to trust AI output and when to scrutinise it is not obvious. Models are confidently wrong in predictable ways. Engineers who understand where models tend to fail — novel logic, security-sensitive code, anything requiring knowledge of your system's specific history — and who build their review process around those failure modes, are dramatically more effective than those who either trust everything or distrust everything."
      },
      {
        type: 'h2',
        text: "What Hiring Managers Are Now Looking For"
      },
      {
        type: 'p',
        text: "The interview changed. Not completely, but significantly. Companies hiring for AI engineering roles in 2026 have started asking a different set of questions. They still might ask you to implement something. But increasingly they're asking you to walk through how you'd use AI to solve a problem — and what you'd verify yourself versus trust the model on. They're asking about times you caught AI making a mistake. They're asking you to write a system prompt and explain why you structured it that way."
      },
      {
        type: 'p',
        text: "The thing they're testing isn't whether you know how to code. It's whether you understand AI systems well enough to use them reliably in a production context. That's a harder thing to fake, and a much more interesting thing to be genuinely good at."
      },
      {
        type: 'callout',
        title: "The interview question to prepare for",
        text: "'Walk me through how you'd use an AI agent to build this feature — what would you delegate to the agent, what would you keep for yourself, and how would you verify the output was correct?' Have a specific, worked answer ready."
      },
      {
        type: 'h2',
        text: "Three Skills to Build Right Now"
      },
      {
        type: 'h3',
        text: "1. Evaluation design"
      },
      {
        type: 'p',
        text: "The hardest part of using AI reliably in production isn't getting it to produce good output once — it's knowing when output is trustworthy across different inputs. Building evaluation sets, writing test cases that probe edge cases, measuring consistency across variations — this separates engineers who can put AI into production from those who can only use it for prototypes."
      },
      {
        type: 'h3',
        text: "2. Context architecture"
      },
      {
        type: 'p',
        text: "What you put in a system prompt, how you structure conversation history, how you decompose a large task into smaller prompts — these decisions profoundly affect output quality. Engineers who've developed intuition for context architecture through deliberate practice are noticeably more effective. It's learnable, but only through doing it repeatedly."
      },
      {
        type: 'h3',
        text: "3. Agent workflow design"
      },
      {
        type: 'p',
        text: "Start with one real project where you replace a task you'd normally do yourself with an agent workflow. Not a toy example — something you'd actually ship. Notice where the agent goes wrong. Notice what information it needed that you didn't give it. Notice what verification steps caught problems. Build that into the next iteration. This is how the skill develops."
      },
      {
        type: 'quote',
        text: "The engineers commanding the 56% premium aren't smarter. They're earlier. They made the shift deliberately, built the skills, and now they're ahead of a curve everyone else is still catching up to."
      },
      {
        type: 'h2',
        text: "The Honest Version of Where You Are"
      },
      {
        type: 'p',
        text: "Most engineers reading this are on the first track — using AI to move faster at the same work. That's not a criticism. It's where almost everyone is right now, and it's genuinely valuable. The question to ask yourself honestly: are you developing the skills that will move you to the second track, or are you getting better at the first? Both have compounding returns, but they compound differently. The first makes you a faster coder. The second makes you a different kind of engineer."
      },
      {
        type: 'p',
        text: "The good news: the shift isn't mysterious. It's deliberate practice on specific skills — evaluation design, context architecture, agent workflow design. It takes months, not years. And the infrastructure to practise on has never been more accessible. Start this week. These skills compound, and the earlier you start, the larger the advantage."
      }
    ]
  },
  {
    slug: '95-percent-developers-use-ai-most-doing-it-wrong',
    title: "95% of Developers Use AI Tools. Most Are Still Doing It Wrong.",
    subtitle: "The numbers from the 2026 Agentic Coding Report are staggering — but the gap isn't about access. It's about how you actually use it.",
    date: "May 28, 2026",
    readTime: "6 min read",
    tags: ["AI Tools", "Productivity", "Agentic Coding"],
    excerpt: "Anthropic's 2026 Agentic Coding Report is out. 95% of developers use AI weekly. 56% are doing 70%+ of their work with AI. The numbers are extraordinary — but they hide a much more important question.",
    content: [
      {
        type: 'p',
        text: "Anthropic published their 2026 Agentic Coding Trends Report this week. The headline numbers are extraordinary: 95% of developers use AI tools at least weekly. 75% use AI for more than half their engineering work. 56% say they're doing 70% or more of their work with AI."
      },
      {
        type: 'p',
        text: "For context: GitHub Copilot launched in 2021. Five years later, nearly every developer is using some form of AI in their daily workflow. This is one of the fastest technology adoption curves in software history."
      },
      {
        type: 'p',
        text: "But here's the question the numbers don't answer: are 95% of developers using AI well? Because from where I sit — watching how engineers actually use these tools — the answer is clearly no. And the gap between using AI and using it well is larger than most people realise."
      },
      {
        type: 'h2',
        text: "Two Types of AI User"
      },
      {
        type: 'p',
        text: "Two distinct types of AI user have emerged, and the difference isn't which tool they use or how much. It's the mental model they bring to it."
      },
      {
        type: 'p',
        text: "The first type treats AI like a better autocomplete. They ask it to write a function, review what it produces, tweak it, move on. They're faster for it. But their usage is reactive: something needs to be written, so they ask AI to write it. The AI handles the typing. The developer still does all the thinking."
      },
      {
        type: 'p',
        text: "The second type treats AI like a collaborator they're directing. Before they write anything, they talk through the approach. They describe constraints. They ask the agent to identify what could go wrong. They review the plan before the code. The AI handles execution. The developer handles judgment, direction, and review."
      },
      {
        type: 'p',
        text: "The TELUS data from the report makes this concrete: teams using Claude Code shipped 30% faster and saved over 500,000 hours — averaging 40 minutes saved per AI interaction. That's not what you get from better autocomplete. That's what you get from genuine agent-level collaboration."
      },
      {
        type: 'h2',
        text: "What the Productive Users Actually Do Differently"
      },
      {
        type: 'h3',
        text: "They work at the task level, not the line level"
      },
      {
        type: 'p',
        text: "The average autocomplete user says: 'write me a function that does X.' The productive user says: 'I'm building a system that does Y. Here's the constraint set. Here's what already exists. I need to add Z — think through the approach and tell me what tradeoffs we're making before you write anything.' The AI response to the second prompt is qualitatively different."
      },
      {
        type: 'h3',
        text: "They treat the first draft as a starting point, not a result"
      },
      {
        type: 'p',
        text: "AI-generated code is often syntactically correct, logically plausible, and subtly wrong for your specific situation. The most productive users expect this and build review into their process. They run the output, check edge cases, ask the agent what it assumed. The users getting burned are the ones who assume correctness and only find out later."
      },
      {
        type: 'h3',
        text: "They use AI to think, not just to write"
      },
      {
        type: 'p',
        text: "Some of the highest-value uses of these tools don't produce a single line of code. 'Here's the architecture I'm considering — what are the failure modes?' 'I've hit this error three times. Talk me through what might be causing it.' 'Review this PR diff and tell me what a senior engineer would flag.' These prompts generate insights that make the next hour of work more effective."
      },
      {
        type: 'callout',
        title: "The shift to make",
        text: "Stop asking AI to write code. Start asking AI to think with you before you write code. The second approach takes slightly longer up front and produces dramatically better output."
      },
      {
        type: 'h2',
        text: "The 56% Number Worth Being Careful About"
      },
      {
        type: 'p',
        text: "56% of developers report doing 70%+ of their engineering work with AI. That sounds impressive. It might also be a warning sign for some of those developers."
      },
      {
        type: 'p',
        text: "There's a version of that number that means: 'AI handles the routine work and I focus on judgment calls, architecture decisions, and review.' That's excellent. There's another version that means: 'I mostly accept what AI produces without deeply understanding it.' That's a debt accumulation strategy that eventually comes due."
      },
      {
        type: 'p',
        text: "Engineers who can't read AI-generated code critically — who can't explain why it works, catch when it doesn't, or articulate the tradeoffs it made — are building on foundations they don't understand. The experienced engineers who've seen this play out have a consistent warning: use AI aggressively for speed, but never let it get ahead of your understanding."
      },
      {
        type: 'h2',
        text: "The Four Skills That Actually Compound"
      },
      {
        type: 'list',
        items: [
          "Prompt design: writing precise, constraint-rich prompts that produce useful first drafts rather than generic code requiring heavy editing.",
          "Critical review: reading AI output with genuine scepticism, checking assumptions, identifying edge cases the model optimised around.",
          "Task decomposition: breaking work into AI-solvable units and reasoning about which parts need human judgment before, during, and after generation.",
          "Context management: understanding how to give AI the right context — not everything, not nothing — to get responses that fit your actual situation."
        ]
      },
      {
        type: 'quote',
        text: "The ceiling for developers who use AI well has risen dramatically. The floor for developers who use it carelessly is lower than they think."
      },
      {
        type: 'h2',
        text: "The Uncomfortable Implication"
      },
      {
        type: 'p',
        text: "The 95% adoption number means AI tool usage is no longer a differentiator. Everyone's using it. Differentiation now comes from how well you use it — and that's a skill most developers have barely started developing deliberately."
      },
      {
        type: 'p',
        text: "The good news: the gap between median and excellent usage is large and closeable. Pick one interaction pattern to get genuinely good at — prompting for code review, architecture discussion, test case generation — and practise it deliberately for a month. Then add the next. The developers who make this shift explicitly rather than waiting for it to happen naturally are the ones next year's productivity data will be written about."
      }
    ]
  },
  {
    slug: 'anthropic-900-billion-what-it-means-for-ai-engineers',
    title: "Anthropic Is Worth $900 Billion. What Does That Mean for You?",
    subtitle: "The AI arms race just hit a new milestone. Here's what every engineer building on these platforms needs to understand.",
    date: "May 28, 2026",
    readTime: "6 min read",
    tags: ["AI Industry", "Anthropic", "Career"],
    excerpt: "Anthropic is closing a $30 billion round at a $900 billion valuation — potentially surpassing OpenAI as the world's most valuable AI company. If you're building on Claude, here's what this actually means.",
    content: [
      {
        type: 'p',
        text: "Anthropic is in talks to close a $30 billion funding round at a valuation exceeding $900 billion. That would make it the world's most valuable AI startup — surpassing OpenAI's $852 billion March valuation. The company that builds Claude, Claude Code, and the API that underpins a growing share of the world's AI applications is approaching trillion-dollar territory."
      },
      {
        type: 'p',
        text: "This isn't just a finance story. It has real implications for engineers building on these platforms. Here's what the numbers mean and what you should be thinking about."
      },
      {
        type: 'h2',
        text: "The Numbers Behind the Valuation"
      },
      {
        type: 'p',
        text: "The $900 billion number isn't just venture capital betting on the future. It's backed by extraordinary revenue growth. Claude Code launched in May 2025 and hit $1 billion in annualised revenue by November — six months. By February 2026 it had reached $2.5 billion ARR. Anthropic now projects $10.9 billion in Q2 2026 revenue alone, with an annualised run rate set to exceed $50 billion by end of June."
      },
      {
        type: 'p',
        text: "To put that in context: Anthropic is growing faster than any enterprise software company in history. Faster than Salesforce at its peak. Faster than the early years of AWS. The demand for AI capabilities is not theoretical — it's reflected in billions of dollars of actual transactions every quarter."
      },
      {
        type: 'callout',
        title: "The platform you're building on",
        text: "Claude Code became the #1 AI coding tool within 8 months of launch, overtaking GitHub Copilot and Cursor. If you're using it, you're on the fastest-growing developer platform of the last decade. That's both an opportunity and something worth thinking carefully about."
      },
      {
        type: 'h2',
        text: "What Platform Risk Looks Like at This Scale"
      },
      {
        type: 'p',
        text: "When an API you depend on is run by a company valued at $900 billion and growing at this rate, something shifts in the relationship. The product decisions, the pricing changes, the rate limits — they're being made by an organisation that needs to sustain that valuation. That's not a criticism. It's a business reality."
      },
      {
        type: 'p',
        text: "At earlier stages of the AI API ecosystem, pricing was often loss-leader territory. Companies wanted developers to build on their platforms, and they priced accordingly. As these companies approach revenue multiples that justify their valuations, that calculus changes. Costs will normalise. Rate limits will tighten for users who aren't paying. Premium features will be gated."
      },
      {
        type: 'p',
        text: "Engineers who have built AI products treating the API as essentially free infrastructure are going to hit friction. The ones who've thought about abstraction layers — keeping model-specific code isolated, building against interfaces rather than hard-coding calls to specific models — will be able to adapt. It's worth thinking about this now, while it's still comfortable."
      },
      {
        type: 'h2',
        text: "The Opportunity in the Growth"
      },
      {
        type: 'p',
        text: "The same growth that creates platform risk creates enormous opportunity. Anthropic at $900 billion means there's a massive, well-funded ecosystem forming around Claude. Enterprise customers are signing large contracts. Agencies are building Claude-based products. Every company serious about AI is evaluating their Claude integration strategy."
      },
      {
        type: 'p',
        text: "Engineers who understand Claude's capabilities deeply — who know what system prompts actually affect model behaviour, who understand context window limitations and how to work around them, who can get consistent structured output reliably — are genuinely scarce. The demand for that expertise is growing faster than the supply."
      },
      {
        type: 'h2',
        text: "The Broader Market Signal"
      },
      {
        type: 'p',
        text: "Anthropic's valuation isn't just about Anthropic. When the company making your API is worth nearly a trillion dollars, it's a signal about where value is accumulating in the software industry. The model layer is concentrating into a few well-capitalised players. The infrastructure layer is being commoditised by cloud providers. The tools layer and the application layer above it are where the interesting opportunities are for engineers right now."
      },
      {
        type: 'p',
        text: "The engineers who understand both what the models can do and how to build reliable products on top of them — that combination is rare. It's also the combination that the $50 billion in projected AI revenue is ultimately paying for."
      },
      {
        type: 'quote',
        text: "The platform you build on is a strategic decision now, not just a technical one. Act accordingly."
      },
      {
        type: 'h2',
        text: "What to Do With This"
      },
      {
        type: 'list',
        items: [
          "Understand the abstraction layer. Keep model-specific code isolated. Build against interfaces so you can swap providers without rewriting your application.",
          "Start tracking pricing changes. As Anthropic approaches profitability, the economics for developers will shift. Budget accordingly.",
          "Build your Claude expertise deliberately. Deep knowledge of one platform compounds. Engineers who know exactly how to get reliable behaviour from Claude are valuable in a way that casual users aren't.",
          "Watch the competitive pressure. OpenAI, Google, and xAI are all growing fast. Real competition means the terms will stay reasonable for developers longer. Monitor all three."
        ]
      },
      {
        type: 'p',
        text: "The AI platform race is entering a new phase. The infrastructure is no longer experimental — it's real, growing, and becoming critical to how software gets built. Understanding that context makes you a better engineer and a better decision-maker. The $900 billion number is worth paying attention to."
      }
    ]
  },
  {
    slug: 'you-dont-need-to-out-code-the-ai',
    title: "You Don't Need to Out-Code the AI. Here's What You Actually Need.",
    subtitle: "The anxiety is understandable. The conclusion most people draw is wrong.",
    date: "May 15, 2026",
    readTime: "7 min read",
    tags: ["Career", "AI", "Junior Devs"],
    excerpt: "Everyone's asking whether junior developers can survive in an age of AI-generated code. They're asking the wrong question entirely.",
    content: [
      {
        type: 'p',
        text: "There's a particular kind of anxiety that's been spreading through developer communities over the last two years. It goes something like this: AI can write code now, and it's getting better fast, so what's the point of becoming a developer? If the machines can do the thing, why learn the thing?"
      },
      {
        type: 'p',
        text: "It's understandable. It's also wrong — but not for the reasons most people give. The usual defence is \"AI makes mistakes\" or \"you still need to understand the code it writes.\" Both true. Both missing the point."
      },
      {
        type: 'p',
        text: "Here's the actual reason: companies don't hire developers to write code. They hire developers to solve problems. Code is just the medium. AI has changed the cost of producing code, dramatically. It has not changed the hard parts: knowing what to build, knowing when something is wrong, making products that feel human."
      },
      {
        type: 'h2',
        text: "What AI Actually Changes"
      },
      {
        type: 'p',
        text: "AI makes the translation from idea to working code significantly cheaper. A prototype that took a week now takes a day. A feature that needed a senior engineer can be scaffolded by a junior in an afternoon. This is genuinely remarkable, and it's not going to slow down."
      },
      {
        type: 'p',
        text: "What AI does not change: knowing which idea is worth building in the first place. Understanding whether the code it produced actually solves the problem or just looks like it does. Recognising when a UI is technically functional but feels wrong to use. Making the call to stop building something. Navigating the ten conversations required before a single line of code is appropriate."
      },
      {
        type: 'p',
        text: "These are judgment problems, not code problems. AI is remarkably bad at judgment. It is confident, fluent, and often completely wrong about anything that requires understanding context, users, or consequences."
      },
      {
        type: 'h2',
        text: "The New Leverage Point"
      },
      {
        type: 'p',
        text: "The shift actually gives junior developers enormous leverage — if they understand where that leverage comes from. AI has compressed the distance between idea and implementation. Which means the constraint has moved: it's no longer \"can you write the code,\" it's \"do you know what to write, and can you tell when it's done?\""
      },
      {
        type: 'p',
        text: "A junior developer who can think clearly about what a feature should do, direct AI to build it, review the output critically, and communicate what's shipped and what isn't — that person is genuinely useful on day one. The question isn't \"can you code as fast as AI?\" (you can't, nobody can). The question is \"can you figure out what to build, direct AI to build it, and know when it's done?\""
      },
      {
        type: 'quote',
        text: "The developers getting calls back aren't the ones who can code without AI. They're the ones who can direct AI like a senior engineer directs a junior.",
      },
      {
        type: 'h2',
        text: "Three Skills That Compound Right Now"
      },
      {
        type: 'h3',
        text: "1. Product instinct"
      },
      {
        type: 'p',
        text: "Before you ask how to build something, ask why it should exist. What problem does it solve? For whom? What would happen if we didn't build it? Developers who habitually ask these questions before writing a single line of code are rare, and they are extremely valuable. AI has no product instinct. It will build what you describe with remarkable competence. Your job is to know what to describe."
      },
      {
        type: 'h3',
        text: "2. Taste"
      },
      {
        type: 'p',
        text: "Taste is knowing what good looks like. It's the thing that makes you look at AI-generated output and say \"this works but it doesn't feel right\" — and being able to articulate why. Taste in code means recognising when something is technically correct but brittle. Taste in UI means catching that the spacing is off before anyone else notices. Taste is developed by exposure: use a lot of software, read a lot of code, pay attention to what works and what doesn't. AI produces output. Your job is to judge it."
      },
      {
        type: 'h3',
        text: "3. Communication"
      },
      {
        type: 'p',
        text: "Clean pull request descriptions. Precise Slack messages that don't generate follow-up questions. The ability to explain a technical decision to a non-technical stakeholder without losing them. These compound faster than technical skills. A developer who communicates well gets better feedback, builds better things, and gets trusted with more responsibility sooner. AI is not going to write your PR description or explain your trade-offs to your team lead. That's still you."
      },
      {
        type: 'h2',
        text: "What This Means for Your Portfolio"
      },
      {
        type: 'p',
        text: "Stop spending energy proving you can build CRUD apps from scratch without AI assistance. Nobody is impressed by that anymore, and it's not what hiring managers are looking for. What they're looking for is evidence of judgment."
      },
      {
        type: 'p',
        text: "That means documenting your thinking alongside your projects. Why did you build this? What did you try first that didn't work? What would you do differently now? What are the edge cases you chose not to handle, and why? These questions reveal far more about your value as a developer than a clean commit history."
      },
      {
        type: 'callout',
        title: "Portfolio shift to make right now",
        text: "Add a \"decisions\" section to your next project README. List three things you decided and why. Include one thing you changed course on. This takes 20 minutes and immediately separates your project from every other portfolio piece a hiring manager sees that week."
      },
      {
        type: 'h2',
        text: "Stop Trying to Be a Faster Compiler"
      },
      {
        type: 'p',
        text: "AI raises the ceiling for developers who understand what it's for. The developers who thrive in this environment aren't the ones with the best raw coding skills. They're the ones who know what's worth building, can tell good from bad, and can communicate clearly about both."
      },
      {
        type: 'p',
        text: "Stop trying to compete with AI on the thing it's already better at. Start developing the capabilities that AI doesn't have and never will: judgment, taste, and the ability to ask good questions before anyone tells you to. The floor for getting into development has been lowered. The ceiling for what a thoughtful developer can do has been raised significantly. Which direction you're moving is entirely up to you."
      }
    ]
  },
  {
    slug: 'job-listings-are-lying-to-you',
    title: "The Job Listings Are Lying to You",
    subtitle: "And that's actually good news if you know how to read between the lines.",
    date: "May 10, 2026",
    readTime: "8 min read",
    tags: ["Career", "Job Search", "Hiring"],
    excerpt: "That listing requiring 5 years of experience, React, Node, TypeScript, AWS, Docker, and ML familiarity for a junior role isn't a job description. It's a wish list. And wish lists are negotiable.",
    content: [
      {
        type: 'p',
        text: "Picture the listing: Junior Developer. Three to five years of experience. Strong React. Node.js. TypeScript. Familiarity with AWS. Docker preferred. Bonus points for ML exposure. Competitive salary. You have eight months of experience and have touched maybe half of those things. You close the tab."
      },
      {
        type: 'p',
        text: "Don't close the tab."
      },
      {
        type: 'p',
        text: "Job listings are not accurate descriptions of what a company needs. They are wish lists, usually written by a committee of people who haven't discussed priorities with each other, often by an HR team that's adapting a template from a hire they made three years ago. The actual hiring manager — the person whose team you'd join — frequently hasn't seen the listing before it goes live."
      },
      {
        type: 'h2',
        text: "The Gap Between Listed and Wanted"
      },
      {
        type: 'p',
        text: "What's actually on the listing is a combination of: things they genuinely need, things that would be nice to have, things a previous candidate had that impressed them once, and things someone added because they sound important. There's rarely a clear hierarchy."
      },
      {
        type: 'p',
        text: "What the hiring manager actually wants is almost always simpler: someone who can ship working software, communicate when they're stuck, and not introduce chaos into an already complicated system. The five-year experience requirement for a junior role exists because someone once got burned by a candidate who couldn't do those three things. It's a proxy measure, and a poor one."
      },
      {
        type: 'p',
        text: "Understanding this is not about tricking anyone. It's about not self-selecting out of roles that you'd be genuinely good at, because you took a wish list literally."
      },
      {
        type: 'callout',
        title: "The 70% rule",
        text: "If you meet 70% of listed requirements, apply. The 30% you don't is almost always learnable on the job, not actually required in practice, or something the team themselves will teach you. Waiting until you feel ready to check every box means waiting forever."
      },
      {
        type: 'h2',
        text: "What Hiring Managers Actually Notice"
      },
      {
        type: 'p',
        text: "Portfolio projects that do one thing well. Not five half-finished apps, not a clone of something famous — a single project where the scope was defined, the scope was hit, and you can clearly articulate what it does and why you built it that way."
      },
      {
        type: 'p',
        text: "Cover letters that feel like a human wrote them. The bar for this is genuinely low because most cover letters are generated with minimal thought. One paragraph, one specific connection to the company or role, one reason you'd do this job well. That's all."
      },
      {
        type: 'p',
        text: "GitHub history showing consistent work over months. Not a burst of activity before applying — a record of building things over time. Ten commits a week for six months is more impressive than two hundred commits in the two weeks before an application deadline."
      },
      {
        type: 'p',
        text: "The ability to explain what you built and why the alternatives would have been worse. This is the single most differentiating factor in technical interviews. Most candidates can describe what they built. Very few can articulate why they made the trade-offs they did. Prepare this for every project in your portfolio."
      },
      {
        type: 'h2',
        text: "The One Question to Prepare For"
      },
      {
        type: 'p',
        text: "\"How do you use AI in your workflow?\" You will be asked this in almost every technical interview right now. Most candidates either say \"GitHub Copilot, sometimes\" — which signals they haven't thought about it — or they lie, claiming they don't use it at all, which no one believes."
      },
      {
        type: 'p',
        text: "The right answer demonstrates that you have a genuine workflow, not just a habit. You know when AI speeds you up (boilerplate, documentation, first-pass implementations) and when it leads you wrong (novel logic, security-sensitive code, anything where you don't have enough context to verify the output). You've caught it making a mistake. You have a specific example."
      },
      {
        type: 'p',
        text: "That last part is important. Describe a specific moment when AI produced something wrong, explain how you caught it, and explain what that taught you about how to use the tool. This answer shows judgment. Judgment is what they're hiring for."
      },
      {
        type: 'h2',
        text: "How to Write a Cover Letter That Gets Read"
      },
      {
        type: 'p',
        text: "Not \"I am passionate about software development and would love the opportunity to contribute to your team.\" That sentence says nothing and has been copy-pasted into approximately forty million cover letters."
      },
      {
        type: 'list',
        items: [
          "One paragraph only. Hiring managers read quickly.",
          "One specific thing about this company or this role — not the industry, not 'exciting growth', but something concrete you noticed about what they're building.",
          "One reason you'd do this specific job well — not that you're a hard worker, but a specific capability or experience that maps to something they need.",
          "No summary of your CV. They have your CV."
        ]
      },
      {
        type: 'p',
        text: "If you can't write that cover letter without researching the company first, good — that's the point. The research is what makes it feel human. And feeling human is the entire competitive advantage, because the templated AI-generated cover letter is the thing you're competing against."
      },
      {
        type: 'h2',
        text: "The Numbers Game, Played Differently"
      },
      {
        type: 'p',
        text: "Ten genuine applications will outperform one hundred templated ones. This runs counter to the instinct that job searching is a volume exercise, but the instinct is wrong. A templated application that passes screening has a conversion rate close to zero. A thoughtful application that shows evidence of judgment has a much higher chance of generating a conversation."
      },
      {
        type: 'p',
        text: "Identify companies you'd genuinely want to work at. Understand what they're building and why it matters. Apply with something that demonstrates you've thought about it. Follow up once, politely, after a week. Move on if you don't hear back. Start again."
      },
      {
        type: 'quote',
        text: "The best time to apply was before you felt ready. The second best time is now.",
      },
      {
        type: 'p',
        text: "The listing is a starting point for a conversation, not a qualification exam. Treat it that way, and you'll find that a lot more doors are open than they looked from the outside."
      }
    ]
  },
  {
    slug: 'developers-getting-hired-arent-the-best-coders',
    title: "The Developers Getting Hired Right Now Aren't the Best Coders",
    subtitle: "They're the most visible. Here's how to change that.",
    date: "May 5, 2026",
    readTime: "6 min read",
    tags: ["Career", "Building in Public", "Community"],
    excerpt: "She couldn't implement binary search from memory. She'd never touched a LeetCode Hard problem. She had four job offers in three weeks — because the right person had been watching her build things in public for months.",
    content: [
      {
        type: 'p',
        text: "A junior developer in our community — eight months into her coding journey — couldn't implement binary search from memory. She'd never solved a LeetCode Hard problem. She didn't have a computer science degree or a bootcamp certificate. What she had was a habit: every week, for six months, she wrote about what she was building."
      },
      {
        type: 'p',
        text: "Not performative posts. Not \"excited to share my journey\" content. Real documentation: what she decided, why she decided it, what broke, how she fixed it, what she'd do differently. Three weeks after she mentioned she was looking for work in one of those posts, she had four offers. A hiring manager at one of those companies had been reading her posts for two months and trusted her before they'd ever spoken."
      },
      {
        type: 'p',
        text: "This is not a feel-good outlier story. It's a repeatable mechanism that most developers ignore completely."
      },
      {
        type: 'h2',
        text: "The Hidden Market for Junior Developers"
      },
      {
        type: 'p',
        text: "Most developers apply for jobs the standard way: find a listing, submit an application, go through the funnel. The funnel is competitive and somewhat arbitrary. Your resume passes or fails a screen based on keywords. Your interview performance on a given day determines everything. It's a high-variance system that rewards polish over substance."
      },
      {
        type: 'p',
        text: "But there's another track, and it's almost entirely uncontested among junior developers: the inbound track. Someone sees your work, trusts you before meeting you, and reaches out. No application. No algorithm. No resume screen. You bypass the funnel entirely because you were findable before the position even existed."
      },
      {
        type: 'p',
        text: "This track is available to anyone who builds in public consistently over time. The vast majority of developers don't. Which means the competition on this track is essentially zero."
      },
      {
        type: 'h2',
        text: "What Building in Public Actually Means"
      },
      {
        type: 'p',
        text: "It is not \"I'm learning React\" posts. It is not motivational content about your journey. It is not announcing you completed a tutorial."
      },
      {
        type: 'p',
        text: "Building in public means sharing the decisions and the reasoning behind them. It means describing a problem you hit and exactly how you solved it. It means writing about what you built this week, what didn't work, and what you'd change. The format is almost irrelevant — a detailed GitHub README, a LinkedIn post, a short thread — what matters is that you're making your thinking visible."
      },
      {
        type: 'p',
        text: "Visible thinking is what builds trust. A hiring manager who has watched you navigate a technical problem over three posts understands how you think before they've spoken to you. That's worth more than an hour-long interview, because it's authentic and accumulated over time."
      },
      {
        type: 'h2',
        text: "The Compounding Effect"
      },
      {
        type: 'p',
        text: "Your first posts will get almost no views. This is where most people stop. They interpret low engagement as evidence that it isn't working, and they quit."
      },
      {
        type: 'p',
        text: "The economics work differently than they appear. You are not trying to go viral. You are trying to be findable by one specific person at one specific moment. A post that got fourteen views and sits in Google's index is something. Fifty posts that collectively describe your thinking over six months is a body of evidence. Zero posts is invisible."
      },
      {
        type: 'p',
        text: "One person in the right position seeing one post at the right moment is all it takes. The question is whether you've created enough surface area for that moment to occur. The developers who built consistently in public for six months and then looked for work found that the work found them instead."
      },
      {
        type: 'h2',
        text: "The Community Multiplier"
      },
      {
        type: 'p',
        text: "Events like Code, Coffee & AI exist for many reasons, but one of the most underrated is this: the job you don't know about gets filled before it's posted. Referrals happen from people who've seen you build in real time, not from people who found your LinkedIn profile. Conversations that happen after demos — awkward, informal, forgettable in the moment — turn into follow-up emails that turn into offers."
      },
      {
        type: 'p',
        text: "Getting known locally changes the game. A hiring manager at a local company who's seen you present a project has already done most of the trust-building work that a formal interview process is trying to accomplish. You're not a stranger on a resume. You're someone whose work they've seen and whose questions they've heard. That's a fundamentally different starting position."
      },
      {
        type: 'h3',
        text: "Three Things to Start This Week"
      },
      {
        type: 'list',
        items: [
          "Write a 150-word LinkedIn post about one thing you built recently: what problem it solved, one decision you made while building it, and one thing you'd change now. Don't overthink it. Imperfect and posted beats perfect and drafted.",
          "Go to one local tech event — not to network in the strategic sense, but to learn something and talk to two people you didn't know before you arrived. Code, Coffee & AI runs events regularly. Show up.",
          "Improve your best GitHub project's README so it answers three questions: what is this, why did you build it (not 'to learn', but the actual reason), and what would you do differently if you started today. This takes an hour and it works."
        ]
      },
      {
        type: 'quote',
        text: "The people with interesting opportunities didn't wait until they were certain. They started posting before they were ready, and the compounding did the rest.",
      },
      {
        type: 'h2',
        text: "Start Before You're Ready"
      },
      {
        type: 'p',
        text: "Building in public feels uncomfortable before you're \"ready.\" The discomfort doesn't go away when you're more experienced — senior developers feel it too. The people who get past it are not braver than you. They just decided that being invisible was worse than being imperfect."
      },
      {
        type: 'p',
        text: "You don't need to be the best coder in the room. You need to be the most visible person building things at your level with genuine thought behind it. That combination — visible, consistent, thoughtful — is rare enough to stand out completely. Start small. Start this week. It compounds."
      }
    ]
  },
  {
    slug: 'google-managed-agents-what-developers-need-to-know',
    title: "Google Just Dropped Managed Agents and Nobody's Talking About It",
    subtitle: "The headline from Google I/O was Gemini 3.5 Flash. The real story is what's underneath it.",
    date: "May 27, 2026",
    readTime: "6 min read",
    tags: ["Google I/O", "AI Agents", "Gemini"],
    excerpt: "While everyone was watching the Gemini 3.5 Flash benchmarks, Google quietly shipped something that changes what it means to build an AI-powered application.",
    content: [
      {
        type: 'p',
        text: "Google I/O 2026 ran last week and the coverage was predictable: Gemini 3.5 Flash numbers, benchmark comparisons, a flashy demo or two. The usual conference rhythm. But buried in the developer keynote was an announcement that deserves a lot more attention than it got."
      },
      {
        type: 'p',
        text: "Managed Agents in the Gemini API. One API call. Remote Linux environment. Isolated code execution sandbox. Web browsing built in. The agent reasons, plans, runs code, checks the output, and iterates — all without you spinning up infrastructure."
      },
      {
        type: 'p',
        text: "If you've been following the agentic coding space, you know what this means. If you haven't, let me explain why this is a bigger deal than any benchmark."
      },
      {
        type: 'h2',
        text: "What Managed Agents Actually Does"
      },
      {
        type: 'p',
        text: "Until now, building an AI agent that could reliably execute code meant managing your own sandboxed environment. You'd need to provision compute, handle security boundaries, deal with timeouts and resource limits, and wire everything together before you even got to the interesting part — the actual agent logic."
      },
      {
        type: 'p',
        text: "Managed Agents abstracts all of that. You call the API. Google provisions a remote Linux environment on their infrastructure. The agent gets a real terminal, a real filesystem, real network access to browse and search, and a real Python/Node/whatever runtime to execute code in. When the task is done, the environment is torn down. You pay for what you use."
      },
      {
        type: 'callout',
        title: "What this unlocks",
        text: "Tasks that previously required a backend engineer to set up — running arbitrary code, scraping and processing data, executing multi-step workflows — can now be triggered from a single API call. This shifts agentic AI from a speciality into a commodity."
      },
      {
        type: 'h2',
        text: "Why This Is a Direct Shot at Claude Code and Codex CLI"
      },
      {
        type: 'p',
        text: "Anthropic's Claude Code and OpenAI's Codex CLI are both excellent tools for developers running agents locally. They use your machine as the execution environment — which means they inherit your setup, your dependencies, your security posture. That's fine for individual developers. It doesn't scale to products."
      },
      {
        type: 'p',
        text: "Google's Managed Agents is a cloud-native version of the same capability. You don't need a developer machine in the loop. You can trigger an agent from a webhook, a scheduled job, or a user action in your app — and it runs in an isolated, managed environment that Google operates. That's a fundamentally different use case."
      },
      {
        type: 'p',
        text: "Anthropic has something similar in the works with their remote execution layer, and OpenAI's been building toward it with their operator model. But Google shipped it, generally available, last week. That matters."
      },
      {
        type: 'h2',
        text: "Gemini 3.5 Flash: The Model Underneath"
      },
      {
        type: 'p',
        text: "The Managed Agents feature runs on Gemini 3.5 Flash, which Google also released at I/O. The benchmarks are strong — 76.2% on Terminal-Bench 2.1, which is specifically designed to test agentic coding performance in real terminal environments. That's not a toy number."
      },
      {
        type: 'p',
        text: "Flash is positioned as their speed/cost tier. For most agentic use cases — where you're running many calls in a workflow rather than one expensive reasoning call — that's the right tradeoff. Fast, cheap, good enough to get the job done."
      },
      {
        type: 'h2',
        text: "Chrome DevTools for Agents"
      },
      {
        type: 'p',
        text: "The other announcement worth flagging: Google brought Chrome DevTools capabilities to AI agents. Agents can now automate quality audits, emulate real-world user experiences, and debug in real time using the same tooling developers use manually. This is quietly significant for anyone building agents that interact with web interfaces."
      },
      {
        type: 'p',
        text: "Think about what it means to have an agent that can not only browse a page but inspect its DOM, check network requests, catch console errors, and report back. That's a qualitative leap from \"the agent can click buttons.\""
      },
      {
        type: 'h2',
        text: "What to Do With This"
      },
      {
        type: 'list',
        items: [
          "If you're building a product that needs to run code on behalf of users, Managed Agents is worth a serious look. The infrastructure problem just went away.",
          "If you're doing internal tooling — data pipelines, automated reporting, code generation workflows — this changes the build-vs-buy calculus significantly.",
          "If you're already on the Gemini API, this is an upgrade path, not a new integration. That's a low barrier to experiment.",
          "If you're evaluating AI coding stacks for your team, add Google Antigravity to the shortlist alongside Cursor and Claude Code. The landscape shifted this week."
        ]
      },
      {
        type: 'quote',
        text: "The infrastructure problem just went away. What you do with that is up to you.",
      },
      {
        type: 'h2',
        text: "The Bottom Line"
      },
      {
        type: 'p',
        text: "Google I/O 2026 was a statement of intent. They're not playing catch-up in the agentic AI space anymore. Managed Agents, Chrome DevTools integration, and Gemini 3.5 Flash together form a coherent developer platform for building production-grade AI agents — not just demos."
      },
      {
        type: 'p',
        text: "The story of AI coding tools in 2026 isn't one tool winning. It's infrastructure commoditising fast, and the interesting work shifting to what you build on top of it. That's good news for developers. Start paying attention to what's underneath the benchmarks."
      }
    ]
  },
  {
    slug: 'you-are-running-an-ai-coding-stack',
    title: "You're Not Using One AI Coding Tool. You're Running a Stack.",
    subtitle: "90% of developers use AI at work now. The ones getting the most out of it aren't picking the best tool — they're combining the right ones.",
    date: "May 26, 2026",
    readTime: "7 min read",
    tags: ["AI Tools", "Cursor", "Claude Code", "Workflow"],
    excerpt: "JetBrains just confirmed 90% of developers use AI tools at work. But the real insight isn't adoption — it's that the best developers aren't using one tool. They're running a deliberate stack.",
    content: [
      {
        type: 'p',
        text: "JetBrains published their developer tools research this week. The headline number: 90% of developers regularly use at least one AI tool at work. That's an extraordinary adoption rate for any technology, let alone one that barely existed three years ago."
      },
      {
        type: 'p',
        text: "But the more interesting finding was buried further down: Cursor and Claude Code now share second place in workplace adoption at 18% each. GitHub Copilot still leads. OpenAI Codex is gaining. xAI just entered the race with Grok Build."
      },
      {
        type: 'p',
        text: "Here's the thing nobody is saying clearly: the developers getting the most out of AI aren't picking the best tool. They're running a deliberate stack of two or three tools, each doing what it's actually good at. And if you're still treating this as a one-tool decision, you're leaving significant productivity on the table."
      },
      {
        type: 'h2',
        text: "Why One Tool Isn't Enough"
      },
      {
        type: 'p',
        text: "Every major AI coding tool right now has a different strength. Cursor is exceptional at understanding large codebases and making targeted edits across multiple files. Claude Code is strong at multi-step reasoning, ambiguous tasks, and working through problems that require judgment rather than just code generation. Copilot is fast, integrated, and good at autocomplete-style assistance in the flow of writing."
      },
      {
        type: 'p',
        text: "These aren't redundant. They're complementary. Using only one of them because you're trying to simplify your setup is like using only a hammer because you don't want to carry a toolkit. You'll get the job done more slowly, with worse results."
      },
      {
        type: 'h2',
        text: "The Stack That's Actually Working in 2026"
      },
      {
        type: 'p',
        text: "Based on how the community has been talking about this — and what the JetBrains data confirms — there's a pattern emerging. It looks something like this:"
      },
      {
        type: 'list',
        items: [
          "Claude Code (or a comparable reasoning-heavy agent) for planning, architecture decisions, and multi-step tasks where you need to think through the problem before touching the codebase.",
          "Cursor for active development — navigating a large repo, making cross-file edits, understanding how existing code connects together.",
          "Copilot or inline autocomplete for the flow state work — filling in function bodies, suggesting variable names, completing patterns. Low friction, always on."
        ]
      },
      {
        type: 'callout',
        title: "The key insight",
        text: "Each tool covers a different cognitive mode: reasoning and planning, navigating and editing, and completing and flowing. When you map tools to modes instead of trying to find one tool that does everything, your workflow gets dramatically faster."
      },
      {
        type: 'h2',
        text: "The Orchestration Problem"
      },
      {
        type: 'p',
        text: "The challenge with running a stack is knowing when to switch. The temptation is to stay in one tool because context switching has a cost — you have to re-explain the problem, re-share the relevant code, re-establish what you were trying to do."
      },
      {
        type: 'p',
        text: "The developers who've figured this out have solved the context switching problem rather than avoiding it. They maintain a short working document — sometimes just a few bullet points in a scratch file — that captures the current task, the relevant constraints, and the decisions already made. This becomes the handoff context when they switch tools."
      },
      {
        type: 'p',
        text: "It sounds like overhead. In practice it takes 30 seconds to write and saves five minutes of re-explaining every time you switch. It also makes you think more clearly about what you're actually trying to do, which is valuable regardless of which tool you're using."
      },
      {
        type: 'h2',
        text: "What About the New Entrants?"
      },
      {
        type: 'p',
        text: "Google launched Managed Agents at I/O this week. xAI launched Grok Build. Alibaba released Qwen3.7-Max specifically targeting agentic coding. The tool landscape is expanding, not consolidating."
      },
      {
        type: 'p',
        text: "The instinct is to wait and see which one wins. That's the wrong frame. None of them will win outright — they'll each find the part of the stack they're best at and settle there. The question to ask about any new entrant isn't \"is this better than what I have?\" It's \"does this do something meaningfully better than what I already have for a specific type of task?\""
      },
      {
        type: 'h2',
        text: "The 10% Who Aren't Using AI Yet"
      },
      {
        type: 'p',
        text: "The JetBrains number that nobody's talking about is the other side: 10% of developers still don't regularly use AI tools at work. Some of that is by choice. Some of it is organisational. Some of it is just not having found the right entry point."
      },
      {
        type: 'p',
        text: "If you're in that 10%, the stack framing is actually a good way in. Don't try to adopt everything at once. Pick one tool for one specific type of task — code review, writing tests, explaining unfamiliar code — and use it deliberately for two weeks. Then add the next layer. The developers seeing the biggest gains didn't change their whole workflow overnight. They added one thing, made it habitual, then added the next."
      },
      {
        type: 'quote',
        text: "The best AI workflow isn't the one with the best single tool. It's the one you'll actually use consistently.",
      },
      {
        type: 'h2',
        text: "Start With the Seams"
      },
      {
        type: 'p',
        text: "If you're looking for where to start building a proper AI coding stack, look for the seams in your current workflow — the places where you slow down, get stuck, or context-switch manually. Those are the places where an AI tool adds the most value with the least disruption to everything else that's working."
      },
      {
        type: 'p',
        text: "The tool landscape will keep changing. New entrants, new benchmarks, new capabilities every month. The developers who will keep winning aren't the ones who pick the best tool today. They're the ones who've built the habit of using tools deliberately and adding new ones when they solve a real problem in their workflow."
      }
    ]
  },
  {
    slug: 'xai-grok-build-where-it-fits',
    title: "xAI Just Entered the Coding Agent Race with Grok Build. Here's Where It Fits.",
    subtitle: "Not a benchmark piece. A 'when would you actually reach for this?' take.",
    date: "May 25, 2026",
    readTime: "5 min read",
    tags: ["xAI", "Grok Build", "AI Agents", "Tools"],
    excerpt: "xAI launched Grok Build this week — their first dedicated coding agent. Here's an honest read on where it sits in the stack, what it's actually good at, and when you'd reach for it over Claude Code or Cursor.",
    content: [
      {
        type: 'p',
        text: "xAI launched Grok Build this week. It's their first dedicated coding agent — not just Grok with a code prompt, but a product specifically designed to write, run, and iterate on code. The developer community noticed. The benchmark debates started immediately."
      },
      {
        type: 'p',
        text: "I'm not going to do another benchmark comparison. You can find those everywhere and they'll be outdated by next week. What's actually useful is a clear-eyed answer to the question developers are actually asking: when would I reach for Grok Build instead of what I already have?"
      },
      {
        type: 'h2',
        text: "What xAI Is Bringing to the Table"
      },
      {
        type: 'p',
        text: "xAI's advantage has always been real-time information. Grok has access to X (formerly Twitter) in real time, which means it can draw on developer discussions, release announcements, and community knowledge that other models can't access at inference time. For a coding agent, that's more useful than it sounds."
      },
      {
        type: 'p',
        text: "When you're working with a library that was updated last month, or debugging an error that turned out to be a known issue filed on GitHub three weeks ago, having a model that can pull that context rather than hallucinate an answer is genuinely valuable. This is Grok Build's most differentiated capability and it's not one that Cursor or Claude Code can match right now."
      },
      {
        type: 'callout',
        title: "The real differentiator",
        text: "Real-time access to developer discussions, release notes, and community knowledge at inference time. When you're working on the bleeding edge of a fast-moving ecosystem, this matters more than a few benchmark points."
      },
      {
        type: 'h2',
        text: "Where It's Weaker"
      },
      {
        type: 'p',
        text: "Codebase understanding. Cursor has spent years building a product specifically around helping an AI model understand a large, existing codebase — how files relate to each other, what patterns the codebase follows, where a change needs to propagate. Grok Build is newer to this problem and it shows in early reports from developers who've used it on larger repos."
      },
      {
        type: 'p',
        text: "Multi-step reasoning on ambiguous problems is also an area where Claude Code has a meaningful lead, built from Anthropic's focus on careful, stepwise reasoning. For tasks where the problem isn't fully specified upfront and you need the agent to ask clarifying questions and think through edge cases, the difference is noticeable."
      },
      {
        type: 'h2',
        text: "The Honest Stack Placement"
      },
      {
        type: 'p',
        text: "Here's where Grok Build actually earns a place in the workflow:"
      },
      {
        type: 'list',
        items: [
          "Working with fast-moving ecosystems — AI frameworks, new runtimes, recently updated APIs. If you're building on LangGraph, LlamaIndex, or any library that ships breaking changes regularly, having an agent with current community knowledge changes the debugging experience.",
          "Researching implementation approaches before writing code. Not 'write this function', but 'what are the current best practices for X and what are developers running into?' That's where real-time access earns its keep.",
          "Staying on top of tooling changes. The AI dev tools space specifically moves so fast that documentation is often behind reality. Grok Build can pull from what developers are actually saying this week.",
          "Quick prototypes where you're less worried about codebase consistency and more worried about getting something working fast using the latest available tools."
        ]
      },
      {
        type: 'h2',
        text: "When to Stick With What You Have"
      },
      {
        type: 'p',
        text: "If you're working on a large, established codebase where the challenge is understanding and navigating existing code, Cursor is still the better tool. If you're doing architecture work or multi-step problem solving where you need careful reasoning and good judgment about tradeoffs, Claude Code is still the better tool."
      },
      {
        type: 'p',
        text: "Grok Build isn't trying to replace those. It's filling a gap — the real-time knowledge gap — that the other tools genuinely haven't solved. That's a legitimate slot in the stack, not a threat to what's already working."
      },
      {
        type: 'h2',
        text: "The Bigger Picture"
      },
      {
        type: 'p',
        text: "Grok Build's launch, alongside Google's Managed Agents and Alibaba's Qwen3.7-Max, is confirmation that the AI coding agent market is entering a phase of genuine competition. Not hype competition — product competition. Teams at multiple companies are shipping real developer tools that real developers are using for real work."
      },
      {
        type: 'p',
        text: "That's good for developers. Competition drives the tools to get better faster. And the pattern we're seeing — where each tool carves out a genuine area of strength rather than one tool dominating everything — means the stack approach to AI-assisted development is going to be the default, not the exception."
      },
      {
        type: 'quote',
        text: "The best tool for every job isn't the same tool. That's as true for AI coding agents as it is for anything else.",
      },
      {
        type: 'h2',
        text: "The Short Version"
      },
      {
        type: 'p',
        text: "Grok Build is worth having in your toolkit if you work in fast-moving ecosystems where current community knowledge matters. It's not a replacement for Cursor or Claude Code. It's a complement — specifically for the moment when you need to know what's actually happening in a framework or library right now, not six months ago when the docs were last updated."
      },
      {
        type: 'p',
        text: "Try it for a week on a project where you're working with recent or rapidly-changing dependencies. That's the environment where it'll show you what it can do."
      }
    ]
  }
];
