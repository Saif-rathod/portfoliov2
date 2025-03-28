import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cryptoCrowdImg from "@/public/cryptocrowd2.png";
import ozdevsImg from "@/public/ozdevs-two.png";
import assetTradingImg from "@/public/asset-trading.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public/pirategpt.png";
import stockifyImg from "@/public/stockify.png";
import nephropredImg from "@/public/nephropred.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer Intern",
    location: "Pyramid Solutions (On-site)",
    description:
      "Working on scalable web application AMORA from scratch. Enhancing system efficiency through optimized database queries.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2025 - Present",
  },
  {
    title: "AI Web Developer",
    location: "AISUGGESTED (Remote)",
    description:
      "Curated and added 100+ AI tools, increasing reach by 40% for the Phoenix platform. Implemented automation scripts for tool integration, reducing manual workload by 60%.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - September 2024",
  },
  {
    title: "ML Intern",
    location: "CodeClause (Remote)",
    description:
      "Developed Machine Learning and Computer Vision projects. Optimized deep learning models, improving accuracy by 25%.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2023 - December 2023",
  },
] as const;

export const majorProjectsData = [
  {
    title: "Stockify",
    description: "Developed a Tesla Stock price prediction model using data from January 1, 2020, to January 1, 2023, covering 1,096 days. Achieved an R² score of 0.95 and MSE of 10.5 on the training set, and an R² score of 0.93 and MSE of 12.3 on the test set.",
    tags: ["Python", "Machine Learning", "Data Analysis", "Pandas", "Scikit-learn"],
    icon: "logos:python",
    github: "https://github.com/Saif-rathod/Stockify",
    imageUrl: assetTradingImg,
  },
  {
    title: "NephroPred.AI",
    description: "This project focuses on leveraging machine learning to analyze a chronic kidney disease dataset. It encompasses data preprocessing, feature engineering, and model development to predict patient outcomes. The goal is to create a robust predictive model that aids in early diagnosis and enhances decision-making for chronic kidney disease management.",
    tags: ["Python", "Machine Learning", "Healthcare", "Data Science"],
    icon: "logos:python",
    github: "https://github.com/Saif-rathod/NephroPred.AI",
    imageUrl: euphorusBackendImg,
  },
  {
    title: "GPT-like",
    description: "Custom large language model implementation with transformer architecture, attention mechanisms, and efficient tokenization. Features include context window management, temperature sampling, and beam search decoding.",
    tags: ["Python", "PyTorch", "Transformers", "NLP", "Deep Learning"],
    icon: "logos:openai-icon",
    github: "https://github.com/yourusername/gpt-like",
    imageUrl: euphorusBackendImg,
  },
  {
    title: "NeuralNetinC",
    description: "Low-level neural network implementation in C, featuring backpropagation, gradient descent, and various activation functions. Includes matrix operations, memory management, and performance optimizations.",
    tags: ["C", "Neural Networks", "Machine Learning", "Mathematics"],
    icon: "logos:c",
    github: "https://github.com/yourusername/neuralnetinc",
    imageUrl: cryptoCrowdImg,
  },
  {
    title: "HealthCarePlus",
    description: "Advanced healthcare platform with AI diagnostics, sentiment analysis, and patient monitoring. Features include real-time health tracking, predictive analytics, and secure data management.",
    tags: ["Python", "TensorFlow", "Healthcare", "AI", "Security"],
    icon: "logos:python",
    github: "https://github.com/yourusername/healthcareplus",
    imageUrl: ozdevsImg,
  },
  {
    title: "MLTradingBot",
    description: "AI-powered trading system with real-time market analysis, predictive modeling, and automated trading strategies. Includes risk management, portfolio optimization, and market sentiment analysis.",
    tags: ["Python", "TensorFlow", "Finance", "AI", "Trading"],
    icon: "logos:python",
    github: "https://github.com/yourusername/aitrading",
    imageUrl: assetTradingImg,
  },
] as const;

export const funProjectsData = [
  {
    title: "PirateGPT",
    description: "A fun and interactive chatbot that speaks like a pirate! Built with OpenAI's GPT API and featuring a pirate-themed UI. The bot transforms normal conversations into swashbuckling pirate speak, complete with 'Arrr's and nautical references.",
    tags: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    icon: "logos:openai-icon",
    github: "https://github.com/Saif-rathod/PirateGPT",
    imageUrl: binaryGameImg,
  },
  {
    title: "MagicCalc",
    description: "Interactive math problem solver with step-by-step solutions, visualization tools, and educational features. Includes graphing capabilities, formula recognition, and practice problems.",
    tags: ["TypeScript", "React", "Mathematics", "Education"],
    icon: "logos:typescript-icon",
    github: "https://github.com/yourusername/magiccalc",
    imageUrl: taskManagerImg,
  },
  {
    title: "RetroRPS",
    description: "AI-powered retro-style Rock Paper Scissors game with computer vision integration. Features include gesture recognition, real-time feedback, and classic arcade aesthetics.",
    tags: ["Python", "OpenCV", "TensorFlow", "Gaming"],
    icon: "logos:python",
    github: "https://github.com/yourusername/retrorps",
    imageUrl: binaryGameImg,
  },
  {
    title: "DeepFake",
    description: "Deepfake detection system using advanced computer vision and machine learning. Features include real-time video analysis, anomaly detection, and forensic tools.",
    tags: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
    icon: "logos:python",
    github: "https://github.com/yourusername/deepfake",
    imageUrl: cryptoCrowdImg,
  },
  {
    title: "EnigmaTravel",
    description: "Travel recommendation system using fuzzy logic and machine learning. Features include personalized itineraries, budget optimization, and cultural insights.",
    tags: ["Python", "Machine Learning", "Travel", "AI"],
    icon: "logos:python",
    github: "https://github.com/yourusername/enigmatravel",
    imageUrl: techprowlImg,
  },
] as const;

export const skillsData = [
  // AI & Machine Learning
  {
    name: "PyTorch",
    icon: "logos:pytorch-icon",
  },
  {
    name: "Deep Learning",
    icon: "logos:tensorflow",
  },
  {
    name: "Gen AI",
    icon: "logos:openai",
  },
  {
    name: "Agentic AI",
    icon: "logos:python",
  },
  {
    name: "Neural Networks",
    icon: "logos:tensorflow",
  },
  {
    name: "NLP",
    icon: "logos:hugging-face",
  },
  {
    name: "Computer Vision",
    icon: "logos:opencv",
  },
  {
    name: "Transformers",
    icon: "logos:tensorflow",
  },
  {
    name: "Streamlit",
    icon: "logos:streamlit",
  },
  {
    name: "Hugging Face",
    icon: "logos:hugging-face-icon",
  },
  {
    name: "LLMs",
    icon: "logos:python",
  },
  {
    name: "Pandas",
    icon: "logos:pandas",
  },

  // Full-Stack & SaaS Development
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "FastAPI",
    icon: "logos:fastapi-icon",
  },
  {
    name: "Supabase",
    icon: "logos:supabase-icon",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },

  // Competitive Programming & Problem-Solving
  {
    name: "C++",
    icon: "logos:c-plusplus",
  },
  {
    name: "System Design",
    icon: "mdi:server",
  },

  // Startup & Product Development
  {
    name: "Tech Leadership",
    icon: "mdi:account-tie",
  },
] as const;
