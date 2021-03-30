const Post = require("../../models/Post");
const authCheck = require("../../utils/authCheck");
const { UserInputError } = require("apollo-server");

module.exports = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      const user = authCheck(context);
      if (body.trim() === "") {
        throw new UserInputError("Cannot submit empty comment", {
          errors: {
            body: "type a comment please"
          }
        });
      }
    }
  }
};
