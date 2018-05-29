// Middleware for the server-rendering

import { printDrainHydrateMarks } from 'react-imported-component';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import allStore from '../app/store';

import App from '../app/App';
import generateHtml from './generateHtml';

export default (req, res) => {
  // Generate the server-rendered HTML using the appropriate router
  const context = {};
  const router = (
  <Provider {...allStore}>
    <StaticRouter location={req.originalUrl} context={context}>
      <App />
    </StaticRouter>
  </Provider>
  );
  const markup = ReactDOM.renderToString(router);

  // If react-router is redirecting, do it on the server side
  if (context.url) {
    res.redirect(301, context.url);
  } else {
    // Format the HTML using the template and send the result
    const html = generateHtml(markup + printDrainHydrateMarks());
    res.send(html);
  }
};
