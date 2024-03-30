import express from 'express'; //import express js framework
import { PORT, mongoDBURL } from './config.js'; 
import mongoose from 'mongoose';
import { Report } from './models/reportModel.js';
import reportsRoute from './routes/reportsRoute.js';

const app = express(); //variable for express

app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('SmartLearnChat');
});

app.use('/reports', reportsRoute);


mongoose
    .connect(mongoDBURL) //to connect database, url as parameter
    //.then .catch to handle different scenarios of success and failure
    .then(() => {
        console.log('App connected to database'); //Display success message to console
        app.listen(PORT, () => {
          console.log(`App is listening to port: ${PORT}`);
        });
      })
      //on catch we simply log the error and display it on console
      .catch((error) => {
        console.log(error);
      });

