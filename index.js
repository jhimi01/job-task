// followed buttons ----------------
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("follow-button")) {
    var button = event.target;

    if (button.innerText === "Follow") {
      button.innerText = "Followed";
      button.style.backgroundColor = "black";
      button.style.color = "white";
    } else {
      button.innerText = "Follow";
      button.style.backgroundColor = "";
      button.style.color = "";
    }
  }
});
