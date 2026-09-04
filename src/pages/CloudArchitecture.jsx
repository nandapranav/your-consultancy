import React from "react";
import CapabilityLayout from "./CapabilityLayout";

export default function CloudArchitecture() {
  return (
    <CapabilityLayout
      id="02"
      title="Cloud Architecture"
      tags={[
        "AWS",
        "Azure",
        "GCP",
        "Platform engineering"
      ]}
      intro="We design cloud foundations around reliability, security, developer velocity, and economics — then make the architecture practical enough for teams to operate every day."

      overview="Cloud architecture is not about putting existing infrastructure somewhere else. The right architecture gives engineering teams a safer, faster way to build and operate software while giving leadership visibility into reliability, security, and cost. We design cloud environments around those outcomes."

      challenge="Cloud environments become difficult when every application solves infrastructure problems independently. Over time, teams accumulate inconsistent networking, identity, observability, deployment, and security patterns. The result is a platform that technically works but becomes increasingly expensive and difficult to operate."

      challenges={[
        [
          "Architecture sprawl",
          "Different teams often make different infrastructure decisions without a shared target state. We establish common architectural patterns without forcing every workload into the same mold."
        ],
        [
          "Security complexity",
          "Identity, networking, secrets, access controls, and compliance requirements can become fragmented. We create security foundations that are built into the platform instead of added later."
        ],
        [
          "Unpredictable costs",
          "Cloud flexibility can become cloud waste. We design cost visibility and optimization into the architecture so teams understand the economic consequences of their decisions."
        ],
        [
          "Developer friction",
          "Infrastructure should accelerate engineers rather than become another queue they have to navigate. We create self-service patterns and reusable platform capabilities that reduce unnecessary operational work."
        ]
      ]}

      capabilities={[
        [
          "Target-state architecture",
          "Define a clear cloud architecture covering compute, networking, storage, identity, data, observability, security, and application integration."
        ],
        [
          "Landing zones",
          "Establish secure and repeatable foundations for accounts, subscriptions, networking, identity, policies, logging, and organizational controls."
        ],
        [
          "Platform engineering",
          "Build reusable infrastructure and developer experiences that allow teams to provision and deploy systems consistently."
        ],
        [
          "Cloud security",
          "Design identity, network segmentation, secrets management, policy enforcement, and security monitoring into the architecture."
        ],
        [
          "Reliability engineering",
          "Design for failure with resilient architectures, observability, disaster recovery, capacity planning, and operational readiness."
        ],
        [
          "FinOps",
          "Connect infrastructure decisions to economics through cost visibility, allocation, optimization, and continuous review."
        ]
      ]}

      approach={[
        [
          "01",
          "Assess",
          "Understand the current estate, workloads, dependencies, operational model, security posture, and business constraints."
        ],
        [
          "02",
          "Design",
          "Create a target-state architecture that balances reliability, security, performance, developer experience, and cost."
        ],
        [
          "03",
          "Standardize",
          "Establish reusable infrastructure patterns, policies, environments, and platform capabilities."
        ],
        [
          "04",
          "Migrate",
          "Move workloads through controlled migration waves while minimizing disruption and operational risk."
        ],
        [
          "05",
          "Optimize",
          "Continuously improve reliability, performance, security, developer velocity, and cloud economics."
        ]
      ]}

      deliverables={[
        "Current-state architecture assessment",
        "Target-state cloud architecture",
        "Cloud landing-zone design",
        "Network and identity architecture",
        "Platform engineering blueprint",
        "Infrastructure-as-code patterns",
        "Reliability and observability strategy",
        "Cloud cost optimization roadmap"
      ]}

      outcomes={[
        "A scalable and understandable cloud foundation",
        "Stronger security and identity controls",
        "Faster developer provisioning and deployment",
        "Improved reliability and operational visibility",
        "More predictable infrastructure economics",
        "A clear architecture path for future applications and AI workloads"
      ]}
    />
  );
}
