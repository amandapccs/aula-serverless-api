class PostDto {
  constructor(post) {
    this.posts = JSON.parse(post)
    this.title = this.posts.title;
    this.content = this.posts.content;

  }
}

module.exports = { PostDto };