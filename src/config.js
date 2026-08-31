export const siteConfig = {
  brand: {
    name: "Fifth Cursor",
    eyebrow: "AI × CLOUD CONSULTANCY",
    email: "hello@fifthcursor.com"
  },
  hero: {
    title: "Build what’s next.",
    highlight: "Intelligently.",
    description: "We help ambitious teams turn AI and cloud into durable competitive advantage — from strategy and architecture to production.",
    primaryCta: "Start a conversation",
    secondaryCta: "Explore capabilities"
  },
  stats: [
    ["AI Strategy", "From opportunity to roadmap"],
    ["Cloud Architecture", "Modern, scalable foundations"],
    ["Intelligent Automation", "Less manual. More momentum"],
    ["Data & Intelligence", "Systems built around decisions"]
  ],
  services: [
    {
      id: "01", slug: "ai-strategy-transformation", title: "AI Strategy & Transformation",
      text: "Identify the AI opportunities worth pursuing, define the operating model, and turn experimentation into an executable roadmap.",
      tags: ["AI strategy", "GenAI", "Roadmaps"],
      intro: "The strongest AI programs start with a business problem, not a model. We help leadership teams separate durable opportunities from hype and build an AI roadmap that can actually ship.",
      details: ["AI opportunity and use-case discovery", "Enterprise AI roadmap and operating model", "Build-versus-buy and platform decisions", "Governance, adoption, and measurement"]
    },
    {
      id: "02", slug: "cloud-architecture", title: "Cloud Architecture",
      text: "Design secure, scalable cloud platforms that are built for real workloads, not slide decks.",
      tags: ["AWS", "Azure", "GCP"],
      intro: "We design cloud foundations around reliability, security, developer velocity, and economics — then make the architecture practical enough for teams to operate every day.",
      details: ["Target-state cloud architecture", "Landing zones and platform engineering", "Security and identity foundations", "Reliability, observability, and FinOps"]
    },
    {
      id: "03", slug: "ai-engineering", title: "AI Engineering",
      text: "Move from prototype to production with intelligent applications, agents, retrieval systems, and evaluation pipelines.",
      tags: ["Agents", "RAG", "MLOps"],
      intro: "We turn promising AI prototypes into dependable software. That means evaluation, retrieval, tool use, security, observability, and the boring details that make intelligent systems work in production.",
      details: ["Agentic application architecture", "RAG and knowledge systems", "Model evaluation and guardrails", "Production AI APIs and observability"]
    },
    {
      id: "04", slug: "modernization-migration", title: "Modernization & Migration",
      text: "Untangle legacy systems and create a pragmatic path toward faster, more resilient infrastructure.",
      tags: ["Migration", "Kubernetes", "Platform"],
      intro: "Modernization does not have to mean a risky rewrite. We map dependencies, prioritize business-critical systems, and create migration waves that reduce risk while increasing delivery speed.",
      details: ["Application and dependency assessment", "Migration strategy and wave planning", "Containerization and platform modernization", "Legacy decomposition and API enablement"]
    },
    {
      id: "05", slug: "data-platforms", title: "Data Platforms",
      text: "Build the data foundations your analytics, AI, and business teams can actually trust.",
      tags: ["Data", "Analytics", "Governance"],
      intro: "AI is only as useful as the data around it. We build reliable data foundations that make information easier to discover, govern, analyze, and turn into intelligent products.",
      details: ["Modern data architecture", "Pipelines and data quality", "Analytics and semantic layers", "Governance, lineage, and access"]
    },
    {
      id: "06", slug: "intelligent-automation", title: "Intelligent Automation",
      text: "Reimagine repetitive workflows with software, agents, and integrations that give teams their time back.",
      tags: ["Automation", "Agents", "APIs"],
      intro: "We find high-friction workflows and redesign them with automation, integrations, and AI agents. The goal is not automation for its own sake — it is measurable time and quality returned to the business.",
      details: ["Workflow discovery and redesign", "AI agent and automation architecture", "API and system integrations", "Operational monitoring and continuous improvement"]
    }
  ],
  process: [
    ["01", "Discover", "Understand the business, constraints, data, people, and opportunity."],
    ["02", "Architect", "Shape the target state and a pragmatic path to get there."],
    ["03", "Build", "Engineer the critical systems with your team, not around them."],
    ["04", "Deploy", "Ship securely, instrument everything, and make adoption real."],
    ["05", "Optimize", "Continuously improve performance, cost, reliability, and impact."]
  ],
  cases: [
    { label: "AI PLATFORM", title: "From AI experiment to production platform", result: "A repeatable foundation for shipping intelligent products faster.", metric: "3×", metricLabel: "faster experimentation", tags: ["AI platform", "RAG", "Cloud"] },
    { label: "CLOUD MODERNIZATION", title: "A cloud foundation built to scale", result: "A simpler platform with stronger reliability and clearer operating costs.", metric: "42%", metricLabel: "lower infrastructure overhead", tags: ["Cloud", "Platform", "FinOps"] },
    { label: "AUTOMATION", title: "Giving a high-growth team its time back", result: "Connected workflows replaced manual handoffs across core operations.", metric: "18k+", metricLabel: "hours of work automated", tags: ["Automation", "Agents", "APIs"] }
  ],
  technologies: ["AWS", "Azure", "Google Cloud", "OpenAI", "Anthropic", "Kubernetes", "Terraform", "Python", "Databricks", "Snowflake", "PostgreSQL", "Cloudflare"],
  insights: [
    ["AI", "The enterprise AI stack is becoming an operating system", "5 min read"],
    ["CLOUD", "Why the best cloud architecture starts with the business", "7 min read"],
    ["AGENTS", "Where AI agents actually create leverage", "6 min read"]
  ]
};
