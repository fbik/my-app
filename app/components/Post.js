import React from "react";
import Link from "next/link";
import {metadata as post} from "@/app/layout";

const Post = ({post}) => {
    return (
        <div>
            <Link href="/">Home</Link><br/>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <strong>Author ID: {post.userId}</strong>
        </div>
    )
}

export default Post
