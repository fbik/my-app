import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <span>
                <strong>ItProger</strong>
            </span>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <link href="/about/map"></link>
            </nav>
        </header>
    )
}

export default Header