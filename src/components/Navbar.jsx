import { NavLink, Outlet } from "react-router-dom";

export default function Navbar(params) {
    
    return(
        <div className="px-4 py-2 flex w-full justify-evenly text-3xl uppercase tracking-widest">

        {[
            ['About Me', '/'],
            ['Education', '/education'],
            ['Experience', '/experience'],
            ['Skills', '/skills'],
        ].map(([title, url]) => (
            <NavLink to={url} className={({isActive}) => (isActive ? "font-semibold bg-slate-200 text-slate-800 animate-float " : "bg-slate-600 text-white ") + "px-4 py-2 rounded-lg hover:font-semibold hover:bg-slate-200 hover:text-slate-800 hover:scale-110 transition ease-in-out"}>
                {title}
            </NavLink>
        ))}

        </div>
    )
};
