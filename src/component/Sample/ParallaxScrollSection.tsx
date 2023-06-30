import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Bird1 from "@asset/bird1.png";
import Bird2 from "@asset/bird2.png";
import Forest from "@asset/forest.png";
import Rocks from "@asset/rocks.png";
import Water from "@asset/water.png";

function ParallaxScrollSection() {
    const [value, setValue] = useState(1);
    console.log(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setValue(window.scrollY);
        });
    }, []);

    const sectionDefaultCss = "flex justify-center items-center relative w-full min-h-screen";
    const sectionBeforeCss =
        "before:content-[''] absolute bottom-0 left-0 w-full h-full z-10 bg-gradient-to-t from-red-700 to-white";
    const imageCss = "absolute top-0 left-0 w-full h-full object-cover pointer-events-none";

    return (
        <>
            <section className={`${sectionDefaultCss} ${sectionBeforeCss}`}>
                <h2
                    style={{ top: `${50 + value * -0.5}%` }}
                    className="absolute translate-y-reverse-2/4 text-jungle text-8xl text-center tracking-[0.1em]"
                >
                    <span className="text-sm font-normal tracking-[0.4em]">It's time for a new</span>
                    <br />
                    <span className="font-rancho">Adventure</span>
                </h2>
                <img
                    style={{ top: `${value * -1.5}px`, left: `${value * 2}px` }}
                    className={imageCss}
                    src={Bird1}
                    alt=""
                />
                <img
                    style={{ top: `${value * -1.5}px`, left: `${value * -5}px` }}
                    className={imageCss}
                    src={Bird2}
                    alt=""
                />
                <img className={imageCss} src={Forest} alt="" />
                <p
                    style={{ marginTop: `${value * 1.5}px` }}
                    className="inline-block absolute translate-y-24 py-2 px-7 rounded-3xl bg-white text-jungle text-lg font-medium tracking-[0.1em]"
                >
                    Explore
                </p>
                <img style={{ top: `${value * -0.12}px` }} className={imageCss} src={Rocks} alt="" />
                <img style={{ top: `${value * -0.000001}px` }} className={imageCss} src={Water} alt="" />
            </section>
        </>
    );
}

export default ParallaxScrollSection;
