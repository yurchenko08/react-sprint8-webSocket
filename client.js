const remoteUrl = "wss://boiling-beach-26008.herokuapp.com";
const localUrl = "ws://localhost:8082";

//Your implementation
const client = new WebSocket(localUrl);
client.onopen = () => {
  console.log("client connected");
};

const send = () => {
  let nickname = document.getElementById("userName").value;
  let message = document.getElementById("message").value;
  client.send(`${nickname}: ${message}`);
};
client.onmessage = ({ data }) => {
  const chat = document.getElementById("chat");
  chat.innerHTML += `${data}\n`;
};
