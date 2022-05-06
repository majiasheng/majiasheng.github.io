import React from 'react';

const title = 'On Art';
const date = '11/20/2021';

function OnArt() {
  return (
    <div>
      <h2>{title}</h2>

      <div><span>{date}</span></div>

      <div>
        <p>Everyone is an artist</p>
      </div>
    </div>
  );
}

export default {
  title,
  date,
  content: OnArt,
  pathName: 'on-art',
};
