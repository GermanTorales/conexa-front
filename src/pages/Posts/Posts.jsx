import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Axios from '../../config/Axios';
import PostsView from './PostsView';
import { ErrorSwal, InvalidTokenSwal, Pagination, Spinner } from '../../components';

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const pageCount = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handleGoBack = () => navigate('/');

  const handlePageClick = async event => {
    const { selected } = event;

    await handleGetPosts(selected);
  };

  const handleGetPosts = async (page = 0) => {
    setLoading(true);

    try {
      const response = await Axios.get(`/jsonplaceholder/posts/?page=${page}`);

      if (response.status < 400) {
        const { data, current } = response.data;

        setPosts(data);
        setCurrentPage(current);
      }
    } catch (error) {
      if (error?.response?.status === 401) {
        InvalidTokenSwal();
        navigate('/login');
      } else {
        ErrorSwal();
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    const fn = async () => await handleGetPosts();

    fn();
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      <PostsView posts={posts} pageCount={pageCount} handleGoBack={handleGoBack} handlePageClick={handlePageClick} />
      <div className="posts__pagination">
        <Pagination currentPage={currentPage} pageCount={pageCount} handlePageClick={handlePageClick} />
      </div>
    </>
  );
};

export default Posts;
