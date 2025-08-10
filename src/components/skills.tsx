import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Briefcase, Lightbulb, FileText } from "lucide-react";

export default function ProfessionalSuiteMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="nav-link flex items-center gap-1"
            >
                Professional Suite
                <svg
                    className={`w-4 h-4 mt-[1px] transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute z-50 bg-white shadow-md rounded-lg mt-2 w-60 border border-gray-200">
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            (isActive ? "bg-blue-50" : "") +
                            " flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                        }
                    >
                        <Briefcase className="w-4 h-4 text-primary-500" />
                        Showcase Projects
                    </NavLink>

                    <NavLink
                        to="/skills"
                        className={({ isActive }) =>
                            (isActive ? "bg-blue-50" : "") +
                            " flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                        }
                    >
                        <Lightbulb className="w-4 h-4 text-primary-500" />
                        Core Skills
                    </NavLink>

                    <NavLink
                        to="/resume"
                        className={({ isActive }) =>
                            (isActive ? "bg-blue-50" : "") +
                            " flex items-center gap-2 px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                        }
                    >
                        <FileText className="w-4 h-4 text-primary-500" />
                        Resume
                    </NavLink>
                </div>
            )}
        </div>
    );
}
