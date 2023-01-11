const { Types } = require('mongoose');
const { promisePostError } = require('../utils/promise.post.error');
const { validatePost, invalidPostId } = require('../utils/validators/post.validation');

class PostService {
  constructor(repository) {
    this.repository = repository;
  }

  async getAll() {
    try {
      const posts = await this.repository.getAll();
      return posts;
    } catch (error) {
      return promisePostError(error);
    }
  }

  async getById(id) {
    if (!Types.ObjectId.isValid(id)) {
      return invalidPostId(id)
    }

    try {
      const post = await this.repository.getById(id);
      return post;
    } catch (error) {
      return promisePostError(error);
    }
  }

  async create(post) {
    try {
      const validatedPost = validatePost(post)
      if (validatedPost) return validatedPost;
      const createdPost = await this.repository.create(post);
      return createdPost;
    } catch (error) {
      return promisePostError(error);
    }
  }

  async update(id, post) {
    if (!Types.ObjectId.isValid(id)) {
      return invalidPostId(id)
    }

    try {
      // validate post
      const updatedPost = await this.repository.update(id, post);
      return updatedPost;
    } catch (error) {
      return promisePostError(error);
    }
  }

  async delete(id) {
    if (!Types.ObjectId.isValid(id)) {
      return invalidPostId(id);
    }

    try {
      const deletedPost = await this.repository.delete(id);
      return deletedPost;
    } catch (error) {
      return promisePostError(error);
    }
  }
}

module.exports = { PostService }