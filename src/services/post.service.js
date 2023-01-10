const { Types } = require('mongoose');

class PostService {
  constructor(repository) {
    this.repository = repository;
  }

  async getAll() {
    try {
      const posts = await this.repository.getAll();
      console.log('>>> service', posts)
      return posts;
    } catch (error) {
      console.log(`Oops! Aconteceu um erro: ${error}`) //TODO: promise error
    }
  }

  async getById(id) {
    if (!Types.ObjectId.isValid(id)) {
      return {} // TODO: invalidPostId
    }

    try {
      const post = await this.repository.getById(id);
      return post;
    } catch (error) {
      console.log(`Oops! Aconteceu um erro: ${error}`) //TODO: promise error
    }
  }

  async create(post) {
    try {
      // validate post
      const createdPost = await this.repository.create(post);
      return createdPost;
    } catch (error) {
      console.log(`Oops! Aconteceu um erro: ${error}`) //TODO: promise error
    }
  }

  async update(id, post) {
    if (!Types.ObjectId.isValid(id)) {
      return {} // TODO: invalidPostId
    }

    try {
      const updatedPost = await this.repository.update(id, post);
      return updatedPost;
    } catch (error) {
      console.log(`Oops! Aconteceu um erro: ${error}`) //TODO: promise error
    }
  }

  async delete(id) {
    if (!Types.ObjectId.isValid(id)) {
      return {} // TODO: invalidPostId
    }

    try {
      const deletedPost = await this.repository.delete(id);
      return deletedPost;
    } catch (error) {
      console.log(`Oops! Aconteceu um erro: ${error}`) //TODO: promise error
    }
  }
}

module.exports = { PostService }