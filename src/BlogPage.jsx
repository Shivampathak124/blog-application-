import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { title } = useParams(); 
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const foundBlog = storedBlogs.find((blog) => blog.title === title);
    setBlog(foundBlog);
  }, [title]);

  return (
    <div>
      {blog ? (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          <small>Posted on: {blog.date}</small>
        </div>
      ) : (
        <p>Blog not found</p>
      )}
    </div>
  );
};

export default BlogPage;
