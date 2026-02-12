import { Certificate } from "@/lib/types";

export const certificates: Certificate[] = [
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
        category: "Machine Learning",
        featured: true,
        learned: {
            en: [
                "Mastered core Python libraries for data analysis: Pandas, NumPy, and Matplotlib",
                "Performed data cleaning, transformation, and exploratory data analysis (EDA)",
                "Created insightful visualizations to communicate data findings",
                "Applied statistical methods for data-driven decision making",
                "Built a solid foundation for machine learning workflows"
            ],
            fr: [
                "Maîtrisé les bibliothèques Python essentielles pour l'analyse de données : Pandas, NumPy et Matplotlib",
                "Effectué le nettoyage, la transformation et l'analyse exploratoire des données (EDA)",
                "Créé des visualisations pertinentes pour communiquer les résultats",
                "Appliqué des méthodes statistiques pour la prise de décision basée sur les données",
                "Établi des bases solides pour les workflows d'apprentissage automatique"
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
