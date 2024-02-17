import dashboardIcon from "@/public/assets/svgs/dashboardIcon.svg";
import balanceIcon from "@/public/assets/svgs/balanceNav.svg";
import bookingsIcon from "@/public/assets/svgs/bookingsNav.svg";
import vehiclesIcon from "@/public/assets/svgs/vehiclesNav.svg";
import driversIcon from "@/public/assets/svgs/driversNav.svg";







export const navData = [
    { name: "Dashboard", alias: "dashboard", iconActive: dashboardIcon, iconInactive: "", url: '/dashboard' },
    { name: "Balance", alias: "dashboard", iconActive: "", iconInactive: balanceIcon, url: '/balance' },
    { name: "Bookings", alias: "bookings", iconActive: "", iconInactive: bookingsIcon, url: "/bookings" },
    { name: "Vehicles", alias: "vehicles", iconActive: "", iconInactive: vehiclesIcon, url: "/vehicles" },
    { name: "Drivers", alias: "drivers", iconActive: "", iconInactive: driversIcon, url: "/drivers" }
]