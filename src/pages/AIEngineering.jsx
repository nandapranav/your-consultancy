import React from "react";
import CapabilityLayout from "./CapabilityLayout";

export default function AIEngineering() {
  return (
    <CapabilityLayout
      id="03"
      title="AI Engineering"
      tags={[
        "Generative AI",
        "LLMs",
        "AI Systems"
      ]}
      intro="We engineer production-grade AI systems that combine models, data, software, tools, and workflows into reliable products — from retrieval-augmented applications to intelligent agents and decision systems."
      overview="The difference between an AI demo and an AI product is engineering. Production AI requires reliable data flows, model selection, prompt and context design, evaluation, security, observability, latency management, cost controls, and a product experience people actually trust."
      challenge="Modern AI systems are probabilistic, continuously evolving, and deeply dependent on the quality of their surrounding systems. The model is only one component of the product."
      challenges={[
        [
          "Prototype-to-production gap",
          "A prompt that works in a demo may fail when exposed to different users, documents, edge cases, latency requirements, and production traffic."
        ],
        [
          "Unreliable outputs",
          "AI systems need systematic evaluation, grounding, validation, fallback behavior, and human oversight rather than relying on subjective testing."
        ],
        [
          "Context quality",
          "Even powerful models perform poorly when they receive incomplete, irrelevant, stale, or poorly structured context."
        ],
        [
          "Operational complexity",
          "Model costs, latency, provider dependencies, tool calls, security, monitoring, and changing model behavior all become engineering concerns."
        ]
      ]}
      capabilities={[
        [
          "LLM applications",
          "Design and build production applications using large language models, structured outputs, tool calling, and controlled generation."
        ],
        [
          "RAG systems",
          "Build retrieval pipelines that connect models to enterprise knowledge while preserving relevance, freshness, access control, and traceability."
        ],
        [
          "AI agents",
          "Engineer agents capable of planning tasks, calling tools, interacting with systems, and completing controlled multi-step workflows."
        ],
        [
          "AI evaluation",
          "Create automated and human evaluation systems that measure factuality, relevance, safety, task completion, and regression over time."
        ],
        [
          "AI infrastructure",
          "Design model access, routing, caching, observability, deployment, secrets, and cost-management systems."
        ],
        [
          "AI product engineering",
          "Integrate intelligence directly into products and workflows with strong user experiences, controls, and feedback loops."
        ]
      ]}
      architectureTitle="The production AI stack"
      architectureIntro="Reliable AI applications require multiple coordinated layers. We engineer the complete system rather than treating the model API as the architecture."
      architectureItems={[
        [
          "01",
          "User experience",
          "Design interactions that communicate what the system knows, what it does, and where people need to remain in control."
        ],
        [
          "02",
          "Orchestration",
          "Coordinate prompts, workflows, tools, agents, business rules, and model calls."
        ],
        [
          "03",
          "Knowledge",
          "Process, index, retrieve, rank, and authorize information used to ground model responses."
        ],
        [
          "04",
          "Models",
          "Select and route models based on capability, latency, reliability, context requirements, and cost."
        ],
        [
          "05",
          "Evaluation",
          "Continuously test system quality against representative tasks, edge cases, safety requirements, and production feedback."
        ],
        [
          "06",
          "Operations",
          "Monitor latency, cost, failures, model behavior, tool usage, security events, and system health."
        ]
      ]}
      approach={[
        [
          "01",
          "Frame",
          "Define the user problem, workflow, success criteria, constraints, and level of intelligence actually required."
        ],
        [
          "02",
          "Prototype",
          "Rapidly test models, prompts, retrieval approaches, interfaces, and workflows against realistic examples."
        ],
        [
          "03",
          "Evaluate",
          "Create measurable evaluations before scaling so improvements can be demonstrated rather than guessed."
        ],
        [
          "04",
          "Engineer",
          "Build production architecture, data pipelines, security, monitoring, fallbacks, and deployment systems."
        ],
        [
          "05",
          "Operate",
          "Monitor real-world behavior and continuously improve models, retrieval, prompts, tools, and product experience."
        ]
      ]}
      useCases={[
        [
          "Enterprise copilots",
          "Give employees contextual assistance across policies, documents, procedures, technical knowledge, and organizational information."
        ],
        [
          "AI agents",
          "Automate multi-step work by allowing AI systems to interact with approved tools, APIs, and business processes."
        ],
        [
          "Customer support",
          "Assist service teams with conversation understanding, knowledge retrieval, summarization, routing, and response generation."
        ],
        [
          "Document intelligence",
          "Extract structured information from contracts, reports, forms, invoices, and other unstructured business content."
        ],
        [
          "Developer copilots",
          "Improve software engineering workflows through code assistance, testing, documentation, debugging, and repository intelligence."
        ],
        [
          "Decision support",
          "Combine organizational data, business rules, analytics, and AI reasoning to help people make better decisions."
        ]
      ]}
      technology={[
        [
          "Large language models",
          "Evaluate and integrate model providers according to capability, context, latency, reliability, privacy, and cost."
        ],
        [
          "Retrieval systems",
          "Engineer ingestion, chunking, embeddings, vector search, hybrid retrieval, ranking, filtering, and authorization."
        ],
        [
          "Agent architectures",
          "Build controlled tool-using systems with explicit permissions, state, workflow boundaries, and failure handling."
        ],
        [
          "Evaluation frameworks",
          "Create test datasets, automated graders, human review, regression suites, and production quality metrics."
        ],
        [
          "AI observability",
          "Track model calls, prompts, retrieval quality, tool usage, latency, failures, costs, and user feedback."
        ],
        [
          "Guardrails",
          "Implement validation, policy checks, access control, structured outputs, content controls, and human-in-the-loop workflows."
        ]
      ]}
      deliverables={[
        "AI product architecture",
        "LLM and model strategy",
        "RAG or knowledge architecture",
        "Agent and workflow design",
        "Evaluation framework",
        "AI observability architecture",
        "Production implementation",
        "AI operations and improvement roadmap"
      ]}
      outcomes={[
        "Reliable AI applications instead of demos",
        "Higher-quality and more measurable model behavior",
        "Better grounding and enterprise knowledge access",
        "Controlled AI agents and workflows",
        "Improved visibility into cost and performance",
        "A foundation for continuously improving AI products"
      ]}
      whyUs="We approach AI as software engineering with probabilistic components. That means the surrounding architecture, evaluation, security, data, product experience, and operations receive as much attention as the model itself."
    />
  );
}
