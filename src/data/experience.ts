import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    id: "fiverivers-technologies",
    company: "FiveRivers Technologies",
    role: "Senior Software Engineer",
    employmentType: "Full-time",
    period: "11/2020 – Present",
    startDate: "2020-11",
    endDate: "Present",
    location: "Lahore, Pakistan",
    summary:
      "Promoted from Software Engineer to Senior Software Engineer. Leading backend REST API and data engineering development for critical machine learning infrastructure, microservices, and distributed cloud applications.",
    responsibilities: [
      "Developing and maintaining high-throughput, secure RESTful APIs using Django, Flask, and FastAPI within a decoupled microservices architecture.",
      "Designing and optimizing complex PostgreSQL database schemas, indexing strategies, partition plans, and data migrations for distributed services.",
      "Architecting backend components for an enterprise Data Engineering ETL pipeline, enabling reliable ingestion from heterogeneous sources and automated delivery to multiple target destinations.",
      "Collaborating on the frontend using React.js to build dynamic, responsive UI components and integrate RESTful backend microservices.",
      "Participating in backend system architecture planning, driving code quality through rigorous peer reviews, refactoring, documentation, and automated testing.",
      "Contributing to CI/CD pipeline enhancements, implementing strict semantic API versioning, and deploying system monitoring and observability tools."
    ],
    keyProjects: [
      {
        name: "ETL Application & Pipeline Architecture",
        description: "Flexible ETL data integration system supporting multiple sources and destinations with automated scheduling via Apache Airflow, PostgreSQL, and ClickHouse.",
        technologies: ["Python", "FastAPI", "Apache Airflow", "PostgreSQL", "ClickHouse"],
      },
      {
        name: "AI Based Basketball Coaching App",
        description: "Engineered scalable backend microservices, workout submission pipelines, Twilio messaging alerts, and Stripe recurring payment automation on AWS.",
        technologies: ["Python", "Django", "FastAPI", "PostgreSQL", "AWS (SES, S3, CloudFront, Lambda)", "Docker"],
      },
      {
        name: "DataPrep & Dataset-Catalog Services",
        description: "Core microservices for exploring, cleaning, and cataloging structured and unstructured datasets for enterprise AI and analytics initiatives.",
        technologies: ["Python", "Django", "Flask", "Dask", "PostgreSQL", "Docker"],
      },
      {
        name: "ML-Metastore",
        description: "Metadata tracking and experiment activity registry service for data science workflows and model management.",
        technologies: ["Python", "Django", "MongoDB", "Docker"],
      },
      {
        name: "Hermes Time-Series Telemetry & Anomaly Detection",
        description: "High-volume time-series data ingestion engine from industrial sensors with data cleaning pipelines and ML fault detection models.",
        technologies: ["Python", "Flask", "PostgreSQL", "Time-Series Data", "Docker"],
      },
      {
        name: "Foundation Data Ingest",
        description: "Cross-service data transfer utility and data connector orchestrator.",
        technologies: [".NET Core", "Python", "PostgreSQL", "Docker"],
      },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "PostgreSQL",
      "ClickHouse",
      "MongoDB",
      "Redis",
      "Apache Airflow",
      "Docker",
      "AWS",
      "React.js",
      "CI/CD",
      "Git",
    ],
  },
  {
    id: "kics-uet",
    company: "Al-Khawarizmi Institute of Computer Science (KICS), UET Lahore",
    role: "Research Officer (Backend Developer)",
    employmentType: "Full-time",
    period: "06/2017 – 10/2020",
    startDate: "2017-06",
    endDate: "2020-10",
    location: "Lahore, Pakistan",
    summary:
      "Engineered backend systems, real-time web crawlers, search index services, and big data surveillance platforms for high-impact search and natural language processing research initiatives.",
    responsibilities: [
      "Engineered large-scale Python web crawlers for Humkinar.pk to extract, clean, and structure Urdu-language news, blogs, and articles from across the web.",
      "Integrated search indexing with Apache Solr and implemented Redis caching layers for sub-second search response times on the Humkinar search engine.",
      "Designed and implemented the Humkinar Search API service with authentication, rate limiting, and subscription quota management for third-party consumers.",
      "Developed the Humkinar Adserver system featuring Cost-Per-Placement (CPP) and Cost-Per-Impression (CPI) campaign logic and targeted ad delivery APIs.",
      "Built real-time Twitter data ingestion pipelines using Twitter APIs, feeding sentiment classification and epidemic surveillance models.",
      "Implemented database schemas, REST APIs, and visualization dashboards for public health alerting and political sentiment trend analysis."
    ],
    keyProjects: [
      {
        name: "Humkinar Web Crawler & Search Engine",
        description: "Custom Urdu web crawlers, Apache Solr indexing pipeline, and Redis caching infrastructure.",
        technologies: ["Python", "PostgreSQL", "Selenium", "Redis", "Apache Solr", "Docker"],
      },
      {
        name: "Humkinar Search Service & Adserver",
        description: "Search API service with request throttling, monetization plans, and targeted ad placement engine.",
        technologies: ["Python", "Django", "PostgreSQL", "Redis", "Solr", "Docker"],
      },
      {
        name: "Epidemic Surveillance System",
        description: "Real-time Twitter data ingestion and NLP classification pipeline for early infectious disease outbreak detection and alerting.",
        technologies: ["Python", "Twitter API", "PostgreSQL", "Redis", "NLP Classifier", "Docker"],
      },
      {
        name: "Political Sentiment Analysis & Visualization System",
        description: "Real-time social media sentiment extraction, NLP sentiment classification, and regional trend visualization dashboards.",
        technologies: ["Python", "Twitter API", "PostgreSQL", "Redis", "Docker"],
      },
    ],
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "Apache Solr",
      "Redis",
      "Selenium",
      "Docker",
      "REST APIs",
      "NLP Pipelines",
      "Git",
    ],
  },
];

