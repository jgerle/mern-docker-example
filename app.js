// import Express and routes
import express from 'express';
import routes from './src/routes/routes.js';

// constant variables
const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// We'll use our routes function that we setup and imported above
// and then pass it to our app Express
routes(app);

// Setting the server to listen at port 3000
app.listen(PORT, HOST, function () {
  console.log(`Server started on http://${HOST}:${PORT}`);
});