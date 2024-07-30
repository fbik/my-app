import Input from "@/app/components/Input";
import React from "react";
import Link from "next/link";

function AboutLayout({ children, newContact, newPage }) {
    return (
        <div>
            {children}
            <div className="container mx-auto mt-4">
                {newContact}
                <br/>
                {newPage}
                <br/>
            </div>
            <div className="container mx-auto mt-4">
                <span>About new layout</span>
                <br/>
                <Input />
                <br/>
                <div className="map"><Link href={"/map"}>Map</Link>
                </div>
            </div>
        </div>
    )
}

export default AboutLayout