const mongoose = require("mongoose");

const forumSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  messageType: {
    type: String,
    enum: ["text", "image"],
  },
  senderUsername: String,
  likes: Number,
  message: String,
  imageUrl: String,
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});

const Forum = mongoose.model("Forum", forumSchema);

module.exports = Forum;
