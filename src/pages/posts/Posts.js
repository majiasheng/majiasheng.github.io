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
      <Switch>
        <Route exact path="/posts">
          {/* <ul className="post-list"> */}
          <table>
            <tbody>
              {
              posts.sort(
                (a, b) => new Date(b.date) - new Date(a.date),
              ).map((p) => (
                <tr className="post-link-wrapper" key={`post-link-${p.pathName}`}>
                  <td className="post-date">
                    {p.date}
                  </td>
                  <td className="date-post-title-separator" />
                  <td>
                    <Link className="post-link anchor-hover-black-background-white-text" to={createPath(p.pathName)}>{p.title}</Link>
                  </td>
                </tr>

              ))
            }
              {/* </ul> */}
            </tbody>
          </table>
        </Route>

        {
          posts.map((p) => (
            <Route exact path={createPath(p.pathName)} key={`post-route-${p.pathName}`}>
              <Post content={<p.content />} />
            </Route>
          ))
        }
      </Switch>
    </div>
  );
}

export default Posts;
