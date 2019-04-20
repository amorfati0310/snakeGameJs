import "../scss/app.scss";

const makeCell = (size = 900) => {
  const templateCell = [...new Array(size)].map(v => `<div class="cell"></div>`).join("");
  return templateCell;
};

const randomPoint = () => {
  const x = Math.floor(Math.random() * 30) * 20;
  const y = Math.floor(Math.random() * 30) * 20;
  return { x, y };
};

const gameStart = () => {
  const initEl = document.createElement("div");
  initEl.setAttribute("class", "init-cell");
  const initPoint = randomPoint();
  initEl.setAttribute("style", `left: ${initPoint.x}px; top: ${initPoint.y}px;`);
  console.log("initPoint", initPoint);

  const targetEl = document.createElement("div");
  targetEl.setAttribute("class", "target-cell");
  const targetPoint = randomPoint();
  console.log("targetPoint", targetPoint);
  targetEl.setAttribute("style", `left: ${targetPoint.x}px; top: ${targetPoint.y}px;`);

  const wrapper = document.querySelector(".wrapper");
  wrapper.appendChild(initEl);
  wrapper.appendChild(targetEl);
};

document.addEventListener("DOMContentLoaded", e => {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = makeCell();
  gameStart();
});
