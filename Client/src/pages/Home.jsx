import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:8080/books')
      .then((response) => {
        const data = response.data;
        setBooks(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Book List</h1>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-spacing-2 border-collapse">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md">Author</th>
              <th className="border border-slate-600 rounded-md">Published Year</th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td className="border border-slate-700 rounded-md text-center">{book.title}</td>
                <td className="border border-slate-700 rounded-md text-center">{book.author}</td>
                <td className="border border-slate-700 rounded-md text-center">{book.publishyear}</td>

                <td className="border border-slate-700 rounded-md text-center">
                  <Link to={`/books/details/${book._id}`}>
                    <FontAwesomeIcon icon={faInfoCircle} className="text-blue-500 hover:text-blue-700 cursor-pointer mr-2" />
                  </Link>

                  <Link to = {`/books/edit/${book._id}`}>
                    <FontAwesomeIcon icon={faEdit} className="text-gray-500 hover:text-gray-700 cursor-pointer mr-2" />
                  </Link>

                  <Link to = {`/books/delete/${book._id}`}>
                    <FontAwesomeIcon icon={faTrash} className="text-red-500 hover:text-red-700 cursor-pointer" />
                  </Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;