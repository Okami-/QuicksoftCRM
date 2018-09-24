import Dashboard from "../views/Dashboard/Dashboard";
import Customers from "../views/Customers/Customers";
import Staff from "../views/Staff/Staff";
import FileExplorer from "../views/FileExplorer/FileExplorer";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: 'fa fa-tachometer',
        component: Dashboard
    },
    {
        path: "/customers",
        name: "Customers",
        icon: 'fa fa-users',
        component: Customers
    },
    {
        path: "/staff",
        name: "Staff",
        icon: 'fa fa-id-badge',
        component: Staff
    },
    {
        path: "/file-explorer",
        name: "File Explorer",
        icon: 'fa fa-folder',
        component: FileExplorer
    },
    {
        redirect: true,
        path: "/",
        to: "/dashboard",
        name: "Dashboard"
    }
]

export default dashboardRoutes