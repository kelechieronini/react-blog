import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Confirm from "./Confirm";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs, isPending } = useFetch("https://github.com/kelechieronini/react-blog/blob/main/data/db.json/" + id);
  const [confirmContainer, setConfirmContainer] = useState(false);

  return (
    <div className="blog-dets">
      {isPending && <div>Loading</div>}
      {blogs && (
        <article>
          <h1>{blogs.title}</h1>
          <p>Written by {blogs.author}</p>
          <div>{blogs.body}</div>
          <button onClick={() => setConfirmContainer(true)}>Delete blog</button>
          {confirmContainer && (
            <Confirm setConfirmContainer={setConfirmContainer} />
          )}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
