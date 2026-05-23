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
  }
];
