import React from "react";
import { Link, Outlet } from "react-router-dom";
// import HostHeader from "./HostHeader.jsx";

function HostLayout() {
    return (
        <>
            <nav className="host-nav">
                <Link to="/host">Dasboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout;