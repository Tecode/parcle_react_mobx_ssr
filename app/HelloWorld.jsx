// Dead simple component for the hello world (hi mom!)

import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './HelloWorld.scss';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

function HelloWorld({ homeStore, appStore }) {
  appStore.log();
  return (
    <div>
      <Helmet>
        <title>Hello World!</title>
      </Helmet>
      <h1 className="hello-world">Hello world!</h1>
      <p style={{ textAlign: 'center' }}>
      This is an ordinary react component.{homeStore.name}
        <br />
        <Link to="/codeSplit">Click here</Link> to see a code-split component.
      </p>
    </div>);
}
HelloWorld.propTypes = {
  homeStore: PropTypes.object,
  appStore: PropTypes.object
}
export default inject('homeStore', 'appStore')(observer(HelloWorld));

