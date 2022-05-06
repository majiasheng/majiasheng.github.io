import React from 'react';

const title = 'What is Linting?';
const date = '04/07/2022';

function WhatIsLinting() {
  return (
    <div>
      <h2>{title}</h2>

      <div><span>{date}</span></div>

      <p>
        If you know what a lint roller is for then you know most of what it is.
      </p>
      <p>
        To state the obvious for most of us, lint roller is used to get rid of
        hair, fluffs and other undesired bits that are stuck to clothing.
      </p>
      <p>
        Linting in software is similar - the linter, who does the act of linting,
        runs through the program (think of rolling your lint roller), and analyzes
        the code and reports (or fix, if the linter has the capability and is
        configured to do so) any programmatic or stylistic violations (think of
        the unwanted bits on the clothing).
      </p>
    </div>
  );
}

export default {
  title,
  date,
  content: WhatIsLinting,
  pathName: 'what-is-linting',
};
