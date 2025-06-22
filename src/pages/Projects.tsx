import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Clock, Tag, X } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

interface Project {
  id: number;
  title: string;
  description: string;
  details: string;
  category: string;
  duration: string;
  date: string;
  image: string;
  link?: string;
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Wi-Fi Coverage Mapping',
      description: 'Mapped Wi-Fi coverage across campus using Heatmap software to optimize AP placement.',
      details: 'Used NetSpot and Ekahau tools to scan and visualize wireless signal strength. Identified coverage gaps and proposed new AP placements in dead zones. Documented signal interference sources and drafted improvement plans.',
      category: 'networking',
      duration: '2 weeks',
      date: 'Jan 2024',
      image: 'https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'Server Room Setup',
      description: 'Assisted in configuring and organizing a small server room for a lab environment.',
      details: 'Helped rack and stack servers, patch network cables, and label equipment. Configured basic RAID setups and static IPs. Followed safety and ventilation guidelines while working with faculty supervision.',
      category: 'infrastructure',
      duration: '1 month',
      date: 'Mar 2024',
      image: 'https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'Basic Firewall Configuration',
      description: 'Worked on pfSense and Ubiquiti firewalls to apply basic security rules and NAT policies.',
      details: 'Set up firewall rules for lab segments, tested port forwarding, and implemented basic logging. Demonstrated understanding of public vs private IP concepts and port access control.',
      category: 'security',
      duration: '3 weeks',
      date: 'May 2024',
      image: 'https://images.pexels.com/photos/1054398/pexels-photo-1054398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      title: 'Printer Network Troubleshooting',
      description: 'Diagnosed and fixed printer network issues using IP tools and configuration interfaces.',
      details: 'Resolved IP conflicts, updated firmware on HP printers, and configured static IPs for consistent printing in a shared network environment. Logged troubleshooting steps and shared a guide with peers.',
      category: 'support',
      duration: '10 days',
      date: 'Feb 2024',
      image: 'https://images.pexels.com/photos/4709297/pexels-photo-4709297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      title: 'System Imaging Lab',
      description: 'Created and deployed system images to lab PCs using Clonezilla and PXE boot.',
      details: 'Standardized operating systems and software configurations across 30+ lab machines. Reduced manual installation time by 80%. Validated image integrity and post-deployment functionality.',
      category: 'deployment',
      duration: '3 weeks',
      date: 'Apr 2024',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'networking', name: 'Networking' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'security', name: 'Security' },
    { id: 'support', name: 'Support' },
    { id: 'deployment', name: 'Deployment' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-white mb-4">My Projects</h1>
            <p className="text-xl text-primary-100">
              A showcase of hands-on IT infrastructure projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Portfolio Projects"
            subtitle="Explore practical work and academic project experiences"
          />

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all ${activeCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="card card-hover overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-primary-500 text-white text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Tag size={16} className="mr-1" />
                      <span className="capitalize">{project.category}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Popup */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
              <div className="bg-white max-w-xl w-full p-6 rounded-xl shadow-lg relative animate-fadeIn">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
                >
                  <X />
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{selectedProject.title}</h2>
                <p className="text-gray-600 mb-4">{selectedProject.details}</p>
                <div className="text-sm text-gray-500 flex gap-6 flex-wrap">
                  <span className="flex items-center"><Calendar size={14} className="mr-1" /> {selectedProject.date}</span>
                  <span className="flex items-center"><Clock size={14} className="mr-1" /> {selectedProject.duration}</span>
                  <span className="flex items-center"><Tag size={14} className="mr-1" /> {selectedProject.category}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
