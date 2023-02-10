const {Schema, model} = require("mongoose");

const messageSchema = new Schema(
  {
    sender: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
    content: {type: String, trim: true},
    chat: {type: mongoose.Schema.Types.ObjectId, ref: "chat"},
    readBy: [{type: mongoose.Schema.Types.ObjectId, ref: "user"}],
  },
  {timestamps: true}
);

const MessageModel = model("message", messageSchema);

module.exports = MessageModel;
