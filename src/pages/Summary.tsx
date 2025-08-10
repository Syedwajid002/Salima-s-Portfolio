import React from "react";

export default function SummaryPage({
    name = "Salima Khan",
    role = "IT Leadership Readiness Portfolio",
}) {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-50 via-white to-purple-50 p-8 flex items-center justify-center">
            <div className=" mt-10 w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden border border-indigo-100">

                {/* Header Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
                    <h1 className="text-3xl md:text-4xl font-bold">{name}</h1>
                    <p className="mt-2 text-lg opacity-90">{role}</p>
                </div>

                {/* Content Section */}
                <div className="p-8 space-y-8">
                    {/* Overview */}
                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
                            Overview
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Throughout my academic journey, I cultivated a blend of technical expertise,
                            leadership strategies, and cultural adaptability. This portfolio reflects my
                            ability to manage projects, guide teams, and deliver results in high-pressure
                            IT environments.
                        </p>
                    </section>

                    {/* Skills Snapshot */}
                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
                            Skills Snapshot
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Strategic Project Management",
                                "Advanced Communication Skills",
                                "Team Leadership & HR Tools",
                                "Customer Service Excellence",
                                "Ethics & Cultural Adaptability",
                                "Data Analysis & KPI Tracking",
                            ].map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-indigo-50 border border-indigo-100 rounded-lg px-4 py-3 text-gray-800 hover:bg-indigo-100 transition"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Achievements */}
                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
                            Achievements
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>
                                Directed a simulated IT project from inception to completion using agile principles.
                            </li>
                            <li>
                                Created comprehensive toolkits for coaching, incident management, and KPI reporting.
                            </li>
                            <li>
                                Developed strategies for fostering inclusive, ethical, and high-performance team cultures.
                            </li>
                        </ul>
                    </section>

                    {/* Download Resume Button */}
                    <div className="pt-4">
                        <a
                            href="/Salima.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
