import { Certificate } from "@/lib/types";

    export const certificates: Certificate[] = [
    {
        id: "power-bi-masterclass-specialization",
        title: "Power BI Masterclass Specialization",
        image: "/certificates/power-bi-masterclass.png",
        category: "Tools",
        featured: true,
        learned: {
            en: [
                "Mastered the Power BI interface and navigation for efficient data reporting",
                "Created interactive dashboards and visualizations using Power BI tools",
                "Applied advanced DAX functions for data analysis and time intelligence calculations",
                "Transformed and cleaned data using Power Query Editor",
                "Built and structured data models for business intelligence and reporting"
            ],
            fr: [
                "Maîtrisé l’interface Power BI et sa navigation pour un reporting efficace",
                "Créé des dashboards et visualisations interactives avec les outils Power BI",
                "Appliqué des fonctions DAX avancées pour l’analyse de données et le time intelligence",
                "Transformé et nettoyé les données avec Power Query Editor",
                "Construit et structuré des modèles de données pour la business intelligence"
            ]
        }
    },
    {
        id: "neural-network-deep-learning",
        title: "Neural Networks and Deep Learning",
        image: "/certificates/neural network and deep learning.png",
        category: "Deep Learning",
        featured: true,
        learned: {
            en: [
                "Built and trained neural networks from scratch using Python and NumPy",
                "Implemented forward and backward propagation algorithms",
                "Applied activation functions (ReLU, sigmoid, tanh) and optimization techniques",
                "Understood the mathematical foundations of deep learning",
                "Developed practical skills in hyperparameter tuning and model evaluation"
            ],
            fr: [
                "Construit et entraîné des réseaux neuronaux à partir de zéro avec Python et NumPy",
                "Implémenté les algorithmes de propagation avant et arrière",
                "Appliqué les fonctions d'activation (ReLU, sigmoid, tanh) et les techniques d'optimisation",
                "Compris les fondements mathématiques de l'apprentissage profond",
                "Développé des compétences pratiques en ajustement d'hyperparamètres et évaluation de modèles"
            ]
        }
    },
    {
        id: "python-data-fundamentals",
        title: "Python Data Fundamentals",
        image: "/certificates/python data fundamentals.png",
        category: "Languages",
        featured: false,
        learned: {
            en: [
                "Learned Python fundamentals for data analysis including variables, lists, and functions",
                "Manipulated and analyzed datasets using pandas DataFrames",
                "Performed data visualization using Matplotlib and Seaborn",
                "Applied statistical concepts and exploratory data analysis techniques",
                "Worked with real-world data projects including data cleaning, merging, and analysis"
            ],
            fr: [
                "Appris les bases de Python pour l'analyse de données : variables, listes et fonctions",
                "Manipulé et analysé des données avec les DataFrames de pandas",
                "Réalisé des visualisations de données avec Matplotlib et Seaborn",
                "Appliqué des concepts statistiques et des techniques d'exploration de données (EDA)",
                "Travaillé sur des projets réels incluant nettoyage, fusion et analyse de données"
            ]
        }
    },
    {
        id: "docker-fundamentals",
        title: "Docker Fundamentals",
        image: "/certificates/docker fundamentals.png",
        category: "Tools",
        featured: false,
        learned: {
            en: [
                "Understood containerization concepts and Docker architecture",
                "Created and managed Docker images and containers",
                "Wrote efficient Dockerfiles for application deployment",
                "Used Docker Compose for multi-container applications",
                "Applied best practices for container security and optimization"
            ],
            fr: [
                "Compris les concepts de conteneurisation et l'architecture Docker",
                "Créé et géré des images et conteneurs Docker",
                "Écrit des Dockerfiles efficaces pour le déploiement d'applications",
                "Utilisé Docker Compose pour les applications multi-conteneurs",
                "Appliqué les meilleures pratiques pour la sécurité et l'optimisation des conteneurs"
            ]
        }
    },
    {
        id: "advanced-docker",
        title: "Advanced Docker",
        image: "/certificates/advanced docker.png",
        category: "Tools",
        featured: true,
        learned: {
            en: [
                "Implemented advanced Docker networking and volume management",
                "Orchestrated containers using Docker Swarm",
                "Optimized Docker images for production environments",
                "Integrated Docker into CI/CD pipelines",
                "Troubleshot complex containerized application issues"
            ],
            fr: [
                "Implémenté la gestion avancée des réseaux et volumes Docker",
                "Orchestré des conteneurs avec Docker Swarm",
                "Optimisé les images Docker pour les environnements de production",
                "Intégré Docker dans les pipelines CI/CD",
                "Résolu des problèmes complexes d'applications conteneurisées"
            ]
        }
    }
];
