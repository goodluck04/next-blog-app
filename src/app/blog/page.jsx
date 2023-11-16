import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";


const Blog = async () => {

  async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });
  //  by default next js fetch data statically  single fetch
  //1. data never get update -> cache: 'force-cache'
  //2. revalidating data if data refatch less frequetly
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate: 10}}); // refatch in 10second
  // 3 fetch every single time revalidate every time
  // fetch("https://jsonplaceholder.typicode.com/posts", {cache: 'no-cache'}); //refatch in 10second
  
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  

  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link key={item._id} href={`/blog/${item._id}`} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              alt=""
              src={item.img}
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
