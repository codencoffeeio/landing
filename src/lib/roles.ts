export type RoleCategory = 'all' | 'engineering' | 'data-ml' | 'infrastructure' | 'product' | 'specialist';

export const CATEGORY_LABELS: Record<RoleCategory, string> = {
  'all': 'All Roles',
  'engineering': 'Engineering',
  'data-ml': 'Data & ML',
  'infrastructure': 'Infrastructure',
  'product': 'Product',
  'specialist': 'Specialist',
};

export interface Role {
  title: string;
  category: Exclude<RoleCategory, 'all'>;
  description: string;
  skills: string[];
  experience: string;
  trending: boolean;
  trendingNote: string;
}

export const ROLES: Role[] = [
  {
    title: "AI Engineer",
    category: "engineering",
    description: "Builds production applications on top of foundation models. The bridge between raw model capabilities and shipped products — owns the full stack from API integration to deployment.",
    skills: ["LangChain", "LlamaIndex", "OpenAI / Anthropic APIs", "Vector DBs", "RAG pipelines", "Python"],
    experience: "2–4 years software engineering",
    trending: true,
    trendingNote: "Didn't exist 3 years ago, now one of the most posted engineering titles globally.",
  },
  {
    title: "LLM Engineer",
    category: "data-ml",
    description: "Deep specialist in large language models — fine-tuning, alignment, evaluation, and optimisation. Works closer to the model layer than an AI Engineer.",
    skills: ["HuggingFace Transformers", "PyTorch", "LoRA / QLoRA", "RLHF", "LLM Evals", "Python"],
    experience: "3–5 years ML / NLP",
    trending: true,
    trendingNote: "As companies move beyond GPT wrappers, they need engineers who understand models at a deeper level.",
  },
  {
    title: "MLOps Engineer",
    category: "infrastructure",
    description: "Keeps ML systems running in production. The DevOps of the machine learning world — pipelines, monitoring, scaling, and reliability.",
    skills: ["Kubernetes", "Docker", "MLflow", "Weights & Biases", "AWS SageMaker", "CI/CD for ML"],
    experience: "3–5 years DevOps or backend engineering",
    trending: false,
    trendingNote: "Every team that's shipped a model needs someone keeping it alive in production.",
  },
  {
    title: "AI Product Manager",
    category: "product",
    description: "Owns the roadmap for AI-native products. Needs enough technical depth to work with LLM engineers, enough product sense to ship things users love.",
    skills: ["Product strategy", "LLM capabilities", "Data literacy", "A/B testing", "Evals", "Stakeholder management"],
    experience: "3+ years product management",
    trending: true,
    trendingNote: "Traditional PMs struggle with AI's probabilistic outputs. Companies pay a premium for PMs who get both.",
  },
  {
    title: "Data Scientist",
    category: "data-ml",
    description: "Classic data science, now expected to work fluently with LLMs and generative AI. Covers analysis, statistical modelling, and increasingly LLM integration.",
    skills: ["Python", "SQL", "scikit-learn", "Statistical modelling", "LLM APIs", "Data visualisation"],
    experience: "1–3 years",
    trending: false,
    trendingNote: "High supply but strong demand for those who blend traditional stats with modern AI tools.",
  },
  {
    title: "AI Solutions Architect",
    category: "product",
    description: "Designs enterprise-scale AI systems. Translates business requirements into architecture — which models, which infra, which integrations, and how it all holds together.",
    skills: ["Cloud architecture (AWS/GCP/Azure)", "System design", "LLM APIs", "Security", "Enterprise integration"],
    experience: "5+ years architecture",
    trending: false,
    trendingNote: "Enterprises are spending big on AI but can't figure out how to implement it safely at scale.",
  },
  {
    title: "Computer Vision Engineer",
    category: "data-ml",
    description: "Builds systems that understand images and video — object detection, classification, segmentation. Highly specialised and well-compensated across multiple industries.",
    skills: ["PyTorch", "OpenCV", "YOLO", "CNNs", "Vision Transformers (ViT)", "CUDA"],
    experience: "2–4 years ML with CV focus",
    trending: false,
    trendingNote: "Manufacturing, retail, healthcare, and security all have active CV use cases with real budget.",
  },
  {
    title: "RAG / Search Engineer",
    category: "engineering",
    description: "Specialises in retrieval-augmented generation — the systems that give LLMs access to your private data. Combines search engineering with LLM integration.",
    skills: ["Pinecone / Weaviate / Qdrant", "Embeddings", "Hybrid search", "LangChain / LlamaIndex", "Python"],
    experience: "2–3 years engineering",
    trending: true,
    trendingNote: "Every company with a knowledge base wants to chat with their data. RAG is how you do it properly.",
  },
  {
    title: "AI-Augmented Full Stack Developer",
    category: "engineering",
    description: "Full stack engineer who ships significantly faster using AI coding tools. Not a new role — an evolved expectation of every developer entering the market today.",
    skills: ["React / Next.js", "Node.js or Python", "Cursor / Copilot", "LLM API integration", "TypeScript"],
    experience: "1–3 years",
    trending: false,
    trendingNote: "The bar for full stack has shifted. Developers not fluent with AI tools are falling behind.",
  },
  {
    title: "Prompt Engineer",
    category: "specialist",
    description: "Designs, tests, and optimises the instructions that drive AI systems. Sits at the intersection of linguistics, product thinking, and engineering.",
    skills: ["LLM APIs", "Prompt chaining", "Evaluation frameworks", "Systematic testing", "Python"],
    experience: "1–3 years, often transitions from other roles",
    trending: false,
    trendingNote: "Underhyped as a standalone title, but the skills are embedded in almost every AI role now.",
  },
];
