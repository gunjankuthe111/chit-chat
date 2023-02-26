const express = require("express");
const ChatModel = require("../models/chat.model");
const app = express.Router();

app.get("/", async (req, res) => {
  try {
    res.status(200).send("group-Chat");
  } catch (e) {
    res.status(400).send(e);
  }
});

//creating group chat
app.post("/", async (req, res) => {
  const {users, name} = req.body;
  if (!users || !name)
    return res.status(400).send({message: "missing details"});

  try {
    if (users.length < 2)
      return res
        .status(400)
        .send("More than 2 users are required to form a group chat");

    const groupChat = await ChatModel.create({
      chatName: name,
      users: [...users, req.id],
      isGroupChat: true,
      groupAdmin: req.id,
    });
    const fullGroupChat = await ChatModel.findOne({_id: groupChat._id})
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    res.status(200).json(fullGroupChat);
  } catch (e) {
    res.status(400).send(e);
  }
});

//rename group-chat
app.put("/rename", async (req, res) => {
  const {name, id} = req.body;
  if (!name || !id) return res.status(400).send({message: "missing details"});
  try {
    const updatedChat = await ChatModel.findByIdAndUpdate(
      id,
      {
        chatName: name,
      },
      {
        new: true,
      }
    )
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    if (!updatedChat) return res.status(404).send({message: "Not Found"});
    res.status(200).send(updatedChat);
  } catch (e) {
    res.status(400).send(e);
  }
});

//add user to group-chat
app.put("/add-user", async (req, res) => {
  const {chatId, userId} = req.body;
  if (!chatId || !userId)
    return res.status(400).send({message: "missing details"});
  try {
    const addUser = await ChatModel.findByIdAndUpdate(
      chatId,
      {
        $push: {users: userId},
      },
      {
        new: true,
      }
    )
      .populate("users", "-password")
      .populate("groupAdmin", "-password");

    if (!addUser) return res.status(404).send({message: "Not Found"});
    res.status(200).send(addUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

//remove from group-chat
app.put("/remove", async (req, res) => {
  const {chatId, userId} = req.body;
  if (!chatId || !userId)
    return res.status(400).send({message: "missing details"});
  try {
    const removeUser = await ChatModel.findByIdAndUpdate(
      chatId,
      {
        $pull: {users: userId},
      },
      {
        new: true,
      }
    )
      .populate("users", "-password")
      .populate("groupAdmin", "-password");

    if (!removeUser) return res.status(404).send({message: "Not Found"});
    res.status(200).send(removeUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = app;
