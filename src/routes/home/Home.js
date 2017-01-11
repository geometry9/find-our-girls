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
          <div className={s['content-1']}>
            <h1>About Us</h1>
          </div>
          <div className={s['content-2']}>
            <h1>Press & Media</h1>
          </div>
          <div className={s['content-3']}>
            <h1>How To</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);