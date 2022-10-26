const net = require("net");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  // your code here
};

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write("Name: TGN");
    });

  conn.setEncoding("utf8");
  
  conn.on("data", (message) => {
    console.log(message)
  });


  return conn;
};
module.exports = { connect, setupInput };