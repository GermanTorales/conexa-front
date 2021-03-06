import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../../config/Axios';
import PhotosView from './PhotosView';
import { ErrorSwal, InvalidTokenSwal, Pagination, Spinner } from '../../components';

const Photos = () => {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const pageCount = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handleGoBack = () => navigate('/');

  const handlePageClick = async event => {
    const { selected } = event;

    await handleGetPhotos(selected);
  };

  const handleGetPhotos = async (page = 0) => {
    setLoading(true);

    try {
      const response = await Axios.get(`/jsonplaceholder/photos/?page=${page}`);

      if (response.status < 400) {
        const { data, current } = response.data;

        setPhotos(data);
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
    const fn = async () => await handleGetPhotos();

    fn();
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      <PhotosView photos={photos} pageCount={pageCount} handleGoBack={handleGoBack} handlePageClick={handlePageClick} />
      <div className="posts__pagination">
        <Pagination currentPage={currentPage} pageCount={pageCount} handlePageClick={handlePageClick} />
      </div>
    </>
  );
};

export default Photos;
