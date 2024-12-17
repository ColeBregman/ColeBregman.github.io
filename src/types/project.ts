export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  stats?: {
    label: string;
    value: string;
  }[];
  fullDescription?: string;
  technologies?: string[];
}

export const projects: Project[] = [
  {
    id: 'ai-analytics',
    title: 'AI-Powered Analytics Platform',
    description: 'Revolutionizing data analysis with machine learning',
    image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&w=1200&q=80',
    link: '/project/ai-analytics',
    stats: [
      { label: 'Processing Speed', value: '500k ops/sec' },
      { label: 'Accuracy Rate', value: '99.9%' },
      { label: 'Active Users', value: '50k+' }
    ],
    fullDescription: 'A cutting-edge analytics platform that leverages artificial intelligence to process and analyze large datasets in real-time. The platform provides actionable insights and predictive analytics to help businesses make data-driven decisions.',
    technologies: ['Python', 'TensorFlow', 'React', 'AWS']
  },
  {
    id: 'smart-city',
    title: 'Smart City Infrastructure',
    description: 'Building the foundation for tomorrow\'s cities',
    image: 'https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?auto=format&fit=crop&w=1200&q=80',
    link: '/project/smart-city',
    stats: [
      { label: 'IoT Devices', value: '10k+' },
      { label: 'Data Points', value: '1M/day' },
      { label: 'Cities', value: '5' }
    ],
    fullDescription: 'An integrated smart city platform that connects IoT devices, manages infrastructure, and optimizes city operations. The system includes traffic management, waste management, and energy optimization components.',
    technologies: ['IoT', 'Node.js', 'MongoDB', 'Azure']
  },
  {
    id: 'quantum-interface',
    title: 'Quantum Computing Interface',
    description: 'Making quantum computing accessible',
    image: 'https://images.unsplash.com/photo-1510906594845-bc082582c8cc?auto=format&fit=crop&w=1200&q=80',
    link: '/project/quantum-interface',
    stats: [
      { label: 'Qubits Supported', value: '100+' },
      { label: 'Error Rate', value: '0.1%' },
      { label: 'Algorithms', value: '25+' }
    ],
    fullDescription: 'A user-friendly interface for quantum computing operations, making it easier for researchers and developers to work with quantum systems. Includes visual programming tools and simulation capabilities.',
    technologies: ['Qiskit', 'TypeScript', 'Python', 'WebAssembly']
  },
  {
    id: 'sustainable-energy',
    title: 'Sustainable Energy Solutions',
    description: 'Powering the future with clean technology',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80',
    link: '/project/sustainable-energy',
    stats: [
      { label: 'Energy Saved', value: '500MW' },
      { label: 'CO2 Reduced', value: '10k tons' },
      { label: 'ROI', value: '250%' }
    ],
    fullDescription: 'An innovative energy management system that optimizes renewable energy usage and storage. The platform includes predictive maintenance, load balancing, and real-time monitoring capabilities.',
    technologies: ['React', 'Node.js', 'InfluxDB', 'Docker']
  }
];