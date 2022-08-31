import { Outlet } from "react-router-dom";
import Nav from "./nav";

export default function NavbarLayout () {
    return (
        <div>
            <Nav />
            <div>
                <Outlet />
            </div>
        </div>
    )
}