import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeView from "./HomeView";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) navigate("/login");
  }, []);

  return <HomeView />;
};

export default Home;
