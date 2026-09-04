import React from "react";
import CapabilityLayout from "./CapabilityLayout";

export default function AIStrategy() {
  return (
    <CapabilityLayout
      id="01"
      title="AI Strategy & Transformation"
      tags={[
        "AI strategy",
        "GenAI",
        "Roadmaps",
        "Operating models"
      ]}
      intro="The strongest AI programs start with a business problem, not a model. We help leadership teams separate durable opportunities from hype and build an AI roadmap that can actually ship."

      overview="AI creates the most value when it is connected directly to how an organization makes money, serves customers, operates its business, and makes decisions. We help leadership teams move beyond isolated experiments and create a coherent strategy for where AI belongs, where it does not, and what needs to happen next."

      challenge="Organizations rarely struggle because they cannot identify AI. They struggle because there are too many possible directions and too little clarity about which ones deserve investment. Teams launch pilots without a path to production, select technology before understanding the problem, or underestimate the organizational change required to make intelligent systems useful."

      challenges={[
        [
          "Too many use cases",
          "AI can be applied almost everywhere, but not every possible application deserves funding. We identify the opportunities with meaningful business value, feasible data requirements, and a credible path to adoption."
        ],
        [
          "Pilot purgatory",
          "Proofs of concept are easy to start and difficult to scale. We design the transition from experimentation to production so successful ideas have an operating model behind them."
        ],
        [
          "Unclear ownership",
          "AI initiatives often cross product, engineering, data, security, legal, and business teams. We define responsibilities and decision rights so programs can move without organizational friction."
        ],
        [
          "Technology before strategy",
          "Choosing a model or platform too early can lock teams into the wrong architecture. We begin with outcomes and constraints, then determine the technology required to achieve them."
        ]
      ]}

      capabilities={[
        [
          "AI opportunity discovery",
          "Map business processes, customer journeys, operational bottlenecks, and decision points to identify where intelligent systems can create meaningful leverage."
        ],
        [
          "Use-case prioritization",
          "Score opportunities against value, feasibility, data readiness, risk, complexity, and time-to-impact to establish a practical investment sequence."
        ],
        [
          "Enterprise AI roadmap",
          "Create a phased roadmap connecting near-term wins with the platforms, capabilities, governance, and organizational changes required for longer-term transformation."
        ],
        [
          "Operating model design",
          "Define how product, engineering, data, security, and business teams collaborate to build, deploy, govern, and continuously improve AI systems."
        ],
        [
          "Build-versus-buy decisions",
          "Evaluate models, platforms, vendors, internal capabilities, and integration requirements to determine where differentiation should be built and where existing technology is enough."
        ],
        [
          "AI governance",
          "Establish practical guardrails around security, privacy, model behavior, evaluation, human oversight, and responsible adoption."
        ]
      ]}

      approach={[
        [
          "01",
          "Understand",
          "Start with the business. Understand objectives, constraints, customers, workflows, data, existing technology, and the decisions that matter most."
        ],
        [
          "02",
          "Prioritize",
          "Separate interesting AI ideas from high-value opportunities and establish a portfolio that balances quick wins with strategic bets."
        ],
        [
          "03",
          "Architect",
          "Define the target operating model, technical foundations, governance requirements, and capabilities needed to execute the roadmap."
        ],
        [
          "04",
          "Activate",
          "Turn strategy into action through prioritized initiatives, prototypes, production plans, and clear ownership across teams."
        ],
        [
          "05",
          "Measure",
          "Track adoption, business value, system performance, cost, and risk so the AI portfolio continuously improves."
        ]
      ]}

      deliverables={[
        "AI opportunity and use-case assessment",
        "Prioritized AI investment portfolio",
        "Enterprise AI strategy and roadmap",
        "Target operating model",
        "Technology and platform recommendations",
        "Build-versus-buy analysis",
        "AI governance framework",
        "Implementation roadmap with milestones and ownership"
      ]}

      outcomes={[
        "Clear understanding of where AI can create meaningful business value",
        "A prioritized roadmap instead of a collection of disconnected pilots",
        "Alignment between leadership, product, engineering, data, and security teams",
        "Faster movement from experimentation into production",
        "A practical foundation for scaling AI responsibly",
        "Investment decisions tied to measurable business outcomes"
      ]}
    />
  );
}
