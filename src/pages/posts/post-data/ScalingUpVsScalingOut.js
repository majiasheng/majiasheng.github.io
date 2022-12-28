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
          Scaling up: Increasing the power of resources (more RAM, more CPU core, etc.) of the current server(s).
        </p>

        <p>
          Scaling out: Increasing the number of servers.
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
