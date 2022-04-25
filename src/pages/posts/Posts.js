import React from 'react';
import {
  Switch, Route, Link,
} from 'react-router-dom';
import Post from './Post';
import posts from './post-data';
import '../../styles/Posts.css';

const createPath = (name) => `/posts/${name}`.toLocaleLowerCase();

function Posts() {
  return (
    <div className="posts">
      {/* <h3>Art is whatever you make of it </h3> */}

      <Switch>
        <Route exact path="/posts">
          <ol>
            {
            posts.map((p) => (
              <li key={`post-link-${p.pathName}`}>
                <Link className="post-link anchor-hover-black-background-white-text" to={createPath(p.pathName)}>{p.title}</Link>
              </li>
            ))
          }
          </ol>
        </Route>

        { posts.map((p) => (
          <Route exact path={createPath(p.pathName)} key={`post-route-${p.pathName}`}>
            <Post content={<p.content />} />
          </Route>
        ))}
      </Switch>
      {/* <hr />
      <h4>Volumes</h4>
      <a href={twbm} target="_blank" rel="noreferrer">• TWBM Vol.1</a> */}
    </div>
  );
}

export default Posts;
