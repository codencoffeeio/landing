export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; title: string; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  content: ContentBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
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
