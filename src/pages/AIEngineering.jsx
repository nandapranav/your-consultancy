import React from "react";
import CapabilityLayout from "./CapabilityLayout";

export default function AIEngineering() {
  return (
    <CapabilityLayout
      id="03"
      title="AI Engineering"
      tags={[
        "Agents",
        "RAG",
        "MLOps",
        "AI applications"
      ]}
      intro="We turn promising AI prototypes into dependable software. That means evaluation, retrieval, tool use, security, observability, and the details that make intelligent systems work in production."

      overview="Production AI is software engineering with a new class of failure modes. Models can be probabilistic, context can be incomplete, outputs can change, and system behavior depends on data, prompts, tools, and orchestration. We build the surrounding engineering systems required to make AI applications dependable."

      challenge="The jump from an impressive demo to a production AI system is substantial. A prototype can answer a handful of questions successfully. A production system must handle edge cases, changing information, access controls, latency, cost, evaluation, monitoring, failures, and real users."

      challenges={[
        [
          "Prototype-to-production gaps",
          "A successful demo does not automatically become a reliable application. We design the architecture and engineering practices required to make AI systems production-ready."
        ],
        [
          "Unreliable outputs",
          "AI systems require evaluation and guardrails. We create measurable quality criteria and feedback loops instead of relying on subjective impressions."
        ],
        [
          "Knowledge limitations",
          "Models do not automatically know your organization's latest information. Retrieval, context management, and knowledge architecture become critical parts of the system."
        ],
        [
          "Operational complexity",
          "Models, prompts, tools, vector stores, APIs, and workflows all create new operational surfaces. We instrument the system so teams can understand what is happening."
        ]
      ]}

      capabilities={[
        [
          "AI application architecture",
          "Design end-to-end intelligent applications spanning models, APIs, orchestration, retrieval, tools, user interfaces, and operational systems."
        ],
        [
          "RAG systems",
          "Build retrieval pipelines that connect models with trusted organizational knowledge while managing relevance, freshness, permissions, and context."
        ],
        [
          "AI agents",
          "Design agentic systems that can reason through tasks, use tools, interact with systems, and operate within explicit boundaries."
        ],
        [
          "Evaluation systems",
          "Create automated and human evaluation frameworks that measure accuracy, relevance, safety, latency, and task completion."
        ],
        [
          "Guardrails and security",
          "Design controls for prompt injection, sensitive information, unsafe outputs, access control, and human oversight."
        ],
        [
          "AI observability",
          "Monitor model behavior, cost, latency, retrieval quality, failures, and user outcomes across production systems."
        ]
      ]}

      approach={[
        [
          "01",
          "Define",
          "Translate the business workflow into clear AI system requirements and measurable success criteria."
        ],
        [
          "02",
          "Prototype",
          "Test architecture, models, retrieval strategies, and user interactions quickly while measuring what actually works."
        ],
        [
          "03",
          "Engineer",
          "Build the production system with robust APIs, evaluation, security, observability, and failure handling."
        ],
        [
          "04",
          "Deploy",
          "Release incrementally with monitoring, feedback loops, and operational ownership."
        ],
        [
          "05",
          "Improve",
          "Continuously tune models, retrieval, prompts, workflows, and infrastructure based on real-world performance."
        ]
      ]}

      deliverables={[
        "Production AI architecture",
        "AI application or agent prototype",
        "RAG and knowledge architecture",
        "Model and provider evaluation",
        "Automated evaluation framework",
        "Security and guardrail design",
        "AI observability strategy",
        "Production deployment roadmap"
      ]}

      outcomes={[
        "AI systems that can move beyond demos",
        "Measurable and continuously improving model quality",
        "More reliable access to organizational knowledge",
        "Better control over AI security and operational risk",
        "Clear visibility into AI performance and cost",
        "A foundation for scaling intelligent applications"
      ]}
    />
  );
}
