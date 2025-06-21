/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiHome, FiSettings, FiUsers, FiMail, FiCheckCircle, FiUserCheck } from "react-icons/fi";
import { MdAssignmentTurnedIn, MdOutlineDashboardCustomize } from "react-icons/md";
import { BsClipboardCheck } from "react-icons/bs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/admin-dashboard/dashboard", label: "Dashboard", icon: <FiHome className="mr-2" /> },
    { to: "/admin-dashboard/activiteitenbeheer", label: "Activiteiten Beheer", icon: <MdOutlineDashboardCustomize className="mr-2" /> },
    { to: "/admin-dashboard/ingezondenactiviteiten", label: "Ingezonden Activiteiten", icon: <MdAssignmentTurnedIn className="mr-2" /> },
    { to: "/admin-dashboard/gebruikersbeheer", label: "Gebruikers", icon: <FiUsers className="mr-2" /> },
    { to: "/admin-dashboard/contactberichten", label: "Contact Berichten", icon: <FiMail className="mr-2" /> },
    { to: "/admin-dashboard/testgroep-aanmeldingen", label: "Testgroep Aanmeldingen", icon: <FiUserCheck className="mr-2" /> },
    { to: "/admin-dashboard/kwaliteitsaudit", label: "Kwaliteitsaudit", icon: <BsClipboardCheck className="mr-2" /> },
    { to: "/admin-dashboard/early-access", label: "Early Access", icon: <FiSettings className="mr-2" /> },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white shadow p-2 rounded-xl cursor-pointer"
      >
        <FiMenu size={24} />
      </button>

      {isOpen && (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 bg-black/50 bg-opacity-50 z-40"
    ></div>
  )}

      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:shadow-none md:h-auto`}
      >
        <div className="flex flex-col pt-16 md:pt-0">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)} // close drawer on link click
              className={({ isActive }) =>
                `p-4 flex items-center cursor-pointer inter-tight-400 ${
                  isActive ? "bg-[#F1F6FB] text-[#2563EB]" : "text-gray-700"
                }`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
