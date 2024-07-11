import React from "react";
import Link from "next/link";
import PagePost from "@/app/post/[id]/page";

const Header = () => {
    return (
        <header>
            <span>
                <strong>ItProger</strong>
            </span>
            <nav>
                <Link href="./">Home</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    )
}

export default Header