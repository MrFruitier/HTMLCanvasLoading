var Canvas = document.getElementById("Loading");
var Ctxt = Canvas.getContext("2d");
var Information = {
  x: 0,
  y: 0,
  radius: 4,
  loading: true,
  velocity: 0.06,
  radians: Math.random() * Math.PI * 2,
  color: "#2c3e50", // https://flatuicolors.com/palette/defo ("Midnight Blue").
};

Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  Canvas.width = window.innerWidth;
  Canvas.height = window.innerHeight;
});

function main() {
  Ctxt.fillStyle = "rgba(254, 254, 254, 0.06)";
  Ctxt.fillRect(0, 0, Canvas.width, Canvas.height);

  Information.radians += Information.velocity;
  Information.x = Canvas.width / 2 + Math.cos(Information.radians) * 50;
  Information.y = Canvas.height / 2 + Math.sin(Information.radians) * 50;

  Ctxt.beginPath();
  Ctxt.fillStyle = Information.color;
  Ctxt.arc(
    Information.x,
    Information.y,
    Information.radius,
    Math.PI * 2,
    false
  );
  Ctxt.fill();
  Ctxt.closePath();
  if (Information.loading) {
    window.requestAnimationFrame(main);
  } else {
    Ctxt.clearRect(0, 0, Canvas.width, Canvas.height);
    Canvas.classList.add("None");
  }
}

Canvas.addEventListener("contextmenu", (Event) => {
  Event.preventDefault();
});

window.addEventListener("load", () => {
  Canvas.classList.remove("None");
  main();
});
