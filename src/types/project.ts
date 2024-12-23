interface ProjectImage {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  images: ProjectImage[];
  link: string;
  stats?: {
    label: string;
    value: string;
  }[];
  why: string;
  what: string;
  how: string;
  story: {
    challenge: string;
    approach: string;
    outcome: string;
  };
  technologies?: string[];
  keyFeatures?: string[];
}

export const projects: Project[] = [
  {
    id: 'ai-analytics',
    title: 'Live Optical Alignment and Automated Lense Testing',
    description: 'Revolutionizing data analysis with machine learning',
    image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&w=1200&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        caption: 'Real-time dashboard visualization'
      },
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        caption: 'Data processing pipeline'
      },
      {
        url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
        caption: 'Machine learning model training'
      },
      {
        url: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Team collaboration'
      }
    ],
    link: '/project/OpticsJig',
    stats: [
      { label: 'Increased Laser Precision', value: '44.4%' },
      { label: 'Reduced Optical Alignment Time', value: '90%' },
      { label: 'GUI Analysis Capability', value: '10+ test cases' }
    ],
    why: "Optical engineers currently face the tedious and time-intensive process of manually testing each optic fiber, lens, and laser wavelength combination. This involves making adjustments, collecting data from the laser profiler, calculating key metrics, refining the alignment, and repeating these steps until optimal alignment is achieved. This process demands both a high level of expertise and significant time investment, diverting skilled engineers from other critical tasks. ",
    what: "Developed a GUI integrated with a custom-built test rig, featuring a 4-wavelength laser, micrometer stage, and laser profiler. The GUI provides real-time alignment and testing insights, streamlining the alignment process and significantly improving speed and precision. Automated data analysis further enhances laser accuracy. Delivered comprehensive documentation to ensure the company could maintain and adapt the system independently after the internship concluded.",
    how: "We built the platform using cutting-edge technologies including TensorFlow for machine learning, React for the frontend, and AWS for scalable infrastructure. The system employs advanced algorithms for pattern recognition and predictive modeling.",
    story: {
      challenge: "The main challenge was creating a system that could handle massive amounts of data in real-time while maintaining high accuracy and low latency. We also needed to make complex AI algorithms accessible to non-technical users.",
      approach: "We adopted a microservices architecture and implemented stream processing for real-time analysis. The UI was designed with a focus on simplicity and intuitive data visualization. We also implemented automated ML model training and deployment.",
      outcome: "The platform now processes millions of data points daily with 99.9% accuracy. Our clients report 60% faster decision-making and 40% reduction in data analysis costs. The system has become integral to their operations."
    },
    technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'Docker', 'Kubernetes'],
    keyFeatures: [
      'Real-time data processing',
      'Predictive analytics',
      'Interactive dashboards',
      'Automated reporting',
      'Custom alert system'
    ]
  },
  {
    id: 'smart-city',
    title: 'Smart City Infrastructure',
    description: 'Building the foundation for tomorrow\'s cities',
    image: 'https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?auto=format&fit=crop&w=1200&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=1200&q=80',
        caption: 'Smart traffic management system'
      },
      {
        url: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=1200&q=80',
        caption: 'IoT sensor network deployment'
      },
      {
        url: 'https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?auto=format&fit=crop&w=1200&q=80',
        caption: 'Real-time monitoring dashboard'
      },
      {
        url: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&w=1200&q=80',
        caption: 'Energy optimization system'
      }
    ],
    link: '/project/smart-city',
    stats: [
      { label: 'IoT Devices', value: '10k+' },
      { label: 'Data Points', value: '1M/day' },
      { label: 'Cities', value: '5' }
    ],
    why: "Modern cities face unprecedented challenges in managing resources, traffic, and public services efficiently. Traditional infrastructure management systems operate in silos, leading to inefficiencies and increased costs.",
    what: "A comprehensive smart city platform that integrates IoT devices, AI-powered analytics, and automated control systems to optimize city operations across traffic management, waste collection, energy usage, and public services.",
    how: "We developed a scalable IoT platform using microservices architecture, real-time data processing, and machine learning algorithms. The system connects thousands of sensors and devices through a secure mesh network.",
    story: {
      challenge: "The biggest challenge was creating a unified system that could integrate with existing city infrastructure while being flexible enough to accommodate future technologies and scaling requirements.",
      approach: "We adopted an open-architecture approach, building modular components that could work independently or as part of the larger system. We worked closely with city planners and officials to ensure the solution met real-world needs.",
      outcome: "The platform has reduced traffic congestion by 30%, lowered energy consumption by 25%, and improved emergency response times by 45% across implemented cities."
    },
    technologies: ['IoT', 'Node.js', 'MongoDB', 'Azure', 'TensorFlow', 'MQTT'],
    keyFeatures: [
      'Real-time traffic optimization',
      'Smart waste management',
      'Energy consumption monitoring',
      'Predictive maintenance',
      'Emergency response coordination'
    ]
  }


  
  // Add other projects here...
];