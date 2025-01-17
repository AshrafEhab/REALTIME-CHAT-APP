const host = `http://localhost:5000`;

const registerRoute = `${host}/users/register`
const loginRoute    = `${host}/users/login`
const saveImageRoute    = `${host}/users/uploadImage`
const updateImageUrlRoute    = `${host}/users/updateImageUrl`
const getAllUsersRoute    = `${host}/users/getAllUsers`

const sendMessageRoute    = `${host}/messages/sendMessage`
const getMessagesRoute    = `${host}/messages/getMessages`



module.exports = 
{
    host,
    getAllUsersRoute,

    registerRoute,    
    loginRoute,

    saveImageRoute,
    updateImageUrlRoute,
    
    sendMessageRoute,
    getMessagesRoute,
};