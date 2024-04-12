import express from "express";
import { Server } from "socket.io";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const server = http.createServer(app);
const ioServer = new Server(server);

server.listen(process.env.PORT || 9000, () => {
    console.log(`server started at ${process.env.PORT}`);
})

export {
    ioServer,
    app,
}