import React from "react";
import { Link } from "react-router-dom";

function Gnb() {
    const menus = [
        { label: "Home", linkTo: "#", active: true },
        { label: "About", linkTo: "#", active: false },
        { label: "Destination", linkTo: "#", active: false },
        { label: "Contact", linkTo: "#", active: false },
    ];
    const LiItems = () => {
        const defaultCSS = "ml-5 text-jungle rounded-lg";
        const hoverCSS = "hover:bg-jungle hover:text-white";
        const activeCSS = "bg-jungle text-white";

        return (
            <>
                {menus.map((v) => (
                    <li key={v.label} className={`${defaultCSS} ${hoverCSS} ${v.active ? activeCSS : ""}`}>
                        <Link to={v.linkTo}>
                            <p className="px-4 py-2">{v.label}</p>
                        </Link>
                    </li>
                ))}
            </>
        );
    };

    return (
        <header className="flex justify-between items-center absolute top-0 left-0 w-full px-7 z-50 py-24">
            <Link to="#">
                <p className="text-jungle font-bold text-3xl">JUNGLE</p>
            </Link>
            <ul className="flex justify-center items-center">
                <LiItems />
            </ul>
        </header>
    );
}

export default Gnb;
