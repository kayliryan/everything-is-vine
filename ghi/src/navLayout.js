import { Outlet } from "react-router-dom";
import Navigation from "./nav";

export default function NavbarLayout () {
    return (
        <div>
            <Navigation />
            <div>
                <Outlet />
            </div>
        </div>
    )
}