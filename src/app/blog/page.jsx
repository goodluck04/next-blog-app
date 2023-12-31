"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/posts`,
          {
            cache: "no-store",
          },
          { mode: "no-cors" }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          key={item._id}
          href={`/blog/${item._id}`}
          className={styles.container}
        >
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
