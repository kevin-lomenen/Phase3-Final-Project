import { useEffect, useState } from "react";
import Header from "./Header";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
    .then(r=>r.json())
    .then(posts=>setPosts(posts));
  }, []);

  return (
    <div className="container-fluid">
      <Header />
      <Post posts={posts} />
    </div>
  );
}

export default App;
