const { PostDto } = require("../dto/post.dto");
const { StatusCode } = require("../utils/status.code");
const { isJson } = require("../utils/validators/json.validator");

class PostController {
  constructor(service) {
    this.service = service;
  }

  async getAll(_req, res) {
    const posts = await this.service.getAll();
    return res.status(StatusCode.OK).json(posts);
  }

  async getById(req, res) {
    const { id } = req.params;
    // TODO: validate id
    const post = await this.service.getById(id);

    return res.status(StatusCode.OK).json(post);
  }

  async create(req, res) {
    const body = req.apiGateway.event.body;

    if (!isJson(body)) {
      return res.status(StatusCode.BAD_REQUEST).json({
        error: "Bad Request",
      });
    }
    const postDto = new PostDto(body);
    const post = await this.service.create(postDto);
    if ("validationError" in post) {
      console.log('post.validationError', post)
      return res
        .status(post.validationError.status)
        .json(post.validationError.message);
    }
    return res.status(StatusCode.CREATED).json(post);
  }

  async update(req, res) {
    const { id } = req.params;
    const body = req.apiGateway.event.body;
    if (!isJson(body)) {
      return res.status(StatusCode.BAD_REQUEST).json({
        error: "Bad Request",
      });
    }
    const postDto = new PostDto(body);
    if ("validationError" in post)
      return res
        .status(post.validationError.status)
        .json(post.validationError.message);
    const post = await this.service.update(id, postDto);
    return res.status(StatusCode.OK).json(post);
  }

  async delete(req, res) {
    const { id } = req.params;

    const post = await this.service.delete(id);
    return res.status(StatusCode.OK).json(post);
  }
}

module.exports = { PostController };
