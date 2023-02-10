const {Schema, model} = require("mongoose");

const chatSchema = new Schema(
  {
    chatName: {type: String, trim: true},
    isGroupChat: {type: Boolean, default: false},
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "user"}],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
  },
  {timestamps: true}
);

const ChatModel = model("chat", chatSchema);

module.exports = ChatModel;
