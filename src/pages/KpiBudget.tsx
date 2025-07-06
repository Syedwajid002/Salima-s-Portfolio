import React from "react";
import { motion } from "framer-motion";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import html2pdf from "html2pdf.js";

const kpiChartData = [
    { week: "Week 1", resolution: 4.0, satisfaction: 88, uptime: 99.3 },
    { week: "Week 2", resolution: 3.2, satisfaction: 90, uptime: 99.5 },
    { week: "Week 3", resolution: 2.5, satisfaction: 91, uptime: 99.8 },
    { week: "Week 4", resolution: 2.3, satisfaction: 93, uptime: 99.9 },
];

const budgetData = [
    { category: "Software", item: "Slack Pro", cost: "$8/user", purpose: "Team communication" },
    { category: "Training", item: "Udemy Course", cost: "$20", purpose: "Skill development" },
    { category: "Hardware", item: "Monitors", cost: "$150 each", purpose: "Better workspace" },
];

const downloadPDF = (elementId: string, filename: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    html2pdf().set({
        margin: 0.5,
        filename,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    }).from(element).save();
};

const SalimaKPIBudget: React.FC = () => {
    return (
        <section className="p-6 max-w-6xl mx-auto mt-12">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-primary-500 mb-10 text-center"
            >
                KPI & Budget Tools
            </motion.h1>

            {/* KPI CHARTS */}
            <div id="salima-kpi" className="mb-10">
                <h2 className="text-xl font-semibold text-primary-500 mb-4">KPI Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white shadow-md p-4 rounded-xl border-l-4 border-primary-500">
                        <h3 className="mb-2 font-medium">Avg. Ticket Resolution Time</h3>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={kpiChartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="week" />
                                <YAxis unit="h" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="resolution" stroke="#3B82F6" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="bg-white shadow-md p-4 rounded-xl border-l-4 border-primary-500">
                        <h3 className="mb-2 font-medium">Customer Satisfaction</h3>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={kpiChartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="week" />
                                <YAxis unit="%" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="satisfaction" fill="#8B5CF6" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="bg-white shadow-md p-4 rounded-xl border-l-4 border-primary-500 md:col-span-2">
                        <h3 className="mb-2 font-medium">System Uptime</h3>
                        <ResponsiveContainer width="100%" height={200}>
                            <AreaChart data={kpiChartData}>
                                <defs>
                                    <linearGradient id="colorUptime" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="week" />
                                <YAxis unit="%" />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="uptime" stroke="#3B82F6" fillOpacity={1} fill="url(#colorUptime)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <button onClick={() => downloadPDF("salima-kpi", "salima_kpi_charts.pdf")} className="mt-6 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:opacity-90">
                    Download KPI Charts PDF
                </button>
            </div>

            {/* BUDGET CARDS */}
            <div id="salima-budget" className="mb-10">
                <h2 className="text-xl font-semibold text-primary-500 mb-4">Creative Budget Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {budgetData.map((item, index) => (
                        <div key={index} className="bg-white shadow-lg border-l-4 border-primary-500 p-4 rounded-xl">
                            <h3 className="font-bold text-primary-500">{item.category}</h3>
                            <p className="mt-1 text-sm text-gray-700"><span className="font-medium">Item:</span> {item.item}</p>
                            <p className="text-sm text-gray-700"><span className="font-medium">Cost:</span> {item.cost}</p>
                            <p className="text-sm text-gray-700"><span className="font-medium">Purpose:</span> {item.purpose}</p>
                        </div>
                    ))}
                </div>
                <button onClick={() => downloadPDF("salima-budget", "salima_budget_cards.pdf")} className="mt-6 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:opacity-90">
                    Download Budget PDF
                </button>
            </div>

            {/* SUMMARY */}
            <div id="salima-summary" className="bg-white shadow-md rounded-xl p-6 border-l-8 border-primary-500">
                <h2 className="text-xl font-semibold text-primary-500 mb-4">Supervisor Summary Report</h2>
                <p className="mb-4">
                    This month, our team made significant progress. Ticket resolution time dropped from 4 hours to under 2.5 hours. Customer satisfaction rose above 90%, and system uptime exceeded the 99.5% benchmark.
                </p>
                <p className="mb-4">
                    We allocated the monthly budget towards essential tools like Slack Pro, training courses, and better hardware. This investment directly supported productivity and communication.
                </p>
                <p>
                    Next, we aim to maintain these KPIs while exploring automation tools for further optimization.
                </p>
                <button onClick={() => downloadPDF("salima-summary", "salima_summary.pdf")} className="mt-4 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:opacity-90">
                    Download Summary PDF
                </button>
            </div>
        </section>
    );
};

export default SalimaKPIBudget;
