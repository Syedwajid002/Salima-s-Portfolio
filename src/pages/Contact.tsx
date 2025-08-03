import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

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
            <h1 className="text-white mb-4">Contact Me</h1>
            <p className="text-xl text-primary-100">
              Get in touch to discuss IT management opportunities or collaborations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Contact Information"
                subtitle="Multiple ways to reach me"
              />

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm mb-8">
                <div className="flex items-start mb-6">
                  <div className="bg-primary-500 p-3 rounded-full text-white mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">For general inquiries:</p>
                    <a href="mailto:Salima2025@example.com" className="text-primary-500 hover:underline">
                      salima2025@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="bg-secondary-500 p-3 rounded-full text-white mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">Monday to Friday, 9AM-5PM PST</p>
                    <a href="tel:+11234567890" className="text-primary-500 hover:underline">
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent-500 p-3 rounded-full text-white mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Location</h3>
                    <p className="text-gray-600 mb-1">San Francisco Bay Area</p>
                    <p className="text-gray-600">Available for remote and on-site opportunities</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-500 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Schedule a Meeting</h3>
                <p className="mb-4 text-primary-100">
                  Prefer to talk directly? Schedule a video call or in-person meeting to discuss your IT management needs.
                </p>
                <a
                  href="#"
                  className="btn bg-white text-primary-500 hover:bg-primary-50"
                >
                  <MessageSquare size={18} className="mr-2" />
                  Schedule a Call
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Send a Message"
                subtitle="Fill out the form below and I'll respond within 24 hours"
              />

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                {isSubmitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center py-10 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-success-500 text-white p-4 rounded-full mb-4">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-600 max-w-md">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-300 focus:outline-none ${errors.name ? 'border-error-500' : 'border-gray-300'
                            }`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-error-500">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-300 focus:outline-none ${errors.email ? 'border-error-500' : 'border-gray-300'
                            }`}
                          placeholder="Your email"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-error-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-300 focus:outline-none ${errors.subject ? 'border-error-500' : 'border-gray-300'
                          }`}
                        placeholder="What is this regarding?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-error-500">{errors.subject}</p>
                      )}
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-300 focus:outline-none ${errors.message ? 'border-error-500' : 'border-gray-300'
                          }`}
                        placeholder="Your message"
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-error-500">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send size={18} className="mr-2" />
                          Send Message
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions about collaboration and consulting"
            center
          />

          <div className="space-y-6">
            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">What types of IT management projects do you specialize in?</h3>
              <p className="text-gray-600">
                I specialize in IT service management improvements, team performance optimization, workflow design,
                KPI dashboard implementation, and strategic IT planning. My background also includes infrastructure
                management and IT operations.
              </p>
            </motion.div>

            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">Do you offer remote consulting services?</h3>
              <p className="text-gray-600">
                Yes, I provide both remote and on-site consulting services. Remote collaboration has been highly
                effective for many projects, and I use collaborative tools to ensure smooth communication and project delivery.
              </p>
            </motion.div>

            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">What is your approach to IT team coaching?</h3>
              <p className="text-gray-600">
                My coaching approach focuses on identifying individual strengths, creating personalized development plans,
                and building a collaborative team culture. I utilize structured frameworks for performance evaluation and
                skill development that can be customized to your organization's needs.
              </p>
            </motion.div>

            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">How do you measure the success of IT management initiatives?</h3>
              <p className="text-gray-600">
                I believe in establishing clear metrics from the start of any project. Typical success measures include
                service level improvements, cost reductions, team performance metrics, customer satisfaction scores,
                and alignment with business objectives. I implement KPI dashboards to track these metrics over time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;