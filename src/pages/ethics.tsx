import React from "react";

const EthicsAssignment = () => (
  <div className="min-h-screen bg-blue-50 mt-6 text-blue-900 font-sans px-4 md:px-12 py-10 space-y-10 max-w-4xl mx-auto">
    <header className="bg-gradient-to-r from-cyan-800 to-cyan-500 text-white py-20 px-6 text-center mt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Ethics, Systems & Culture</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Exploring ethical leadership, cultural adaptation, and professional values in IT management.
      </p>
    </header>
    {/* 1. Ethical Dilemma Response */}
    <section className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-2">1. Ethical Dilemma Response</h2>
      <h3 className="text-lg font-semibold mb-1">
        Scenario: Pressure to Alter Performance Data
      </h3>
      <p className="mb-3">
        As an IT Supervisor, I am asked by upper management to adjust team
        performance metrics to present our department in a better light for an
        upcoming audit. This request is justified as “temporary” and “harmless,”
        but would mean distorting the actual output data—misrepresenting reality
        to stakeholders.
      </p>
      <h4 className="font-semibold">My Decision</h4>
      <p className="mb-3">
        I would respectfully decline to alter the performance data and instead
        report the actual results. Additionally, I would communicate my
        reasoning and concern to both management and my team, emphasizing the
        need for honesty in our reporting process.
      </p>
      <h4 className="font-semibold">Ethical Principle</h4>
      <p className="mb-3">
        This aligns with the principle of{" "}
        <span className="font-bold">integrity</span>—acting truthfully,
        transparently, and maintaining trust with stakeholders.
      </p>
      <h4 className="font-semibold">Leadership Justification</h4>
      <p>
        As a leader, I must model ethical behavior even under pressure.
        Distorting data undermines credibility, damages the team’s reputation,
        and creates a precedent for future unethical actions. By standing firm
        on ethical reporting, I reinforce a culture of trust, accountability,
        and professionalism within my team.
      </p>
      <a
        href="/EDR.pdf"
        download
        className="mt-6 inline-block px-4 py-2 text-sm bg-primary-500 text-white rounded hover:bg-blue-700 transition"
      >
        Download PDF
      </a>
    </section>

    {/* 2. Causal Loop Diagram - Textual Version */}
    <section className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-2">
        2. Causal Loop Diagram: Supervisor Communication & Team Output
      </h2>
      <div className="mb-2">
        <p className="mb-1">
          <span className="font-semibold">Variables:</span> Supervisor
          Communication, Team Understanding, Team Output, Team Morale, Feedback
          Loop.
        </p>
        <ul className="list-disc pl-6 mb-2">
          <li>
            Better <span className="font-bold">Supervisor Communication</span>{" "}
            improves <span className="font-bold">Team Understanding</span> of
            goals.
          </li>
          <li>
            Improved <span className="font-bold">Team Understanding</span>{" "}
            increases <span className="font-bold">Team Output</span>.
          </li>
          <li>
            Higher <span className="font-bold">Team Output</span> boosts{" "}
            <span className="font-bold">Team Morale</span>.
          </li>
          <li>
            Higher <span className="font-bold">Team Morale</span> leads to more{" "}
            <span className="font-bold">Team Feedback</span> to supervisors.
          </li>
          <li>
            More feedback further enhances{" "}
            <span className="font-bold">Supervisor Communication</span>—a
            reinforcing positive loop.
          </li>
        </ul>
      </div>
      <div className="text-center">
        <span className="bg-blue-100 text-blue-700 rounded px-2 py-1">
          {/* Emulate loop arrows with text */}
          Supervisor Communication → Team Understanding → Team Output → Team
          Morale → Team Feedback → Supervisor Communication
        </span>
      </div>
      <a
        href="../../public/loop.png"
        download
        className="mt-6 inline-block px-4 py-2 text-sm bg-primary-500 text-white rounded hover:bg-blue-700 transition"
      >
        Download PDF
      </a>
    </section>

    {/* 3. Personal Code of Ethics */}
    <section className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-2">3. Personal Code of Ethics</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Transparency:</span> Communicate
          openly about goals, decisions, and challenges, ensuring team members
          are informed and understand the reasoning behind actions.
        </li>
        <li>
          <span className="font-semibold">Accountability:</span> Take
          responsibility for decisions and results, openly address mistakes, and
          use them as learning opportunities.
        </li>
        <li>
          <span className="font-semibold">Respect:</span> Treat all team
          members, stakeholders, and clients with dignity, valuing every opinion
          and background.
        </li>
        <li>
          <span className="font-semibold">Data Privacy:</span> Protect sensitive
          information, comply with relevant laws, and educate the team on data
          security best practices.
        </li>
        <li>
          <span className="font-semibold">Non-discrimination:</span> Ensure
          fairness in assignments and opportunities, fostering an inclusive and
          supportive environment.
        </li>
        <li>
          <span className="font-semibold">Continuous Improvement:</span>{" "}
          Encourage ongoing learning, skill development, and adaptation to
          changing technology and business needs.
        </li>
      </ul>
      <a
        href="/PCE.pdf"
        download
        className="mt-6 inline-block px-4 py-2 text-sm bg-primary-500 text-white rounded hover:bg-blue-700 transition"
      >
        Download PDF
      </a>
    </section>

    {/* 4. U.S. Cultural Adaptation Reflection */}
    <section className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-2">
        4. U.S. Cultural Adaptation Reflection
      </h2>
      <p>
        Having worked in IT teams internationally, I see that U.S. workplaces
        emphasize open dialogue, independent initiative, and collaboration
        across roles. Communication in the U.S. tends to be direct and
        constructive, with regular feedback and approachable leaders who invite
        employee participation. In contrast, my home country often values
        hierarchical structure and more formal feedback channels.
      </p>
      <p className="mt-2">
        To adapt, I will embrace open communication, transparency, and regular
        feedback, empower my team to take initiative, and value diversity in
        problem-solving. By blending my cross-cultural perspectives with U.S.
        norms for openness and team participation, I can build stronger, more
        innovative, and inclusive IT teams.
      </p>
      <a
        href="/USCAR.pdf"
        download
        className="mt-6 inline-block px-4 py-2 text-sm bg-primary-500 text-white rounded hover:bg-blue-700 transition"
      >
        Download PDF
      </a>
    </section>
  </div>
);

export default EthicsAssignment;
