const express = require("express");
const ChatModel = require("../models/chat.model");
const UserModel = require("../models/user.model");
const app = express.Router();

//fetching chats
app.get("/", async (req, res) => {
  try {
    let chats = await ChatModel.find({users: {$elemMatch: {$eq: req.id}}})
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({updatedAt: -1});

    chats = await UserModel.populate(chats, {
      path: "latestMessage.sender",
      select: "name pic email",
    });

    res.status(200).send(chats);
  } catch (e) {
    res.status(400).send(e);
  }
});

//creating new one on one chat
app.post("/", async (req, res) => {
  const {id} = req.body;
  try {
    if (!id) return res.status(400).send("User Id not found");

    let chatExist = await ChatModel.findOne({
      isGroupChat: false,
      $and: [
        {users: {$elemMatch: {$eq: req.id}}},
        {users: {$elemMatch: {$eq: id}}},
      ],
    })
      .populate("users", "-password")
      .populate("latestMessage");
    chatExist = await UserModel.populate(chatExist, {
      path: "latestMessage.sender",
      select: "name pic email",
    });

    if (chatExist) return res.status(200).send(chatExist);

    const chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.id, id],
    };
    const chat = new ChatModel(chatData);
    await chat.save();

    const fullChat = await ChatModel.findOne({_id: chat._id}).populate(
      "users",
      "-password"
    );
    res.status(200).send(fullChat);
  } catch (e) {
    res.status(400).send(e);
  }
});


module.exports = app;
