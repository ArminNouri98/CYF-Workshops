function main() {
  const main = document.createElement("main");
  main.innerHTML = `
      <p id="counter" data-testid="counter">0</p>
      <button id="increment">Increment</button>
  `;
  body.appendChild(main);

  const button = body.querySelector("#increment");
  const counter = body.querySelector("#counter");
  button.addEventListener("click", () => {
    increment(counter);
  });
}
module.exports = main;
