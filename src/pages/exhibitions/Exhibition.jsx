/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Exhibition.css';
/**
 * data: {
 *   meta: {
 *     name: 'Precarious',
 *     about: 'Featuring beauty from precariousness',
 *   },
 *   showings: [
 *     {
 *       fileName: 'precarious1.jpg',
 *       name: '',
 *       description: 'precarious #1',
 *       date: '2017-12-01',
 *     }, ...
 *  ],
 * }
 */
function Exhibition({ data }) {
  // <li key={`${artThemeName}_${artThemeValue.name}_${index}`}>
  //   <img
  //     className="art-image"
  //     src={require(`../../../images/arts/${artThemeName}/${artThemeValue.fileName}`)}
  //     alt={artThemeValue.name}
  //   />
  // </li>

  return (
    <div className="exhibition">
      <h4 className="exhibition-name">{data.meta.name}</h4>
      <h5 className="exhibition-discription">{data.meta.about}</h5>
      <div className="exhibition-body">
        {/* <div className="slide-show-left">👈</div> */}
        {/* NOTE: path for image is not stored in a variable is because react doesn't resolve it */}
        {data.showings.map((s) => (
          <div key={`s__${s.fileName}`}>
            <img
              // className="exhibition-thumbnail-image"
              src={require(`./assets/exhibitions/${data.meta.name.toLowerCase()}/${s.fileName}`)}
              alt={s.name}
              width={100}
              height={100}
            />
            {/* <span>{s.name}</span>
            <span>{s.description}</span> */}
          </div>
        ))}
        {/* <div className="slide-show-right">👉</div> */}
      </div>
    </div>
  );
}

Exhibition.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Exhibition;
