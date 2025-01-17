const socketConfig = async(io)=>
{
    const users = new Map();
    io.on('connection', async (socket) => 
    {     
        // register each user to a certain socket
        socket.on("register", (userId) => 
        {
            users.set(userId, socket.id)
        });

 
        //listen to messages
        socket.on("send-msg", ({senderId,receiverId,messageText}) => 
        {
            const receiverSocket = users.get(receiverId);
            if(receiverSocket)
            {   
                socket.to(receiverSocket).emit('receive-msg',{senderId, messageText});
            }
        });
     });

      
}

module.exports = socketConfig;

