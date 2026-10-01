import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "devbite-tools",
    title: "DevBite — Online Developer Tools",
    tagline: "Free, fast, and privacy-first web developer toolbox featuring 110+ client-side utilities.",
    description:
      "Architected and built DevBite (devbite.dev), an online developer platform featuring 110+ interactive utility tools spanning JSON formatting, regex validation, UUID generation, Base64 & Hex encoding, SQL manipulation, cryptographic hashing, and data transformation. Built 100% client-side with zero server telemetry for absolute data privacy.",
    category: "web-applications",
    categoryLabel: "Web Applications & Full-Stack",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Web Crypto API", "Web Workers", "Lucide Icons"],
    featured: true,
    liveUrl: "https://devbite.dev",
    role: "Creator & Lead Full-Stack Engineer",
    period: "2025 – Present",
    highlights: [
      "Engineered 110+ interactive developer utilities operating 100% in-browser with zero server data transfer.",
      "Implemented a dynamic theming system supporting multi-palette themes (Indigo, Ocean, Emerald), customizable typography, and system dark/light modes.",
      "Integrated global keyboard shortcut navigation and instant command palette (Cmd+K) for rapid tool discovery.",
      "Achieved sub-millisecond execution speeds utilizing pure TypeScript parsing engines and native Web Crypto APIs."
    ],
    architectureOverview:
      "A modern Next.js (App Router) single-page and multi-route architecture powered by React Server Components, client-side utility engines, localized storage synchronization, and modular tool registry abstractions. Employs browser-native Web Crypto APIs and Web Workers for high-throughput client-side computation.",
    keyFeatures: [
      "110+ categorized developer tools: Text, JSON, Encoding, Security, SQL, Data/CSV, and File utilities",
      "100% Client-Side Privacy: zero backend data transmission or telemetry",
      "Command Palette (Cmd+K) and real-time fuzzy search across the complete tool registry",
      "Customizable themes, palettes, font families, and interface density settings",
      "Modern responsive UI with glassmorphic accents, clean typography, and accessibility"
    ],
    challengesSolved: [
      "Engineered complex client-side parsing algorithms (JSON diffs, SQL dialect formatters, CSV tabular profilers) to execute reliably within the browser environment.",
      "Designed a pluggable, scalable tool architecture allowing rapid creation of new tools with unified state management, clipboard workflows, and error boundaries."
    ]
  },
  {
    slug: "humkinar-web-crawler",
    title: "Humkinar Web Crawler",
    tagline: "Large-scale Urdu web crawling, content extraction, and indexing engine.",
    description:
      "Developed custom Python-based web crawlers for Humkinar.pk designed to extract and index Urdu content from across the web. The system filtered and fetched Urdu news, blog posts, and articles, including targeted scraping from predefined Urdu content sources to power the platform's search index.",
    category: "web-scraping",
    categoryLabel: "Web Scraping & Search",
    technologies: ["Python", "PostgreSQL", "Selenium", "Redis", "Apache Solr", "Docker", "Git"],
    featured: true,
    liveUrl: "https://www.humkinar.pk/",
    role: "Backend & Crawler Engineer",
    organization: "KICS UET Lahore",
    period: "2017 – 2020",
    highlights: [
      "Built specialized Urdu language filtering to distinguish and isolate Urdu text from mixed-language web pages.",
      "Engineered high-concurrency crawler workers with polite rate-limiting, proxy rotation, and session management.",
      "Integrated indexing pipelines feeding raw cleaned text directly into Apache Solr for search queries.",
      "Employed Redis for real-time deduplication and queuing of newly discovered target URLs."
    ],
    architectureOverview:
      "A distributed crawler architecture built with Python worker processes that pull target URLs from a central Redis queue, execute headless browser or HTTP extractions, clean and validate Urdu text encoding, and ingest structured documents into PostgreSQL and Apache Solr.",
    keyFeatures: [
      "Custom Urdu content classification and text encoding normalization",
      "Automated extraction across dynamic news portals and static blogs",
      "High-throughput URL scheduling and deduplication with Redis",
      "Direct indexing into Apache Solr search clusters"
    ],
    challengesSolved: [
      "Handled irregular Urdu font encodings and non-standard HTML structures across diverse regional websites.",
      "Prevented crawler blocking through dynamic request scheduling and respectful concurrency controls."
    ]
  },
  {
    slug: "humkinar-search-service",
    title: "Humkinar Search Service API",
    tagline: "High-throughput search API with authentication, rate-limiting, and quota control.",
    description:
      "Designed and developed the search API service for Humkinar Urdu Search Engine, providing RESTful endpoints for third-party integrations. Implemented authentication, rate limiting, and quota management to ensure secure and controlled access to search functionalities across external consumers.",
    category: "backend-microservices",
    categoryLabel: "Backend & APIs",
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "Apache Solr", "Docker", "Git"],
    featured: true,
    liveUrl: "https://www.humkinar.pk/",
    role: "Backend Engineer",
    organization: "KICS UET Lahore",
    period: "2018 – 2020",
    highlights: [
      "Designed RESTful search endpoints queried by external clients and internal frontend portals.",
      "Built API token authentication and tiered request quota management using Redis.",
      "Optimized Solr query generation to support complex search operators in Urdu script.",
      "Implemented response caching for high-frequency queries to reduce search latency."
    ],
    architectureOverview:
      "A Django REST framework service backed by PostgreSQL for user/client quota management, Redis for token verification and rate limiting, and an Apache Solr cluster for sub-second query retrieval.",
    keyFeatures: [
      "Tiered rate limiting and quota enforcement per API key",
      "Sub-second Urdu search query dispatching against Apache Solr",
      "Usage analytics and request logging in PostgreSQL",
      "Containerized deployment using Docker"
    ],
    challengesSolved: [
      "Maintained low latency under high concurrent search traffic using Redis query caching.",
      "Prevented quota circumvention with atomic Redis counter increments."
    ]
  },
  {
    slug: "humkinar-adserver",
    title: "Humkinar Adserver",
    tagline: "Targeted ad creation, delivery logic, and Cost-Per-Placement/Impression monetization.",
    description:
      "Developed a full-featured adserver for the Humkinar Urdu Search Engine, including core functionalities such as ad creation, retrieval, and display logic based on models like CPP (Cost Per Placement) and CPI (Cost Per Impression). Designed scalable APIs and backend architecture to support targeted ad delivery within search results.",
    category: "backend-microservices",
    categoryLabel: "Backend & APIs",
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "Git"],
    featured: false,
    role: "Backend Engineer",
    organization: "KICS UET Lahore",
    period: "2018 – 2020",
    highlights: [
      "Engineered ad campaign management workflows supporting CPP and CPI pricing models.",
      "Built ad matching and auction algorithms based on search keywords and placement slots.",
      "Optimized impression and click tracking endpoints with Redis buffering to prevent database contention."
    ],
    architectureOverview:
      "A microservice architecture supporting campaign scheduling, budget tracking, real-time ad serving, and decoupled event tracking.",
    keyFeatures: [
      "Cost Per Placement (CPP) and Cost Per Impression (CPI) budget tracking",
      "Keyword-targeted ad matching for Urdu search queries",
      "High-throughput tracking endpoints for impressions and clicks"
    ]
  },
  {
    slug: "datatera-ai-platform",
    title: "Datatera Intelligent AI Agent Platform",
    tagline: "REST API backend integrating multimodal AI models into scalable workflows.",
    description:
      "Worked as a freelance backend developer for an intelligent AI agent platform, where I built REST APIs that powered the frontend system. I integrated AI models provided by the product owner to enable key capabilities such as OCR (image-to-text), speech-to-text, PDF text extraction, file format conversions, translation, summarization, keyword extraction, sentiment analysis, and document classification.",
    category: "ai-data-systems",
    categoryLabel: "AI & Data Systems",
    technologies: ["Python", "FastAPI", "AI Model Integration", "OCR", "Speech-to-Text", "NLP", "REST APIs", "Git"],
    featured: true,
    liveUrl: "https://www.datatera.ai/",
    role: "Freelance Senior Backend & AI Integration Engineer",
    period: "2023 – 2024",
    highlights: [
      "Architected asynchronous FastAPI endpoints orchestrating multiple heavy AI inference models.",
      "Integrated OCR, Speech-to-Text, and PDF parsing pipelines with multi-format export capabilities.",
      "Implemented document classification, summarization, and sentiment analysis pipelines.",
      "Engineered robust payload validation and error handling for irregular multimodal user inputs."
    ],
    architectureOverview:
      "A high-performance FastAPI microservice architecture decoupling API request ingestion from heavy ML inference tasks, providing predictable response payloads and streaming capabilities.",
    keyFeatures: [
      "Multimodal AI processing: OCR, audio transcription, NLP summarization, sentiment extraction",
      "Complex document parsing and structured data conversion",
      "Asynchronous background task processing for compute-heavy ML models",
      "Strict typed request/response contracts using Pydantic"
    ],
    challengesSolved: [
      "Mitigated memory overhead and execution bottlenecks when running simultaneous OCR and audio transcription pipelines.",
      "Provided unified API interfaces for heterogeneous ML models."
    ]
  },
  {
    slug: "kinto-hr-backend",
    title: "KintoHR Multi-Tenant HRMS",
    tagline: "Subdomain-isolated multi-tenant HR platform with role-based access control.",
    description:
      "Multi-tenant HR Management System developed using FastAPI and Tortoise ORM. Enables organizations to manage employees, departments, designations, and profiles across companies via unique subdomains. Features role-based access control (Super Admin, HR Manager), employee onboarding, and department leadership assignment.",
    category: "backend-microservices",
    categoryLabel: "Backend & Microservices",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Tortoise ORM", "Docker", "Git"],
    featured: true,
    githubUrl: "https://github.com/usama124/kinto-hr-be",
    role: "Lead Backend Architect",
    period: "2024",
    highlights: [
      "Designed subdomain-based tenant routing and schema isolation using Tortoise ORM.",
      "Implemented granular Role-Based Access Control (RBAC) across organizational tiers.",
      "Built employee lifecycle management: onboarding, department hierarchies, and manager assignments.",
      "Authored clean modular architecture with clear service and repository layers."
    ],
    architectureOverview:
      "A FastAPI asynchronous backend with dynamic tenant identification via HTTP host headers, querying isolated tenant data stores in PostgreSQL via Tortoise ORM.",
    keyFeatures: [
      "Subdomain multi-tenancy with dynamic context resolution",
      "Hierarchical Role-Based Access Control (Super Admin, HR Admin, Manager, Employee)",
      "Department and organizational unit structuring",
      "Asynchronous database interactions with Tortoise ORM and PostgreSQL"
    ],
    challengesSolved: [
      "Ensured zero cross-tenant data leakage by enforcing tenant context verification at the middleware layer.",
      "Maintained rapid response times with asynchronous async/await database queries."
    ]
  },
  {
    slug: "ai-based-basketball-coaching-backend",
    title: "AI Based Basketball Coaching Platform",
    tagline: "Backend microservices, workout submission pipelines, and payment automation on AWS.",
    description:
      "Engineered the backend of a basketball coaching app using Django, FastAPI, PostgreSQL, and Docker-based microservices. Implemented core business logic, APIs, Twilio-powered messaging, and subscription/payment automation, ensuring a secure and scalable backend architecture.",
    category: "backend-microservices",
    categoryLabel: "Backend & Microservices",
    technologies: ["Python", "Django", "FastAPI", "PostgreSQL", "AWS (SES, S3, CloudFront, Lambda)", "Docker", "Stripe", "Twilio", "Git"],
    featured: true,
    role: "Senior Software Engineer",
    organization: "FiveRivers Technologies",
    period: "2021 – 2023",
    highlights: [
      "Engineered workout review and scoring backend workflows for coaches and athletic players.",
      "Automated subscription management and recurring billing using Stripe webhooks.",
      "Integrated Twilio for transactional SMS and automated notification workflows.",
      "Configured secure asset storage and video streaming links via AWS S3 and CloudFront."
    ],
    architectureOverview:
      "A hybrid Django & FastAPI microservices backend deployed on AWS infrastructure utilizing S3 for media storage, SES for transactional emails, and Lambda for serverless task triggers.",
    keyFeatures: [
      "Coach-to-athlete workout evaluation and scoring workflows",
      "Automated Stripe subscription lifecycles and invoice handling",
      "Real-time SMS and push notification dispatches via Twilio",
      "Secure AWS media management with pre-signed URLs"
    ],
    challengesSolved: [
      "Ensured seamless handling of concurrent video uploads and workout reviews through distributed AWS S3 pipelines."
    ]
  },
  {
    slug: "etl-pipeline-application",
    title: "Enterprise ETL Data Pipeline Engine",
    tagline: "Flexible ETL data integration supporting multiple heterogeneous sources and destinations.",
    description:
      "Developed a flexible ETL-based data integration system supporting multiple data sources and destinations. Designed dynamic pipelines to extract, transform, and load data, with support for scheduling, source-specific processing, and automated delivery to various target systems.",
    category: "ai-data-systems",
    categoryLabel: "AI & Data Systems",
    technologies: ["Python", "FastAPI", "Apache Airflow", "PostgreSQL", "ClickHouse", "Docker", "Git"],
    featured: true,
    role: "Senior Software Engineer",
    organization: "FiveRivers Technologies",
    period: "2023 – Present",
    highlights: [
      "Engineered dynamic data extraction adapters for relational, columnar, and file-based data stores.",
      "Integrated Apache Airflow DAGs for automated workflow scheduling and failure recovery.",
      "Utilized ClickHouse for fast analytical querying over aggregated ingestion datasets.",
      "Built FastAPI management endpoints allowing dynamic configuration of pipeline schedules."
    ],
    architectureOverview:
      "An event-driven ETL architecture utilizing Apache Airflow for DAG scheduling, Python worker tasks for data transformation, and dual-store persistence in PostgreSQL (metadata) and ClickHouse (high-volume analytics).",
    keyFeatures: [
      "Dynamic source-to-destination mapping and field transformation",
      "Resilient failure retries and execution alerting via Airflow",
      "High-throughput analytical storage in ClickHouse",
      "RESTful administrative API for pipeline orchestration"
    ]
  },
  {
    slug: "hermes-sensor-pipeline",
    title: "Hermes Industrial Sensor Ingest & Fault Detection",
    tagline: "Time-series telemetry ingestion and ML predictive fault detection pipeline.",
    description:
      "Core service to ingest high-volume time series data from sensors, process it through data cleaning pipelines, and run ML models for fault detection in oil & gas industries and weather prediction in environmental sectors.",
    category: "ai-data-systems",
    categoryLabel: "AI & Data Systems",
    technologies: ["Python", "Flask", "PostgreSQL", "Time-Series Data", "Docker", "Machine Learning", "Git"],
    featured: false,
    role: "Senior Software Engineer",
    organization: "FiveRivers Technologies",
    period: "2021 – 2022",
    highlights: [
      "Built high-frequency ingestion endpoints capable of handling continuous industrial telemetry.",
      "Implemented time-series cleaning, interpolation, and anomaly filtering algorithms.",
      "Integrated predictive machine learning models for early hardware fault classification.",
      "Structured time-series database indexing in PostgreSQL for rapid interval reporting."
    ],
    architectureOverview:
      "A Flask-based ingestion microservice with streaming data cleaning pipelines connected to ML fault detection evaluators and indexed PostgreSQL storage.",
    keyFeatures: [
      "High-volume sensor time-series ingestion",
      "Predictive fault detection models for industrial equipment",
      "Automated sensor calibration anomaly alerts",
      "Historical trend reporting endpoints"
    ]
  },
  {
    slug: "ehr-backend-base",
    title: "Electronic Health Record (EHR) Backend Base",
    tagline: "Secure EHR backend with role-based access control and medical record management.",
    description:
      "Developed the initial backend architecture for an EHR software using Python FastAPI, including user authentication, role-based access control for doctors, patients, and receptionists, and modules for medical record management, ensuring secure and structured healthcare data handling.",
    category: "backend-microservices",
    categoryLabel: "Backend & Microservices",
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Git"],
    featured: false,
    githubUrl: "https://github.com/usama124/ehr_v2_base",
    role: "Backend Engineer",
    period: "2023",
    highlights: [
      "Implemented strict HIPAA-conscious role-based authorization for doctors, patients, and staff.",
      "Built medical record schemas, encounter tracking, and prescription storage using SQLAlchemy.",
      "Implemented JWT authentication with token revocation and encrypted patient identifiers."
    ],
    architectureOverview:
      "A modular FastAPI application with SQLAlchemy ORM, Alembic migrations, and PostgreSQL data persistence.",
    keyFeatures: [
      "Doctor, Patient, and Receptionist role separation",
      "Medical records, diagnostic encounters, and prescription modules",
      "Clean repository pattern with typed Pydantic schemas"
    ]
  },
  {
    slug: "political-sentiment-analysis",
    title: "Political Sentiment Analysis & Visualization System",
    tagline: "Real-time Twitter NLP pipeline and geospatial sentiment trend visualizations.",
    description:
      "Developed a system to analyze Twitter data for political sentiment using NLP techniques. Designed the backend pipeline to collect, process, and classify tweets, and built interactive visualizations to display sentiment trends over time across different political entities and topics.",
    category: "ai-data-systems",
    categoryLabel: "AI & Data Systems",
    technologies: ["Python", "Twitter API", "PostgreSQL", "Redis", "NLP Classifier", "Docker", "Git"],
    featured: false,
    role: "Backend & NLP Pipeline Engineer",
    organization: "KICS UET Lahore",
    period: "2018 – 2019",
    highlights: [
      "Created continuous Twitter streaming consumers capturing political discussions.",
      "Built NLP sentiment classification pipeline categorizing public stance and sentiment polarity.",
      "Designed time-series aggregation schemas in PostgreSQL and Redis for dashboard charts."
    ],
    architectureOverview:
      "Twitter API ingestion streaming into sentiment classification pipelines, persisting structured aggregates to PostgreSQL and Redis for dashboard rendering.",
    keyFeatures: [
      "Automated tweet stream harvesting and cleaning",
      "NLP polarity classification across political topics",
      "Temporal sentiment trend aggregation"
    ]
  },
  {
    slug: "epidemic-surveillance-system",
    title: "Epidemic Surveillance & Outbreak Detection System",
    tagline: "Early epidemiological detection using social streams and news ingestion pipelines.",
    description:
      "Built a real-time epidemic monitoring system using data from Twitter and news sources, focusing on early detection of disease outbreaks. Implemented data collection pipelines, keyword-based filtering, and classification models to identify health-related trends, with dashboards for visualization and alerting.",
    category: "ai-data-systems",
    categoryLabel: "AI & Data Systems",
    technologies: ["Python", "Twitter API", "PostgreSQL", "Redis", "NLP Models", "Docker", "Git"],
    featured: false,
    role: "Research Officer / Backend Engineer",
    organization: "KICS UET Lahore",
    period: "2017 – 2019",
    highlights: [
      "Constructed multi-source ingestion crawlers gathering regional news and social media signals.",
      "Implemented keyword classification algorithms targeting infectious disease symptoms.",
      "Developed backend alerting triggers when symptom frequency exceeded regional baseline thresholds."
    ],
    architectureOverview:
      "Multi-source streaming pipeline feeding epidemiological keyword classifiers, backed by PostgreSQL spatial-temporal queries.",
    keyFeatures: [
      "Real-time social and news ingestion",
      "Symptom keyword classification models",
      "Automated outbreak threshold alerting"
    ]
  },
  {
    slug: "dataprep-ai-service",
    title: "DataPrep AI Data Processing Microservice",
    tagline: "Distributed data exploration, cleaning, and preprocessing for ML training sets.",
    description:
      "Core service for exploring, cleaning, and preparing structured and unstructured data for analysis, reporting, and machine learning in AI projects.",
    category: "ai-data-systems",
    categoryLabel: "AI & Data Systems",
    technologies: ["Python", "Django", "PostgreSQL", "Dask", "Docker", "Git"],
    featured: false,
    role: "Senior Software Engineer",
    organization: "FiveRivers Technologies",
    period: "2021 – 2022",
    highlights: [
      "Integrated Dask for parallel data transformations across large tabular datasets.",
      "Created modular cleaning recipes (null handling, normalization, categorical encoding).",
      "Built REST endpoints for dispatching asynchronous preparation jobs."
    ]
  },
  {
    slug: "dataset-catalog",
    title: "Dataset Catalog Service",
    tagline: "Centralized metadata management and lineage tracking across data lakes.",
    description:
      "Core service managing information on datasets used by different services and ingested at storage.",
    category: "backend-microservices",
    categoryLabel: "Backend & Microservices",
    technologies: ["Python", "Flask", "PostgreSQL", "Docker", "Git"],
    featured: false,
    role: "Senior Software Engineer",
    organization: "FiveRivers Technologies",
    period: "2021 – 2022",
    highlights: [
      "Engineered schema registry and dataset version tracking endpoints.",
      "Standardized metadata schemas across internal microservices.",
      "Delivered reliable PostgreSQL relational models for data lineage."
    ]
  },
  {
    slug: "ml-metastore",
    title: "ML-Metastore Tracking Service",
    tagline: "Data science experiment tracking and artifact metadata registry.",
    description:
      "Core service tracking activities conducted by data scientists and storing their metadata.",
    category: "ai-data-systems",
    categoryLabel: "AI & Data Systems",
    technologies: ["Python", "Django", "MongoDB", "Docker", "Git"],
    featured: false,
    role: "Senior Software Engineer",
    organization: "FiveRivers Technologies",
    period: "2021 – 2022",
    highlights: [
      "Stored flexible unstructured experiment metadata in MongoDB.",
      "Provided high-performance REST APIs for querying model runs and evaluation metrics.",
      "Maintained experiment lineage from raw datasets to finalized model artifacts."
    ]
  },
  {
    slug: "foundation-data-ingest",
    title: "Foundation Data Ingest Utility",
    tagline: "Cross-service data connector orchestrator and pipeline transfer utility.",
    description:
      "Utility offering connectors to transfer data between services and managing data pipelines.",
    category: "ai-data-systems",
    categoryLabel: "AI & Data Systems",
    technologies: [".NET Core", "Python", "PostgreSQL", "Docker", "Git"],
    featured: false,
    role: "Software Engineer",
    organization: "FiveRivers Technologies",
    period: "2020 – 2021",
    highlights: [
      "Engineered data connectors bridging heterogeneous database endpoints.",
      "Provided scheduled data transfer execution and validation logging."
    ]
  },
  {
    slug: "custom-web-scraping-suite",
    title: "Enterprise Web Scraping & Automation Suite",
    tagline: "High-volume data extraction for e-commerce, catalogs, and dynamic web applications.",
    description:
      "Developed custom web scrapers for a wide range of websites, including e-commerce platforms, price comparison sites, and product catalogs. Handled both static and dynamic content scraping using Requests, BeautifulSoup, lxml, Selenium, Playwright, and Scrapy. Extracted and structured data based on client requirements, delivering results in formats like Excel, CSV, or JSON while resolving pagination, login sessions, captchas, and JavaScript-rendered content.",
    category: "web-scraping",
    categoryLabel: "Web Scraping & Automation",
    technologies: ["Python", "Selenium", "Playwright", "Scrapy", "Requests", "BeautifulSoup", "lxml"],
    featured: false,
    role: "Automation & Scraping Specialist",
    period: "2019 – Present",
    highlights: [
      "Built resilient scrapers capable of overcoming complex anti-bot protections and headless JS execution.",
      "Extracted thousands of multi-tier product catalog hierarchies with custom validation pipelines.",
      "Exported cleaned data into structured JSON, CSV, and relational database formats."
    ]
  },
  {
    slug: "fancoin-sports-ticketing-backend",
    title: "Fancoin Stadium Ticketing & Seat Booking",
    tagline: "Real-time multi-stadium reservation and Stripe transaction backend.",
    description:
      "Built a sports ticketing and seat booking application for managing reservations across multiple stadiums. Implemented features for event selection, real-time seat availability, and secure booking workflows to enhance the fan experience and streamline stadium operations.",
    category: "backend-microservices",
    categoryLabel: "Backend & Web Applications",
    technologies: ["Python", "Django", "Stripe", "PostgreSQL", "Docker", "Git"],
    featured: false,
    role: "Backend Engineer",
    period: "2022",
    highlights: [
      "Designed real-time seat reservation locking mechanism to prevent double bookings.",
      "Integrated Stripe payments for ticket checkouts and automated invoice receipts.",
      "Structured stadium seating charts, section tiers, and price rules in PostgreSQL."
    ]
  },
  {
    slug: "paybag-parcel-delivery-backend",
    title: "Paybag P2P International Parcel Logistics",
    tagline: "Peer-to-peer package logistics backend with bidding, matching, and Stripe escrow.",
    description:
      "Developed the backend for a parcel delivery platform enabling users to send and receive packages overseas through individual travelers. Implemented features such as bidding on packages, traveler matching, secure communication, and transaction handling to support a peer-to-peer logistics model.",
    category: "backend-microservices",
    categoryLabel: "Backend & Web Applications",
    technologies: ["Python", "Django", "PostgreSQL", "Twilio", "Stripe", "Docker", "Git"],
    featured: false,
    role: "Backend Developer",
    period: "2021 – 2022",
    highlights: [
      "Built bidding and match-making algorithms between shippers and international travelers.",
      "Integrated Stripe payment holds/escrow logic released upon confirmed delivery.",
      "Implemented automated SMS notifications and updates using Twilio."
    ]
  },
  {
    slug: "overmind-server-automation",
    title: "Overmind Server & WordPress Automation",
    tagline: "GUI server management application automating WordPress setup and domain routing.",
    description:
      "Developed the backend for Overmind, a server management application that automates WordPress setup and configuration through a user-friendly GUI. Enabled users to install WordPress, manage versions, plugins, libraries, and handle multiple domains without using terminal commands. Integrated with DirectAdmin to streamline server and domain management.",
    category: "backend-microservices",
    categoryLabel: "Backend & Infrastructure Automation",
    technologies: ["Python", "FastAPI", "Django", "PostgreSQL", "SQLAlchemy", "DirectAdmin", "Git"],
    featured: false,
    role: "Backend Engineer",
    period: "2023",
    highlights: [
      "Automated server-side shell operations and database provisioning via DirectAdmin API integrations.",
      "Built one-click WordPress installation, core updates, and plugin management workflows.",
      "Provided clean REST endpoints allowing GUI frontend to query live server health and domain statuses."
    ]
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "backend-microservices", label: "Backend & Microservices" },
  { id: "ai-data-systems", label: "AI & Data Systems" },
  { id: "web-scraping", label: "Web Scraping & Search" },
  { id: "web-applications", label: "Web Applications" },
];

