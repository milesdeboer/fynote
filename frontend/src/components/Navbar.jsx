import React from "react";
import { Link } from "react-router-dom";
import { House, CalendarDays, ChartLine, Settings} from "lucide-react";

const Navbar = () => {
    return (
        <nav
            className="bg-white text-black rounded-full shadow-lg
                inline-flex justify-end items-center box-border
                h-16 gap-8 mx-4 mt-4 px-8 py-2"
        >
            <Link to="/dashboard" 
                className="text-black no-underline"
            >
                <House size={32} />
            </Link>
            <Link to="/timeline"
                className="text-black no-underline"
            >
                <CalendarDays size={32} />
            </Link>
            <Link to="/insights"
                className="text-black no-underline"
            >
                <ChartLine size={32} />
            </Link>
        </nav>
    );
};

export default Navbar;