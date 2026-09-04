import React from "react";
import CapabilityLayout from "./CapabilityLayout";

export default function CloudArchitecture() {
  return (
    <CapabilityLayout
      id="02"
      title="Cloud Architecture"
      tags={[
        "Cloud",
        "Architecture",
        "Platform Engineering"
      ]}
      intro="Cloud should make an organization faster, more resilient, and easier to evolve. We design cloud architectures that balance scalability, security, reliability, developer experience, and cost."
      overview="Cloud transformation is not simply moving servers to someone else's infrastructure. The real opportunity is to redesign how applications, data, infrastructure, security, and engineering teams work together so the organization can deliver technology faster and operate it with greater confidence."
      challenge="Cloud environments become difficult when they grow without an architectural model. Teams accumulate services, accounts, networking patterns, security controls, and deployment processes that solve individual problems but create system-wide complexity."
      challenges={[
        [
          "Cloud sprawl",
          "Multiple accounts, subscriptions, regions, services, and deployment patterns can create unnecessary complexity and inconsistent controls."
        ],
        [
          "Legacy constraints",
          "Existing applications often carry assumptions about infrastructure, networking, storage, identity, and deployment that make migration difficult."
        ],
        [
          "Reliability gaps",
          "A cloud platform needs explicit thinking around availability, failure modes, disaster recovery, observability, and operational ownership."
        ],
        [
          "Cost without context",
          "Cloud spending can rise quickly when architecture, workload behavior, capacity, and ownership are not visible."
        ]
      ]}
      capabilities={[
        [
          "Cloud strategy",
          "Define the right cloud model, migration priorities, architecture principles, and target operating model for the organization."
        ],
        [
          "Landing zones",
          "Establish secure and repeatable foundations for accounts, networking, identity, policies, logging, and shared services."
        ],
        [
          "Application architecture",
          "Modernize application architectures using containers, managed services, APIs, event-driven patterns, and appropriate compute models."
        ],
        [
          "Platform engineering",
          "Create internal platforms that give developers reusable paths for building, deploying, securing, and operating applications."
        ],
        [
          "Cloud security",
          "Build identity, network controls, secrets management, policy enforcement, monitoring, and security architecture into the platform."
        ],
        [
          "Reliability engineering",
          "Design for availability, recovery, observability, graceful failure, incident response, and measurable service health."
        ]
      ]}
      architectureTitle="A cloud foundation built to scale"
      architectureIntro="A strong cloud architecture creates clear boundaries between infrastructure, platforms, applications, data, security, and operations while making the common path easy for engineering teams."
      architectureItems={[
        [
          "01",
          "Foundation",
          "Accounts, subscriptions, networking, identity, policies, logging, and baseline security controls."
        ],
        [
          "02",
          "Platform",
          "Reusable infrastructure, deployment tooling, service templates, environments, and developer self-service."
        ],
        [
          "03",
          "Applications",
          "Application workloads designed around the reliability, scalability, and deployment characteristics they actually need."
        ],
        [
          "04",
          "Data",
          "Cloud-native storage, databases, pipelines, analytics, and data services integrated with application architecture."
        ],
        [
          "05",
          "Security",
          "Identity-first controls, secrets, encryption, network boundaries, policy automation, monitoring, and auditability."
        ],
        [
          "06",
          "Operations",
          "Observability, incident response, cost management, reliability metrics, and continuous improvement."
        ]
      ]}
      approach={[
        [
          "01",
          "Assess",
          "Map the existing infrastructure, applications, dependencies, security controls, costs, team capabilities, and operational model."
        ],
        [
          "02",
          "Architect",
          "Define target-state architecture, principles, platform boundaries, migration patterns, and non-functional requirements."
        ],
        [
          "03",
          "Foundation",
          "Build the secure cloud foundation and reusable platform capabilities required by engineering teams."
        ],
        [
          "04",
          "Modernize",
          "Move and improve workloads using the right strategy for each application rather than forcing everything into one pattern."
        ],
        [
          "05",
          "Optimize",
          "Continuously improve reliability, security, developer experience, performance, and cloud economics."
        ]
      ]}
      useCases={[
        [
          "Cloud migration",
          "Move workloads to cloud environments while reducing unnecessary disruption and addressing architectural limitations."
        ],
        [
          "Platform engineering",
          "Create internal developer platforms that make secure and reliable application delivery repeatable."
        ],
        [
          "Application modernization",
          "Refactor or replatform legacy systems to take advantage of cloud-native capabilities."
        ],
        [
          "High-scale systems",
          "Design architectures capable of handling changing workloads, global traffic, and demanding reliability requirements."
        ],
        [
          "Cloud cost optimization",
          "Identify architectural and operational changes that improve efficiency without compromising reliability."
        ],
        [
          "Cloud operating models",
          "Define ownership, governance, standards, automation, and engineering practices for sustainable cloud operations."
        ]
      ]}
      technology={[
        [
          "Infrastructure as code",
          "Use repeatable, version-controlled infrastructure patterns to make environments consistent and auditable."
        ],
        [
          "Containers & Kubernetes",
          "Use container platforms where they provide genuine value for portability, workload management, and deployment control."
        ],
        [
          "Serverless & managed services",
          "Select managed capabilities when they reduce operational burden and improve speed without introducing unacceptable constraints."
        ],
        [
          "Observability",
          "Connect logs, metrics, traces, alerts, and service-level indicators into a coherent operational picture."
        ],
        [
          "Security architecture",
          "Design identity, network segmentation, secrets, encryption, policies, and monitoring as platform primitives."
        ],
        [
          "FinOps",
          "Create visibility into cloud economics and connect spending to workload ownership, architecture, and business value."
        ]
      ]}
      deliverables={[
        "Current-state cloud assessment",
        "Target cloud architecture",
        "Cloud landing zone design",
        "Infrastructure and platform architecture",
        "Application migration roadmap",
        "Security and reliability architecture",
        "Cloud cost optimization plan",
        "Implementation and operating model"
      ]}
      outcomes={[
        "A scalable and secure cloud foundation",
        "Faster application delivery",
        "Greater infrastructure consistency",
        "Improved reliability and observability",
        "Better control over cloud costs",
        "A platform that can evolve with the organization"
      ]}
      whyUs="We treat cloud as an engineering system rather than a hosting destination. Architecture decisions are evaluated against reliability, security, developer experience, operational reality, and long-term economics."
    />
  );
}
