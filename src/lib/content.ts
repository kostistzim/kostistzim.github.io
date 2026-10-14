export const person = {
  name: "Konstantinos Tzimoulias",
  nickname: "Kostis",
  role: "AI engineer in training · MSc Human-Centered AI, DTU",
  city: "Copenhagen",
  email: "kostis.tzim@gmail.com",
  github: "https://github.com/kostistzim",
  linkedin: "https://www.linkedin.com/in/konstantinos-tzimoulias-739547235/",
  availability: "Part-time alongside the MSc now, full-time from February 2027.",
};

export type Project = {
  name: string;
  url: string;
  year: string;
  line: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "NLP, LLMOps & Knowledge Graphs",
    url: "https://github.com/kostistzim/NLP-LLMOps-KnowledgeGraphs-DTU",
    year: "2026",
    line:
      "Seven containerised FastAPI services: sentiment, PDF-to-sentences, LLM person extraction, Wikidata linking, hybrid retrieval, RAG, and CourseCompass, a prerequisite knowledge graph of DTU courses with LLM-explained study paths.",
    stack: ["FastAPI", "Docker", "RAG", "Wikidata", "FAISS", "NetworkX"],
  },
  {
    name: "Data systems from first principles",
    url: "https://github.com/kostistzim/data-systems-from-first-principles",
    year: "2026",
    line:
      "A small feature store built piece by piece for a DTU special course on Designing Data-Intensive Applications: storage, replication, sharding, batch and stream processing, online serving, lineage.",
    stack: ["Python", "storage engines", "replication", "sharding"],
  },
  {
    name: "Winning Ticket Hypothesis study",
    url: "https://github.com/kostistzim/Winning-Ticket-Hypothesis-Study",
    year: "2025",
    line:
      "One experimental framework for iterative magnitude pruning across LeNet-300-100, CNNs, VGG and few-shot BERT, with configs, result logs and plots.",
    stack: ["PyTorch", "pruning", "BERT"],
  },
  {
    name: "Plant leaf classification, end-to-end MLOps",
    url: "https://github.com/kostistzim/Plant_Leaves_Classification_MLOps_DTU02476",
    year: "2025",
    line:
      "Fine-tuned EfficientNet in a reproducible pipeline with data versioning, experiment tracking, CI/CD and a deployed Streamlit interface. Group project for DTU 02476.",
    stack: ["timm", "Hydra", "DVC", "MLflow", "GitHub Actions", "Google Cloud"],
  },
  {
    name: "Mortality prediction with Mamba on ICU time series",
    url: "https://github.com/kostistzim/EHR-Mamba-Classification-on-ICU-Data",
    year: "2024",
    line:
      "Selective state-space models for mortality-risk classification on PhysioNet 2012 records, evaluated by AUROC with cross-validation. DTU 02456 project.",
    stack: ["PyTorch", "Mamba", "PhysioNet"],
  },
];

export type Role = {
  title: string;
  org: string;
  place: string;
  kind: string;
  start: string; // YYYY-MM
  end?: string; // YYYY-MM, undefined = present
  line?: string;
  current?: boolean;
};

export const roles: Role[] = [
  {
    title: "AI / Data Science Intern",
    org: "Amass",
    place: "Copenhagen",
    kind: "Student role",
    start: "2026-01",
    line: "Applied LLM and data-science work at a life-science data company. Project details are not public.",
    current: true,
  },
  {
    title: "Student Data Scientist / Guest Researcher",
    org: "DTU & Danmarks Statistik",
    place: "Lyngby / Copenhagen",
    kind: "Research collaboration",
    start: "2025-09",
    line: "Large-scale modelling of Danish energy consumption: statistical analysis, classical ML, time-series features, clustering, reproducible extraction.",
    current: true,
  },
  {
    title: "Teaching Assistant, Machine Learning Operations",
    org: "DTU",
    place: "Lyngby",
    kind: "Three-week course",
    start: "2026-01",
    end: "2026-01",
    line: "Reproducible pipelines, containerisation, CI/CD and cloud deployment; guided students through versioning data and experiments and debugging cloud workflows.",
  },
  {
    title: "Software Engineer Intern",
    org: "Interhuman AI",
    place: "Copenhagen",
    kind: "Internship",
    start: "2025-06",
    end: "2025-09",
    line: "Cloud-native API on Google Cloud for long-running clinical video analysis: FastAPI, ARQ, Redis and Docker on Cloud Run; moved the vision pipeline from OpenFace to MediaPipe for licensing.",
  },
  {
    title: "Private Tutor",
    org: "University and high-school students",
    place: "Greece",
    kind: "Part-time",
    start: "2017-09",
    end: "2023-06",
    line: "Calculus, linear algebra, differential equations and statistics.",
  },
];

export const education = [
  {
    title: "MSc Human-Centered Artificial Intelligence",
    org: "Technical University of Denmark",
    start: "2024-09",
    end: "2027-01",
    note: "Expected January 2027. Coursework in ML and data mining, deep learning, MLOps, Bayesian ML, time series, NLP and knowledge graphs, UX design; credit courses at the University of Copenhagen in advanced deep learning and NLP.",
  },
  {
    title: "Special course: AI Systems from First Principles",
    org: "DTU",
    start: "2026-02",
    end: "2026-06",
    note: "Data-system concepts implemented from scratch after Designing Data-Intensive Applications.",
  },
  {
    title: "BSc Mathematics (Hons)",
    org: "National and Kapodistrian University of Athens",
    start: "2017-09",
    end: "2022-06",
  },
  {
    title: "Erasmus exchange",
    org: "University of Ostrava, Czech Republic",
    start: "2021-02",
    end: "2021-07",
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: "Languages & frameworks", items: ["Python", "SQL", "FastAPI", "PyTorch", "PyTorch Lightning", "asyncio"] },
  { label: "ML & statistics", items: ["regression", "clustering", "forecasting", "PCA", "Bayesian methods", "hypothesis testing"] },
  { label: "LLM systems", items: ["BAML", "prompt and schema design", "LLM evaluation", "RAG", "knowledge graphs", "Wikidata"] },
  { label: "Cloud & MLOps", items: ["Google Cloud", "Cloud Run", "Docker", "GitHub Actions", "DVC", "MLflow", "Hydra", "W&B"] },
  { label: "Spoken", items: ["Greek (native)", "English (full professional)", "Danish (learning)"] },
];

export const activities = [
  { when: "2025 – now", what: "Mentee in the Halfspace AI mentorship programme." },
  { when: "2025", what: "Technical volunteer at EurIPS 2025, Copenhagen." },
  { when: "Off duty", what: "No-gi jiu-jitsu competitor, hiking, drums." },
];

export const thesis = {
  when: "Planned · expected January 2027",
  text:
    "Planned in collaboration with Amass. The likely direction is knowledge-grounded AI for life-science workflows: biomedical knowledge graphs, ontology-based integration, provenance, retrieval and LLM reasoning. Neither the title nor the final scope is fixed yet.",
};
