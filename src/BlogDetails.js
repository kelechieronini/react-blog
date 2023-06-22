import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "./useFetch";

const BlogDetails = () => {

  const { id } = useParams();
  const {blogs, isPending} = useFetch("http://localhost:8000/blogs/" +id)

  return (
    <div className="blog-dets">
      {isPending && <div>Loading</div>}
      {blogs && (
        <article>
          <h1>{blogs.title}</h1>
          <p>Written by {blogs.author}</p>
          <div>{blogs.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
