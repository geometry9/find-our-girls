/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Parallax from 'react-simple-parallax';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      contentSnippet: PropTypes.string,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <section className="container-1">
            <Parallax className="parallax">
              <div>Hello World!</div>
            </Parallax>
          </section>
          <section className="container-2">
            <Parallax className="parallax">
              <div>Not Hello World</div>
            </Parallax>
          </section>
          <section className="container-3">
            <Parallax className="parallax">
              <div>Some Other Thing</div>
            </Parallax>
          </section>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
