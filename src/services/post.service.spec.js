const { fakePosts, fakeId } = require("./../__mocks__/fake.post");
const { fakePostRepository } = require("./../__mocks__/fake.post.repository");
const { PostService } = require("././post.service");
const { describe, it, expect } = global;

const postService = new PostService(fakePostRepository);

describe("PostService", () => {
  describe("getAll", () => {
    it("should return all posts", async () => {
      const posts = await postService.getAll();
      expect(posts).toEqual(fakePosts);
    });
    it("should return an empty array if there is no posts", async () => {
      jest.spyOn(fakePostRepository, "getAll").mockResolvedValueOnce([]);
      const posts = await postService.getAll();
      expect(posts).toEqual([]);
    });
    it("it should return an array", async () => {
      const posts = await postService.getAll();
      expect(Array.isArray(posts)).toBe(true);
    })
    it("should call PostRepository.getAll method", async () => {
      jest.spyOn(fakePostRepository, "getAll");
      await postService.getAll();
      expect(fakePostRepository.getAll).toHaveBeenCalled();
    });
    it("should send an error message in catch sentence", async () => {
      jest.spyOn(fakePostRepository, "getAll")
        .mockImplementationOnce(() => { throw new Error("Error")})
      const post = await postService.getAll()
      expect(post).toEqual({
        promiseError: { message: "Error", status: 500 },
      });
    });
  });

  describe("getById", () => {
    it("should return a post", async () => {
      //
    });
    it("should call PostRepository.getById method", () => {
      //
    });
    it("should return an object with the correct keys", async () => {
      //
    });
    it("should not find a post if the id does not exist", async () => {
      //
    });
    it("should send an error message in catch sentence", async () => {
      //
    });
  });

  describe("create", () => {
    it("should create a post", async () => {
      //
    });
    it("should return an object with the correct keys", async () => {
      //
    });
    it("should call PostRepository.create method", () => {
      //
    });
  });

  describe("update", () => {
    it("should update a post", async () => {
      //
    });
    it("should return an object with the correct keys", async () => {
      //
    });
    it("should call PostRepository.update method", () => {
      //
    });
    it("should not find a post if the id does not exist", async () => {
      //
    });
    it("should send an error message in catch sentence", async () => {
      //
    });
  });

  describe("delete", () => {
    it("should delete a post", async () => {
      //
    });
    it("should call PostRepository.delete method", () => {
      //
    });
    it("should not find a post if the id does not exist", async () => {
      //
    });
    it("should send an error message in catch sentence", async () => {
      //
    });
  });
});
