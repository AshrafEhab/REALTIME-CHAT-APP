const express = require('express');
const messageRouter = express.Router();

const messageController  = require('../controllers/messageController');
const isLoggedIn = require('../middlewares/isLoggedIn');


messageRouter.post("/getMessages", isLoggedIn, messageController.getMessages); //made post to get data in req body
messageRouter.post("/sendMessage",isLoggedIn ,messageController.sendMessage);


module.exports = messageRouter;
