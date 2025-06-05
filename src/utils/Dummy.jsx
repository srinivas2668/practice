import { useLocation } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";

// Assuming these icons are already imported
import {
  LayoutDashboard,
  FilePen,
  ChartNoAxesColumn,
  Calendar,
  Cog,
  User,
  UsersRound,
  BookA,
  BookCopy,
  Handshake,
  Boxes,
  GitBranch,
  GitFork,
  FilePenLine,
  GraduationCap,
  TrendingUp,
  MapPin,
  Building2,
  Waypoints,
  Split,
  Route,
  SendIcon,
  PhoneCall,
  Image,
  FolderPen,
  Pin,
  Settings,
  Building,
} from "lucide-react"; // Adjust the icon source as needed

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
        { title: "Dashboard", url: "/attendance/dashboard", position: "UP", icon: ChartNoAxesColumn },
        { title: "Attendance", url: "/attendance", position: "UP", icon: Calendar },
        { title: "Configuration", url: "/attendance/configuration", position: "DOWN", icon: Cog },
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
        { title: "Dashboard", url: "/users/dashboard", position: "UP", icon: ChartNoAxesColumn },
        { title: "Users", url: "/users", position: "UP", icon: UsersRound },
        { title: "Configuration", url: "/users/configuration", position: "DOWN", icon: Cog },
        { title: "Forms", url: "/users/dashboard", position: "UP", icon: BookA },
        { title: "Documents", url: "/users", position: "UP", icon: BookCopy },
        { title: "Busniess", url: "/users/dashboard", position: "UP", icon: Handshake },
        { title: "Units", url: "/users", position: "UP", icon: Boxes },
        { title: "Departments", url: "/users/dashboard", position: "UP", icon: GitBranch },
        { title: "Sub-departments", url: "/users", position: "UP", icon: GitFork },
        { title: "Designation", url: "/users/dashboard", position: "UP", icon: FilePenLine },
        { title: "Grades", url: "/users", position: "UP", icon: GraduationCap },
        { title: "Levels", url: "/users/dashboard", position: "UP", icon: TrendingUp },
        { title: "Country", url: "/users", position: "UP", icon: MapPin },
        { title: "City", url: "/users", position: "UP", icon: Building2 },
        { title: "State", url: "/users", position: "UP", icon: Waypoints },
        { title: "Branch", url: "/users", position: "UP", icon: Split },
        { title: "Region", url: "/users", position: "UP", icon: Route },
        { title: "Email", url: "/users", position: "UP", icon: SendIcon },
        { title: "Phonenumber", url: "/users", position: "UP", icon: PhoneCall },
        { title: "Photo", url: "/users", position: "UP", icon: Image },
        { title: "Name", url: "/users", position: "UP", icon: FolderPen },
        { title: "Pincode", url: "/users", position: "UP", icon: Pin },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      type: "dropdown",
      isActive: true,
      items: [
        { title: "General Settings", url: "/settings/general", position: "UP", icon: ChartNoAxesColumn },
        { title: "Organization", url: "/settings/organization", position: "UP", icon: Building },
        { title: "Roles", url: "/settings/roles", position: "UP", icon: ChartNoAxesColumn },
      ],
    },
  ],
};

const MenuLogic = ({ onIsDashboardChange }) => {
  const location = useLocation();
  const path = location.pathname;

  // Normalize function to remove trailing slashes
  const normalize = (p) => p.replace(/\/+$/, "");

  // Get active parent and child menu
  const { activeParent, activeChild } = useMemo(() => {
    let found = { activeParent: null, activeChild: null };
    const normalizedPath = normalize(path);

    for (const parent of data.navMain) {
      if (parent.type === "menu" && normalizedPath.startsWith(normalize(parent.url))) {
        found.activeParent = parent;
        break;
      } else if (parent.type === "dropdown" && Array.isArray(parent.items)) {
        const child = parent.items.find((subitem) =>
          normalizedPath.startsWith(normalize(subitem.url))
        );
        if (child) {
          found.activeParent = parent;
          found.activeChild = child;
          break;
        }
      }
    }

    // Fallback to first item
    if (!found.activeParent) found.activeParent = data.navMain[0];

    return found;
  }, [path]);

  // State to track if dropdown is expanded
  const [expanded, setExpanded] = useState(activeParent?.title !== "DashBoard");

  // Update expanded state and notify parent on route change
  useEffect(() => {
    const isDashboard = activeParent?.title === "DashBoard";
    setExpanded(!isDashboard);
    onIsDashboardChange(isDashboard);
  }, [activeParent, onIsDashboardChange]);

  return (
    <div>
      {/* Render logic here if needed */}
      <p>Active Menu: {activeParent?.title}</p>
      <p>Active Submenu: {activeChild?.title}</p>
    </div>
  );
};

export default MenuLogic;
