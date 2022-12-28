const company = document.getElementById("company");

company.addEventListener("mouseover", removeClasse);

company.addEventListener("mouseout", adicionaClasse);

function removeClasse() {
  const dropdown = document.getElementById("dropdown-company");
  dropdown.classList.remove("hide");
}

function adicionaClasse() {
  const dropdown = document.getElementById("dropdown-company");

  if (!dropdown.classList.contains("hide")) {
    dropdown.classList.add("hide");
  }
}

const features = document.getElementById("features");

features.addEventListener("mouseover", removeClasseFeat);

features.addEventListener("mouseout", adicionaClasseFeat);

function removeClasseFeat() {
  const dropdown = document.getElementById("dropdown-features");
  dropdown.classList.remove("hide");
}

function adicionaClasseFeat() {
  const dropdown = document.getElementById("dropdown-features");

  if (!dropdown.classList.contains("hide")) {
    dropdown.classList.add("hide");
  }
}
