const app = require('./serverProduction');
const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.info('🌎  Server is listening on port %s.', PORT);
  }
});
