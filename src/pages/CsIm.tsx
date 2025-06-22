import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Menu,
    X,
    Users,
    ArrowUp,
    ArrowRight,
    MessageSquare,
    FileText,
    Download,
    Mail,
    Github,
    Linkedin,
    Shield,
    AlertTriangle,
    CheckCircle,
    Clock,
    Phone,
    Star
} from 'lucide-react';

const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: 'easeOut'
        }
    }),
};


const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -50]);

    const dotPatternUrl = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

    return (
        <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-r from-primary-500 to-secondary-500">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 z-0" />
            <div className={`absolute inset-0 bg-[url('${dotPatternUrl}')] opacity-30 z-0`} />

            <motion.div
                style={{ y }}
                className="relative z-10 flex items-center min-h-screen px-6 md:px-16"
            >
                <div className="text-left max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6"
                    >

                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
                            Elevate Your&nbsp;
                            <span className="bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">
                                Service & Support
                            </span>
                        </h1>

                        <p className="text-lg md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                            A modern toolkit designed to streamline customer service, improve response time, and manage incidents with ease.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex gap-4 mt-8"
                    >
                        <motion.button
                            onClick={() => document.getElementById('standards')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-primary-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Toolkit
                        </motion.button>

                        <motion.a
                            href="/contact"
                            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};


const standards = [
    {
        icon: <Users className="w-8 h-8 text-blue-600" />,
        title: "How IT Should Treat End Users",
        points: [
            "Empathy and patience in every interaction",
            "Use non-technical, clear language",
            "Listen actively, ask clarifying questions",
            "Respect users' time and priorities",
            "Follow up until resolution is confirmed",
            "Stay professional under pressure"
        ]
    },
    {
        icon: <Star className="w-8 h-8 text-yellow-500" />,
        title: "Defining Great Service",
        points: [
            "Acknowledge requests within 1 hour",
            "Focus on solving the problem",
            "Keep users informed regularly",
            "Document knowledge for reuse",
            "Improve continuously",
            "Proactively prevent issues"
        ]
    },
    {
        icon: <MessageSquare className="w-8 h-8 text-pink-500" />,
        title: "Handling Complaints Professionally",
        points: [
            "Acknowledge frustration without defensiveness",
            "Apologize genuinely for any issues",
            "Focus on solutions, not blame",
            "Set realistic timelines",
            "Escalate only when needed",
            "Ensure user is satisfied after resolution"
        ]
    }
];

const Standards = () => {
    return (
        <section id="standards" className="py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Customer Service Standards
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Visual guide to best practices for IT support and customer satisfaction.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {standards.map((standard, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white shadow-xl border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-100 rounded-xl">
                                    {standard.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">{standard.title}</h3>
                            </div>
                            <ul className="space-y-3 mt-4">
                                {standard.points.map((point, idx) => (
                                    <li key={idx} className="flex gap-3 items-start text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const EscalationMatrix = () => {
    const [active, setActive] = useState<number | null>(null);

    const tiers = [
        {
            level: "Tier 1",
            title: "Frontline Support",
            color: "border-green-500",
            dotColor: "bg-green-500",
            responsibilities: [
                "Perform basic troubleshooting and reset passwords",
                "Resolve user-side software and peripheral issues",
                "Manage account permissions and access",
                "Log all support interactions"
            ],
            escalate: "Escalate to Tier 2 if unresolved within 30 minutes or requires deeper expertise."
        },
        {
            level: "Tier 2",
            title: "Technical Team",
            color: "border-blue-500",
            dotColor: "bg-blue-500",
            responsibilities: [
                "Handle advanced configuration and network issues",
                "Resolve server/database-related incidents",
                "Conduct security incident investigations",
                "Diagnose escalated cases from Tier 1"
            ],
            escalate: "Escalate to Tier 3 for critical failures or when expertise is out of scope."
        },
        {
            level: "Tier 3",
            title: "Senior Engineers & Vendors",
            color: "border-purple-500",
            dotColor: "bg-purple-500",
            responsibilities: [
                "Address major outages and infrastructure failures",
                "Coordinate directly with external vendors",
                "Implement infrastructure changes or patches",
                "Lead root cause analysis"
            ],
            escalate: "Escalate to vendors or leadership if business impact exceeds technical authority."
        }
    ];

    return (
        <section id="escalation" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl font-bold text-gray-900">Escalation Flow</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        A step-by-step support path to ensure timely resolution based on issue complexity.
                    </p>
                </motion.div>

                <div className="relative border-l-4 border-gray-200 pl-6 space-y-10">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                            onClick={() => setActive(active === index ? null : index)}
                        >
                            {/* Vertical dot */}
                            <div
                                className={`absolute -left-3 w-6 h-6 rounded-full ring-4 ring-white ${tier.dotColor}`}
                            ></div>

                            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {tier.level}: <span className="text-gray-600">{tier.title}</span>
                                    </h3>
                                </div>

                                <ul className="space-y-3 mt-4">
                                    {tier.responsibilities.map((item, idx) => (
                                        <li key={idx} className="flex gap-2 items-start text-sm text-gray-700">
                                            <CheckCircle className="text-green-500 w-4 h-4 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 flex items-start gap-2 bg-white border-l-4 border-yellow-400 p-3 rounded-md">
                                    <ArrowUp className="w-4 h-4 text-orange-500 mt-0.5" />
                                    <p className="text-sm text-gray-700">{tier.escalate}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const SampleResponse = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [displayedText, setDisplayedText] = useState('');

    const sampleResponse = `Dear Sarah,

Thank you for contacting IT support regarding the email synchronization issues you're experiencing with Outlook. I understand how frustrating this must be, especially when you're trying to stay on top of important communications.

I've reviewed your ticket and identified that this appears to be related to a recent server update that affected several users in your department. Here's what I'm doing to resolve this immediately:

1. I'm applying a specific configuration fix to your email profile that should restore full synchronization within the next 15 minutes.
2. I'm also implementing a preventive measure to ensure this doesn't happen again.
3. I'll monitor your account for the next hour to confirm everything is working properly.

You should start seeing your emails sync normally very soon. I'll send you a follow-up email once I've confirmed the fix is working, and I'll also call you in about 20 minutes to make sure everything is functioning as expected.

If you notice any other issues or have questions, please don't hesitate to reach out to me directly at extension 1234 or reply to this ticket. Your productivity is important to us, and I'm committed to making sure this is completely resolved.

Best regards,  
Alex Thompson  
IT Support Specialist  
Direct: (555) 123-1234  
Ticket #: CS-2024-0156`;

    useEffect(() => {
        if (isVisible) {
            let index = 0;
            const timer = setInterval(() => {
                if (index < sampleResponse.length) {
                    setDisplayedText(sampleResponse.slice(0, index + 1));
                    index++;
                } else {
                    clearInterval(timer);
                }
            }, 20);
            return () => clearInterval(timer);
        }
    }, [isVisible]);

    return (
        <section id="response" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Helpdesk Response Example</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A real-world support message showing professionalism, empathy, and clear action steps.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                            <div className="flex items-center gap-3">
                                <Mail className="text-blue-600 w-6 h-6" />
                                <div>
                                    <p className="text-sm text-gray-500">Ticket Number</p>
                                    <p className="font-medium text-gray-800">#CS-2024-0156</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                            <div className="flex items-center gap-3">
                                <Clock className="text-green-600 w-6 h-6" />
                                <div>
                                    <p className="text-sm text-gray-500">Response Time</p>
                                    <p className="font-medium text-green-700">12 minutes</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                            <div className="flex items-center gap-3">
                                <Phone className="text-purple-600 w-6 h-6" />
                                <div>
                                    <p className="text-sm text-gray-500">Follow-up</p>
                                    <p className="font-medium text-gray-800">Call within 20 minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Chat Bubble */}
                    <motion.div
                        className="lg:col-span-2 bg-white border border-blue-100 rounded-2xl shadow-lg p-6 relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        onViewportEnter={() => setIsVisible(true)}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 shadow-sm relative">
                            <div className="absolute top-0 left-6 w-4 h-4 bg-blue-50 rotate-45 transform -translate-y-2 border-l border-t border-blue-100"></div>
                            <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed text-sm md:text-base">
                                {displayedText}
                                {isVisible && displayedText.length < sampleResponse.length && (
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                        className="inline-block w-2 h-5 bg-blue-500 ml-1"
                                    />
                                )}
                            </pre>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
// Make sure this is defined properly

const Popup = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
        <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-lg w-full text-center relative animate-fadeIn">
            <button
                onClick={onClose}
                className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
            >
                &times;
            </button>

            <h2 className="text-2xl font-extrabold text-blue-700 mb-2">
                ✅ Incident Submitted
            </h2>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Thank you for reporting this!
            </h3>

            <p className="text-gray-700">
                Your incident report has been successfully submitted. Our team will review and follow up as needed.
            </p>

            <button
                onClick={onClose}
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
                Close
            </button>
        </div>
    </div>
);

const IncidentTemplate = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <motion.section
            className="bg-gradient-to-br from-sky-50 to-blue-100 py-16 px-4"
            initial="hidden"
            animate="visible"
            variants={sectionVariant}
        >
            <motion.div
                className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border border-blue-200"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h2
                    className="text-4xl font-extrabold text-center text-blue-800 mb-10"
                    variants={sectionVariant}
                    custom={1}
                >
                    🚨 Incident Report Template
                </motion.h2>

                <form className="space-y-8">
                    <motion.div variants={sectionVariant} custom={2}>
                        <label className="block text-gray-800 font-medium mb-2">Incident Title</label>
                        <input type="text" placeholder="e.g. Network Outage in Block A" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </motion.div>

                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={sectionVariant} custom={3}>
                        <div>
                            <label className="block text-gray-800 font-medium mb-2">Date & Time</label>
                            <input type="datetime-local" className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                        </div>
                        <div>
                            <label className="block text-gray-800 font-medium mb-2">Reported By</label>
                            <input type="text" placeholder="Full Name, Role, Contact" className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                        </div>
                    </motion.div>

                    <motion.div variants={sectionVariant} custom={4}>
                        <label className="block text-gray-800 font-medium mb-2">Incident Description</label>
                        <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-xl" placeholder="Describe the incident clearly..." />
                    </motion.div>

                    <motion.div variants={sectionVariant} custom={5}>
                        <label className="block text-gray-800 font-medium mb-2">Who Was Involved?</label>
                        <textarea rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-xl" placeholder="People, systems, departments..." />
                    </motion.div>

                    <motion.div variants={sectionVariant} custom={6}>
                        <label className="block text-gray-800 font-medium mb-2">Impact Summary</label>
                        <textarea rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-xl" placeholder="What systems/users were affected?" />
                    </motion.div>

                    <motion.div variants={sectionVariant} custom={7}>
                        <label className="block text-gray-800 font-medium mb-2">Response Actions Timeline</label>
                        <div className="space-y-4">
                            <div className="grid md:grid-cols-3 gap-4">
                                <input type="text" placeholder="10:15 AM" className="px-4 py-2 border border-gray-300 rounded-xl" />
                                <input type="text" placeholder="Issue escalated to IT" className="px-4 py-2 border border-gray-300 rounded-xl" />
                                <input type="text" placeholder="Sarah Khan" className="px-4 py-2 border border-gray-300 rounded-xl" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={sectionVariant} custom={8}>
                        <label className="block text-gray-800 font-medium mb-2">Final Resolution Summary</label>
                        <textarea rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-xl" placeholder="Root cause and final resolution..." />
                    </motion.div>

                    <motion.div className="flex items-center gap-6" variants={sectionVariant} custom={9}>
                        <span className="text-gray-800 font-medium">Follow-Up Required?</span>
                        <label className="flex items-center gap-2">
                            <input type="radio" name="followup" /> <span>Yes</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" name="followup" /> <span>No</span>
                        </label>
                    </motion.div>

                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={sectionVariant} custom={10}>
                        <div>
                            <label className="block text-gray-800 font-medium mb-2">Submitted By</label>
                            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                        </div>
                        <div>
                            <label className="block text-gray-800 font-medium mb-2">Signature</label>
                            <input type="text" placeholder="Your Signature" className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                        </div>
                        <div>
                            <label className="block text-gray-800 font-medium mb-2">Date</label>
                            <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-xl" />
                        </div>
                    </motion.div>

                    <motion.div className="text-center pt-6" variants={sectionVariant} custom={11}>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowPopup(true);
                            }}
                        >
                            Submit Report
                        </button>
                    </motion.div>
                </form>

                {showPopup && <Popup onClose={() => setShowPopup(false)} />}
            </motion.div>
        </motion.section>
    );
};



function IsIm() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-primary-500 to-secondary-500 ">
            <Hero />
            <Standards />
            <EscalationMatrix />
            <SampleResponse />
            <IncidentTemplate />
            {/* <Downloads /> */}
        </div>
    );
}

export default IsIm;