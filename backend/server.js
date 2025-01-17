const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server, 
{
    cors: 
    {
      origin: 'http://localhost:3000',
      credentials: true,                
    }
});
require('./config/socketConfig')(io);

const cors = require('cors');
require('dotenv').config();


/* importing configrations */
const dbConfig  = require('./config/dbConfig');

/*importing routers */
const userRouter = require('./routes/userRouter');
const messageRouter = require('./routes/messageRouter');


const defaultErrorNotFound404 = require('./utils/defaultErrorNotFound404');
const errorHandler = require('./middlewares/errorHandler');



/* defining needed variables */
const PORT = process.env.PORT || 9000;

/* middlewares */
app.all("/",(req,res)=>res.json({status:"Welcome Page"}))
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/messages", messageRouter);

app.all("*",defaultErrorNotFound404);
app.use(errorHandler);






dbConfig();
server.listen(PORT, console.log(`Server is listening to port ${PORT} ...`));

