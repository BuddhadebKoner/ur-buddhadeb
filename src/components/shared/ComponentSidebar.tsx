"use client";

import SidebarItem from "./SidebarItem";


const Sidebar: React.FC = () => {
   return (
      <div className="w-1/5 h-full bg-[#1d232a] pt-20 pb-10 px-5 pl-10 border-r border-[#2f3741] flex flex-col gap-5 overflow-y-auto">
         <SidebarItem
            title="Actions"
            titleIcon="/icons/action.svg"
            links={[
               { name: "Buttons", href: "/component/buttons" },
               { name: "Dropdowns", href: "/component/dropdowns" },
               { name: "Menus", href: "/component/menus" },
               { name: "Modals", href: "/component/modals" },
               { name: "Tooltips", href: "/component/tooltips" },
               { name: "Popovers", href: "/component/popovers" },
            ]}
         />

         <SidebarItem
            title="Forms"
            titleIcon="/icons/forms.svg"
            links={[
               { name: "Inputs", href: "/component/inputs" },
               { name: "Textareas", href: "/component/textareas" },
               { name: "Selects", href: "/component/selects" },
               { name: "Checkboxes", href: "/component/checkboxes" },
               { name: "Radio Buttons", href: "/component/radio-buttons" },
               { name: "Switches", href: "/component/switches" },
               { name: "Sliders", href: "/component/sliders" },
               { name: "File Uploads", href: "/component/file-uploads" },
            ]}
         />

         <SidebarItem
            title="Data Display"
            titleIcon="/icons/action.svg"
            links={[
               { name: "Tables", href: "/component/tables" },
               { name: "Lists", href: "/component/lists" },
               { name: "Cards", href: "/component/cards" },
               { name: "Avatars", href: "/component/avatars" },
               { name: "Badges", href: "/component/badges" },
               { name: "Tags", href: "/component/tags" },
               { name: "Progress Bars", href: "/component/progress-bars" },
               { name: "Timeline", href: "/component/timeline" },
            ]}
         />

         <SidebarItem
            title="Feedback"
            titleIcon="/icons/action.svg"
            links={[
               { name: "Alerts", href: "/component/alerts" },
               { name: "Toasts", href: "/component/toasts" },
               { name: "Skeletons", href: "/component/skeletons" },
               { name: "Notifications", href: "/component/notifications" },
               { name: "Spinners", href: "/component/spinners" },
               { name: "Loaders", href: "/component/loaders" },
            ]}
         />

         <SidebarItem
            title="Navigation"
            titleIcon="/icons/action.svg"
            links={[
               { name: "Breadcrumbs", href: "/component/breadcrumbs" },
               { name: "Pagination", href: "/component/pagination" },
               { name: "Tabs", href: "/component/tabs" },
               { name: "Steps", href: "/component/steps" },
               { name: "Sidebars", href: "/component/sidebars" },
               { name: "Navbars", href: "/component/navbars" },
            ]}
         />

         <SidebarItem
            title="Charts & Stats"
            titleIcon="/icons/action.svg"
            links={[
               { name: "Analytics", href: "/component/analytics" },
               { name: "Graphs", href: "/component/graphs" },
               { name: "Charts", href: "/component/charts" },
               { name: "Counters", href: "/component/counters" },
            ]}
         />

         <SidebarItem
            title="Advanced"
            titleIcon="/icons/action.svg"
            links={[
               { name: "Date Pickers", href: "/component/date-pickers" },
               { name: "Time Pickers", href: "/component/time-pickers" },
               { name: "Calendars", href: "/component/calendars" },
               { name: "Kanban Boards", href: "/component/kanban" },
               { name: "Chat UI", href: "/component/chat" },
               { name: "Code Editors", href: "/component/code-editors" },
            ]}
         />

         <SidebarItem
            title="Settings"
            titleIcon="/icons/action.svg"
            links={[
               { name: "Profile", href: "/component/profile" },
               { name: "Billing", href: "/component/billing" },
               { name: "Notifications", href: "/component/notifications" },
               { name: "Security", href: "/component/security" },
               { name: "Themes", href: "/component/themes" },
            ]}
         />
      </div>
   );
};

export default Sidebar;
