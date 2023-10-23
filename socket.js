const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const prisma = require("./database/index");

const httpServer = http.createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*", // Replace with your frontend URL
    methods: ["GET", "POST"],
  
  },
});

io.on("connection", (socket) => {
  console.log(" ✔️  A user connected:", socket.id);
  // socket.on("join_room", (roomId) => {
  //   // socket.join(roomId);
  //   console.log(` user with id-${socket.id} joined room - ${roomId}`);
  // });

  socket.on("send_msg", (data) => {
    console.log(data);
    //This will send a message to a specific room ID
    socket.emit("receive_msg", data);
    // prisma.message.create({data })
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

const PORT = 3003 ;
httpServer.listen(PORT, () => {
  console.log(`Socket.io server is running on port ${PORT}`);
});