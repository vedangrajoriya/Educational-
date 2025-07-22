import React, { useState } from 'react';
import { ChevronDown, Code, BarChart2, Brain, Network, Telescope, FolderGit2 } from 'lucide-react';

interface RoadmapSection {
  id: string;
  icon: React.ReactNode;
  title: string;
  items: string[];
  isExpanded?: boolean;
}

function Roadmap() {
  const [sections, setSections] = useState<RoadmapSection[]>([
    {
      id: 'stage1',
      icon: <Code className="w-5 h-5" />,
      title: 'Stage 1: Fundamentals of Programming and Math',
      items: [
        'Learn Python Programming: Variables, Data types, Functions, Loops, Conditionals, OOP, Libraries (NumPy, Pandas, Matplotlib, Seaborn)',
        'Master Math for ML: Linear Algebra, Calculus, Probability & Statistics',
      ],
    },
    {
      id: 'stage2',
      icon: <BarChart2 className="w-5 h-5" />,
      title: 'Stage 2: Core Machine Learning Concepts',
      items: [
        'Learn ML Basics: Supervised vs Unsupervised Learning, Regression, Classification, Clustering, Bias-Variance Tradeoff, Evaluation Metrics',
        'Implement Classic Algorithms: Linear Regression, Logistic Regression, KNN, Decision Trees, Random Forests, SVM, K-Means',
        'Model Selection & Validation: Cross-validation, Hyperparameter tuning',
      ],
    },
    {
      id: 'stage3',
      icon: <Brain className="w-5 h-5" />,
      title: 'Stage 3: Deep Learning (DL)',
      items: [
        'Neural Network Basics: Perceptrons, Activation Functions, Feedforward Networks, Backpropagation, Loss Functions',
        'Deep Learning Frameworks: TensorFlow/Keras, PyTorch',
        'Key Architectures: CNNs, RNNs, Transformers',
      ],
    },
    {
      id: 'stage4',
      icon: <Network className="w-5 h-5" />,
      title: 'Stage 4: Data Handling and Feature Engineering',
      items: [
        'Data Preprocessing: Handling missing values, Encoding categorical data, Feature scaling',
        'Feature Engineering: Domain knowledge-based features, Dimensionality Reduction (PCA, t-SNE)',
        'Time Series Analysis: ARIMA, Prophet, Sliding windows, LSTM for forecasting',
      ],
    },
    {
      id: 'stage5',
      icon: <Telescope className="w-5 h-5" />,
      title: 'Stage 5: NLP & Computer Vision (Optional Tracks)',
      items: [
        'NLP: Text Preprocessing, Word Embeddings, Transformers',
        'CV: Image classification, Object Detection, Image segmentation',
      ],
    },
    {
      id: 'stage6',
      icon: <FolderGit2 className="w-5 h-5" />,
      title: 'Stage 6: Model Deployment and Production',
      items: [
        'Model Serving: REST APIs, Model serialization',
        'MLOps: Experiment Tracking, Version Control, CI/CD Pipelines, Containerization, Deployment',
        'Real-world Challenges: Data drift, Monitoring, Scalability',
      ],
    },
    {
      id: 'stage7',
      icon: <FolderGit2 className="w-5 h-5" />,
      title: 'Stage 7: Capstone Projects & Continuous Learning',
      items: [
        'Project Ideas: Predictive Maintenance, Fraud Detection, Stock Price Prediction, Chatbot, Recommender System',
        'Stay Updated: ArXiv papers, Kaggle competitions, Conferences',
      ],
    },
  ]);

  const toggleSection = (sectionId: string) => {
    setSections(sections.map(section => 
      section.id === sectionId 
        ? { ...section, isExpanded: !section.isExpanded }
        : section
    ));
  };

  return (
    <div className="min-h-screen relative">
      {/* Background image with 50% opacity */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/Rm.jpg)', opacity: 0.5 }}></div>
      
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black-800 mb-4">
            "Your Ultimate Step-by-Step Guide<br className="hidden sm:block" /> to Mastering Machine Learning"
          </h1>
          <p className="text-lg text-black-800 italic">
            "A structured roadmap to build your Machine Learning skills, from basics to advanced applications."
          </p>
        </div>

        {/* Learning Path Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200" />

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-7 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-white" />
                
                {/* Content */}
                <div className="ml-16 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full text-left px-6 py-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-purple-600">
                          {section.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {section.title}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          section.isExpanded ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  {/* Expandable content */}
                  {section.isExpanded && (
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <ul className="mt-4 space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 rounded-full bg-purple-400" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Roadmap;
