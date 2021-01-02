// import React from 'react';

const Book = (props) => {
  return (
    <div>
      <h4>Title: {props.title}</h4>
      <p>Author: {props.author}</p>
      <p>Ratings: {props.ratings}</p>
      <button onClick={() => props.removeBook(props.id)}>Remove</button>
    </div>
  );
};

export default Book;
