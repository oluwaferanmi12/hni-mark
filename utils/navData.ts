import dashboardIcon from "@/public/assets/svgs/dashboardIcon.svg";
import balanceIcon from "@/public/assets/svgs/balanceNav.svg";
import bookingsIcon from "@/public/assets/svgs/bookingsNav.svg";
import vehiclesIcon from "@/public/assets/svgs/vehiclesNav.svg";
import driversIcon from "@/public/assets/svgs/driversNav.svg";
import dashboardIconI from "@/public/assets/svgs/dashboardIconInactive.svg"
import balanceIconI from "@/public/assets/svgs/balanceInactive.svg";
import bookingsIconI from "@/public/assets/svgs/bookingInactive.svg";
import vehiclesIconI from "@/public/assets/svgs/vehiclesInactive.svg";
// import driversIconI from "@/public/assets/svgs/driv"








export const navData = [
    { name: "Dashboard", alias: "dashboard", iconActive: dashboardIcon, iconInactive: dashboardIconI, url: '/dashboard' },
    { name: "Balance", alias: "balance", iconActive: balanceIcon, iconInactive: balanceIconI, url: '/balance' },
    { name: "Bookings", alias: "bookings", iconActive: bookingsIcon, iconInactive: bookingsIconI, url: "/bookings" },
    { name: "Vehicles", alias: "vehicles", iconActive: vehiclesIcon, iconInactive: vehiclesIconI, url: "/vehicles" },
    // { name: "Drivers", alias: "drivers", iconActive: driversIcon, iconInactive: driversIconI, url: "/drivers" }
]