import React from "react";
import Gnb from "@component/Sample/Gnb";
import ParallaxScrollSection from "@component/Sample/ParallaxScrollSection";
import Lorem from "@component/Sample/Lorem";

function Sample() {
    const lightModeCss = "bg-white text-primary";
    const darkModeCss = "dark:bg-primary dark:text-white";
    return (
        <div className={`${lightModeCss} ${darkModeCss}`}>
            <Gnb />
            <ParallaxScrollSection />
            <Lorem />
        </div>
    );
}

export default Sample;
