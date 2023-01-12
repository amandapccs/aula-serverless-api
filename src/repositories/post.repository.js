const { create } = require("../models/post.model");

class PostRepository {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    const posts = await this.model.find();
    // console.log('>>> repository', posts)
    return posts
  }

  async getById(id) {
    const post = await this.model.findById(id);
    if (post === null) {
      {}
    };
    return post;
  }
  async create(post) {
    return await this.model.create(post);
  }

  async update(id, post) {
    const updatedPost = await this.model.findByIdAndUpdate(id, post, { new: true });
    if (updatedPost === null) {
      {}
    }

    return updatedPost;
  }

  async delete(id) {
    const deletedPost = await this.model.findByIdAndDelete(id);
    if (deletedPost === null) {
      {}
    }

    return deletedPost;
  }
}

module.exports = { PostRepository }