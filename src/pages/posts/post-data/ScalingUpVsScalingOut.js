import React from 'react';

const title = 'Scaling Up Vs Scaling Out';
const date = '07/30/2022';

function ScalingUpVsScalingOut() {
  return (
    <div>
      <h2>{title}</h2>

      <div><span>{date}</span></div>

      <div>
        <p>
          Scaling up: Increasing power of resources (more RAM/better CPU/GPU) of the current server(s).
        </p>

        <p>
          Scaling out: Increasing number of servers to handle requests
        </p>
      </div>
    </div>

  );
}

export default {
  title,
  date,
  content: ScalingUpVsScalingOut,
  pathName: 'scaling-up-vs-scaling-out',
};
