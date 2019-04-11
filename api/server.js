const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const hobbitsRouter = require("../routers/hobbits-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/hobbits", hobbitsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
  //   res.send("Server is running!");
});

module.exports = server;
