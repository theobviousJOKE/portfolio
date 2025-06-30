/* 12 projects – 10 AI/ML + 2 Consultancy  */
const projects = [
  {
    title: "Credit Card Default Prediction",
    description:
      "End-to-end tabular ML pipeline to predict credit-card payment defaults. Extensive feature engineering, SMOTE, CatBoost ensemble (F2 = 0.57, ROC-AUC = 0.74).",
    image: "assets/credit_card_default.jpg",
    tags: ["Tabular", "Ensemble", "SMOTE", "CatBoost"],
    type: "tabular",
    github: "https://github.com/theobviousJOKE/Credit-Card-Default-Prediction-"
  },
  {
    title: "Allien Messages Classification",
    description:
      "Transformer-based text-classification pipeline that deciphers synthetic ‘alien’ messages after advanced preprocessing and tokenisation.",
    image: "assets/alien_messages.jpg",
    tags: ["NLP", "Transformers", "Text-Cls"],
    type: "nlp",
    github: "https://github.com/theobviousJOKE/allien_messages_classification"
  },
  {
    title: "Sound-Based Drone Fault Classification",
    description:
      "Audio-signal workflow using Librosa, MFCCs & CNNs to detect mechanical faults in drones purely from sound recordings.",
    image: "assets/drone_fault.jpg",
    tags: ["Audio", "MFCC", "CNN"],
    type: "audio",
    github: "https://github.com/theobviousJOKE/Sound_Based_Drone_Fault_Classification"
  },
  {
    title: "Non-Spherical Bead Detection",
    description:
      "Industrial CV system leveraging OpenCV + YOLOv8 to flag non-spherical polymer beads on a high-speed conveyor.",
    image: "assets/bead_detection.jpg",
    tags: ["CV", "YOLOv8", "Object-Detect"],
    type: "cv",
    github: "https://github.com/theobviousJOKE/non-spherical-bead-detection"
  },
  {
    title: "NLP-Based LinkedIn Profile Matcher",
    description:
      "Matches LinkedIn profiles to job specs with semantic-similarity scoring and custom sequence models.",
    image: "assets/linkedin_matcher.jpg",
    tags: ["NLP", "Semantic-Match"],
    type: "nlp",
    github: "https://github.com/theobviousJOKE/NLP_GCTech_PS"
  },
  {
    title: "Transformer —from Scratch",
    description:
      "Clean-room implementation of the original transformer (attention, positional encoding, custom training loop).",
    image: "assets/transformer.jpg",
    tags: ["NLP", "Attention", "Deep-Learning"],
    type: "nlp",
    github: "https://github.com/theobviousJOKE/transformer"
  },
  {
    title: "Demographic & Behavioral Inference (No PII)",
    description:
      "Privacy-preserving pipeline that infers demographics/behaviour without personal identifiers; winner of Synapse Hackathon PS-4.",
    image: "assets/demographic_inference.jpg",
    tags: ["Tabular", "Privacy"],
    type: "tabular",
    github: "https://github.com/theobviousJOKE/synapse_hackathon_PS4"
  },
  {
    title: "FidelFolio Market-Cap Growth Forecasting",
    description:
      "Advanced time-series model with feature engineering & Prophet-style regressors to forecast market-cap growth.",
    image: "assets/marketcap_forecast.jpg",
    tags: ["Forecasting", "Time-Series"],
    type: "forecasting",
    github: "https://github.com/theobviousJOKE/FidelFolio"
  },
  {
  title: "Reinforcement Learning Procurement Optimizer",
  description: "RL agent that minimises procurement cost under supply-chain constraints.",
  image: "assets/rl_procurement.jpg",
  tags: ["Reinforcement", "RL", "Optimization"],
  type: "reinforcement",          //  ← lowercase, matches button above
  github: ""
  },

  {
    title: "Inventory Forecasting Optimisation Model",
    description:
      "Hybrid ML + optimisation solution forecasting SKU-level demand and suggesting reorder points.",
    image: "assets/inventory_forecast.jpg",
    tags: ["Forecasting", "Supply-Chain"],
    type: "forecasting",
    github: ""
  },
  /* ——— CONSULTANCY ——— */
  {
    title: "3D/VR Solutions for Real-Estate & Campus Design",
    description:
      "Built immersive Web-GL & VR walkthroughs enabling clients to visualise, iterate and sell spaces faster.",
    image: "assets/consultancy_realestate_vr.jpg",
    tags: ["Consultancy", "3D", "VR"],
    type: "consultancy",
    github: ""
  },
  {
    title: "Boosting Revenue in Urban Food Courts",
    description:
      "Applied customer-flow analytics & AI pricing strategies that lifted average ticket size by 18 %.",
    image: "assets/consultancy_foodcourt.jpg",
    tags: ["Consultancy", "Analytics", "Growth"],
    type: "consultancy",
    github: ""
  }
];
