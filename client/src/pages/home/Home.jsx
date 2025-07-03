import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import API from "../../api/config";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await API.get("/posts" + search);
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts. Please try again later.");
        setPosts([]); // Set empty array as fallback
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        {loading ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <p>Loading posts...</p>
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
            <p>{error}</p>
          </div>
        ) : (
          <Posts posts={posts} />
        )}
        <Sidebar />
      </div>
    </>
  );
}
