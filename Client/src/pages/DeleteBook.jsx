import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.delete(`http://localhost:8080/books/${id}`);
        console.log('Book deleted successfully');
        navigate('/'); // Redirect to the desired page after successful deletion
      } catch (error) {
        console.log('Error deleting book:', error.message);
      }
    };

    fetchData();
  }, [id, navigate]);

  return (
    <div>
      {/* You can add any additional UI elements or messages here */}
    </div>
  );
};

export default DeleteBook;