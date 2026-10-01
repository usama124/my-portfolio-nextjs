import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "modern-web-development",
    title: "Modern Web & Full-Stack Application Development",
    shortDescription:
      "Production-ready, responsive web applications built with React, Next.js (App Router), TypeScript, Tailwind CSS, and Node.js.",
    fullDescription:
      "I engineer type-safe, accessible, and fast web applications from concept to deployment. From interactive developer utilities and real-time dashboards to full-stack platforms, I build modern frontends integrated cleanly with scalable backend APIs and client-side computational engines.",
    iconName: "Globe",
    targetAudience: "Startups, businesses, and product teams needing responsive web applications, SaaS dashboards, interactive client-side tools, or modern full-stack architectures.",
    problemsSolved: [
      "Slow initial page loads and poor Core Web Vitals performance",
      "Cluttered, untyped frontend codebases with high maintenance overhead",
      "Lack of clean type contracts between frontend clients and backend APIs",
      "Inconsistent responsive design and sluggish UI state transitions"
    ],
    deliverables: [
      "Modular Next.js (App Router) / React application codebases",
      "Strict TypeScript type safety and reusable component systems",
      "Custom responsive design with Tailwind CSS and dark/light theming",
      "Seamless RESTful API / WebSocket integrations and client-side state engines"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "JavaScript", "Tailwind CSS", "RESTful APIs", "Web Crypto API"],
    relatedProjectSlugs: ["devbite-tools", "humkinar-search-service"]
  },
  {
    id: "backend-microservices",
    title: "Python Backend & Microservices Architecture",
    shortDescription:
      "Scalable, maintainable, and containerized backend architectures designed for high concurrency and clean modularity.",
    fullDescription:
      "I design and engineer enterprise-grade Python backend systems using FastAPI, Django, and Flask. Whether developing decoupled microservices from scratch or modernizing existing codebases, I focus on clean architectural patterns, robust error handling, database efficiency, and containerized Docker environments.",
    iconName: "Server",
    targetAudience: "Companies & startups requiring scalable backend infrastructure, microservice refactoring, or multi-tenant system design.",
    problemsSolved: [
      "Monolithic application bottlenecks requiring modular microservice decoupling",
      "Multi-tenant data isolation and role-based access management (RBAC)",
      "High-throughput inter-service communication and background task processing",
      "Asynchronous request execution for compute-heavy workloads"
    ],
    deliverables: [
      "Modular backend architecture with repository and service layer separation",
      "Containerized Docker configurations and orchestration manifests",
      "Automated unit and integration test coverage",
      "CI/CD deployment readiness and configuration management"
    ],
    technologies: ["Python", "FastAPI", "Django", "Flask", "Docker", "PostgreSQL", "Redis", "Celery/Task Queues"],
    relatedProjectSlugs: ["kinto-hr-backend", "ballogy-ai-basketball-backend", "ehr-backend-base"]
  },
  {
    id: "rest-api-engineering",
    title: "High-Performance RESTful API Engineering",
    shortDescription:
      "Production-ready REST APIs featuring strict schema validation, tiered rate-limiting, and comprehensive OpenAPI documentation.",
    fullDescription:
      "I develop secure, high-throughput REST APIs tailored for web clients, mobile apps, and third-party integrations. Every endpoint is built with strict typing, token-based authentication (JWT/OAuth), intelligent caching via Redis, and fine-grained request throttling.",
    iconName: "Code",
    targetAudience: "Engineering teams needing robust public or private APIs, third-party platform integrations, or payment gateway automation.",
    problemsSolved: [
      "Slow API response times under high concurrent traffic",
      "Lack of standardized request validation and error responses",
      "API abuse prevention through tiered rate limiting and quota management",
      "Seamless integration with third-party platforms (Stripe, Twilio, DirectAdmin)"
    ],
    deliverables: [
      "Fast, documented RESTful API endpoints with Swagger/OpenAPI specifications",
      "Secure authentication & authorization workflows (JWT, API keys)",
      "Redis caching layer for sub-millisecond frequent data retrieval",
      "Webhooks and asynchronous event handlers for external payment/messaging gateways"
    ],
    technologies: ["FastAPI", "Django REST Framework", "Pydantic", "Redis", "PostgreSQL", "Stripe API", "Twilio API"],
    relatedProjectSlugs: ["humkinar-search-service", "ballogy-ai-basketball-backend", "fancoin-sports-ticketing-backend"]
  },
  {
    id: "data-engineering-etl",
    title: "Data Engineering & ETL Pipelines",
    shortDescription:
      "Automated data ingestion, transformation workflows, and analytical storage pipelines powered by Airflow and ClickHouse.",
    fullDescription:
      "I architect reliable ETL pipelines that extract data from diverse relational, columnar, and streaming sources, transform complex schemas, and deliver clean data to data lakes and analytical warehouses. Built with fault tolerance, retry mechanisms, and automated scheduling.",
    iconName: "Database",
    targetAudience: "Organizations managing high-volume data streams, multi-source ingestion requirements, or analytical reporting needs.",
    problemsSolved: [
      "Fragmented, inconsistent data scattered across disparate sources",
      "Pipeline failures causing missing or corrupted analytical reports",
      "Slow analytical queries on traditional transactional databases",
      "Manual data preprocessing and preparation bottlenecks"
    ],
    deliverables: [
      "Automated Apache Airflow DAGs with monitoring and alerting",
      "High-speed analytical storage schemas in ClickHouse and PostgreSQL",
      "Modular data transformation and cleansing scripts using Python and Dask",
      "RESTful administrative interfaces for pipeline orchestration"
    ],
    technologies: ["Python", "Apache Airflow", "ClickHouse", "PostgreSQL", "Dask", "Docker"],
    relatedProjectSlugs: ["etl-pipeline-application", "dataprep-ai-service", "dataset-catalog"]
  },
  {
    id: "web-scraping-crawling",
    title: "Large-Scale Web Scraping & Crawling Systems",
    shortDescription:
      "Resilient, high-volume web scrapers and crawlers that extract, clean, and structure unstructured web content.",
    fullDescription:
      "I develop bespoke web crawlers and scraping pipelines designed for complex web topologies. From single-page applications with heavy client-side rendering to protected e-commerce portals, I implement proxy rotation, captcha handling, and session management to ensure uninterrupted extraction.",
    iconName: "Search",
    targetAudience: "Businesses needing market intelligence, price monitoring, large-scale search index population, or automated web data feeds.",
    problemsSolved: [
      "Dynamic JavaScript-rendered single-page apps resisting traditional scrapers",
      "IP rate-limiting, captchas, and bot detection mechanisms",
      "Extracting non-standard languages, fonts, and messy HTML encodings",
      "Scheduling and deduplicating millions of target URLs"
    ],
    deliverables: [
      "Automated extraction workers using Scrapy, Playwright, or Selenium",
      "Structured output in JSON, CSV, PostgreSQL, or Apache Solr",
      "Distributed URL scheduling and deduplication via Redis",
      "Data normalization, cleaning, and text classification pipelines"
    ],
    technologies: ["Python", "Scrapy", "Playwright", "Selenium", "BeautifulSoup", "Redis", "Apache Solr"],
    relatedProjectSlugs: ["humkinar-web-crawler", "custom-web-scraping-suite", "political-sentiment-analysis"]
  },
  {
    id: "ai-ml-integration",
    title: "Production AI & Machine Learning Integration",
    shortDescription:
      "Bridging machine learning models (NLP, OCR, Speech-to-Text, Anomaly Detection) into robust, low-latency web systems.",
    fullDescription:
      "I turn trained AI and machine learning models into production-ready API services. I handle model inference pipelines, asynchronous task queuing, payload preprocessing, and response streaming, allowing web applications to seamlessly leverage AI capabilities.",
    iconName: "Cpu",
    targetAudience: "Startups and product teams integrating AI/ML capabilities (OCR, transcription, sentiment, predictive fault detection) into web products.",
    problemsSolved: [
      "Slow web servers freezing during heavy machine learning inference",
      "Complex multimodal input handling (audio, PDF, image to text)",
      "Real-time sentiment classification and time-series anomaly detection",
      "Disconnection between data science prototypes and production APIs"
    ],
    deliverables: [
      "Asynchronous FastAPI microservices wrapping ML inference models",
      "Multimodal document extraction pipelines (OCR, speech-to-text, PDF conversion)",
      "Time-series sensor telemetry processing and predictive alert triggers",
      "Structured JSON responses and API error resilience"
    ],
    technologies: ["Python", "FastAPI", "OCR", "Speech-to-Text", "NLP", "Time-Series Anomaly Detection", "Docker"],
    relatedProjectSlugs: ["datatera-ai-platform", "hermes-sensor-pipeline", "epidemic-surveillance-system"]
  },
  {
    id: "database-optimization",
    title: "Database Architecture & Query Optimization",
    shortDescription:
      "Schema modeling, query performance tuning, index strategies, and caching architectures for distributed services.",
    fullDescription:
      "I design robust relational and document database architectures that scale with user growth. I analyze query execution plans, design multi-column indexes, implement caching layers with Redis, and manage safe zero-downtime schema migrations.",
    iconName: "Layers",
    targetAudience: "Teams facing database slowdowns, high query latencies, or complex data modeling challenges.",
    problemsSolved: [
      "Slow database queries degrading application response times",
      "Unindexed foreign keys and inefficient table joins in PostgreSQL/MySQL",
      "High database CPU and memory utilization during peak traffic",
      "Data consistency issues across microservices"
    ],
    deliverables: [
      "Optimized PostgreSQL / MySQL schema designs and migration scripts",
      "Advanced query tuning and execution plan analysis",
      "Redis caching strategy for high-frequency read operations",
      "Relational ORM data layer integration (SQLAlchemy, Tortoise ORM, Django ORM)"
    ],
    technologies: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "ClickHouse", "SQLAlchemy", "Tortoise ORM"],
    relatedProjectSlugs: ["kinto-hr-backend", "humkinar-search-service", "etl-pipeline-application"]
  }
];

