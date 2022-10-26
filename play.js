const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541 // PORT number here,
  });

  conn.setEncoding("utf8");
  // interpret incoming data as text
  
  conn.on("data", (message) => {
    // code that does something when the connection is first established
    console.log(message)
  });
  return conn;
};



console.log("Connecting ...");
connect();