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
        "Governance"
      ]}
      intro="AI is only as useful as the data around it. We build reliable data foundations that make information easier to discover, govern, analyze, and turn into intelligent products."
      overview="Modern organizations generate enormous amounts of information across applications, customers, operations, devices, documents, and external sources. The challenge is turning that information into a trusted and usable foundation for analytics, decision-making, products, and AI."
      challenge="A data platform is not simply a database or a warehouse. It is a system of ingestion, storage, transformation, governance, quality, access, semantics, and consumption that allows the organization to treat data as a dependable product."
      challenges={[
        [
          "Fragmented data",
          "Information is often spread across operational databases, SaaS applications, files, APIs, warehouses, and departmental systems with no coherent architecture."
        ],
        [
          "Trust and quality",
          "Duplicate records, inconsistent definitions, missing fields, stale information, and unclear ownership can undermine confidence in analytics."
        ],
        [
          "Governance friction",
          "Organizations need to protect sensitive information without making legitimate data access so difficult that teams create workarounds."
        ],
        [
          "AI readiness",
          "AI initiatives often expose weaknesses in data foundations because models depend heavily on accurate, relevant, accessible, and well-governed information."
        ]
      ]}
      capabilities={[
        [
          "Modern data architecture",
          "Design scalable architectures across warehouses, lakehouses, operational stores, streaming systems, and analytical platforms."
        ],
        [
          "Data pipelines",
          "Build reliable ingestion and transformation pipelines for batch, event-driven, and real-time workloads."
        ],
        [
          "Data quality",
          "Introduce validation, profiling, anomaly detection, testing, monitoring, and ownership around critical datasets."
        ],
        [
          "Semantic layers",
          "Create consistent business definitions so analytics, applications, and AI systems work from shared concepts."
        ],
        [
          "Governance and lineage",
          "Make ownership, access, provenance, classification, and lifecycle policies visible and enforceable."
        ],
        [
          "AI-ready data",
          "Prepare enterprise information for retrieval, analytics, machine learning, and intelligent applications."
        ]
      ]}
      architectureTitle="The modern data foundation"
      architectureIntro="A strong data platform creates a continuous path from source systems to trusted information and then into analytics, products, and AI."
      architectureItems={[
        [
          "01",
          "Source systems",
          "Connect operational databases, applications, SaaS platforms, files, APIs, devices, and external data."
        ],
        [
          "02",
          "Ingestion",
          "Move information through reliable batch, streaming, and event-driven ingestion patterns."
        ],
        [
          "03",
          "Storage",
          "Choose warehouses, lakehouses, object storage, operational databases, and specialized stores based on workload requirements."
        ],
        [
          "04",
          "Transformation",
          "Clean, normalize, model, enrich, and validate information so it becomes useful for downstream consumers."
        ],
        [
          "05",
          "Governance",
          "Apply ownership, classification, access controls, lineage, quality rules, retention, and policy enforcement."
        ],
        [
          "06",
          "Consumption",
          "Deliver trusted data to dashboards, analytics, applications, data products, machine learning, and AI systems."
        ]
      ]}
      approach={[
        [
          "01",
          "Discover",
          "Map data sources, ownership, dependencies, quality issues, existing platforms, analytical needs, and AI requirements."
        ],
        [
          "02",
          "Architect",
          "Define the target platform, data domains, storage patterns, integration model, governance approach, and operating model."
        ],
        [
          "03",
          "Connect",
          "Prioritize critical sources and establish reliable ingestion, transformation, and synchronization pipelines."
        ],
        [
          "04",
          "Govern",
          "Introduce quality, ownership, access, lineage, metadata, and policy controls around the most important data products."
        ],
        [
          "05",
          "Activate",
          "Deliver trusted information into analytics, operational products, machine learning, and AI experiences."
        ]
      ]}
      useCases={[
        [
          "Enterprise analytics",
          "Create a trusted analytical foundation that gives teams consistent information for reporting and decision-making."
        ],
        [
          "Customer 360",
          "Unify customer information across channels and systems to improve service, personalization, and business understanding."
        ],
        [
          "Real-time intelligence",
          "Process events and operational signals quickly enough to support responsive decisions and applications."
        ],
        [
          "AI knowledge systems",
          "Prepare enterprise information for retrieval-augmented generation, assistants, agents, and intelligent products."
        ],
        [
          "Data products",
          "Treat important datasets as managed products with clear owners, consumers, quality expectations, and service characteristics."
        ],
        [
          "Regulated data environments",
          "Build stronger controls around sensitive information while maintaining usable access for legitimate business needs."
        ]
      ]}
      technology={[
        [
          "Warehouses & lakehouses",
          "Design analytical storage around workload patterns, data volume, performance, governance, and cost."
        ],
        [
          "Streaming",
          "Use event streams and real-time processing when business decisions or applications require low-latency information."
        ],
        [
          "ELT & transformation",
          "Build maintainable transformation workflows with testing, dependency management, observability, and clear ownership."
        ],
        [
          "Data catalogs",
          "Make datasets easier to discover through metadata, ownership, definitions, classification, and lineage."
        ],
        [
          "Semantic layers",
          "Create reusable definitions for business metrics and concepts so teams do not repeatedly rebuild the same logic."
        ],
        [
          "AI data infrastructure",
          "Prepare data for embeddings, retrieval, knowledge graphs, model training, evaluation, and AI applications."
        ]
      ]}
      deliverables={[
        "Current-state data assessment",
        "Target data platform architecture",
        "Data domain and ownership model",
        "Pipeline and ingestion architecture",
        "Data quality framework",
        "Governance and lineage model",
        "Semantic layer strategy",
        "AI-ready data roadmap"
      ]}
      outcomes={[
        "More trustworthy organizational data",
        "Faster access to critical information",
        "Consistent analytical definitions",
        "Stronger governance without unnecessary friction",
        "A scalable foundation for analytics and AI",
        "Greater confidence in data-driven decisions"
      ]}
      whyUs="We treat data as infrastructure for the entire organization. The architecture has to serve analytics, applications, operations, governance, and AI at the same time — without becoming another layer of complexity."
    />
  );
}
