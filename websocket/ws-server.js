const WebSocket = require("ws");

const serverAddress = "192.168.31.79";
const serverPort = 8080;

const wss = new WebSocket.Server({ host: serverAddress, port: serverPort });

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);

    // Broadcast the message to all connected clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log(
  `WebSocket server is running on ws://${serverAddress}:${serverPort}`
);