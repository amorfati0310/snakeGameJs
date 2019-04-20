import "../scss/app.scss";

const makeCell = (size = 900) => {
  const templateCell = [...new Array(size)].map(v => `<div class="cell"></div>`).join("");
  return templateCell;
};

const randomPoint = (size = 30) => Math.floor(Math.random() * size) * 20;

const randomPointXY = () => {
  return {
    x: randomPoint(),
    y: randomPoint()
  };
};

const makePointEl = className => {
  const el = document.createElement("div");
  el.setAttribute("class", className);
  const point = randomPointXY();
  console.log("point", point);
  el.setAttribute("style", `left: ${point.x}px; top: ${point.y}px;`);
  return el;
};

const gameStart = () => {
  const initEl = makePointEl("init-cell");
  const targetEl = makePointEl("target-cell");
  const wrapper = document.querySelector(".wrapper");
  wrapper.appendChild(initEl);
  wrapper.appendChild(targetEl);
};

document.addEventListener("DOMContentLoaded", e => {
  const wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = makeCell();
  gameStart();
});
