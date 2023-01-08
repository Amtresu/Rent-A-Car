/* eslint-disable */ 
import React from 'react';

function Car(props) {
  const { author, id } = props;

  return (
    <p key={id}>{author}</p>
  );
}
export default Car;
