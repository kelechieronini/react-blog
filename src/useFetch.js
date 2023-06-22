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
            });
        }, 1000);
      }, []);

      return {blogs, isPending}
  
}
 
export default useFetch;