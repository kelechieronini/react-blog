import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { blogs, isPending } = useFetch("http://localhost:8000/blogs");

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
