import Dashboard from "../views/Dashboard/Dashboard";
import Customers from "../views/Customers/Customers";
import Staff from "../views/Staff/Staff";
import FileExplorer from "../views/FileExplorer/FileExplorer";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/customers",
        name: "Customers",
        component: Customers
    },
    {
        path: "/staff",
        name: "Staff",
        component: Staff
    },
    {
        path: "/file-explorer",
        name: "File Explorer",
        component: FileExplorer
    },
    {
        redirect: true,
        path: "/",
        to: "/dashbaord",
        name: "Dashboard"
    }
]

export default dashboardRoutes