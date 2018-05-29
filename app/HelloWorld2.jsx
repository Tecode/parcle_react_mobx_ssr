import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styles from './codeSplitAssets/NyanCat.css';
import Go from './codeSplitAssets/NyanCat';

export default class Nyan extends Component {
  componentDidMount() {
    Go();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Code Split</title>
        </Helmet>
        <h1 className={styles.hello_world}>Hello world 2!</h1>
        <p style={{ textAlign: 'center' }}>
                This is a code-split component.
          <br />
          <Link to="/">Click here</Link> to see an ordinary component.
        </p>
        <div className={styles.wrapper}>
          <div className={styles.rainbow}>
            <span />
          </div>
          <div className={styles.nyan_cat}>
            <div className={styles.feet} />
            <div className={styles.tail}>
              <span />
            </div>
            <div className={styles.body} />
            <div className={styles.head} />
          </div>
          <div id="stars" className={styles.stars} />
        </div>
      </div>
    );
  }
}
