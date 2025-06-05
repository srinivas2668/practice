"use client";

import * as React from "react";
import logo from "../../assets/logos/empower.jpg";
import {
  ArchiveX,
  BookA,
  BookCopy,
  Box,
  Boxes,
  Building,
  Building2,
  Calendar,
  ChartNoAxesColumn,
  Cog,
  Command,
  FilePen,
  FilePenLine,
  FolderPen,
  FormInput,
  GitBranch,
  GitFork,
  GraduationCap,
  Handshake,
  Image,
  Inbox,
  LayoutDashboard,
  MapPin,
  PhoneCall,
  Pin,
  Route,
  Send,
  SendIcon,
  Settings,
  SlidersHorizontal,
  Split,
  Trash2,
  TrendingUp,
  User,
  UsersRound,
  Waypoints,
} from "lucide-react";

import { Label } from "@/components/ui/label";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
import { NavUser } from "./NavUser";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuthContext } from "@/context/authcontext/AuthContextProvider";
import { useEffect } from "react";
// This is sample data

export function AppSidebar({ isOpen, setIsOpen, onIsDashboardChange, ...props }) {
  const { open, setOpen } = useSidebar();

  useEffect(() => {
    setOpen(false);
  }, []);

  const {
    AuthState,
    AuthState: { isAuthenticated, isLoading },
  } = useAuthContext();

  const data = {
    user: {
      name: AuthState?.profile?.name || "User Name",
      email: AuthState?.profile?.email || "***@gmail.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "DashBoard",
        url: "/",
        icon: LayoutDashboard,
        type: "menu",
        isActive: false,
      },
      {
        title: "Attendance Management",
        url: "#",
        icon: FilePen,

        type: "dropdown",
        isActive: true,
        items: [
          {
            title: "Dashboard",
            url: "/attendance/dashboard",
            position: "UP",
            icon: ChartNoAxesColumn,
          },
          {
            title: "Attendance",
            url: "/attendance",
            position: "UP",
            icon: Calendar,
          },
          {
            title: "Configuration",
            url: "/attendance/configuration",
            position: "DOWN",
            icon: Cog,
          },
        ],
      },
      {
        title: "User Management",
        url: "#",
        icon: User,
        type: "dropdown",
        label: "Users",
        isActive: true,
        items: [
          {
            title: "Dashboard",
            url: "/users/dashboard",
            position: "UP",
            icon: ChartNoAxesColumn,
          },
          {
            title: "Users",
            url: "/users",
            position: "UP",
            icon: UsersRound,
          },
          {
            title: "Configuration",
            url: "/users/configuration",
            position: "DOWN",
            icon: Cog,
          },
          {
            title: "Forms",
            url: "/users/dashboard",
            position: "UP",
            icon: BookA,
          },
          {
            title: "Documents",
            url: "/users",
            position: "UP",
            icon: BookCopy,
          },

          {
            title: "Busniess",
            url: "/users/dashboard",
            position: "UP",
            icon: Handshake,
          },
          {
            title: "Units",
            url: "/users",
            position: "UP",
            icon: Boxes,
          },

          {
            title: "Departments",
            url: "/users/dashboard",
            position: "UP",
            icon: GitBranch,
          },
          {
            title: "Sub-departments",
            url: "/users",
            position: "UP",
            icon: GitFork,
          },

          {
            title: "Designation",
            url: "/users/dashboard",
            position: "UP",
            icon: FilePenLine,
          },
          {
            title: "Grades",
            url: "/users",
            position: "UP",
            icon: GraduationCap,
          },

          {
            title: "Levels",
            url: "/users/dashboard",
            position: "UP",
            icon: TrendingUp,
          },
          {
            title: "Country",
            url: "/users",
            position: "UP",
            icon: MapPin,
          },
          {
            title: "City",
            url: "/users",
            position: "UP",
            icon: Building2,
          },

          {
            title: "State",
            url: "/users",
            position: "UP",
            icon: Waypoints,
          },
          {
            title: "Branch",
            url: "/users",
            position: "UP",
            icon: Split,
          },
          {
            title: "Region",
            url: "/users",
            position: "UP",
            icon: Route
          },

          {
            title: "Email",
            url: "/users",
            position: "UP",
            icon: SendIcon,
          },
          {
            title: "Phonenumber",
            url: "/users",
            position: "UP",
            icon: PhoneCall,
          },
          {
            title: "Photo",
            url: "/users",
            position: "UP",
            icon: Image,
          },


          {
            title: "Name",
            url: "/users",
            position: "UP",
            icon: FolderPen,
          },
          {
            title: "Pincode",
            url: "/users",
            position: "UP",
            icon: Pin,
          },

        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings,
        type: "dropdown",

        isActive: true,
        items: [
          {
            title: "General Settings",
            url: "/settings/general",
            position: "UP",
            icon: ChartNoAxesColumn,
          },
          {
            title: "Organization",
            url: "/settings/organization",
            position: "UP",
            icon: Building,
          },
          {
            title: "Roles",
            url: "/settings/roles?search=&page=1&pageSize=10",
            position: "UP",
            icon: ChartNoAxesColumn,
          },
        ],
      },
    ],
  };


  const location = useLocation();
  const path = location.pathname;


  const activeModule = data?.navMain?.filter((item) => {
    if (item.type === "menu") {
      return item.url === path;

    } else if (item.type === "dropdown" && Array.isArray(item.items)) {
      return item.items.some((subitem) => subitem.url === path);
    }
    return false;
  });

  const [activeItem, setActiveItem] = React.useState(activeModule[0]);

  console.log(activeItem, "activedfdfdm");

  useEffect(() => {
    console.log(activeItem.title, 'activeItemtitle')
    if (activeItem?.title && activeItem.title !== "DashBoard") {

    }
  }, [activeItem]);

  useEffect(() => {
    onIsDashboardChange(activeItem?.title === "DashBoard");
  }, [activeItem?.title]);

  return (
    <div className="flex flex-col h-screen overflow-visible bg-white z-50">
      {/* Icon-only Vertical Menu */}
      <div className="h-[7vh] w-full flex items-center justify-center">
        <img
          src={logo}
          alt="Logo"
          className={`h-4/6 duration-300 ease-in-out ${isOpen ? 'w-24' : 'w-16 px-0.5'}`}
        />
      </div>

      <div className="flex h-[93vh] border-t ">
        <div className={`w-[4.5rem] flex flex-col items-center ${isOpen && 'border-r'} bg-white`}>
          {/* Icon Navigation Buttons */}
          <div className="flex-1 pt-2 space-y-2">
            {data?.navMain?.map((item) => {
              const isActive = activeItem?.title === item.title;
              return (
                <div
                  onClick={() => {
                    item.title !== "DashBoard" ? setIsOpen(true) : setIsOpen(false);
                  }}
                  key={item.title}
                  className="flex justify-center group relative"
                >
                  <button
                    onClick={() => {
                      setActiveItem(item);
                      setDashBoardActive(item.isActive);
                    }}
                    className={`size-10 rounded-lg flex items-center justify-center transition-colors ${isActive ? "bg-themedark text-white" : "text-gray-500 hover:text-themedark"
                      }`}
                  >
                    <item.icon className="size-6" strokeWidth={1.5} />
                  </button>
                  <div className="absolute left-full top-1/2 ml-1 -translate-y-1/2 hidden group-hover:flex bg-themedark text-white text-xs px-2 py-1 rounded shadow whitespace-nowrap">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expanded Panel */}
        <div className={`transition-all duration-300 ease-in-out ${(isOpen && activeItem.title !== "DashBoard") ? "w-60" : "w-0"} overflow-visible bg-white border-r`}>
          {(isOpen && activeItem.title !== "DashBoard") && (
            <div className="h-full flex flex-col">
              <div className="flex items-center text-[#a7abc3] py-4 px-1">
                <activeItem.icon className="mr-2 size-5" />
                <span className="uppercase text-sm whitespace-nowrap">{activeItem?.title}</span>
              </div>

              <div className="flex-1 overflow-y-auto">
                {activeItem?.items
                  ?.filter((item) => item.position === "UP")
                  .map((item, index) => (
                    <NavLink
                      key={index}
                      to={item?.url}
                      className="block py-2 pl-7 text-[#505050] text-[15px] hover:bg-themedark hover:text-white"
                    >
                      {item.title}
                    </NavLink>
                  ))}
              </div>

              <div className="border-t">
                {activeItem?.items
                  ?.filter((item) => item.position === "DOWN")
                  .map((item, index) => (
                    <NavLink
                      key={index}
                      to={item?.url}
                      className="flex items-center gap-2 px-4 py-2 text-sm border-b hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                      <item.icon className="size-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
