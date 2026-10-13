// Centralized portfolio content. Everything the site renders comes from here.

export const profile = {
  name: "Vyas Sriman",
  role: "Software Engineer",
  tagline:
    "ML & Backend Engineering | Full-Stack · Distributed Systems · AI | Austin, TX",
  location: "Austin, Texas",
  email: "vyas.sriman@utexas.edu",
  phone: "(214) 606-8994",
  cvUrl: "/Vyas_Sriman_Resume.pdf",
  socials: {
    github: "https://github.com/vyassri",
    linkedin: "https://www.linkedin.com/in/vyassriman",
    email: "mailto:vyas.sriman@utexas.edu",
  },
};

export const about = {
  headline:
    "Developer building reliable ML systems and clean full-stack products.",
  body: [
    "I'm a Statistics & Data Science + Mathematics student at UT Austin (4.0 GPA) who likes turning research-grade ML into production systems that actually ship — low-latency inference, drift monitoring, and the infra around it.",
    "My work spans PyTorch model training, FastAPI/Django backends, React frontends, and the distributed-systems glue in between. I care about measurable outcomes: p99 latency, F1 points, reproducibility, and shipping fast without breaking things.",
  ],
  // Primary stack shown in the hero panel and tech-stack marquee.
  primaryStack: [
    "Python",
    "PyTorch",
    "TypeScript",
    "React",
    "FastAPI",
    "Django",
    "Next.js",
    "Kubernetes",
    "Docker",
    "AWS",
    "PostgreSQL",
    "GitHub Actions",
  ],
  languages: [
    { label: "English", level: "Native" },
    { label: "Mathematics & Stats", level: "4.0 GPA" },
  ],
};

// Rotating multilingual greeting strip used in the hero.
export const greetings = [
  "Hello",
  "नमस्ते",
  "Hola",
  "Bonjour",
  "こんにちは",
  "你好",
  "Olá",
  "Ciao",
  "Hallo",
  "안녕하세요",
];

// Four role-archetype cards (mirrors the reference's experience strip).
export const roles = [
  {
    title: "ML Engineer",
    desc: "Training, fine-tuning, and monitoring PyTorch models — from LoRA transformers to sentiment pipelines.",
    icon: "brain",
  },
  {
    title: "Backend Engineer",
    desc: "FastAPI, Django, and Java services on Kubernetes with an eye on p99 latency and reliability.",
    icon: "server",
  },
  {
    title: "Full-Stack Builder",
    desc: "React, Next.js, and TypeScript frontends wired to real-time WebSocket and REST backends.",
    icon: "layers",
  },
  {
    title: "MLOps & Infra",
    desc: "MLflow, Docker, GitHub Actions CI/CD, drift tracking, and reproducible experiment pipelines.",
    icon: "rocket",
  },
];

export const education = [
  {
    school: "University of Texas at Austin",
    degree: "B.S. Statistics & Data Science + Mathematics",
    period: "2024 – 2028 (Expected)",
    detail: "GPA 4.0 / 4.0",
    coursework: [
      "Machine Learning",
      "Probability & Inference",
      "Software Design",
      "Linear Algebra",
      "Data Structures & Algorithms",
    ],
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineering Intern",
    org: "JPMorgan Chase",
    period: "Jun 2026 – Aug 2026",
    points: [
      "Built a PyTorch sentiment model and led 3 engineers scaling its Java + FastAPI layer to 3+ teams on Kubernetes at p99 under 500ms.",
      "Integrated the model into a Django + Bootstrap app delivering client sentiment predictions, cutting reporting time 50% for 4+ teams.",
      "Caught the first production accuracy drop 6 weeks post-launch via nightly drift and vocabulary-shift tracking with one-click retraining.",
    ],
    tags: ["PyTorch", "FastAPI", "Java", "Kubernetes", "Django"],
  },
  {
    role: "Undergraduate Researcher — EEG Foundation Models",
    org: "University of Texas at Austin",
    period: "May 2026 – Sep 2026",
    points: [
      "Improved brain-computer interface decoding accuracy by 4+ F1 points over prior baselines via a 200-trial distributed Optuna sweep (TPE sampling, median pruning) across 3 GPUs, fine-tuning a LoRA-adapted transformer in PyTorch.",
      "Built a live brain-signal-to-screen-control system with sub-200ms response using PyTorch, ONNX Runtime, and asyncio over OpenBCI/LSL, with a React + WebSocket frontend translating motor imagery into real-time cursor control.",
      "Cut experiment reproduction from days to under 10 minutes across 40+ checkpoints by scaffolding an MLflow registry auto-logging configs, dataset versions, hyperparameters, and metrics per run.",
    ],
    tags: ["PyTorch", "LoRA", "Optuna", "ONNX", "MLflow", "React"],
  },
  {
    role: "Undergraduate Researcher — Quantum Computing",
    org: "University of Texas at Austin",
    period: "Jan 2026 – May 2026",
    points: [
      "Cut quantum error-correction boilerplate from 50+ lines to 2 per experiment and hardware credit usage by 30% by shipping a pip-installable package with decorator-based ZNE/PEC APIs and SQLite-backed calibration caching.",
      "Replaced a manual, error-prone workflow with an automated CI/CD pipeline (GitHub Actions + YAML experiment definitions) auto-generating publication-ready LaTeX figures and catching 6 circuit bugs pre-submission.",
      "Engineered a 50-node distributed network simulator with NetworkX graph topologies and Monte Carlo analysis over 1,000+ trials, parallelized with multiprocessing and submitted as a peer-reviewed workshop paper.",
    ],
    tags: ["Python", "NetworkX", "CI/CD", "GitHub Actions", "SQLite"],
  },
];

export type Project = {
  title: string;
  year: string;
  blurb: string;
  points: string[];
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "AI Resume Analyzer",
    year: "2026",
    blurb:
      "Serverless resume-analysis web app orchestrating 4 Claude API agents for scoring, gap analysis, and bullet rewriting.",
    points: [
      "Shipped 40% faster with AI-assisted development under documented peer review, pairing React Router v7, TypeScript, and Tailwind CSS.",
      "Increased repeat usage 40% via client-side A/B tests instrumented with IndexedDB analytics, then redesigned the UI around a quick-wins summary panel with interactive D3.js confidence visualizations.",
    ],
    tags: ["React Router v7", "TypeScript", "Tailwind", "Claude API", "D3.js"],
    link: "#",
  },
  {
    title: "Touchline Value — Player Valuation Platform",
    year: "2026",
    blurb:
      "React + TypeScript valuation engine for 20 Premier League players processing 100+ attributes across five weighted signals.",
    points: [
      "Generated real-time estimates with ±15% confidence ranges and signal-contribution breakdowns validated across 50+ scoring scenarios.",
      "Engineered searchable rankings and a three-variable simulator supporting 600+ combinations with sub-100ms updates and 85% unit-test coverage.",
    ],
    tags: ["React", "TypeScript", "Data Viz", "Testing"],
    link: "#",
  },
  {
    title: "Podcast Knowledge Graph Builder",
    year: "2026",
    blurb:
      "RSS ingestion pipeline with ASR, diarization, and LLM entity/relation extraction across 500+ episodes, served over streaming RAG.",
    points: [
      "Achieved p95 retrieval latency under 400ms with hybrid Neo4j graph + Qdrant vector search and Reciprocal Rank Fusion.",
      "Reduced duplicate entities 60%+ via two-pass dedup (RapidFuzz + embedding cosine similarity) and improved fault tolerance with Celery/Redis orchestration.",
      "Delivered per-claim citations tied to speaker and timestamp via a FastAPI + SSE streaming RAG chat API, with an LLM-as-judge CI eval harness.",
    ],
    tags: ["WhisperX", "Neo4j", "Qdrant", "FastAPI", "Celery", "RAG"],
  },
];

// Personal / "outside of work" section.
// Journey timeline, built from resume dates.
export const journey = [
  {
    date: "2024",
    title: "Started at UT Austin",
    body: "Began a B.S. in Statistics & Data Science + Mathematics, diving into ML, probability, and software design while holding a 4.0 GPA.",
  },
  {
    date: "Jan 2026",
    title: "Quantum Computing Research",
    body: "Shipped a pip-installable error-correction toolkit and an automated experiment CI/CD pipeline; co-authored a peer-reviewed workshop paper.",
  },
  {
    date: "May 2026",
    title: "EEG Foundation Models Research",
    body: "Built a sub-200ms brain-signal-to-cursor control system and pushed BCI decoding accuracy up 4+ F1 points with distributed hyperparameter search.",
  },
  {
    date: "Jun 2026",
    title: "SWE Intern @ JPMorgan Chase",
    body: "Led a small team scaling a sentiment model to production on Kubernetes, cutting reporting time 50% across 4+ teams.",
  },
  {
    date: "2028",
    title: "Expected Graduation",
    body: "Targeting new-grad software and ML engineering roles — building toward production ML systems at scale.",
  },
];

export const personal = {
  intro:
    "When I'm not shipping code, I'm usually chasing a different kind of optimization problem. I treat training like I treat engineering — read the research, measure what matters, and iterate. Whether it's a barbell, a 26.2-mile route, a pitch, a court, or a poker table, I'm drawn to the same thing: systems where small, disciplined edges compound into big outcomes.",
  interests: [
    {
      title: "Science-Based Lifting",
      desc: "I program my own training around the evidence — progressive overload, proximity to failure, and volume landmarks over bro-science. Tracking lifts like a dataset and watching the numbers trend up is its own kind of reward.",
    },
    {
      title: "Marathon Running",
      desc: "Long-distance running is where discipline meets patience. Building weekly mileage, dialing in pacing and fueling, and holding a target split deep into a race scratches the same planning-and-execution itch as a hard engineering sprint.",
    },
    {
      title: "Football",
      desc: "Equal parts player and analyst — I love the tactics as much as the match. It's also what inspired my Touchline Value player-valuation project, where the on-pitch obsession turned into a data problem.",
    },
    {
      title: "Basketball",
      desc: "Pickup runs and pro ball alike. Spacing, pace, and off-ball movement are basically a real-time optimization problem, and there's nothing like the flow of a close game.",
    },
    {
      title: "Poker",
      desc: "A game of incomplete information, expected value, and reading people under pressure. Thinking in ranges and probabilities — and staying disciplined when variance swings — carries straight over to decision-making everywhere else.",
    },
  ],
};

export const organizations = [
  {
    name: "Texas Luminescence",
    role: "Backend Engineer",
    desc: "Student software engineering org building and shipping full-stack applications.",
  },
  {
    name: "Texas BAXA",
    role: "Member / Consultant",
    desc: "Business analytics association providing data-driven consulting to Austin-area clients.",
  },
];

export const skills = {
  "Languages & Databases": [
    "Python",
    "SQL",
    "Java",
    "TypeScript",
    "JavaScript",
    "R",
    "PostgreSQL",
    "Neo4j",
    "Qdrant",
    "Redis",
    "SQLite",
    "Supabase",
    "Prisma",
  ],
  "Machine Learning & AI": [
    "PyTorch",
    "Hugging Face Transformers",
    "scikit-learn",
    "PEFT / LoRA",
    "ONNX Runtime",
    "Optuna",
    "MLflow",
    "RAG",
    "Vector Search",
    "Embeddings",
    "WhisperX / ASR",
    "NLP",
    "LLM Fine-tuning",
    "Knowledge Graphs",
    "Model Monitoring",
    "MLOps",
  ],
  "Backend & Frontend": [
    "FastAPI",
    "Django",
    "Flask",
    "Celery",
    "Node.js",
    "Next.js",
    "React",
    "Tailwind CSS",
    "REST APIs",
    "WebSockets",
    "asyncio",
    "D3.js",
  ],
  "Infrastructure & Tools": [
    "Docker",
    "Kubernetes",
    "Helm",
    "AWS",
    "GitHub Actions",
    "Git",
    "Unix / Linux",
    "Grafana",
    "Prometheus",
    "pytest",
    "Playwright",
  ],
};
