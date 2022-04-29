/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
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
  const [indexOfFocusedImage, setIndexOfFocusedImage] = useState(0);
  const getImagePathByfileName = (fileName) => `./assets/exhibitions/${data.meta.name.toLowerCase()}/${fileName}`;
  const handleImageClick = (indexOfImage) => () => {
    setIndexOfFocusedImage(indexOfImage);
  };

  return (
    <div className="exhibition">
      <h4 className="exhibition-name">{data.meta.name}</h4>
      <h5 className="exhibition-discription">{data.meta.about}</h5>
      <div className="exhibition-body">
        <div className="exhibition-image-wrapper">
          <div className="focused-image-wrapper">
          <img
            className="focused-image"
            src={require(`${getImagePathByfileName(data.showings[indexOfFocusedImage].fileName)}`)}
            alt={data.showings[indexOfFocusedImage].name}
          />
          </div>
          <div className="exhibition-slide-show-wrapper">
            <div className="slide-show-directional pointer slide-show-left horizontal-flip">➤</div>
            <div className="exhibition-slide-show">
              {data.showings.map((s, index) => (
                <div className="exhibition-slide-show-thumbnail-wrapper pointer" key={`s__${s.fileName}`} onClick={handleImageClick(index)}>
                  <img
                    className="exhibition-slide-show-thumbnail"
                    src={require(`${getImagePathByfileName(s.fileName)}`)}
                    alt={s.name}
                  />
                  {/* <span>{s.name}</span>
            <span>{s.description}</span> */}
                </div>
              ))}
            </div>
            <div className="slide-show-directional slide-show-right">➤</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Exhibition.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Exhibition;
