const express = require("express");
const UserModel = require("../models/user.model");
const app = express.Router();

app.get("/", async (req, res) => {
  const {q} = req.query;
  try {
    const mongoQuery = q
      ? {
          $or: [
            {name: {$regex: q, $options: "i"}},
            {email: {$regex: q, $options: "i"}},
          ],
        }
      : {};
    const users = await UserModel.find(mongoQuery,{password:0}).find({_id:{$ne:req.id}});
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = app;
