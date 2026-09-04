import React from "react";
import CapabilityLayout from "./CapabilityLayout";

export default function AIStrategy() {
  return (
    <CapabilityLayout
      id="01"
      title="AI Strategy & Transformation"
      tags={[
        "AI Strategy",
        "Transformation",
        "Operating Model"
      ]}
      intro="AI creates the most value when it is connected to the way a business actually operates. We help organizations move from scattered AI experiments to a focused strategy, operating model, and roadmap for meaningful transformation."
      overview="The opportunity is bigger than deploying a model. Organizations need to decide where AI should create value, which capabilities should be built internally, what should be bought, how data and technology should evolve, and how teams will operate differently once AI becomes part of everyday work."
      challenge="Most organizations do not struggle to identify interesting AI use cases. They struggle to prioritize them, connect them to business outcomes, establish the right technical foundations, and turn isolated experiments into capabilities that can survive contact with production."
      challenges={[
        [
          "AI without a strategy",
          "Teams experiment independently, creating disconnected proofs of concept without a shared view of priorities, economics, architecture, or governance."
        ],
        [
          "Unclear business value",
          "Interesting demonstrations are not always valuable products. We connect AI initiatives to measurable improvements in revenue, cost, productivity, risk, customer experience, or decision quality."
        ],
        [
          "Organizational readiness",
          "AI changes workflows, roles, decision-making, and operating models. Technology alone cannot create transformation if the organization is not prepared to use it."
        ],
        [
          "Scaling beyond pilots",
          "Moving from a successful prototype to a secure, observable, maintainable production capability requires architecture, engineering discipline, governance, and ownership."
        ]
      ]}
      capabilities={[
        [
          "AI opportunity mapping",
          "Identify and prioritize opportunities across customer experiences, operations, knowledge work, software development, analytics, and decision systems."
        ],
        [
          "AI transformation roadmaps",
          "Create a sequenced roadmap that balances quick wins with the foundational investments required for long-term scale."
        ],
        [
          "AI operating models",
          "Define how product, engineering, data, security, legal, risk, and business teams collaborate around AI capabilities."
        ],
        [
          "Use-case economics",
          "Evaluate expected value, implementation complexity, adoption requirements, technical risk, and ongoing operating costs."
        ],
        [
          "AI governance",
          "Establish practical controls around responsible use, security, privacy, model risk, human oversight, evaluation, and accountability."
        ],
        [
          "Transformation execution",
          "Move priority initiatives from strategy into architecture, prototypes, production systems, and measurable business outcomes."
        ]
      ]}
      architectureTitle="AI transformation system"
      architectureIntro="A successful AI strategy connects business priorities to technology foundations. We look across the complete system rather than treating AI as a standalone software feature."
      architectureItems={[
        [
          "01",
          "Business priorities",
          "Start with the outcomes the organization needs to improve, then identify where intelligent systems can create disproportionate leverage."
        ],
        [
          "02",
          "Data foundation",
          "Assess whether the required information is accessible, trustworthy, governed, and usable by the systems being proposed."
        ],
        [
          "03",
          "AI capabilities",
          "Select the right combination of models, retrieval, agents, traditional machine learning, analytics, and automation."
        ],
        [
          "04",
          "Product experience",
          "Design AI into workflows so that people can actually use the capability instead of leaving it as an isolated technical demonstration."
        ],
        [
          "05",
          "Governance",
          "Build security, evaluation, monitoring, human oversight, and policy controls into the system from the beginning."
        ],
        [
          "06",
          "Operating model",
          "Define ownership, processes, skills, metrics, and feedback loops that allow the capability to improve after launch."
        ]
      ]}
      approach={[
        [
          "01",
          "Discover",
          "Understand the business, technology landscape, data environment, operating model, existing AI initiatives, and constraints."
        ],
        [
          "02",
          "Prioritize",
          "Score opportunities based on value, feasibility, strategic importance, risk, time-to-value, and organizational readiness."
        ],
        [
          "03",
          "Design",
          "Define target architecture, product experience, operating model, governance, metrics, and implementation roadmap."
        ],
        [
          "04",
          "Prove",
          "Build focused prototypes around the highest-value assumptions and validate technical and business feasibility."
        ],
        [
          "05",
          "Scale",
          "Turn validated ideas into production capabilities with engineering, security, monitoring, governance, and clear ownership."
        ]
      ]}
      useCases={[
        [
          "Enterprise knowledge",
          "Turn fragmented internal information into searchable, contextual knowledge experiences that help teams find answers and make decisions faster."
        ],
        [
          "Customer intelligence",
          "Use AI to understand customer signals, personalize interactions, summarize conversations, and improve service workflows."
        ],
        [
          "Intelligent operations",
          "Identify repetitive processes and augment teams with AI-powered decision support, automation, and workflow orchestration."
        ],
        [
          "AI-enabled products",
          "Embed intelligent capabilities directly into products and services rather than treating AI as a separate internal experiment."
        ],
        [
          "Software engineering",
          "Apply AI across development workflows including code generation, testing, documentation, debugging, and developer knowledge."
        ],
        [
          "Executive decision systems",
          "Combine trusted data, analytics, and AI interfaces to make complex organizational information easier to understand and act on."
        ]
      ]}
      technology={[
        [
          "Foundation models",
          "Evaluate model capabilities, latency, context windows, cost, reliability, and deployment requirements across relevant providers and model families."
        ],
        [
          "RAG & knowledge systems",
          "Design retrieval pipelines, document processing, indexing, ranking, grounding, and citation patterns for enterprise knowledge."
        ],
        [
          "AI agents",
          "Build systems that can reason across tasks, call tools, interact with APIs, and execute controlled multi-step workflows."
        ],
        [
          "Evaluation",
          "Define quality benchmarks, automated evaluations, human review, safety testing, and production feedback loops."
        ],
        [
          "Cloud AI infrastructure",
          "Design scalable environments for model access, data processing, orchestration, observability, security, and deployment."
        ],
        [
          "Governance controls",
          "Introduce access controls, auditability, data protection, policy enforcement, and human oversight into AI systems."
        ]
      ]}
      deliverables={[
        "AI opportunity and use-case assessment",
        "Prioritized AI transformation roadmap",
        "Target AI architecture",
        "AI operating model and ownership framework",
        "AI governance and risk framework",
        "Business case and value measurement model",
        "Prototype or proof of value for priority use cases",
        "Production implementation plan"
      ]}
      outcomes={[
        "A clear AI strategy tied to business priorities",
        "A prioritized portfolio instead of disconnected experiments",
        "Faster movement from idea to validated capability",
        "Reduced technology and implementation risk",
        "A scalable foundation for future AI initiatives",
        "Clear ownership and governance across the organization"
      ]}
      whyUs="We combine business strategy with real technical implementation. That means the roadmap is grounded in what can actually be built, operated, secured, measured, and scaled."
    />
  );
}
