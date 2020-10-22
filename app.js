var express = require('express');
var app = express();
var port = 3000;

app.enable('trust proxy');
app.use (function (req, res, next) {
  if (req.secure) {
    next();
  } else {
    res.redirect(`https://${req.headers.host}${req.url}`);
  }
});

app.use(express.static(`${__dirname}/dist`));

app.listen(port, function() {
  console.log(`Servindo na porta ${port}`);
});