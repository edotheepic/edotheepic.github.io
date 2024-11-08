import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ProfilePicture from "./profilePicture";
import Name from "./Name";

export default function Layout(params) {
    
    return(
        <div className="flex flex-col justify-center md:flex-row">

            <div className="md:w-1/3 md:h-dvh flex flex-col items-center pt-10 border-r">
                <ProfilePicture></ProfilePicture>
                <Name></Name>
            </div>

            <div className="xl:w-1/2 md:w-2/3 md:h-dvh pt-10">
                <Navbar></Navbar>
                <div className="px-16 pt-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
};
