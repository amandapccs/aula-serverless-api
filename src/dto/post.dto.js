class PostDto {
  constructor(post) {
    this.posts = JSON.parse(post)
    this.title = this.posts.title;
    this.content = this.posts.content;
    // console.log('>> dto', this.title, post.title)
    // console.log('>> dto', this.content, post.content)
    console.log('>> dto', this.posts)
  }
}

module.exports = { PostDto };