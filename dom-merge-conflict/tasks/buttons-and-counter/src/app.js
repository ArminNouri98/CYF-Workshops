const header = require("./header");
const main = require("./main");

//increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

export function App() {
  const body = document.createElement("body");
  header();
  main();
  return body;
}
