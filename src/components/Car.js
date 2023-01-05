import React from 'react';

const Car = (props) => {
  const { author, id } = props;

  return (
    <p key={id}>{author}</p>
  );
};
export default Car;
