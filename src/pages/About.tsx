import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  CheckCircle2
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

const About: React.FC = () => {
  const certifications = [
    "Certified Information Technology Manager (CITM)",
    "Project Management Professional (PMP)",
    "ITIL Foundation v4",
    "Certified ScrumMaster (CSM)",
    "CompTIA Security+"
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
          >
            <h1 className="text-white mb-4">About Me</h1>
            <p className="text-xl text-primary-100">
              An experienced IT professional with a passion for leadership and technology management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="https://media.istockphoto.com/id/1339597100/photo/developer-programmer-woman-coding-software.jpg?s=612x612&w=0&k=20&c=2TTuvi3aIOaNwhsk5QSCqiGwrdcjqys-Uub9dGaV8Eo="
                alt="Professional headshot"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Salima Badruddin Samani</h2>
              <p className="text-gray-600 mb-6 text-lg">
                I am an IT professional with over 8 years of experience across various technology roles.
                My journey has evolved from technical support to systems administration, and now I'm focused on
                IT management and leadership.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                My passion lies in building efficient IT teams, implementing data-driven performance monitoring,
                and creating processes that align technology operations with business objectives.
              </p>
              <div className="flex items-center text-primary-500 mb-4">
                <Award className="mr-2" size={20} />
                <span className="font-medium">Certified IT Professional</span>
              </div>
              <div className="flex items-center text-primary-500 mb-4">
                <BookOpen className="mr-2" size={20} />
                <span className="font-medium">MSc in Computer Science</span>
              </div>
              <div className="flex items-center text-primary-500">
                <Briefcase className="mr-2" size={20} />
                <span className="font-medium">1 Year Experience in IT Supprt</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Education & Certifications"
            subtitle="Academic qualifications and professional certifications"
            center
          />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary-500 p-3 rounded-full text-white mr-4">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl">Education</h3>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-1">MSc in Information Technology</h4>
                <p className="text-gray-500 mb-2">Stanford University</p>
                <p className="text-gray-700">2024 - 2025</p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-1">BSc in Computer Science</h4>
                <p className="text-gray-500 mb-2">University of California, Berkeley</p>
                <p className="text-gray-700">2019 - 2023</p>
              </div>

            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-primary-500 p-3 rounded-full text-white mr-4">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl">Certifications</h3>
              </div>

              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2 className="text-secondary-500 mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Professional Philosophy"
            subtitle="My approach to IT management and leadership"
          />

          <div className="card p-8">
            <motion.p
              className="text-gray-700 text-lg mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              I believe that effective IT management is about balancing technical excellence with strong leadership.
              My approach focuses on these key principles:
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.div
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-2">Data-Driven Decision Making</h4>
                <p className="text-gray-600">
                  Leveraging metrics and KPIs to make informed decisions about resource allocation,
                  process improvements, and strategic planning.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-secondary-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-2">Team Development</h4>
                <p className="text-gray-600">
                  Investing in coaching, mentoring, and skills development to build high-performing IT teams
                  that deliver consistent results.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-accent-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-2">Process Optimization</h4>
                <p className="text-gray-600">
                  Creating efficient workflows and documentation that standardize operations while
                  allowing for continuous improvement.
                </p>
              </motion.div>

              <motion.div
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-success-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-2">Business Alignment</h4>
                <p className="text-gray-600">
                  Ensuring that IT initiatives and resources directly support organizational goals
                  and provide measurable value.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;