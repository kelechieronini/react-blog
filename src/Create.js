import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    setTimeout(() =>{
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
          }).then(() => {
            console.log("new blog added");
            setIsPending(false);
            navigate('/');
          });
    }, 1000)


  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label>Blog Body:</label>
        <textarea
          cols="30"
          rows="10"
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>

        <label>Blog Author</label>
        <select
          required
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="Kelechi">Kelechi</option>
          <option value="Dozie">Dozie</option>
        </select>
        {isPending && <button>Adding blog</button>}
        {!isPending && <button>Add blog</button>}
      </form>
    </div>
  );
};

export default Create;
