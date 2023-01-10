class PostController {
  contructor(service) {
    this.service = service;
  }

  async getAll(_req, res) {
    const posts = await this.service.getAll();
    console.log('>>> controller', posts)
    return res.status(200).json(posts);
  }

  async getById(req, res) {
    const { id } = req.params;
    // TODO: validate id
    const post = await this.service.getById(id);

    return res.status(200).json(post);
  }

  async create(req, res) {
    const body = req.apiGateway.event.body;

    const post = await this.service.create(body);
    return res.status(201).json(post);
  }

  async update(req, res) {
    const { id } = req.params;
    const body = req.apiGateway.event.body;

    const post = await this.service.update(id, body);
    return res.status(200).json(post);
  }

  async delete(req, res) {
    const { id } = req.params;

    const post = await this.service.delete(id);
    return res.status(204).json(post);
  }
}

module.exports = { PostController };