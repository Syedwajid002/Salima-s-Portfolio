import { CheckCircle, Clock, Users, AlertTriangle, Calendar, FileText, Target, Shield } from "lucide-react";

const TeamLeadershipToolsStandalone = () => {
    // Sample data for RACI Chart
    const raciData = [
        {
            task: "System Patching",
            responsible: "IT Technician",
            accountable: "IT Supervisor",
            consulted: "Security Team",
            informed: "End Users"
        },
        {
            task: "New Employee Onboarding",
            responsible: "IT Supervisor",
            accountable: "IT Manager",
            consulted: "HR Department",
            informed: "Department Head"
        },
        {
            task: "Incident Response",
            responsible: "IT Support Team",
            accountable: "IT Supervisor",
            consulted: "Security Officer",
            informed: "Management"
        },
        {
            task: "Software Deployment",
            responsible: "IT Technician",
            accountable: "IT Supervisor",
            consulted: "Department Heads",
            informed: "All Users"
        }
    ];

    // Sample PTO data
    const ptoRequests = [
        {
            employee: "John Smith",
            dateRange: "2024-03-15 to 2024-03-17",
            status: "Approved",
            notes: "Family vacation"
        },
        {
            employee: "Sarah Johnson",
            dateRange: "2024-04-02 to 2024-04-02",
            status: "Pending",
            notes: "Medical appointment"
        },
        {
            employee: "Mike Chen",
            dateRange: "2024-04-10 to 2024-04-14",
            status: "Approved",
            notes: "Personal time off"
        },
        {
            employee: "Lisa Davis",
            dateRange: "2024-04-20 to 2024-04-21",
            status: "Denied",
            notes: "Conflicts with system maintenance"
        }
    ];

    const onboardingTasks = [
        {
            day: 1,
            title: "Orientation & Setup",
            tasks: [
                "Welcome meeting with IT Supervisor",
                "Complete HR paperwork and security clearance",
                "Workspace assignment and equipment setup",
                "System access provisioning (Active Directory, email, VPN)",
                "Introduction to team members and department tour"
            ]
        },
        {
            day: 2,
            title: "Systems Training & Documentation",
            tasks: [
                "Review IT policies and procedures manual",
                "Shadow senior technician on help desk duties",
                "Training on ticketing system and documentation standards",
                "Introduction to monitoring tools and dashboards",
                "Review service level agreements and KPIs"
            ]
        },
        {
            day: 3,
            title: "Hands-on Experience & Goals",
            tasks: [
                "Complete first supervised ticket resolution",
                "Meet with department heads for service expectations",
                "Review performance metrics and evaluation criteria",
                "Set 30/60/90 day goals with supervisor",
                "Schedule regular check-ins and feedback sessions"
            ]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8 bg-gray-50 min-h-screen mt-16">
            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-800">Team Leadership & HR Tools</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Comprehensive toolkit for IT supervision, staff management, and HR collaboration
                </p>
            </div>

            {/* 3-Day Onboarding Plan */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="text-center p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2">
                        <Users className="h-6 w-6 text-teal-600" />
                        3-Day IT Onboarding Plan
                    </h2>
                </div>
                <div className="p-6 space-y-6">
                    {onboardingTasks.map((day) => (
                        <div key={day.day} className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-teal-600 text-white">
                                    Day {day.day}
                                </span>
                                <h3 className="text-xl font-semibold text-gray-800">{day.title}</h3>
                            </div>
                            <div className="grid gap-2 ml-4">
                                {day.tasks.map((task, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-teal-600 mt-1 flex-shrink-0" />
                                        <span className="text-gray-600">{task}</span>
                                    </div>
                                ))}
                            </div>
                            {day.day < 3 && <hr className="border-gray-200 mt-4" />}
                        </div>
                    ))}
                </div>
                <a
                    href="/3Day Process.pdf"
                    download
                    className="m-6 inline-block px-4 py-2 text-sm bg-teal-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Download PDF
                </a>
            </div>

            {/* RACI Chart */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="text-center p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2">
                        <Target className="h-6 w-6 text-teal-600" />
                        RACI Responsibility Matrix
                    </h2>
                </div>
                <div className="p-6">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left p-4 font-semibold text-gray-800">Task / Process</th>
                                    <th className="text-center p-4 font-semibold text-gray-800">
                                        <div className="space-y-1">
                                            <div>Responsible</div>
                                            <div className="text-xs text-gray-500 font-normal">(Does the work)</div>
                                        </div>
                                    </th>
                                    <th className="text-center p-4 font-semibold text-gray-800">
                                        <div className="space-y-1">
                                            <div>Accountable</div>
                                            <div className="text-xs text-gray-500 font-normal">(Signs off)</div>
                                        </div>
                                    </th>
                                    <th className="text-center p-4 font-semibold text-gray-800">
                                        <div className="space-y-1">
                                            <div>Consulted</div>
                                            <div className="text-xs text-gray-500 font-normal">(Provides input)</div>
                                        </div>
                                    </th>
                                    <th className="text-center p-4 font-semibold text-gray-800">
                                        <div className="space-y-1">
                                            <div>Informed</div>
                                            <div className="text-xs text-gray-500 font-normal">(Kept updated)</div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {raciData.map((item, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-4 font-medium text-gray-800">{item.task}</td>
                                        <td className="p-4 text-center">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {item.responsible}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                {item.accountable}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                {item.consulted}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                                {item.informed}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <a
                    href="/RACI.pdf"
                    download
                    className="m-6 inline-block px-4 py-2 text-sm bg-teal-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Download PDF
                </a>
            </div>

            {/* PTO Request Tracker */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="text-center p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2">
                        <Calendar className="h-6 w-6 text-teal-600" />
                        PTO Request & Approval Tracker
                    </h2>
                </div>
                <div className="p-6">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left p-4 font-semibold text-gray-800">Employee Name</th>
                                    <th className="text-left p-4 font-semibold text-gray-800">Date Range</th>
                                    <th className="text-center p-4 font-semibold text-gray-800">Status</th>
                                    <th className="text-left p-4 font-semibold text-gray-800">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ptoRequests.map((request, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-4 font-medium text-gray-800">{request.employee}</td>
                                        <td className="p-4 text-gray-600">{request.dateRange}</td>
                                        <td className="p-4 text-center">
                                            <span
                                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${request.status === "Approved" ? "bg-green-100 text-green-800" :
                                                    request.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                                                        "bg-red-100 text-red-800"
                                                    }`}
                                            >
                                                {request.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-gray-600">{request.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <a
                    href="/PTO Req.docx"
                    download
                    className="m-6 inline-block px-4 py-2 text-sm bg-teal-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Download PDF
                </a>
            </div>

            {/* HR Warning Memo Template */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200">
                <div className="text-center p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-800 flex items-center justify-center gap-2">
                        <AlertTriangle className="h-6 w-6 text-teal-600" />
                        HR Warning Memo Template
                    </h2>
                </div>
                <div className="p-6">
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4 max-w-4xl mx-auto border border-gray-200">
                        <div className="text-center space-y-2">
                            <h3 className="text-xl font-bold text-gray-800">DISCIPLINARY ACTION MEMO</h3>
                            <div className="flex items-center justify-center gap-2 text-gray-600">
                                <Shield className="h-4 w-4" />
                                <span className="text-sm">CONFIDENTIAL - HR USE ONLY</span>
                            </div>
                        </div>

                        <hr className="border-gray-300" />

                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">Date:</label>
                                    <div className="bg-white border border-gray-300 rounded p-2 text-gray-500">
                                        [MM/DD/YYYY]
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">Employee Name:</label>
                                    <div className="bg-white border border-gray-300 rounded p-2 text-gray-500">
                                        [Full Name]
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">Employee ID:</label>
                                    <div className="bg-white border border-gray-300 rounded p-2 text-gray-500">
                                        [Employee ID]
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">Department:</label>
                                    <div className="bg-white border border-gray-300 rounded p-2 text-gray-500">
                                        [Department Name]
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-800">Violation Description:</label>
                                <div className="bg-white border border-gray-300 rounded p-4 min-h-[100px] text-gray-500">
                                    [Detailed description of the policy violation, including date, time, witnesses, and specific behaviors observed. Reference applicable company policies or procedures.]
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-800">Supervisor's Statement:</label>
                                <div className="bg-white border border-gray-300 rounded p-4 min-h-[100px] text-gray-500">
                                    [Supervisor's assessment of the situation, previous discussions or warnings, and impact on team/operations.]
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-800">Improvement Expectations & Timeline:</label>
                                <div className="bg-white border border-gray-300 rounded p-4 min-h-[100px] text-gray-500">
                                    [Specific behavioral changes required, measurable goals, timeline for improvement, and consequences for failure to improve. Include follow-up meeting dates.]
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">Supervisor Signature:</label>
                                    <div className="bg-white border border-gray-300 rounded p-2 h-12"></div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800">Employee Signature:</label>
                                    <div className="bg-white border border-gray-300 rounded p-2 h-12"></div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-800">HR Review:</label>
                                <div className="bg-white border border-gray-300 rounded p-4 min-h-[60px] text-gray-500">
                                    [HR representative comments and approval]
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    href="/HR Warning Memo.pdf"
                    download
                    className="m-6 inline-block px-4 py-2 text-sm bg-teal-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Download PDF
                </a>
            </div>

            {/* Footer */}
            <div className="text-center p-6 text-gray-600">
                <p className="text-sm">
                    These tools demonstrate practical team leadership and HR management capabilities essential for IT supervision roles.
                </p>
            </div>
        </div>
    );
};

export default TeamLeadershipToolsStandalone;