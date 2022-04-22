import React from 'react';
import PropTypes from 'prop-types';
import './Exhibition.css';

/**
 * {
 *    imageFileName: "heavily-minimal.jpeg",
 *    imageName: "Heavily Minimal",
 *    note: "minimal #1",
 *    date: "2017-12-01",
 *  },
 */
function Exhibition({ name, data }) {
  // <li key={`${artThemeName}_${artThemeValue.imageName}_${index}`}>
  //   <img
  //     className="art-image"
  //     src={require(`../../../images/arts/${artThemeName}/${artThemeValue.imageFileName}`)}
  //     alt={artThemeValue.imageName}
  //   />
  // </li>

  return (
    <div className="exhibition">
      <h4 className="exhibition-name">{name}</h4>
      <div className="exhibition-body">
        {/* NOTE: path for image is not stored in a variable is because react doesn't resolve it */}
        {/* <ul className="art-image-list">{imagesJSX}</ul> */}
      </div>
    </div>
  );
}

Exhibition.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default Exhibition;
