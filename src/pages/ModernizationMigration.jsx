import React from "react";
import CapabilityLayout from "./CapabilityLayout";

export default function ModernizationMigration() {
  return (
    <CapabilityLayout
      id="04"
      title="Modernization & Migration"
      tags={[
        "Migration",
        "Kubernetes",
        "Platform",
        "Legacy systems"
      ]}
      intro="Untangle legacy systems and create a pragmatic path toward faster, more resilient infrastructure."

      overview="Modernization is rarely about replacing everything. The goal is to understand which systems create constraints, which systems still provide value, and where targeted architectural changes can unlock meaningful improvements. We create migration strategies that reduce risk while moving the organization forward."

      challenge="Legacy environments often contain years of accumulated business logic, integrations, operational knowledge, and undocumented dependencies. A rewrite can be just as risky as doing nothing. Successful modernization requires understanding what exists before deciding what should change."

      challenges={[
        [
          "Hidden dependencies",
          "Legacy applications frequently depend on undocumented services, databases, jobs, and integrations. We map those relationships before migration decisions are made."
        ],
        [
          "Business continuity",
          "Critical systems cannot simply be switched off during modernization. We design migration waves and transition strategies around operational realities."
        ],
        [
          "Technical debt",
          "Not every old system needs to be rewritten. We distinguish between technical debt that matters and technology that is simply old."
        ],
        [
          "Organizational readiness",
          "Modern platforms change how teams deploy, operate, and own software. We account for people and processes alongside architecture."
        ]
      ]}

      capabilities={[
        [
          "Application assessment",
          "Analyze applications, dependencies, infrastructure, operational requirements, and business criticality to establish modernization priorities."
        ],
        [
          "Migration strategy",
          "Determine whether workloads should be rehosted, replatformed, refactored, replaced, retired, or retained."
        ],
        [
          "Containerization",
          "Modernize applications with containers and orchestration where doing so creates meaningful operational or delivery benefits."
        ],
        [
          "Platform modernization",
          "Build modern deployment, infrastructure, observability, and platform capabilities around existing and future workloads."
        ],
        [
          "Legacy decomposition",
          "Identify opportunities to separate tightly coupled systems into more manageable services and APIs."
        ],
        [
          "Migration execution",
          "Plan and support controlled migration waves with validation, rollback strategies, and operational readiness."
        ]
      ]}

      approach={[
        [
          "01",
          "Map",
          "Understand applications, infrastructure, data, dependencies, ownership, and business criticality."
        ],
        [
          "02",
          "Classify",
          "Determine the right modernization strategy for every workload rather than forcing a single approach."
        ],
        [
          "03",
          "Sequence",
          "Build migration waves around dependencies, business priorities, technical risk, and organizational capacity."
        ],
        [
          "04",
          "Modernize",
          "Implement the target architecture while preserving the business capabilities that matter."
        ],
        [
          "05",
          "Stabilize",
          "Validate performance, reliability, security, and operations before moving to the next wave."
        ]
      ]}

      deliverables={[
        "Application and infrastructure assessment",
        "Dependency and architecture mapping",
        "Modernization strategy",
        "Migration wave plan",
        "Target-state architecture",
        "Containerization strategy",
        "Platform modernization roadmap",
        "Migration execution plan"
      ]}

      outcomes={[
        "Reduced legacy infrastructure complexity",
        "Lower migration and modernization risk",
        "Faster application delivery",
        "Improved reliability and observability",
        "A clearer path away from technical debt",
        "Infrastructure that can support future growth"
      ]}
    />
  );
}
