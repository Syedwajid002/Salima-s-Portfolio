import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Award, BarChart3, FileCheck, Users, PenTool as Tool } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

const Home: React.FC = () => {
  const expertiseAreas = [
    {
      icon: <Award size={36} className="text-primary-500" />,
      title: 'IT Leadership',
      description: 'Proven track record in leading IT teams and managing complex technology projects.',
    },
    {
      icon: <BarChart3 size={36} className="text-primary-500" />,
      title: 'KPI Dashboards',
      description: 'Expertise in designing and implementing performance metrics and visualization tools.',
    },
    {
      icon: <FileCheck size={36} className="text-primary-500" />,
      title: 'Documentation',
      description: 'Skilled in creating comprehensive technical documentation and process workflows.',
    },
    {
      icon: <Users size={36} className="text-primary-500" />,
      title: 'Team Management',
      description: 'Experience in coaching, performance evaluation, and team development.',
    },
    {
      icon: <Tool size={36} className="text-primary-500" />,
      title: 'Technical Skills',
      description: 'Proficient in various IT systems, tools, and infrastructure management.',
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-10"></div>
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <motion.h1
              className="mb-4 text-primary-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              I'm an Enthusiastic IT Professional
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Commanding IT systems with clarity, strategy, and control.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Me
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="IT Professional working on project"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Areas of Expertise"
            subtitle="Key competencies and specialized skills in IT management"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                className="card card-hover p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Featured Projects"
            subtitle="Highlighted accomplishments from my IT management portfolio"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="card card-hover overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/7114/laptop-mobile.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Server Room Setup"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Server Room Setup</h3>
                <p className="text-gray-600 mb-4">
                  Designed and deployed comprehensive performance dashboards to monitor key IT metrics and drive data-informed decisions.
                </p>
                <Link to="/projects" className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium">
                  <span>View Project</span>
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="card card-hover overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team Coaching Framework"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Basic Firewall Configuration</h3>
                <p className="text-gray-600 mb-4">
                  Developed structured coaching templates and performance review processes for IT team development.
                </p>
                <Link to="/projects" className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium">
                  <span>View Project</span>
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to collaborate?</h2>
          <p className="text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
            Let's discuss how my IT management expertise can contribute to your organization's success.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-500 hover:bg-primary-50 hover:text-primary-600">
            Get in Touch
          </Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;