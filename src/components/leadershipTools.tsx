import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LeadershipToolkitMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="nav-link flex items-center gap-1"
            >
                Leadership Suite                <svg
                    className={`w-4 h-4 mt-[1px] transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute z-50 bg-white shadow-md rounded-lg mt-2 w-60 border border-gray-200">
                    <NavLink
                        to="/coaching"
                        className={({ isActive }) =>
                            (isActive ? "bg-blue-50" : "") +
                            " flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                        }
                    >
                        Coaching & Communication
                    </NavLink>

                    <NavLink
                        to="/KPI"
                        className={({ isActive }) =>
                            (isActive ? "bg-blue-50" : "") +
                            " flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                        }
                    >
                        KPI & Budget Tools
                    </NavLink>

                    <NavLink
                        to="/TeamLeader"
                        className={({ isActive }) =>
                            (isActive ? "bg-blue-50" : "") +
                            " flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                        }
                    >
                        Team Leadership & HR Tools
                    </NavLink>

                    <NavLink
                        to="/CsIm"
                        className={({ isActive }) =>
                            (isActive ? "bg-blue-50" : "") +
                            " flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                        }
                    >
                        Customer Service & Incident Management
                    </NavLink>

                    <NavLink
                        to="/ethics"
                        className={({ isActive }) =>
                            (isActive ? "bg-blue-50" : "") +
                            " flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                        }
                    >
                        Ethics, Systems & Culture
                    </NavLink>

                    <NavLink
                        to="/salimas-summary"
                        className={({ isActive }) =>
                            (isActive ? "bg-blue-50" : "") +
                            " flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                        }
                    >
                        Summary
                    </NavLink>
                </div>
            )}
        </div>
    );
}
