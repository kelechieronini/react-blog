import { useState } from "react";
import BlogList from "./BlogList";
import { useEffect } from "react";
import useFetch from "./useFetch";

const Home = () => {
  const {blogs, isPending} = useFetch("http://localhost:8000/blogs")

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
 
// where the use effect was before

  return (
    <div>
      {isPending && (
        <div style={{ color: "#0c043a", fontWeight: 700 }}>Loading...</div>
      )}

      {blogs && <BlogList blogs={blogs} />}
    </div> 
  );
};

export default Home;
