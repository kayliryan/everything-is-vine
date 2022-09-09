import { Outlet } from "react-router-dom";
import Navigation from "./nav";
import NavigationAuth from "./navauth";

export default function NavbarLayout () {
    return (
        <div>
            {/* <Navigation /> */}
            <NavigationAuth />
            <div>
                <Outlet />
            </div>
        </div>
    )
}