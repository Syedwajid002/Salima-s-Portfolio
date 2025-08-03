import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Linkedin,
  Phone,
  User
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

const Resume: React.FC = () => {
  const workExperience = [

    {
      title: 'IT Support Specialist',
      company: ' TechCore Solutions',
      location: 'Remote',
      period: 'Jul 2024 - Present',
      responsibilities: [
        'Provided tier 2 technical support for an organization of 500+ employees',
        'Maintained and troubleshot network infrastructure and server systems',
        'Created technical documentation and user guides for common procedures',
        'Participated in IT infrastructure upgrade projects',
        'Conducted training sessions for new software implementations'
      ]
    }
  ];

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center justify-between"
          >
            <div>
              <h1 className="text-white mb-4">Resume</h1>
              <p className="text-xl text-primary-100">
                Professional experience and qualifications in IT management.
              </p>
            </div>
            <a
              href="/Salima.pdf"
              className="btn bg-white text-primary-500 hover:bg-primary-50 mt-6 md:mt-0"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="section bg-white">
        <div className="container-custom max-w-5xl">
          <div className="card p-8 md:p-12 mb-12">
            {/* Personal Info */}
            <div className="mb-12 pb-8 border-b border-gray-200">
              <h2 className="text-3xl font-bold mb-6">Salima Badruddin Samani</h2>
              <h3 className="text-xl text-gray-600 mb-6">IT Operations Manager</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-center">
                  <Mail size={18} className="text-primary-500 mr-3" />
                  <span>Salima2025@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="text-primary-500 mr-3" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="text-primary-500 mr-3" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center">
                  <Linkedin size={18} className="text-primary-500 mr-3" />
                  <span>linkedin.com/in/salimabadruddin</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-primary-500 text-white p-1 rounded-full mr-3">
                  <User size={18} />
                </span>
                Professional Summary
              </h3>
              <p className="text-gray-700">
                IT Operations Manager with 1 year of experience in technology management and team leadership.
                Specialized in implementing performance monitoring systems, coaching frameworks, and efficient IT processes.
                Proven track record of aligning IT operations with business objectives and driving continuous improvement.
                Strong focus on data-driven decision making and team development.
              </p>
            </div>

            {/* Work Experience */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-primary-500 text-white p-1 rounded-full mr-3">
                  <Briefcase size={18} />
                </span>
                Work Experience
              </h3>

              <div className="space-y-10">
                {workExperience.map((job, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l-2 border-primary-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute -left-[9px] top-0 bg-primary-500 w-4 h-4 rounded-full"></div>
                    <h4 className="text-xl font-bold text-primary-500">{job.title}</h4>
                    <div className="flex flex-wrap items-center text-gray-600 mb-3">
                      <span className="font-medium">{job.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        <span>{job.location}</span>
                      </div>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-primary-500 text-white p-1 rounded-full mr-3">
                  <GraduationCap size={18} />
                </span>
                Education
              </h3>

              <motion.div
                className="relative pl-8 border-l-2 border-primary-200 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[9px] top-0 bg-primary-500 w-4 h-4 rounded-full"></div>
                <h4 className="text-xl font-bold text-primary-500">MSc in Computer Science</h4>
                <div className="flex flex-wrap items-center text-gray-600 mb-2">
                  <span className="font-medium">Stanford University</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>2017 - 2019</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Specialized in IT Management and Systems Architecture with a focus on enterprise systems.
                </p>
              </motion.div>

              <motion.div
                className="relative pl-8 border-l-2 border-primary-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[9px] top-0 bg-primary-500 w-4 h-4 rounded-full"></div>
                <h4 className="text-xl font-bold text-primary-500">BSc in Computer Science</h4>
                <div className="flex flex-wrap items-center text-gray-600 mb-2">
                  <span className="font-medium">University of California, Berkeley</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>2013 - 2017</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Graduated with honors. Completed coursework in software development, network administration, and database management.
                </p>
              </motion.div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-primary-500 text-white p-1 rounded-full mr-3">
                  <Award size={18} />
                </span>
                Certifications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold">Certified Information Technology Manager (CITM)</h4>
                  <p className="text-gray-600">Issued 2021 • IT Management Institute</p>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold">Project Management Professional (PMP)</h4>
                  <p className="text-gray-600">Issued 2020 • Project Management Institute</p>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-4 rounded-lg border-l-4 border-secondary-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold">ITIL Foundation v4</h4>
                  <p className="text-gray-600">Issued 2019 • AXELOS</p>
                </motion.div>

                <motion.div
                  className="bg-gray-50 p-4 rounded-lg border-l-4 border-secondary-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold">CompTIA Security+</h4>
                  <p className="text-gray-600">Issued 2018 • CompTIA</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <a
              href="/Salima.pdf"
              className="btn-primary"
              download
            >
              <Download size={18} className="mr-2" />
              Download Full Resume PDF
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Resume;