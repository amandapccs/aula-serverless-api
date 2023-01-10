const { PostController } = require("./../controllers/post.controller");
const { PostModel } = require("./../models/post.model");
const { PostRepository } = require("./../repositories/post.repository");
const { PostService } = require("./../services/post.service");

function postFactory() {
  const repository = new PostRepository(PostModel);
  const service = new PostService(repository);
  const controller = new PostController(service);

  return controller;
}

const post = postFactory();

module.exports = { post };