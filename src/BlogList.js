import { Link } from "react-router-dom";

const BlogList = ({blogs, handleDelete}) => {
    return ( 
        <div className="blog-list">

        {blogs.map((blog) => (
            <div className="blog-preview" key = {blog.id}>
                <Link to = {`/blogs/${blog.id}`}>
                    <h2>{blog.title}  </h2>
                    <p>written by {blog.author}</p>
                </Link>

                <button onClick={(id) => handleDelete(blog.id)}>Delete Blog</button>
            </div>
        ))}

    </div>
     );
}
 
export default BlogList;