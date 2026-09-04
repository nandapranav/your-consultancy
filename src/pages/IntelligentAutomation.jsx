import React from "react";
import CapabilityLayout from "./CapabilityLayout";

export default function IntelligentAutomation() {
  return (
    <CapabilityLayout
      id="06"
      title="Intelligent Automation"
      tags={[
        "Automation",
        "AI Agents",
        "Workflows"
      ]}
      intro="Automation becomes powerful when it understands context, makes controlled decisions, and works across systems. We combine workflow automation, APIs, AI, and human oversight to redesign how work gets done."
      overview="Traditional automation follows fixed instructions. Intelligent automation combines deterministic workflows with AI capabilities so systems can interpret information, handle variation, interact with tools, and escalate decisions when people need to stay involved."
      challenge="The goal is not to automate everything. The goal is to identify where automation can remove repetitive work, reduce friction, improve consistency, and give people more time for the work that actually requires judgment."
      challenges={[
        [
          "Broken processes",
          "Automating an inefficient process simply makes the inefficiency happen faster. The workflow needs to be understood and redesigned first."
        ],
        [
          "Too much variation",
          "Real-world work rarely follows perfectly structured inputs. Documents, messages, exceptions, and incomplete information create complexity."
        ],
        [
          "Disconnected systems",
          "Automation often needs to move information between applications, databases, APIs, files, and human workflows."
        ],
        [
          "Trust and control",
          "AI-driven automation needs permissions, validation, auditability, human escalation, and clear boundaries around what the system is allowed to do."
        ]
      ]}
      capabilities={[
        [
          "Process discovery",
          "Identify high-friction workflows and understand where time, errors, handoffs, and manual decisions accumulate."
        ],
        [
          "Workflow automation",
          "Design deterministic workflows that coordinate systems, people, APIs, approvals, notifications, and business rules."
        ],
        [
          "AI-powered automation",
          "Use AI to interpret unstructured information, classify requests, extract data, generate responses, and support decisions."
        ],
        [
          "Agentic workflows",
          "Build controlled AI agents that can perform multi-step tasks using approved tools and systems."
        ],
        [
          "Human-in-the-loop",
          "Create escalation points where people review uncertain, sensitive, or high-impact decisions."
        ],
        [
          "Automation operations",
          "Monitor workflow performance, failures, exceptions, costs, quality, and business impact after launch."
        ]
      ]}
      architectureTitle="Automation as an operating system for work"
      architectureIntro="Intelligent automation works best when deterministic software handles what can be defined precisely while AI handles the areas that require interpretation and context."
      architectureItems={[
        [
          "01",
          "Trigger",
          "Start workflows from events, schedules, user actions, incoming documents, system changes, or business conditions."
        ],
        [
          "02",
          "Understand",
          "Use rules, classifiers, language models, document intelligence, or other AI capabilities to understand incoming information."
        ],
        [
          "03",
          "Decide",
          "Apply business rules and controlled AI reasoning to determine the next appropriate action."
        ],
        [
          "04",
          "Act",
          "Execute approved actions through APIs, applications, databases, messaging systems, and other enterprise tools."
        ],
        [
          "05",
          "Escalate",
          "Send uncertain, sensitive, or high-risk cases to the appropriate person with the necessary context."
        ],
        [
          "06",
          "Learn",
          "Use outcomes, exceptions, user feedback, and operational metrics to continuously improve the workflow."
        ]
      ]}
      approach={[
        [
          "01",
          "Map",
          "Document the current workflow, systems, people, decisions, exceptions, handoffs, and measurable sources of friction."
        ],
        [
          "02",
          "Redesign",
          "Simplify the process before automating it and identify where deterministic software versus AI is appropriate."
        ],
        [
          "03",
          "Prototype",
          "Test the workflow against realistic cases, including incomplete information and edge conditions."
        ],
        [
          "04",
          "Automate",
          "Build integrations, workflow logic, AI components, permissions, validation, and human review."
        ],
        [
          "05",
          "Optimize",
          "Monitor exceptions, throughput, quality, cost, and user feedback to continuously improve the system."
        ]
      ]}
      useCases={[
        [
          "Document processing",
          "Extract information from forms, invoices, contracts, applications, reports, and other unstructured documents."
        ],
        [
          "Customer operations",
          "Automate intake, classification, routing, summarization, follow-up, and service workflows."
        ],
        [
          "Finance operations",
          "Streamline repetitive reconciliation, reporting, invoice handling, approvals, and exception management."
        ],
        [
          "Employee workflows",
          "Automate internal requests, onboarding processes, knowledge access, approvals, and administrative tasks."
        ],
        [
          "IT operations",
          "Automate service requests, incident triage, remediation workflows, documentation, and operational checks."
        ],
        [
          "Agentic business processes",
          "Combine AI reasoning with enterprise tools to complete controlled multi-step workflows."
        ]
      ]}
      technology={[
        [
          "Workflow engines",
          "Coordinate deterministic steps, branching logic, retries, approvals, schedules, and system integrations."
        ],
        [
          "APIs & integrations",
          "Connect automation to the applications and systems where work actually happens."
        ],
        [
          "AI agents",
          "Enable controlled tool use and multi-step reasoning where workflows require interpretation or dynamic decisions."
        ],
        [
          "Document intelligence",
          "Extract, classify, summarize, and structure information from unstructured business content."
        ],
        [
          "Rules & policy engines",
          "Keep deterministic business decisions explicit and auditable instead of unnecessarily delegating them to AI."
        ],
        [
          "Monitoring",
          "Track throughput, failures, exceptions, quality, latency, costs, and human interventions."
        ]
      ]}
      deliverables={[
        "Process discovery and automation assessment",
        "Future-state workflow designs",
        "Automation opportunity roadmap",
        "Integration architecture",
        "AI and agent workflow design",
        "Human-in-the-loop control model",
        "Production automation implementation",
        "Monitoring and optimization framework"
      ]}
      outcomes={[
        "Less repetitive manual work",
        "Faster process completion",
        "Fewer avoidable errors",
        "Better consistency across workflows",
        "More scalable operations",
        "Employees spending more time on high-value work"
      ]}
      whyUs="We do not start with automation technology. We start with the work. Then we redesign the process, determine where software and AI belong, and engineer the controls needed to make automation dependable."
    />
  );
}
