import React from 'react';
import {
  Switch, Route, Link,
} from 'react-router-dom';
import exhibitions from './exhibition-data';
import Exhibition from './Exhibition';
import ExhibitionThumbnail from './ExhibitionThumbnail';
import '../../styles/Exhibitions.css';
import twbm from './assets/twbm-vol1-ed1.pdf';

const createPath = (name) => `/exhibitions/${name}`.toLocaleLowerCase();

function Exhibitions() {
  return (
    <div className="exhibitions">
      {/* <h3>Art is whatever you make of it </h3> */}

      <Switch>
        <Route exact path="/exhibitions">
          {
            exhibitions.map((e) => (
              <div key={`exhibition-link-${e.meta.name}`}>
                <Link className="anchor-hover-no-effect" to={createPath(e.meta.name)}><ExhibitionThumbnail data={e} /></Link>
              </div>
            ))
          }
        </Route>

        { exhibitions.map((e) => (
          <Route exact path={createPath(e.meta.name)} key={`exhibition-route-${e.meta.name}`}>
            <Exhibition data={e} />
          </Route>
        ))}

      </Switch>
      {/* <hr />
      <h4>Volumes</h4>
      <a href={twbm} target="_blank" rel="noreferrer">• TWBM Vol.1</a> */}
    </div>
  );
}

export default Exhibitions;
