/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const links = [
    { to: "/user-profile/profile", label: "Profile" },
    { to: "/user-profile/subscriptions", label: "Subscription" },
    { to: "/user-profile/preferences", label: "Preferences" },
    { to: "/user-profile/notifications", label: "Notifications" },
  ];

  return (
    <nav className="w-full md:w-64 flex-shrink-0 sticky top-4">
      <div className="">
        <div className="flex flex-col">
          {links.map((link) =>
            (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `p-4  cursor-pointer ${
                    isActive ? "bg-[#F1F6FB] text-[#2563EB]" : "text-gray-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;