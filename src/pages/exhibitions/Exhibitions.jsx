import React from 'react';
import {
  Switch, Route, Link, useLocation,
} from 'react-router-dom';
import exhibitions from './exhibition-data/';
import Exhibition from './Exhibition';
import twbm from './assets/twbm-vol1-ed1.pdf';
function Exhibitions() {
  const location = useLocation();

  return (
    <div className="exhibition">
      <h3>Art is whatever you make of it </h3>
      {/* <Switch> */}
        {
          exhibitions.map((e) => (
            // TODO: show exhibition thumbnail
            <Link to={`${location.pathname}/${e.name}`}>{e.name}</Link>
          ))
        }
        {/* {
          exhibitions.map((e) => (
            <Route exact path={`${location.pathname}/${e}`}>
            <Exhibition name={e} data/>
          </Route>
          ))
        } */}
      {/* </Switch> */}
      {/* <hr />
      <h4>Volumes</h4>
      <a href={twbm} target="_blank" rel="noreferrer">• TWBM Vol.1</a> */}
    </div>
  );
}

export default Exhibitions;
