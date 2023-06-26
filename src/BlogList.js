import { Link } from "react-router-dom";

const BlogList = ({ blogs, handleDelete }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title} </h2>
          <p>written by {blog.author}</p>

          <Link to={`/blogs/${blog.id}`}>
            <button>View Blog</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
