import { RxDashboard } from "react-icons/rx";
import { SiGoogleforms } from "react-icons/si";
import { IoMdAnalytics, IoMdLogOut } from "react-icons/io";
import { FaFileInvoiceDollar } from "react-icons/fa";

type menu = {
    label: string;
    path: string;
    icon: React.ReactNode;
    hasSubmenu?: boolean;
    isLogout?: boolean;
}

export const menuItem: menu[] = [
  { label: "Home", path: "/my", icon: <RxDashboard /> },
  {
    label: "Customized Analysis For Industry",
    path: "/customized-analysis",
    icon: <SiGoogleforms />,
    hasSubmenu: true,
  },
  { label: "Regular Analysis", path: "/regular-analysis", icon: <IoMdAnalytics /> },
  { label: "Invoice", path: "/invoice", icon: <FaFileInvoiceDollar /> },
  { label: "Logout", path: "/logout", icon: <IoMdLogOut />, isLogout: true },
];