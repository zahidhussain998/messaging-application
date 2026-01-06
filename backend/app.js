import {createServer} from 'node:http';
import { Server } from 'socket.io';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); // Use the cors middleware
const server = createServer(app);
const io = new Server(server, {
  cors: { origin: 'http://localhost:5173', methods:['GET','POST'], credentials: true }
});
const PORT = 3000;




app.get ('/', (req, res)=> {
    res.send ('Hello World');
})

io.on('connection', (socket) => {
    console.log('a user connected:', socket.id);
  socket.on('chat message', (msg) => {

    

    console.log("this is the message from the client", msg)
    io.emit('chat message', msg);

  });
});




server.listen (PORT, ()=> {
    console.log (`Server is running on http://localhost:${PORT}`);
}
);