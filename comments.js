// Create web server
// Create a route that accepts GET requests on '/comments'
// Respond with a JSON representation of the comments array
// Create a route that accepts POST requests on '/comments'
// Add a comment to the comments array
// Respond with a JSON representation of the comment that was added
// Create a route that accepts GET requests on '/comments/:id'
// Respond with a JSON representation of the comment with the specified id
// Create a route that accepts PUT requests on '/comments/:id'
// Update the comment with the specified id
// Respond with a JSON representation of the comment that was updated
// Create a route that accepts DELETE requests on '/comments/:id'
// Remove the comment with the specified id
// Respond with a JSON representation of the comment that was removed

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let comments = [
  {
    id: 1,
    comment: 'This is great!',
  },
  {
    id: 2,
    comment: 'Hello World!',
  },
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.json(req.body);
});

app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  res.json(comment);
});

app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  Object.assign(comment, req.body);
  res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = comments.findIndex((comment) => comment.id === id);
  const comment = comments[index];
  comments.splice(index, 1);
  res.json(comment);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});