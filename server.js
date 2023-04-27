// const express = require('express');
// const app = express();
// const db =require('./config/connection');
const userRoute = require('./routes/userRoutes');
// app.use(express.json());

// const port = 3000;
require('dotenv').config();
// app.listen(port, () => console.log(`example app listening on port ${port}!`));


const express = require('express');

const PORT = 3000;
// const reviews = require('./db/reviews');

const app = express();

// Middleware for parsing application/json
app.use(express.json());

// Middleware for urlecoded data
// `urlencoded` data represents a URL encoded form. If we had a HTML form with fields: `username` and `password`, our urlencoded data would be "username=JohnAppleseed&password=passw0rd"
// This middleware will parse that string into an object containing key value pairs
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoute)
// GET request for ALL reviews
// app.get('/api/reviews', (req, res) => {
//   // Log our request to the terminal
//   console.info(`${req.method} request received to get reviews`);

//   // Sending all reviews to the client
//   return res.status(200).json(reviews);
// });

// GET request for a single review


// POST request to add a review

// POST request to upvote a review
// app.post('/api/upvotes/:review_id', (req, res) => {
//   if (req.body && req.params.review_id) {
//     console.info(`${req.method} request received to upvote a review`);
//     const reviewId = req.params.review_id;
//     for (let i = 0; i < reviews.length; i++) {
//       const currentReview = reviews[i];
//       if (currentReview.review_id === reviewId) {
//         currentReview.upvotes += 1;
//         res.status(200).json(`New upvote count is: ${currentReview.upvotes}!`);
//         return;
//       }
//     }
//     res.status(404).json('Review ID not found');
//   }
// });

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);