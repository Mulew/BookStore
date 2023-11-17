import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .post(`http://localhost:8080/books/${id}`)
      .then((response) => {
        const data = response.data;
        setBook(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className=" flex  flex-col p-4 justify-center ">
      <div className=" items-center mb-4 flex flex-col ">
        <h1 className="text-2xl font-bold underline text-gray-800">Book Details</h1>
      
      {loading ? (
        <Spinner/>
      ) : (
        <div className=' mb-4 flex flex-col  border-2 border-sky-400 rounded-xl w-fit p-4 my-10  '>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray-500'>
                Book Title : {book.title}
            </span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>
              Book Author : {book.author}
            </span>
          </div>
           <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>
              Published year :  {book.publishyear}
            </span>
          </div>
           <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>
              created Time :  {book.createdAt}
            </span>
          </div>
           <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>
              Last Updated at :  {book.updatedAt}
            </span>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default ShowBook;