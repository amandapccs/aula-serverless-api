const {
  mockResponse,
  mockRequest,
} = require("./../__mocks__/fake.post.routes");
const { fakePostService } = require("./../__mocks__/fake.post.service");
const { PostController } = require("././post.controller");
const { describe, it, expect } = global;
const { fakeId, fakePosts } = require("./../__mocks__/fake.post");

const postController = new PostController(fakePostService);
const req = mockRequest();
const res = mockResponse();
const mockInvalidIdResponse = {
  validationError: { message: "Post not found", status: 404 },
};

describe("PostController", () => {
  describe("getAll", () => {
    it("should return all posts", async () => {
      await postController.getAll(req, res);
      expect(res.json).toHaveBeenCalledWith(fakePosts);
    });
    it("should call PostService.getAll method", async () => {
      jest.spyOn(fakePostService, "getAll");
      await postController.getAll(req, res);
      expect(fakePostService.getAll).toHaveBeenCalled();
    });
    it("should return status code 200", async () => {
      await postController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(200)
    });
  });

  describe("getById", () => {
    it("should return a post", async () => {
      //
    });
    it("should call PostService.getById method", async () => {
      //
    });
    it("should return status code 200", async () => {
      //
    });
    it("should return status code 404 if the post does not exist", async () => {
      req.params.id = "wrongId";
      jest
        .spyOn(fakePostService, "getById")
        .mockImplementationOnce(() => Promise.resolve(mockInvalidIdResponse));
      await postController.getById(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
    });
  });

  describe("create", () => {
    it("should create a post", async () => {
      //
    });
    it("should call PostService.create method", async () => {
      //
    });
    it("should return status code 201", async () => {
      //
    });
  });

  describe("update", () => {
    it("should update a post", async () => {
      //
    });
    it("should call PostService.update method", async () => {
      //
    });
    it("should return status code 200", async () => {
      //
    });
  });

  describe("delete", () => {
    it("should delete a post", async () => {
      //
    });
    it("should call PostService.delete method", () => {
      //
    });
    it("should return status code 200", async () => {
      //
    });
    it("should return status code 404 if the post does not exist", async () => {
      //
    });
  });
});
