/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ExhibitionThumbnail.css';

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
}
 */
function ExhibitionThumbnail({ data }) {
  // <li key={`${artThemeName}_${artThemeValue.name}_${index}`}>
  //   <img
  //     className="art-image"
  //     src={require(`../../../images/arts/${artThemeName}/${artThemeValue.fileName}`)}
  //     alt={artThemeValue.name}
  //   />
  // </li>

  return (
    <div className="exhibition-thumb-nail">
      <div className="exhibition-thumb-nail-body">
        <img
          src={require(`./assets/exhibitions/${data.meta.name.toLowerCase()}/${data.showings[0].fileName}`)}
          alt={data.showings[0].name}
          width={300}
          height={300}
        />
        <h4 className="exhibition-name">{data.meta.name}</h4>
      </div>
    </div>
  );
}

ExhibitionThumbnail.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ExhibitionThumbnail;
