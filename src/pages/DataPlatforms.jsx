import React from "react";
import CapabilityLayout from "./CapabilityLayout";

export default function DataPlatforms() {
  return (
    <CapabilityLayout
      id="05"
      title="Data Platforms"
      tags={[
        "Data",
        "Analytics",
        "Governance",
        "AI foundations"
      ]}
      intro="Build the data foundations your analytics, AI, and business teams can actually trust."

      overview="Modern analytics and AI depend on data that is discoverable, reliable, governed, and available at the right time. We design data platforms that connect operational systems with analytics, intelligence, and decision-making without creating another layer of unnecessary complexity."

      challenge="Organizations often have plenty of data but struggle to use it consistently. Information is distributed across systems, definitions vary between teams, pipelines fail silently, and access controls make discovery difficult. A strong data platform turns fragmented information into a dependable foundation."

      challenges={[
        [
          "Fragmented data",
          "Important information often lives across applications, warehouses, SaaS platforms, files, and operational databases. We create architectures that connect those sources coherently."
        ],
        [
          "Poor data quality",
          "AI and analytics cannot compensate for unreliable inputs. We establish quality checks, ownership, lineage, and monitoring around critical data."
        ],
        [
          "Conflicting definitions",
          "Different teams can use the same term to mean different things. We create semantic foundations that make business metrics understandable and consistent."
        ],
        [
          "Governance friction",
          "Data governance should enable responsible access rather than simply block it. We design controls that balance usability, security, privacy, and compliance."
        ]
      ]}

      capabilities={[
        [
          "Modern data architecture",
          "Design scalable architectures for ingestion, storage, transformation, analytics, AI, and operational data workloads."
        ],
        [
          "Data pipelines",
          "Build reliable pipelines that move and transform information while maintaining visibility into freshness and quality."
        ],
        [
          "Data quality",
          "Create validation, monitoring, ownership, and remediation processes for critical data assets."
        ],
        [
          "Semantic layers",
          "Establish consistent definitions and business metrics so teams can reason about data using shared concepts."
        ],
        [
          "Data governance",
          "Design practical approaches to ownership, access, lineage, classification, privacy, and policy enforcement."
        ],
        [
          "AI data foundations",
          "Prepare organizational knowledge and data for retrieval, analytics, intelligent applications, and future AI workloads."
        ]
      ]}

      approach={[
        [
          "01",
          "Discover",
          "Map important data sources, consumers, business definitions, ownership, dependencies, and existing platform capabilities."
        ],
        [
          "02",
          "Architect",
          "Design the target data platform around the organization's analytical and operational requirements."
        ],
        [
          "03",
          "Connect",
          "Build reliable ingestion and transformation paths between important systems."
        ],
        [
          "04",
          "Govern",
          "Introduce quality, ownership, lineage, access, and policy controls without making data unusable."
        ],
        [
          "05",
          "Activate",
          "Connect the platform to analytics, products, automation, and AI use cases that create measurable value."
        ]
      ]}

      deliverables={[
        "Current-state data architecture",
        "Target-state data platform architecture",
        "Data pipeline strategy",
        "Data quality framework",
        "Semantic and metrics strategy",
        "Governance and lineage framework",
        "AI data readiness assessment",
        "Implementation roadmap"
      ]}

      outcomes={[
        "More trustworthy organizational data",
        "Faster access to useful information",
        "Consistent business definitions",
        "Better visibility into data quality and lineage",
        "Stronger foundations for analytics and AI",
        "A scalable platform for future data products"
      ]}
    />
  );
}
