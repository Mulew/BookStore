import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
                <tr key={book.id}>
                <td key ={book.id}>
                    <Link to={`/book/details/${book.id}`}>{book.title}</Link>
                </td>
                <td key ={book.id}>{book.author}</td>
                <td key ={book.id}>{book.genre}</td>
                </tr>
            ))}
            </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;