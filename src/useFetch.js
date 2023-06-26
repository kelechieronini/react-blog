import { useEffect, useState } from "react";


const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setBlogs(data);
              setIsPending(false);
              localStorage.setItem("jsonData", JSON.stringify(data));
            })
            .catch((error) =>{
              console.error("Error fetching JSON file:", error);
            })
            ;
        }, 1000);
      }, [url]);

      return {blogs, isPending}
  
}
 
export default useFetch;