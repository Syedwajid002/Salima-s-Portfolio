import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Clock, Tag } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  date: string;
  image: string;
  link?: string;
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'IT Service Desk KPI Dashboard',
      description: 'Created interactive dashboards to monitor key performance metrics for the IT service desk, including ticket resolution times, customer satisfaction, and agent productivity.',
      category: 'dashboards',
      duration: '3 months',
      date: 'Jan 2023',
      image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'Network Infrastructure Upgrade',
      description: 'Managed a comprehensive network upgrade project, including planning, vendor selection, implementation, and staff training.',
      category: 'management',
      duration: '6 months',
      date: 'Aug 2022',
      image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'IT Team Coaching Framework',
      description: 'Developed a structured coaching system for IT team leaders, including templates for 1-on-1 meetings, performance reviews, and skill development plans.',
      category: 'coaching',
      duration: '4 months',
      date: 'Mar 2022',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      title: 'Server Migration Project',
      description: 'Led a cross-functional team in migrating on-premises servers to cloud infrastructure, including risk assessment, data transfer planning, and implementation.',
      category: 'management',
      duration: '5 months',
      date: 'Nov 2021',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      title: 'IT Budget Planning Tool',
      description: 'Created a comprehensive budget planning and tracking system to improve financial management and resource allocation for IT operations.',
      category: 'dashboards',
      duration: '2 months',
      date: 'Jul 2021',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 6,
      title: 'Customer Service Workflow Redesign',
      description: 'Redesigned the customer service workflow to improve response times and customer satisfaction, including new escalation procedures and SLA monitoring.',
      category: 'workflows',
      duration: '3 months',
      date: 'Apr 2021',
      image: 'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'dashboards', name: 'KPI Dashboards' },
    { id: 'coaching', name: 'Coaching Templates' },
    { id: 'workflows', name: 'Workflows' },
    { id: 'management', name: 'Management' },
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
            <h1 className="text-white mb-4">Projects</h1>
            <p className="text-xl text-primary-100">
              A showcase of my IT management projects and accomplishments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Portfolio Projects"
            subtitle="Explore my work across various IT management domains"
          />

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
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
                className="card card-hover overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
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
                  
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
                    >
                      <span>View Details</span>
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;