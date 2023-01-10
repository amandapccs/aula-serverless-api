const serverless = require("serverless-http");
const express = require("express");
const { post } = require("././src/factories/post.factory");
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const helmet = require('helmet');

app.use(helmet());

app.post("/", post.create.bind(post));
app.get("/", post.getAll.bind(post));
app.get("/:id", post.getById.bind(post));
app.put("/:id", post.update.bind(post));
app.delete("/:id", post.delete.bind(post));

app.use((req, res) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

let cachedDb = null;
const uri = process.env.MONGO;

module.exports.handler = serverless(
  app,
  {
    request: async (request, event, context) => {
      context.callbackWaitsForEmptyEventLoop = false;

      if (cachedDb === null) {
        cachedDb = mongoose.connect(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true, serverSelectionTimeoutMS: 5000
        });
      }

      await cachedDb;
    },
  }
);