const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const App = require('./src/App'); // Your main React component
const path = require('path');

const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.static(path.resolve(__dirname, 'build')));

server.get('/*', (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Your App</title>
      </head>
      <body>
        <div id="root">${app}</div>
        <script src="/static/js/main.js"></script>
      </body>
      </html>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
