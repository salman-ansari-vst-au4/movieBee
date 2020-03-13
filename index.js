const express = require('express');
const exphbs = require('express-handlebars');
const open = require('open');

const app = express();
const PORT = process.env.PORT || 9091;
const HOST = "0.0.0.0";

// Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));
const hbs = exphbs.create({
  extname: '.hbs',
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// Open Default Browser (comment out while editing)
// (async () => {
//   await open('http://localhost:9091');
// })();

app.use('/', require('./controllers/moviedb'))

// Port
app
  .listen(PORT, HOST, () =>
    console.log("Started : ", PORT)
  )
  .on("error", (err) =>
    console.log("Unable To Start App >>>", err)
  );