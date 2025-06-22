import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const Skills: React.FC = () => {
  // Management Skills data for radar chart
  const managementSkills = [
    { name: 'Leadership', value: 90 },
    { name: 'Strategic Planning', value: 85 },
    { name: 'Team Building', value: 88 },
    { name: 'Project Management', value: 92 },
    { name: 'Budgeting', value: 80 },
    { name: 'Vendor Management', value: 75 },
  ];

  // Technical Skills data for bar chart
  const technicalSkills = [
    { name: 'Network Administration', proficiency: 85 },
    { name: 'Cloud Infrastructure', proficiency: 80 },
    { name: 'Data Analysis', proficiency: 75 },
    { name: 'Security Management', proficiency: 82 },
    { name: 'Systems Integration', proficiency: 78 },
  ];

  // Professional Skills data for pie chart
  const professionalSkills = [
    { name: 'Communication', value: 30 },
    { name: 'Problem Solving', value: 25 },
    { name: 'Adaptability', value: 20 },
    { name: 'Time Management', value: 15 },
    { name: 'Decision Making', value: 10 },
  ];

  const COLORS = ['#0a4d68', '#06bebe', '#f48c06', '#10b981', '#ef4444'];

  // IT Tools Proficiency
  const tools = [
    { category: 'Project Management', items: ['JIRA', 'Microsoft Project', 'Asana', 'Trello'] },
    { category: 'Data Analysis', items: ['Power BI', 'Tableau', 'Excel', 'SQL'] },
    { category: 'Documentation', items: ['Confluence', 'SharePoint', 'Notion', 'Google Workspace'] },
    { category: 'IT Service Management', items: ['ServiceNow', 'Zendesk', 'Freshdesk', 'JIRA Service Desk'] },
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
            <h1 className="text-white mb-4">My Skills & Competencies</h1>
            <p className="text-xl text-primary-100">
              An overview of my IT management skills, technical abilities, and professional competencies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Management Skills Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Management Skills"
            subtitle="Core competencies in IT leadership and management"
          />

          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={managementSkills}
                  margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#0a4d68"
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Leadership Approach</h3>
              <p className="text-gray-600 mb-4">
                My leadership style emphasizes clear communication, team empowerment, and strategic vision.
                I focus on creating an environment where IT professionals can excel while aligning their work
                with organizational goals.
              </p>
              <p className="text-gray-600">
                I believe in leading by example, providing regular coaching, and establishing clear metrics
                for success. This approach has consistently resulted in high-performing teams and successful
                project outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Project Management Methodology</h3>
              <p className="text-gray-600 mb-4">
                I employ a hybrid approach to project management, drawing from both traditional waterfall and
                Agile methodologies depending on project requirements. This flexibility ensures optimal
                resource allocation and timely delivery.
              </p>
              <p className="text-gray-600">
                Key aspects include comprehensive planning, regular stakeholder communication, risk management,
                and continuous progress tracking through KPIs and visual dashboards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Technical Competencies"
            subtitle="Technical skills that support effective IT management"
          />

          <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={technicalSkills}
                  margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="proficiency"
                    name="Proficiency Level"
                    fill="#06bebe"
                    radius={[5, 5, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* IT Tools */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">IT Tools Proficiency</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((toolCategory, index) => (
                <motion.div
                  key={index}
                  className="card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-lg mb-3">{toolCategory.category}</h4>
                  <ul className="space-y-2">
                    {toolCategory.items.map((tool, toolIndex) => (
                      <li key={toolIndex} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                        <span className="text-gray-700">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Skills Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Professional Skills"
            subtitle="Core soft skills and professional competencies"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="h-80"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={professionalSkills}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {professionalSkills.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Communication & Leadership</h3>
              <p className="text-gray-600 mb-6">
                Strong communication skills are at the core of my management approach. I excel at translating
                technical concepts for non-technical stakeholders, facilitating productive meetings, and
                creating clear documentation.
              </p>

              <h3 className="text-xl font-bold mb-4">Problem Solving & Decision Making</h3>
              <p className="text-gray-600 mb-6">
                I approach problems methodically, gathering data, analyzing root causes, and developing
                structured solutions. My decision-making process balances technical requirements, business
                needs, and resource constraints.
              </p>

              <h3 className="text-xl font-bold mb-4">Adaptability & Continuous Learning</h3>
              <p className="text-gray-600">
                The technology landscape is constantly evolving, requiring adaptability and commitment to
                ongoing learning. I regularly update my skills through professional development, industry
                conferences, and self-directed learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Skills;