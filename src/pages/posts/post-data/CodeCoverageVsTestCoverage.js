import React from 'react';

const title = 'Code Coverage vs. Test Coverage';
const date = '01/20/2022';

function CodeCoverageVsTestCoverage() {
  return (
    <div>
      <h2>{title}</h2>

      <div><span>{date}</span></div>

      <div>
        <p>Code Coverage: quantitative measure - amount of code executed</p>

        <p>
          Test Coverage: qualitative measure - amount of possible test cases can
          be tested against features
        </p>
      </div>
    </div>

  );
}

export default {
  title,
  date,
  content: CodeCoverageVsTestCoverage,
  pathName: 'code-coverage-vs-test-coverage',
};
