import React from "react";
import timelineImage from "../../public/Timeline.jpg"; // adjust path

export default function PortfolioTimeline() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-primary-50 to-priamry-100 py-12 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-center text-primary-500 mb-4 mt-10">
                    Portfolio Timeline & Task Progress
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    A visual representation of My portfolio development process,
                    showing milestone achievements, task progress, and the steady
                    advancement from concept to completion.
                </p>

                {/* Timeline Image */}
                <div className="bg-white shadow-lg rounded-xl p-4 mb-8">
                    <img
                        src={timelineImage}
                        alt="Portfolio Development Timeline"
                        className="rounded-lg"
                    />
                </div>

                {/* Summary Section */}
                <div className="bg-white shadow-lg rounded-xl p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-priamry-700">Project Overview</h2>
                    <p className="text-gray-700">
                        The portfolio evolved through a structured sequence of phases,
                        beginning in late May and concluding by mid-August.
                        Every deliverable was completed in full, showcasing Salima’s
                        organizational skills, adaptability, and attention to detail.
                    </p>

                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li><strong>Late May –</strong> Executive Proposal completed.</li>
                        <li><strong>Early June –</strong> Coaching & Communication Section finalized.</li>
                        <li><strong>Mid-June –</strong> Customer Service & Escalation Toolkit delivered.</li>
                        <li><strong>Late June –</strong> KPI Dashboard & Mini Budget completed.</li>
                        <li><strong>Early July –</strong> Team Leadership & HR Templates finished.</li>
                        <li><strong>Late July –</strong> Ethics & Cultural Adaptation Plan approved.</li>
                        <li><strong>Early August –</strong> Final Website Design & Integration done.</li>
                        <li><strong>Mid-August –</strong> Final Video Presentation & Publishing completed.</li>
                    </ul>

                    <p className="text-gray-700 mt-4">
                        This planned progression reflects not only technical execution but also
                        the ability to maintain consistent momentum and quality across all stages.
                    </p>
                </div>
            </div>
        </div>
    );
}
