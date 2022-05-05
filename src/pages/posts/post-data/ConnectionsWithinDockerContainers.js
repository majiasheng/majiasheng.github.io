import React from 'react';

const title = 'Connections within Docker Containers';
const date = '12/23/2021';

function ConnectionsWithinDockerContainers() {
  return (
    <div>
      <h2>{title}</h2>

      <div><span>{date}</span></div>

      <div className="content">
        <p>
          When connecting from a web service to a postgres database within docker
          containers in the same network, using 'localhost' will not work.
          Instead, use the name of the posrgres service defined in docker-compose
          or 'host.docker.internal'
        </p>
        <p>
          See
          <a
            href="https://docs.docker.com/compose/networking/"
            tagert="_blank"
          >
            doc
          </a
        >
        </p>
      </div>
    </div>
  );
}

export default {
  title,
  date,
  content: ConnectionsWithinDockerContainers,
  pathName: 'connections-within-docker-containers',
};
