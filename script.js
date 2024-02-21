const text = document.querySelector("#text");
const treeLeft = document.querySelector("#tree-left");
const gateLeft = document.querySelector("#gate-left");
const treeRight = document.querySelector("#tree-right");
const gateRight = document.querySelector("#gate-right");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.marginTop = value * 2.5 + "px";
  treeLeft.style.left = -value * 1.5 + "px";
  treeRight.style.left = value * 1.5 + "px";
  gateLeft.style.left = value * 0.5 + "px";
  gateRight.style.left = -value * 0.5 + "px";
});
