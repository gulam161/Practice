let navMenu = document.querySelector(".checkbtn");
navMenu.addEventListener("click", showMenu);

function showMenu() {
  let items = document.getElementById("navitem");
  let home = document.getElementById("home");

  if (items.style.display === "block") {
    items.style.display = "none";
    home.style.marginTop = "4rem";
  } else {
    items.style.display = "block";
    home.style.marginTop = "500px";
  }
}
