import React from "react";
import CapabilityLayout from "./CapabilityLayout";

export default function IntelligentAutomation() {
  return (
    <CapabilityLayout
      id="06"
      title="Intelligent Automation"
      tags={[
        "Automation",
        "Agents",
        "APIs",
        "Workflow redesign"
      ]}
      intro="Reimagine repetitive workflows with software, agents, and integrations that give teams their time back."

      overview="The best automation opportunities are rarely about eliminating a single manual click. They come from redesigning entire workflows: connecting systems, removing unnecessary handoffs, using AI where judgment is required, and giving people better tools for the decisions only humans should make."

      challenge="Organizations accumulate manual processes because systems do not communicate, information is difficult to access, or workflows were designed around yesterday's constraints. Automation becomes valuable when it changes the structure of the work rather than simply speeding up one step."

      challenges={[
        [
          "Manual handoffs",
          "Work often moves between people, spreadsheets, email, tickets, and applications. We identify where those transitions create delay, errors, and unnecessary effort."
        ],
        [
          "Disconnected systems",
          "Teams may have the software they need but still spend hours moving information between systems. APIs and integrations can eliminate that repetitive work."
        ],
        [
          "Human bottlenecks",
          "Some workflows require judgment while others simply require information processing. We identify where AI can augment people without removing necessary human oversight."
        ],
        [
          "Automation without ownership",
          "Automated workflows still need monitoring, error handling, maintenance, and accountability. We design operational ownership into every system."
        ]
      ]}

      capabilities={[
        [
          "Workflow discovery",
          "Map processes end to end to identify unnecessary steps, repetitive work, handoffs, bottlenecks, and opportunities for redesign."
        ],
        [
          "AI agents",
          "Design agents that can retrieve information, use tools, execute tasks, and coordinate multi-step workflows within defined boundaries."
        ],
        [
          "Process automation",
          "Automate deterministic work using software, workflows, scheduled jobs, and event-driven systems."
        ],
        [
          "API integration",
          "Connect business systems so information and actions can move automatically between applications."
        ],
        [
          "Human-in-the-loop design",
          "Keep people involved where judgment, approval, exception handling, or accountability is required."
        ],
        [
          "Monitoring",
          "Track workflow execution, failures, throughput, quality, cost, and business outcomes over time."
        ]
      ]}

      approach={[
        [
          "01",
          "Observe",
          "Understand how work actually happens today, including exceptions and unofficial processes."
        ],
        [
          "02",
          "Redesign",
          "Simplify the workflow before automating it. Remove unnecessary steps rather than making inefficient processes run faster."
        ],
        [
          "03",
          "Automate",
          "Use APIs, software automation, and AI where each is best suited to the task."
        ],
        [
          "04",
          "Integrate",
          "Connect the automation to the systems people already use so adoption does not depend on creating another isolated tool."
        ],
        [
          "05",
          "Optimize",
          "Measure time saved, quality, throughput, and user experience and continuously improve the workflow."
        ]
      ]}

      deliverables={[
        "Workflow and process assessment",
        "Automation opportunity map",
        "Future-state workflow designs",
        "AI agent architecture",
        "System integration architecture",
        "Automation prototypes",
        "Monitoring and operational framework",
        "Automation implementation roadmap"
      ]}

      outcomes={[
        "Less repetitive manual work",
        "Fewer operational handoffs and errors",
        "Faster workflow completion",
        "Better use of employee time",
        "More connected business systems",
        "Automation that can evolve as the organization changes"
      ]}
    />
  );
}
