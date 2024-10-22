import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      description,
      date: new Date().toLocaleString(),
    };

    const updatedBlogs = [newBlog, ...blogs];
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
    setTitle("");
    setDescription("");
    {
    
    }
  };

  return (
    <div>
      <h1>Create a Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Create Blog</button>
      </form>

      <h2>Recent Blogs</h2>
      <div>
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div key={index}>
              <Link to={`/blog/${encodeURIComponent(blog.title)}`}>
                <h3>{blog.title}</h3>
              </Link>
              <small>Posted on: {blog.date}</small>
            </div>
          ))
        ) : (
          <p>No blogs yet.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
