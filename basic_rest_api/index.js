const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger);

let blogPost = [];

function logger(req, res, next) {
  console.log(req.url);
  console.log(req.body);
  let condition = false;
  if (condition) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
  next();
}

function isAuthenticated(req, res, next) {
  console.log("Yes user is authenticated");
  next();
}

app.get("/blogs", (req, res) => {
  return res.status(404).json({
    data: blogPost,
    success: true,
  });
});

app.post("/blogs", isAuthenticated, (req, res) => {
  blogPost.push({
    title: req.body.title,
    content: req.body.content,
    id: Math.floor(Math.random() * 1000),
  });

  return res.status(201).json({
    success: true,
  });
});

app.get("/blogs/:id", (req, res) => {
  const result = blogPost.filter((blog) => blog.id === req.params.id);
  return res.status(200).json({
    data: result,
    success: true,
  });
});

app.delete("/blogs/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});
