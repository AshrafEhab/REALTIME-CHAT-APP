const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema
(
    {
        messageText: 
        {
            type:String, 
            max:1000,
        },

        users:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required:true,
        }],

        sender: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required:true,
        },      
    },
    {
        timestamps: true,
    }
)

const Message = mongoose.model("Message",messageSchema);

module.exports = Message;
