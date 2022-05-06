import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="intro">
        <div>
          Hello world
        </div>
        <div>
          This is JS
        </div>
        <div>
          I solve problems and
        </div>
        <div>
          I apprecitate beauty in things
        </div>
      </div>
      <div>This site is a repository for my works</div>
      <div>Enjoy</div>
      <br />
      <hr />
      <div>
        <ul className="inline-list">
          <li>
            <a
              className="anchor-hover-black-background-white-text"
              href="https://majsdev.github.io"
              target="_blank"
              rel="noreferrer"
            >
              v1
            </a>
          </li>
          <li>
            <a
              href="https://github.com/majiasheng/"
              target="_blank"
              rel="noopener noreferrer"
              className="git-link"
            >
              <img
                alt="github"
                src="/images/icons/gitgub-mark-32px.png"
                className="icon-font-size-height"
              />
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default About;
