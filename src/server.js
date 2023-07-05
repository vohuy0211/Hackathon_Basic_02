const app = require('./app/app');

const port = 8080;
app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
