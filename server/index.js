//Your implementation
const ws = require("ws");
const wss = new ws.Server({ port: 8082 });
const clients = [];
wss.on("connection", (connection) => {
  clients.push(connection);
  //   console.log("new client connected");

  connection.on("message", (message) => {
    wss.clients.forEach((client) => client.send(message.toString()));
  });
  connection.on("close", () => {
    // console.log("client disconnected");
  });
});
// Do not remove this export. wss should be the name of you WebSocket Server instance
module.exports = wss;
