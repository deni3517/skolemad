const brugermenu = document.querySelector("#brugermenu");
const brugerknap = document.querySelector("#brugerknap");

window.addEventListener("load", sidenVises);

function sidenVises() {
  brugerknap.addEventListener("mousedown", visBrugermenu);
}

function visBrugermenu() {
  brugermenu.classList.remove("hidden");
  brugerknap.addEventListener("mousedown", lukBrugermenu);
}

function lukBrugermenu() {
  brugermenu.classList.add("hidden");
}
