const { describe, it, expect } = global;
const { fakePostModel } = require('./../__mocks__/fake.post.model');
const { PostRepository } = require('././post.repository');
const { fakePosts, fakeId } = require('./../__mocks__/fake.post');
const ServerlessJestPlugin = require('serverless-jest-plugin');

const postRepository = new PostRepository(fakePostModel);

describe('PostRepository Test', () => {
  describe("getAll", () => {
    it("should return all posts", async () => {
      const posts = await postRepository.getAll();
      expect(posts).toEqual(fakePosts)
    });
    it("should return an empty array if there are no posts", async () => {
      jest.spyOn(fakePostModel, 'find').mockImplementationOnce(() => Promise.resolve([]));
      const posts = await postRepository.getAll();
      expect(posts).toEqual([])
    });
    it("should return an array", async () => {
      const posts = await postRepository.getAll();
      expect(Array.isArray(posts)).toBe(true)
    });
    it("should call PostModel.find method", async () => {
      jest.spyOn(fakePostModel, 'find')
      await postRepository.getAll();
      expect(fakePostModel.find).toHaveBeenCalled()
    });
  });

  describe('getById', () => {
    it('should return a post', async () => {
      const post = await postRepository.getById(fakeId)
      expect(post).toEqual(fakePosts[0])
    });
    it("should return an object with the correct keys", async () => {
      const post = await postRepository.getById(fakeId);
      expect(post).toHaveProperty("id")
      expect(post).toHaveProperty("title");
      expect(post).toHaveProperty("content");
      expect(post).toHaveProperty("insertedAt");
    })
    it('should call PostModel.findById method', async () => {
      jest.spyOn(fakePostModel, 'findById')
      await postRepository.getById();
      expect(fakePostModel.findById).toHaveBeenCalled()
    });
    it('should return an empty object if the id does not exist', async () => {
      jest.spyOn(fakePostModel, 'findById').mockImplementationOnce(() => Promise.resolve({}));
      const post = await postRepository.getById("fakeId");
      expect(post).toEqual({});
    });
  });

  describe('create', () => {
    it('should create a post', async () => {
     //
    });
    it('should call PostModel.create method', async () => {
      //
    });
  });

  describe('update', () => {
    it('should update a post', async () => {
      //
    });
    it('should call PostModel.findByIdAndUpdate method', () => {
      //
    });
    it('should return an empty object if it cannot update', async () => {
      //
    });
  });

  describe('delete', () => {
    it('should delete a post', async () => {
      //
    });
    it('should call PostModel.findByIdAndDelete method', () => {
      //
    });
    it('should return an empty object if it cannot delete', async () => {
      //
    });
  });
});