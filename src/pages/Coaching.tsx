// src/pages/SalimaCoachingToolkit.js
import React from "react";

export default function SalimaCoachingToolkit() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-200 via-primary-50 to-primary-300 font-sans">
            {/* Hero Section */}
            <header className="w-full py-16 text-center bg-white shadow-md rounded-b-3xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary-500 mb-2 drop-shadow mt-4">
                    Coaching & Communication Toolkit
                </h1>
                <p className="text-lg md:text-xl text-primary-450 opacity-90 mx-auto max-w-xl">
                    Curated coaching strategies and communication skills that I use to
                    empower teams and foster effective dialogue.
                </p>
            </header>

            {/* Main Content */}
            <main className="max-w-3xl mx-auto py-12 px-4 grid gap-10">
                <section className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-primary-500 mb-4">
                        My Philosophy on Coaching & Communication
                    </h2>
                    <p className="text-blue-900 leading-relaxed">
                        Coaching is a journey of unlocking potential and driving growth. I
                        focus on fostering authentic relationships through deep listening,
                        asking meaningful questions, and encouraging self-reflection.
                        Communication is the foundation of this work — it builds the trust
                        and clarity necessary to guide teams and individuals toward
                        success.
                    </p>
                </section>

                <section className="bg-blue-50 border-l-8 border-primary-700 rounded-2xl shadow-md p-8">
                    <h2 className="text-xl font-semibold text-primary-500 mb-3">
                        Core Components of My Approach
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-blue-900 text-lg leading-relaxed">
                        <li>
                            <strong>Empathetic Listening:</strong> Creating safe spaces
                            where voices are truly heard and valued.
                        </li>
                        <li>
                            <strong>Intentional Feedback:</strong> Providing clear,
                            supportive guidance designed to motivate and develop.
                        </li>
                        <li>
                            <strong>Thought-Provoking Questions:</strong> Encouraging
                            insight and new ways of thinking for lasting impact.
                        </li>
                        <li>
                            <strong>Clear Goal Alignment:</strong> Helping set actionable
                            objectives with accountability checkpoints.
                        </li>
                        <li>
                            <strong>Collaborative Facilitation:</strong> Building inclusive
                            environments where ideas and ownership thrive.
                        </li>
                    </ul>
                </section>

                <section className="bg-white rounded-xl shadow p-8">
                    <h2 className="text-xl font-semibold text-primary-500 mb-3">
                        Why This Matters to Me
                    </h2>
                    <p className="text-blue-900 leading-relaxed">
                        I believe that great coaching and communication unlock human
                        potential. Through transparency, trust, and empowerment,
                        individuals and teams achieve not only their goals but grow in
                        confidence and resilience — a foundation for sustained success.
                    </p>
                </section>

                <section className="bg-blue-50 rounded-xl shadow p-8">
                    <h2 className="text-xl font-semibold text-primary-500 mb-3">
                        Practical Tips I Use Every Day
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-blue-900 text-lg leading-relaxed">
                        <li>
                            Always start with clear session goals and active listening to
                            set the right tone.
                        </li>
                        <li>
                            Use straightforward language to promote understanding and
                            minimize confusion.
                        </li>
                        <li>
                            Prompt curiosity with questions that inspire deeper reflection
                            and engagement.
                        </li>
                        <li>
                            Celebrate progress frequently, connecting efforts to
                            bigger-picture achievements.
                        </li>
                        <li>
                            Frame challenges as growth opportunities, fostering a positive
                            learning culture.
                        </li>
                    </ul>
                </section>

                <section className="bg-white rounded-xl shadow p-8">
                    <h2 className="text-xl font-semibold text-primary-500 mb-3">
                        How It Translates to My Work
                    </h2>
                    <p className="text-blue-900 leading-relaxed">
                        Whether I’m mentoring colleagues, leading team workshops, or
                        managing projects, this toolkit equips me to create meaningful
                        connections, spark creativity, and drive purposeful outcomes.
                        These principles reflect how I build culture and leadership within
                        every context I work.
                    </p>
                </section>
            </main>
        </div>
    );
}
