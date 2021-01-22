const toggle = document.getElementById("toggle");
const monthly = document.querySelectorAll(".monthly");
const annually = document.querySelectorAll(".annually");

toggle.addEventListener("click", () => {
  if (toggle.checked) {
    monthly.forEach((el) => {
      el.style.display = "flex";
    });
    annually.forEach((el) => {
      el.style.display = "none";
    });
  } else {
    monthly.forEach((el) => {
      el.style.display = "none";
    });
    annually.forEach((el) => {
      el.style.display = "flex";
    });
  }
});
