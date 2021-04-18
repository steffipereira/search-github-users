import React from 'react';
import { Wrapper }  from './error.styled';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h3>Page not found</h3>
      <Link to="/" className="btn">Go Home</Link>
    </Wrapper>
  )
};

export default Error;
