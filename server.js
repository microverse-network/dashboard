const express = require('express')
const path = require('path')
const stringify = require('json-stringify-safe')

module.exports = ({ socketPort, config = {}, baseUrl = '', bundles = [] }) => {
  const server = express()

  const stringConfig = stringify(config, null, 2)

  server
    .disable('x-powered-by')
    .use(express.static(path.join(__dirname, '.build')))
    .get('/*', (req, res) => {
      res.status(200).send(`
<!doctype html>
<html lang="">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta charSet='utf-8' />
  <title>Microverse Dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500" rel="stylesheet" type="text/css" />
  <link href="${baseUrl}/style.css" rel="stylesheet" type="text/css" />
</head>
<body class="with-content-panel">
  <div id="root"></div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>
  <script>
  var __microverse = {
    socketPort: ${socketPort},
    bundles: ${JSON.stringify(bundles)},
    config: ${stringConfig},
  }
  </script>
  <script src="${baseUrl}/bundle.js"></script>
</body>
</html>
      `)
    })

  return server
}
