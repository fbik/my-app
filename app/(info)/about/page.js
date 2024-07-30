import Link from "next/link";
import React from "react";
export const metadata = {
    title: "Next App",
    description: "Generated",
};
export default function About() {
    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-grey-900 text-center mt-4 mb-5">Info Page!</h2>
            </div>
            <br/>
            <div className="map"><Link href={"/map"}>Map</Link>
            </div>
            <br/>
            <h1>The page about us!</h1>
            <br/>
            <p>Hello! My site is a test page. You can find examples of development in Next.js.</p>
            <br/>
        </div>
    )
}