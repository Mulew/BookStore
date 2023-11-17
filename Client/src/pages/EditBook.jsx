import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';

const EditBook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  const [formdata, setFormdata] = useState({
    title: '',
    author: '',
    publishyear: ''
  });

  const changevalue = (e) => {
    const { name, value } = e.target;
    setFormdata((prevvalue) => ({
      ...prevvalue,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make the API request to create the book
      await axios.put(`http://localhost:8080/books/${id}`, formdata);
      // Redirect to the desired page after successful submission
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    try {
      axios.post(`http://localhost:8080/books/${id}`)
      .then((response)=>{
        const data = response.data;
        formdata.author = data.author;
        formdata.title = data.title;
        formdata.publishyear = data.publishyear;
        setLoading(false)
      })
      // Code to execute
    } catch (error) {
      console.log(error);
    }
  },[id])
console.log(id);
  return (
    <div className='p-4'>
      <h1 className='text-3xl my-4'>Create Book</h1>

      {loading ? <Spinner /> 
      :
      
      ( <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px p-4 mx-auto]'>
      <form onSubmit={handleSubmit}>
        <div className='my-4'>
          <label htmlFor='title' className='text-xl mr-4 text-gray-500'>
            Title
          </label>
          <input
            type='text'
            name='title'
            className='border-2 border-gray-500 px-4 py-2 w-full'
            placeholder='Title'
            value={formdata.title}
            onChange={changevalue}
          />
        </div>

        <div className='my-4'>
          <label htmlFor='author' className='text-xl mr-4 text-gray-500'>
            Author
          </label>
          <input
            type='text'
            name='author'
            className='border-2 border-gray-500 px-4 py-2 w-full'
            placeholder='Author'
            value={formdata.author}
            onChange={changevalue}
          />
        </div>

        <div className='my-4'>
          <label htmlFor='publishyear' className='text-xl mr-4 text-gray-500'>
            Publish Year
          </label>
          <input
            type='number'
            name='publishyear'
            className='border-2 border-gray-500 px-4 py-2 w-full'
            placeholder='Publish Year'
            value={formdata.publishyear}
            onChange={changevalue}
          />
        </div>
 
        <button type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center'>
          Update
        </button>
      </form>
    </div>)}

  
    </div>
  );
};

export default EditBook;
