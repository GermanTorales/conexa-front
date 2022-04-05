import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Spinner } from "../../components";
import Axios from "../../config/Axios";
import PostsView from "./PostsView";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoBack = () => navigate("/");

  const handleGetPosts = async () => {
    setLoading(true);

    try {
      const response = await Axios.get("/jsonplaceholder/posts");

      if (response.status < 400) {
        const { data, prev, next, current } = response.data;

        setPosts(data);
      }
    } catch (error) {
      Swal.fire({
        title: "Lo siento",
        text: "No se pudo obtener los posts",
        icon: "error",
      });

      if (error?.response?.status === 401) navigate("/login");
    }

    setLoading(false);
  };

  useEffect(() => {
    const fn = async () => await handleGetPosts();

    fn();
  }, []);

  if (loading) return <Spinner />;

  return <PostsView posts={posts} handleGoBack={handleGoBack} />;
};

export default Posts;
