import React from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } transition-transform duration-200 ease-in-out w-64 bg-gray-900 text-white h-full p-4`}
    >
      <div className="flex justify-end">
        <button
          className="block lg:hidden mb-4 text-xl font-bold text-right"
          onClick={toggleSidebar}
        >
          X
        </button>
      </div>
      <nav>
        <ul>
          <li className="py-2">
            <a href="/">Dashboard</a>
          </li>
          <li className="py-2">
            <a href="/skill-management">Skills Management</a>
          </li>
          <li className="py-2">
            <a href="/project-management">Project Management</a>
          </li>
          <li className="py-2">
            <a href="/blog-management">Blog Management</a>
          </li>
          <li className="py-2">
            <a href="/testimonials-management">Testimonials Management</a>
          </li>
          <li className="py-2">
            <a href="/testimonials-management">User Management</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;