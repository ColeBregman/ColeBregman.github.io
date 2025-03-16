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
    id: 'Optics',
    title: 'Live Optical Alignment and Automated Lense Testing',
    description: 'Speeding up the microscope development for optical engineers',
    image: '/assets/OpticsJig-Cl6gbkTQ.png',
    images: [
      {
        url: '/assets/GUI-D1tlHbqh.png',
        caption: 'GUI Analysis Interface'
      },
      {
        url: '/assets/Data1-Cd0dS5nb.png',
        caption: 'Data processing pipeline'
      },
      {
        url: '/assets/Data2-BDjiV9sT.png',
        caption: 'Data visualization'
      },
      {
        url: '/assets/PriorGUI-CfGspTeB.png',
        caption: 'Prior Interface'
      }
    ],
    link: '/project/Optics',
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
    id: 'AudiobookPlayer',
    title: 'Audiobook Player',
    description: 'Coming soon...',
    image: '/assets/coverimage-DtUrAx8Y.png',
    images: [
      {
        url: '/assets/coverimage-DtUrAx8Y.png',
        caption: 'Smart interface'
      },
      {
        url: '/assets/coverimage-DtUrAx8Y.png',
        caption: 'Work in progress'
      },
      {
        url: '/assets/coverimage-DtUrAx8Y.png',
        caption: 'Coming soon'
      },
      {
        url: '/assets/coverimage-DtUrAx8Y.png',
        caption: 'Under development'
      }
    ],
    link: '/project/AudiobookPlayer',
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
    technologies: ['Raspberry Pi', 'Python', 'CAD', '3D printing'],
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