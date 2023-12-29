const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //Solution 1 - good for small portion : read whole data at once
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  //Solution 2 - Streams : read data by chunks
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500; //server error
  //     res.end("File not found!");
  //   });

  //Solution 3 - using pipe(), solving back-pressure
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res); //readableSource.pipe(writeableDest)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
