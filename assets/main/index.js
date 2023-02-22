const cookie = document.querySelector(".cookie");
const cliqueCookie = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/1991/1991-preview.mp3"
);
const pontoClique = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/1992/1992-preview.mp3"
);
const maisumoff = document.querySelector(".maisumoff");

cookie.addEventListener("click", function () {
  cliqueCookie.play();
  cookie.classList.add("animate__bounce");
  increment();
  maisUM();
});

function Event50() {
  cookie.classList.add("animate__wobble");
}

function Event100() {
  cookie.classList.add("animate__heartBeat");
}

let count = 0;
function increment() {
  count++;
  document.querySelector(".contador-cookie").innerHTML = count;
  if (count == 10) {
    pontoClique.play();
    document.body.style.background = "lime";
  }

  if (count == 60) {
    document.body.style.background = "rgb(100, 149, 237)";
    pontoClique.play();
    Event100();
  }

  if (count == 50) {
    pontoClique.play();
    Event50();
  }
}

function timeOutToast() {
  maisumoff.classList.remove("maisum");
}

function maisUM() {
  maisumoff.classList.add("maisum");
  setTimeout(timeOutToast, 200);
}
