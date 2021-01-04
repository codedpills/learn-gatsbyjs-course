// import React from 'react';

const Book = (props) => {
  return (
    <div className="book">
      <h4>Title: {props.title}</h4>
      <p>Author: {props.author}</p>
      <p>Ratings: {props.ratings}</p>
      <button
        onClick={() => props.removeBook(props.id)}
        style={{
          backgroundColor: "tomato",
          color: "white",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Book;
