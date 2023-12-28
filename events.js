const EventEmitter = require("events");

const myEmitter = new EventEmitter();

/* Observer Pattern */

//Observer1
myEmitter.on("newsale", () => {
  console.log("There was a new sale!");
});

//Observer2
myEmitter.on("newsale", () => {
  console.log("Costumer name: Jonas");
});

myEmitter.emit("newSale");
