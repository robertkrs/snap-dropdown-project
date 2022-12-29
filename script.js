const company = document.getElementById("company");
const features = document.getElementById("features");
const img = document.getElementById("arrow-down");
const img2 = document.getElementById("arrow-down-2");

company.addEventListener("mouseout", adicionaClasse);

function adicionaClasse() {
  const dropdown = document.getElementById("dropdown-company");

  if (!dropdown.classList.contains("hide")) {
    dropdown.classList.add("hide");
    img2.src = "/images/icon-arrow-down.svg";
  }
}

company.addEventListener("mouseover", removeClasse);

function removeClasse() {
  const dropdown = document.getElementById("dropdown-company");
  dropdown.classList.remove("hide");
  img2.src = "/images/icon-arrow-up.svg";
}

features.addEventListener("mouseout", adicionaClasseFeat);

function adicionaClasseFeat() {
  const dropdown = document.getElementById("dropdown-features");

  if (!dropdown.classList.contains("hide")) {
    dropdown.classList.add("hide");

    img.src = "/images/icon-arrow-down.svg";
  }
}

features.addEventListener("mouseover", removeClasseFeat);

function removeClasseFeat() {
  const dropdown = document.getElementById("dropdown-features");
  dropdown.classList.remove("hide");

  img.src = "/images/icon-arrow-up.svg";
}
