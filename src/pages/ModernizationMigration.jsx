import React from "react";
import CapabilityLayout from "./CapabilityLayout";

export default function ModernizationMigration() {
  return (
    <CapabilityLayout
      id="04"
      title="Modernization & Migration"
      tags={[
        "Modernization",
        "Migration",
        "Legacy Systems"
      ]}
      intro="Modernization is about creating a technology estate that can evolve. We help organizations assess legacy environments, choose the right migration strategy, modernize applications, and move toward architectures that are easier to change."
      overview="Not every legacy system needs to be rewritten. The opportunity is to understand where existing architecture creates business friction, then choose the smallest intervention that creates meaningful improvement."
      challenge="Large modernization programs fail when technology becomes the only lens. Successful modernization requires understanding dependencies, business processes, operational risk, team capabilities, data, and the economics of changing versus keeping the existing system."
      challenges={[
        [
          "Legacy complexity",
          "Years of incremental changes can make applications difficult to understand, test, deploy, and modify safely."
        ],
        [
          "Migration risk",
          "Critical workloads often contain undocumented dependencies and business rules that cannot simply be copied into a new environment."
        ],
        [
          "Big-bang thinking",
          "Large rewrites increase delivery risk. Incremental modernization can often produce value sooner while reducing the blast radius of change."
        ],
        [
          "Operational disruption",
          "Modernization must preserve business continuity while systems, data, infrastructure, and workflows are being changed."
        ]
      ]}
      capabilities={[
        [
          "Legacy assessment",
          "Map applications, dependencies, infrastructure, data, interfaces, operational processes, and technical debt."
        ],
        [
          "Migration strategy",
          "Select appropriate strategies including rehost, replatform, refactor, retire, replace, or retain."
        ],
        [
          "Application modernization",
          "Incrementally improve architecture through modularization, APIs, containers, managed services, and cloud-native patterns."
        ],
        [
          "Data migration",
          "Plan and execute data movement while protecting integrity, availability, lineage, and business continuity."
        ],
        [
          "Platform modernization",
          "Modernize infrastructure, deployment systems, environments, observability, and developer workflows."
        ],
        [
          "Incremental transformation",
          "Use sequenced modernization to reduce risk and create measurable progress without waiting for a massive final-state rewrite."
        ]
      ]}
      architectureTitle="Modernization without the rewrite trap"
      architectureIntro="The right modernization strategy creates a path from today's architecture to tomorrow's without requiring the organization to replace everything at once."
      architectureItems={[
        [
          "01",
          "Discover",
          "Understand the existing application, dependencies, business rules, infrastructure, data, and operational behavior."
        ],
        [
          "02",
          "Classify",
          "Determine which workloads should be modernized, migrated, replaced, retired, or deliberately left alone."
        ],
        [
          "03",
          "Strangle",
          "Incrementally extract valuable capabilities from monoliths using APIs, services, events, or modular boundaries."
        ],
        [
          "04",
          "Modernize",
          "Introduce cloud-native infrastructure, better deployment practices, observability, testing, and architecture."
        ],
        [
          "05",
          "Migrate",
          "Move workloads and data using controlled waves with validation, rollback plans, and business continuity measures."
        ],
        [
          "06",
          "Optimize",
          "Continue improving reliability, performance, cost, developer experience, and maintainability after migration."
        ]
      ]}
      approach={[
        [
          "01",
          "Inventory",
          "Create a clear picture of applications, dependencies, data, infrastructure, ownership, costs, and business criticality."
        ],
        [
          "02",
          "Prioritize",
          "Rank workloads based on business value, technical risk, complexity, cost, urgency, and modernization opportunity."
        ],
        [
          "03",
          "Design",
          "Define target architecture and migration patterns for each workload rather than imposing one solution on everything."
        ],
        [
          "04",
          "Migrate",
          "Execute migration waves with testing, validation, observability, rollback plans, and stakeholder coordination."
        ],
        [
          "05",
          "Modernize",
          "Improve the architecture incrementally as workloads move, using modernization to create long-term engineering leverage."
        ]
      ]}
      useCases={[
        [
          "Data center exits",
          "Move infrastructure and applications out of aging data centers while establishing a more flexible operating model."
        ],
        [
          "Monolith modernization",
          "Gradually improve large applications without taking on the risk of a complete rewrite."
        ],
        [
          "Cloud migration",
          "Move workloads to cloud platforms using strategies aligned to application characteristics and business requirements."
        ],
        [
          "Platform replacement",
          "Replace aging infrastructure, deployment systems, integration platforms, or middleware."
        ],
        [
          "Database modernization",
          "Modernize database platforms while protecting application behavior, data integrity, and operational continuity."
        ],
        [
          "Developer experience",
          "Improve build, test, deployment, environments, tooling, and observability so teams can deliver changes more safely."
        ]
      ]}
      technology={[
        [
          "Containers",
          "Package applications into consistent deployment units where containerization improves portability and operational control."
        ],
        [
          "Kubernetes",
          "Use Kubernetes where workload scale, portability, platform consistency, or orchestration requirements justify the operational complexity."
        ],
        [
          "APIs",
          "Create clear service boundaries and integration contracts that allow legacy and modern components to coexist."
        ],
        [
          "Event-driven architecture",
          "Use events to decouple systems and enable asynchronous workflows where they provide meaningful architectural benefits."
        ],
        [
          "Infrastructure as code",
          "Make environments repeatable and auditable through version-controlled infrastructure definitions."
        ],
        [
          "Observability",
          "Establish logs, metrics, traces, health signals, and operational visibility across old and new systems."
        ]
      ]}
      deliverables={[
        "Application and infrastructure assessment",
        "Modernization strategy",
        "Migration wave plan",
        "Target architecture",
        "Dependency and risk map",
        "Data migration strategy",
        "Implementation roadmap",
        "Post-migration optimization plan"
      ]}
      outcomes={[
        "Lower legacy technology risk",
        "More maintainable applications",
        "Faster and safer deployment cycles",
        "Improved infrastructure flexibility",
        "Reduced operational friction",
        "A clear path toward a modern technology estate"
      ]}
      whyUs="We do not modernize for the sake of modern architecture. We focus on the systems that matter, the risks that need to be reduced, and the technical changes that create measurable business and engineering leverage."
    />
  );
}
