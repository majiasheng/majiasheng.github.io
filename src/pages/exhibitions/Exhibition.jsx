/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

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
      <div className="exhibition-body">
        {data.meta.about}
        {/* NOTE: path for image is not stored in a variable is because react doesn't resolve it */}
        {/* <ul className="art-image-list">{imagesJSX}</ul> */}
      </div>
    </div>
  );
}

Exhibition.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Exhibition;
