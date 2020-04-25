const moongose = require("mongoose");

var PostMessage = moongose.model("PostMessage",
  {
    tittle: { type: String },
    message: { type: String },
  }, "postMessages")

module.exports = { PostMessage }
