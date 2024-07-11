import Link from "next/link";
import React from "react";

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await res.json();
}

async function Home(){
  const posts = await fetchData();

  return (
      <div>
        <h1>Home *** {posts[0].title}</h1>
  {posts.map(el => (
      <div key={el.id} className="posts">
          <h1>{el.id}</h1>
        <h2>{el.title}</h2>
        <p>{el.body}</p>
          <Link href={"/post/" + el.id}>Post</Link>
      </div>
      ))}
      </div>
  )
}

export default Home