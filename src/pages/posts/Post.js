/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

function Post({ content }) {
  return (
    <div className="post">
      <div className="post-content">
        {content}
      </div>
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.element.isRequired,
};

export default Post;
