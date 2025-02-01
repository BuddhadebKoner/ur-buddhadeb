"use client";

import { Menu } from "lucide-react";
import SidebarItem from "./SidebarItem";
import { useState } from "react";

const sidebarItems = [
   {
      title: "Actions",
      titleIcon: "/icons/action.svg",
      links: [
         { name: "Buttons", href: "/component/buttons" },
         { name: "Dropdowns", href: "/component/dropdowns" },
         { name: "Menus", href: "/component/menus" },
         { name: "Modals", href: "/component/modals" },
         { name: "Tooltips", href: "/component/tooltips" },
         { name: "Popovers", href: "/component/popovers" },
      ],
   },
   {
      title: "Forms",
      titleIcon: "/icons/forms.svg",
      links: [
         { name: "Inputs", href: "/component/inputs" },
         { name: "Textareas", href: "/component/textareas" },
         { name: "Selects", href: "/component/selects" },
         { name: "Checkboxes", href: "/component/checkboxes" },
         { name: "Radio Buttons", href: "/component/radio-buttons" },
         { name: "Switches", href: "/component/switches" },
         { name: "Sliders", href: "/component/sliders" },
         { name: "File Uploads", href: "/component/file-uploads" },
      ],
   },
   {
      title: "Data Display",
      titleIcon: "/icons/action.svg",
      links: [
         { name: "Tables", href: "/component/tables" },
         { name: "Lists", href: "/component/lists" },
         { name: "Cards", href: "/component/cards" },
         { name: "Avatars", href: "/component/avatars" },
         { name: "Badges", href: "/component/badges" },
         { name: "Tags", href: "/component/tags" },
         { name: "Progress Bars", href: "/component/progress-bars" },
         { name: "Timeline", href: "/component/timeline" },
      ],
   },
   {
      title: "Feedback",
      titleIcon: "/icons/action.svg",
      links: [
         { name: "Alerts", href: "/component/alerts" },
         { name: "Toasts", href: "/component/toasts" },
         { name: "Skeletons", href: "/component/skeletons" },
         { name: "Notifications", href: "/component/notifications" },
         { name: "Spinners", href: "/component/spinners" },
         { name: "Loaders", href: "/component/loaders" },
      ],
   },
   {
      title: "Navigation",
      titleIcon: "/icons/action.svg",
      links: [
         { name: "Breadcrumbs", href: "/component/breadcrumbs" },
         { name: "Pagination", href: "/component/pagination" },
         { name: "Tabs", href: "/component/tabs" },
         { name: "Steps", href: "/component/steps" },
         { name: "Sidebars", href: "/component/sidebars" },
         { name: "Navbars", href: "/component/navbars" },
      ],
   },
   {
      title: "Charts & Stats",
      titleIcon: "/icons/action.svg",
      links: [
         { name: "Analytics", href: "/component/analytics" },
         { name: "Graphs", href: "/component/graphs" },
         { name: "Charts", href: "/component/charts" },
         { name: "Counters", href: "/component/counters" },
      ],
   },
   {
      title: "Advanced",
      titleIcon: "/icons/action.svg",
      links: [
         { name: "Date Pickers", href: "/component/date-pickers" },
         { name: "Time Pickers", href: "/component/time-pickers" },
         { name: "Calendars", href: "/component/calendars" },
         { name: "Kanban Boards", href: "/component/kanban" },
         { name: "Chat UI", href: "/component/chat" },
         { name: "Code Editors", href: "/component/code-editors" },
      ],
   },
   {
      title: "Settings",
      titleIcon: "/icons/action.svg",
      links: [
         { name: "Profile", href: "/component/profile" },
         { name: "Billing", href: "/component/billing" },
         { name: "Notifications", href: "/component/notifications" },
         { name: "Security", href: "/component/security" },
         { name: "Themes", href: "/component/themes" },
      ],
   },
];

export default function Sidebar() {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className="relative">
         {/* Hamburger Button */}
         <button
            className="md:hidden fixed top-20 right-5 z-50 p-2 bg-gray-700 rounded"
            onClick={() => setIsOpen(!isOpen)}
         >
            <Menu className="w-6 h-6 text-white" />
         </button>

         {/* Sidebar */}
         <div
            className={`z-30 fixed md:relative top-0 left-0 h-full w-64 bg-[#1d232a] pt-20 pb-10 px-5 pl-10 border-r border-[#2f3741] flex flex-col gap-5 overflow-y-auto transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
               }`}
         >
            {sidebarItems.map((item, index) => (
               <SidebarItem key={index} title={item.title} titleIcon={item.titleIcon} links={item.links} />
            ))}
         </div>

         {/* Overlay for Mobile */}
         {isOpen && (
            <div
               className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
               onClick={() => setIsOpen(false)}
            ></div>
         )}
      </div>
   );
}