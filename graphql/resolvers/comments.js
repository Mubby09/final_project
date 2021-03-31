const Post = require("../../models/Post");
const authCheck = require("../../utils/authCheck");
const { UserInputError } = require("apollo-server");

module.exports = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      const { username } = authCheck(context);
      if (body.trim() === "") {
        throw new UserInputError("Cannot submit empty comment", {
          errors: {
            body: "type a comment please"
          }
        });
      }

      const post = await Post.findById(postId);
      if (post) {
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString()
        });
        await post.save();
        return post;
      } else {
        throw new UserInputError("Post not found");
      }
    }
  }
};
