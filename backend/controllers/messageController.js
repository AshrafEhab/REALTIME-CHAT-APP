const { appError } = require("../utils/appError.js");
const Message = require("../models/Message.js");


const getMessages = async (req, res, next) =>
{
    try 
    {
        const userId = req.userId;
        const {sender,receiver} = req.body;
        const messages = await Message.find({users:{$all:[sender,receiver]}})
                                      .sort({updatedAt:1})
                                      .exec();


        const getMessageDirection = (msg)=>
            (msg.sender.toString() === userId) ? "sentMessage" : "receivedMessage";
      
        
        const messagesInfo = messages.map((msg)=>{ return(
        {
            messageText:msg.messageText,
            messageDirection:getMessageDirection(msg),
        }
        )})
        res.json(
        {
            messagesInfo
        });        
    } 
    catch (error)
    {          
        next(appError("Error",500)); 
    }
}
     

const sendMessage = async (req, res, next) =>
{
    try 
    {   
        const {messageText, sender, receiver} = req.body;
        
        const message = new Message(
        {
            messageText,
            users:[sender,receiver],
            sender,
        });
        await message.save();
        
        res.json(
        {
            message
        });
        res.status(200).end();
    } 
    catch (error)
    {
        console.log(error);
        next(appError(error.message,400));
    }
}

module.exports = 
{
    getMessages,
    sendMessage,
};
