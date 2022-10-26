const net = require("net");
const { IP, PORT, playerName } = require("./constants")
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write(`Name: ${playerName}`);
    });

  conn.setEncoding("utf8");
  
  conn.on("data", (message) => {
    console.log(message)
  });


  return conn;
};
module.exports = { connect };