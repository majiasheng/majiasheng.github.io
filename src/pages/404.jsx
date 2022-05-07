import React from 'react';
import '../styles/404.css';

function NotFound() {
  return (
    <div>
      <div>
        You either got here by refreshing your page or your url is not valid
      </div>
      <h1 className="the-scream">
        No content here, go
        {' '}
        <a href="/">back</a>
      </h1>
      <br />
      <img src="/the-scream.jpeg" alt="404" />
    </div>
  );
}

export default NotFound;
