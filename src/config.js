export const siteConfig = {
  brand: {
    name: "Fifth Cursor",
    eyebrow: "AI × CLOUD CONSULTANCY",
    email: "info@fifthcursor.com"
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
    id: "01",
    slug: "ai-strategy-transformation",
    title: "AI Strategy & Transformation",
    text: "Identify the AI opportunities worth pursuing, define the operating model, and turn experimentation into an executable roadmap.",
    tags: ["AI strategy", "GenAI", "Roadmaps"],
    intro: "The strongest AI programs start with a business problem, not a model. We help leadership teams identify where AI can create meaningful business value, separate durable opportunities from hype, prioritize initiatives based on impact and feasibility, and build a practical roadmap from experimentation to enterprise-scale adoption.",
    details: [
      "AI opportunity and use-case discovery — identify high-value opportunities across operations, customer experience, products, sales, marketing, finance, and internal workflows, then assess each opportunity based on potential business impact, technical feasibility, data readiness, and organizational complexity.",
      "Enterprise AI roadmap and operating model — translate a portfolio of AI opportunities into a sequenced transformation roadmap with clear priorities, ownership, investment requirements, milestones, success metrics, and the organizational capabilities required to execute and scale.",
      "Build-versus-buy and platform decisions — evaluate foundation models, AI platforms, vendors, internal development, and technology partners based on capability, cost, security, integration requirements, flexibility, and long-term strategic fit.",
      "AI governance and responsible adoption — establish practical frameworks for AI risk management, security, privacy, human oversight, model evaluation, compliance, and responsible deployment while creating an operating model that enables teams to adopt AI confidently.",
      "AI transformation measurement — define the metrics that matter, from productivity and cost reduction to revenue impact, customer experience, quality, adoption, and time-to-value, so leadership can understand whether AI investments are producing measurable outcomes."
    ]
  },

  {
    id: "02",
    slug: "cloud-architecture",
    title: "Cloud Architecture",
    text: "Design secure, scalable cloud platforms that are built for real workloads, not slide decks.",
    tags: ["AWS", "Azure", "GCP"],
    intro: "Modern cloud architecture is about more than moving servers into someone else's data center. We design cloud environments around the way your organization actually operates, balancing reliability, security, performance, developer velocity, scalability, and cost to create platforms that teams can confidently build and run every day.",
    details: [
      "Target-state cloud architecture — assess the current environment and define a practical future-state architecture aligned with business requirements, application workloads, security requirements, scalability needs, and long-term technology strategy.",
      "Cloud foundations and landing zones — establish standardized environments, networking, identity, access controls, account structures, infrastructure patterns, and deployment practices that give engineering teams a secure and consistent foundation.",
      "Platform engineering and developer experience — create reusable infrastructure, self-service capabilities, deployment workflows, internal platforms, and engineering standards that allow development teams to move faster without sacrificing governance or reliability.",
      "Security and identity foundations — design security architectures covering identity and access management, network controls, secrets, encryption, workload isolation, policy enforcement, vulnerability management, and continuous security monitoring.",
      "Reliability, observability, and FinOps — build systems that are measurable and resilient while establishing practices for monitoring, incident response, capacity planning, performance optimization, and ongoing cloud cost management."
    ]
  },

  {
    id: "03",
    slug: "ai-engineering",
    title: "AI Engineering",
    text: "Move from prototype to production with intelligent applications, agents, retrieval systems, and evaluation pipelines.",
    tags: ["Agents", "RAG", "MLOps"],
    intro: "A successful AI prototype is only the beginning. We help organizations turn promising experiments into dependable production software by designing the systems around the model — including retrieval, tool use, evaluation, security, observability, APIs, data pipelines, and operational controls.",
    details: [
      "Agentic application architecture — design AI-powered applications and agents that can reason through tasks, use tools, interact with enterprise systems, coordinate workflows, and operate within clearly defined permissions and guardrails.",
      "Retrieval-augmented generation and knowledge systems — connect AI applications to enterprise information through secure retrieval architectures, document processing, indexing, search, metadata, context management, and continuously maintained knowledge systems.",
      "Model evaluation and guardrails — create evaluation frameworks that measure accuracy, relevance, reliability, safety, latency, and cost while implementing controls for hallucinations, sensitive information, inappropriate outputs, and unexpected model behavior.",
      "Production AI APIs and observability — build scalable interfaces and infrastructure around AI applications with logging, tracing, monitoring, fallback strategies, performance measurement, usage controls, and operational visibility.",
      "AI application optimization — continuously improve model selection, prompts, retrieval strategies, workflows, latency, infrastructure utilization, and inference costs so production systems become more reliable and economically sustainable over time."
    ]
  },

  {
    id: "04",
    slug: "modernization-migration",
    title: "Modernization & Migration",
    text: "Untangle legacy systems and create a pragmatic path toward faster, more resilient infrastructure.",
    tags: ["Migration", "Kubernetes", "Platform"],
    intro: "Modernization does not have to mean a risky rewrite. We help organizations understand complex legacy environments, map dependencies, identify the systems that matter most, and create phased modernization and migration strategies that reduce operational risk while improving engineering velocity and long-term flexibility.",
    details: [
      "Application and dependency assessment — map applications, infrastructure, integrations, databases, dependencies, technical debt, operational constraints, and business criticality to create a clear picture of the existing technology landscape.",
      "Migration strategy and wave planning — determine which workloads should be rehosted, replatformed, refactored, replaced, or retired, then organize migration waves around business priorities, dependencies, risk, and organizational readiness.",
      "Containerization and platform modernization — modernize applications through containerization, orchestration, automated deployment, infrastructure-as-code, standardized environments, and platform capabilities that improve portability and operational consistency.",
      "Legacy decomposition and API enablement — break down tightly coupled systems where appropriate, introduce modern interfaces and APIs, and create incremental paths away from legacy architectures without forcing an unnecessary full-system rewrite.",
      "Migration execution and risk management — establish testing, rollback strategies, observability, cutover plans, security controls, and operational processes that allow modernization programs to progress while protecting business continuity."
    ]
  },

  {
    id: "05",
    slug: "data-platforms",
    title: "Data Platforms",
    text: "Build the data foundations your analytics, AI, and business teams can actually trust.",
    tags: ["Data", "Analytics", "Governance"],
    intro: "AI and analytics are only as effective as the data supporting them. We help organizations build reliable, accessible, and governed data foundations that make information easier to discover, integrate, understand, analyze, and ultimately use in intelligent products and better business decisions.",
    details: [
      "Modern data architecture — design scalable data platforms across warehouses, lakes, lakehouses, operational stores, and analytical systems based on workload requirements, data volume, governance needs, and future AI use cases.",
      "Data pipelines and engineering — build reliable pipelines for ingesting, transforming, validating, and distributing information across business systems while improving automation, scalability, observability, and data freshness.",
      "Data quality and reliability — establish practical frameworks for data validation, monitoring, anomaly detection, quality rules, ownership, and issue resolution so teams can confidently use critical business information.",
      "Analytics and semantic layers — create consistent business definitions, reusable analytical models, metrics, and semantic layers that allow teams to work from a shared understanding of the organization's most important data.",
      "Governance, lineage, and access — implement data ownership, cataloging, lineage, classification, access controls, retention practices, and governance processes that balance usability with security, privacy, and regulatory requirements.",
      "AI-ready data foundations — prepare enterprise data for AI applications through better structure, metadata, retrieval, accessibility, quality, and governance so future AI initiatives are not blocked by fragmented or unreliable information."
    ]
  },

  {
    id: "06",
    slug: "intelligent-automation",
    title: "Intelligent Automation",
    text: "Reimagine repetitive workflows with software, agents, and integrations that give teams their time back.",
    tags: ["Automation", "Agents", "APIs"],
    intro: "The best automation starts by understanding how work actually gets done. We identify high-friction processes, redesign inefficient workflows, and combine software automation, APIs, AI agents, and human oversight to reduce repetitive work while improving speed, consistency, quality, and employee experience.",
    details: [
      "Workflow discovery and redesign — map how work moves through teams and systems, identify repetitive or error-prone activities, uncover bottlenecks, and redesign processes before introducing automation.",
      "AI agent and automation architecture — determine where deterministic automation, AI-powered workflows, intelligent agents, or human-in-the-loop systems are most appropriate and design the architecture needed to connect them safely.",
      "API and system integrations — connect applications, databases, SaaS platforms, internal systems, and business processes through APIs and integration layers so information can move between systems without unnecessary manual intervention.",
      "Document and knowledge automation — automate the extraction, classification, summarization, routing, and processing of information from documents, emails, tickets, forms, and other unstructured business content.",
      "Human-in-the-loop workflows — design appropriate points for human review, approval, escalation, and intervention so automation can handle repetitive work while people retain control over high-impact or ambiguous decisions.",
      "Operational monitoring and continuous improvement — measure automation performance, failure rates, time savings, quality, adoption, and business impact while continuously refining workflows as processes and business requirements evolve."
    ]
  }
]
