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
  brugerknap.addEventListener("mousedown", visBrugermenu2);
}

function visBrugermenu2() {
  brugermenu.classList.remove("hidden");
  brugerknap.addEventListener("mousedown", lukBrugermenu2);
}

function lukBrugermenu2() {
  brugermenu.classList.add("hidden");
  brugerknap.addEventListener("mousedown", visBrugermenu3);
}

function visBrugermenu3() {
  brugermenu.classList.remove("hidden");
  brugerknap.addEventListener("mousedown", lukBrugermenu3);
}

function lukBrugermenu3() {
  brugermenu.classList.add("hidden");
}
