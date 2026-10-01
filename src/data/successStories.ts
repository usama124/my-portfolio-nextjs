import { SuccessStoryItem } from "@/types";

export const successStoriesData: SuccessStoryItem[] = [
  {
    id: "urdu-search-crawler-pipeline",
    slug: "urdu-search-crawler-pipeline",
    title: "Engineering a National-Scale Urdu Web Crawler & Search Engine",
    subtitle: "Mining, indexing, and serving millions of complex Urdu language documents with sub-second retrieval.",
    clientOrProject: "Humkinar Urdu Search Engine",
    domain: "Search Engines, NLP & Big Data",
    technologies: ["Python", "Apache Solr", "Redis", "PostgreSQL", "Selenium", "Docker"],
    challenge:
      "Building a dedicated search engine for Urdu content presented distinct technical challenges: unstructured Urdu web typography, non-standard text encodings, dynamic JavaScript-rendered regional portals, and the need for sub-second query response times across a massive indexed corpus without degrading crawler performance.",
    solution:
      "Architected a multi-worker distributed crawling infrastructure using Python, designed custom language detection and text normalization filters to isolate Urdu content, indexed cleaned documents into an Apache Solr search cluster, and integrated Redis for URL deduplication and frequent search query caching.",
    architectureDetails: [
      "Distributed crawler workers executing concurrent extractions with headless browser fallbacks for JavaScript-heavy news outlets.",
      "Custom Urdu text encoding pipelines resolving unicode anomalies and non-standard typography.",
      "Apache Solr search clusters configured with language-specific analyzers and stemming for Urdu syntax.",
      "In-memory Redis cache serving top queries and maintaining atomic URL visit registries.",
      "RESTful search API with token authentication and tiered rate-limiting."
    ],
    outcomes: [
      "Delivered a fully automated end-to-end crawling and indexing pipeline capable of continuously discovering and indexing Urdu content.",
      "Enabled sub-second query retrieval for end users and third-party API consumers.",
      "Established an ad serving monetization system with Cost-Per-Placement and Cost-Per-Impression campaign logic."
    ],
    relatedProjectSlug: "humkinar-web-crawler"
  },
  {
    id: "datatera-multimodal-ai-backend",
    slug: "datatera-multimodal-ai-backend",
    title: "Architecting Multimodal AI Integration for Datatera",
    subtitle: "Bridging heavy machine learning inference models into low-latency asynchronous REST APIs.",
    clientOrProject: "Datatera AI Platform",
    domain: "AI Systems, Document Intelligence & NLP",
    technologies: ["Python", "FastAPI", "OCR", "Speech-to-Text", "NLP", "Pydantic", "Docker"],
    challenge:
      "The client required an intelligent AI agent platform capable of handling diverse multimodal inputs (scanned images, audio recordings, PDFs) and applying complex AI models (OCR, audio transcription, summarization, sentiment analysis, document classification) without causing request timeouts or memory exhaustion in high-concurrency environments.",
    solution:
      "Engineered an asynchronous FastAPI backend service with strict request schema validation, decoupling API ingestion from compute-heavy ML execution pipelines, and standardizing varied model outputs into consistent, structured JSON representations for frontend rendering.",
    architectureDetails: [
      "Asynchronous FastAPI microservices designed with strict Pydantic payload models.",
      "Modular model wrapper abstraction layer allowing seamless swapping and updating of inference components.",
      "Pipeline handlers for image-to-text (OCR), audio-to-text (STT), and multi-format document conversions.",
      "NLP classification and extraction workers returning normalized sentiment, keyword, and summary payloads.",
      "Containerized microservice architecture for isolated resource management."
    ],
    outcomes: [
      "Successfully launched production-ready REST APIs powering all frontend AI agent workflows on datatera.ai.",
      "Maintained system stability and responsive API endpoints during concurrent multimodal document processing.",
      "Delivered unified developer documentation and clean API contracts."
    ],
    relatedProjectSlug: "datatera-ai-platform"
  },
  {
    id: "hermes-industrial-telemetry-ingest",
    slug: "hermes-industrial-telemetry-ingest",
    title: "High-Volume Industrial Sensor Telemetry & Anomaly Detection",
    subtitle: "Ingesting continuous time-series data streams for predictive equipment fault detection.",
    clientOrProject: "Hermes Project (FiveRivers Technologies)",
    domain: "Industrial IoT, Time-Series & Anomaly Detection",
    technologies: ["Python", "Flask", "PostgreSQL", "Time-Series Data", "Machine Learning", "Docker"],
    challenge:
      "Industrial sensors in oil & gas facilities and environmental monitoring stations generate continuous, high-volume time-series telemetry with occasional missing packets, sensor calibration noise, and rapid spikes that need real-time data cleaning and predictive anomaly evaluation.",
    solution:
      "Built the Hermes ingestion core service in Python Flask, featuring streaming data cleaning pipelines that interpolate missing records, normalize sensor telemetry, and execute machine learning models for early hardware fault classification and weather trend prediction.",
    architectureDetails: [
      "Lightweight, high-throughput Flask ingestion endpoints accepting continuous telemetry bursts.",
      "Data preprocessing pipeline executing real-time interpolation, outlier detection, and sensor drift correction.",
      "Integration of predictive ML classification models flagging anomalous equipment patterns before failure.",
      "Partitioned and indexed time-series PostgreSQL storage optimized for range and aggregation queries."
    ],
    outcomes: [
      "Streamlined high-frequency industrial telemetry ingestion with zero data packet loss.",
      "Automated early detection of equipment anomalies for industrial operations.",
      "Enabled historical telemetry querying and reporting across extensive time ranges."
    ],
    relatedProjectSlug: "hermes-sensor-pipeline"
  },
  {
    id: "kinto-hr-multi-tenancy",
    slug: "kinto-hr-multi-tenancy",
    title: "Building a Subdomain-Isolated Multi-Tenant SaaS Architecture",
    subtitle: "Designing secure multi-tenancy, granular RBAC, and organizational hierarchies with FastAPI.",
    clientOrProject: "KintoHR Platform",
    domain: "Enterprise SaaS, Multi-Tenancy & Access Control",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Tortoise ORM", "Docker", "Git"],
    challenge:
      "Enterprise HR software requires absolute data isolation between customer organizations, dynamic subdomain routing, hierarchical role permissions (Super Admin, HR Manager, Department Head, Employee), and fast asynchronous query execution.",
    solution:
      "Engineered an asynchronous multi-tenant architecture using FastAPI and Tortoise ORM, implementing dynamic tenant resolution at the request middleware level, schema-level access enforcement, and a clean repository-service domain architecture.",
    architectureDetails: [
      "Dynamic tenant context middleware inspecting HTTP host subdomains on every incoming request.",
      "Role-Based Access Control (RBAC) dependency injection verifying permissions before route handler execution.",
      "Asynchronous database interactions with Tortoise ORM against PostgreSQL.",
      "Hierarchical employee lifecycle management (onboarding, departments, designations, direct reports)."
    ],
    outcomes: [
      "Delivered a zero-data-leakage multi-tenant backend architecture with clear company isolation.",
      "Achieved low API response latencies using asynchronous Python event loops.",
      "Published clean, open-source codebase demonstrating enterprise architectural principles."
    ],
    relatedProjectSlug: "kinto-hr-backend"
  },
  {
    id: "epidemic-political-surveillance",
    slug: "epidemic-political-surveillance",
    title: "Real-Time Big Data Social Streaming & Epidemiological Surveillance",
    subtitle: "Harvesting social streams and news feeds for automated disease outbreak detection and sentiment tracking.",
    clientOrProject: "Epidemic Surveillance & Sentiment Analysis (KICS UET)",
    domain: "Big Data, Public Health & NLP Streaming",
    technologies: ["Python", "Twitter API", "PostgreSQL", "Redis", "NLP Classifiers", "Docker"],
    challenge:
      "Public health monitoring and political analysis both demand processing large volumes of real-time unstructured social media and news data, filtering out noise, classifying symptom/sentiment signals, and computing geographic trend aggregations in real time.",
    solution:
      "Constructed streaming ingestion pipelines using Python and Twitter APIs, paired with NLP classification models to evaluate symptom reports and political polarity, storing aggregated metrics in PostgreSQL and Redis for dashboard visualization.",
    architectureDetails: [
      "Continuous streaming consumers connecting to social media APIs with backpressure handling.",
      "NLP classification worker pipelines tagging incoming posts with symptom indicators or political stance.",
      "Geographic and temporal aggregation queries in PostgreSQL with Redis caching for instant dashboard updates.",
      "Threshold-based alerting modules triggering notifications when symptom frequencies exceed historical baselines."
    ],
    outcomes: [
      "Automated real-time detection of symptom spikes across geographical regions for early public health alerts.",
      "Delivered interactive visualization dashboards depicting sentiment trends and political polarity shifts.",
      "Created reusable streaming data architecture for large-scale social data mining."
    ],
    relatedProjectSlug: "epidemic-surveillance-system"
  }
];

