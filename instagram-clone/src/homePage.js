import React from "react";
import './homePage.css';
import Sidenav from "./components/navigation/sideNav";
import Timeline from "./components/timeLine/timeLine";

function Homepage() {
    return (
        <div className="homepage">
            <div className="homepage-nav">
                <Sidenav />
            </div>
            <div className="homepage-timeline">
                <Timeline />
            </div>
        </div>
    )
}
export default Homepage