import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = ({handelBookMark,handelMarkRead }) => {
    const [blogs, setBlogs]=useState([])
    useEffect(()=>{
        fetch('Blogs.json')
        .then(Response => Response.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
          <h1>Blogs Length : {blogs.length}</h1>

          {
            blogs.map(blog => <Blog blog={blog} handelBookMark={handelBookMark} handelMarkRead={handelMarkRead} ></Blog>)
          }
            
        </div>
    );
};

export default Blogs;