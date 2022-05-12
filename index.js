const knap = document.querySelector("button");

const div = document.querySelector("div");

function klikket() {
  div.classList.toggle("min-klasse");
}

knap.addEventListener("click", klikket);
