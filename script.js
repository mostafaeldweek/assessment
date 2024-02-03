document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("myModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.getElementById("myName").innerText = "Mostafa Eldweek";

var currentDate = new Date().toLocaleDateString();
var currentDateElement = document.getElementById("currentDate");
currentDateElement.innerText = currentDate;

var newStyles = {
  color: "#3282b8",
  fontSize: "18px",
  marginBottom: "100px",
  display: "flex",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "bold",
};
Object.assign(currentDateElement.style, newStyles);
