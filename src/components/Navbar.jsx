import { NavLink, Outlet } from "react-router-dom";

export default function Navbar(params) {
    
    return(
        <div className="px-4 py-2 flex w-full justify-evenly text-3xl uppercase tracking-widest">
            <NavLink to="/" className="px-4 py-2 bg-slate-600 rounded-lg">
                Home
            </NavLink>
            <NavLink to="/" className="px-4 py-2 bg-slate-600 rounded-lg">
                Home
            </NavLink>
            <NavLink to="/" className="px-4 py-2 bg-slate-600 rounded-lg">
                Home
            </NavLink>
            <NavLink to="/" className="px-4 py-2 bg-slate-600 rounded-lg">
                Home
            </NavLink>
        </div>
    )
};
