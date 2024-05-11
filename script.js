document.addEventListener("DOMContentLoaded", function () {
  var circles = document.querySelectorAll(".rating .circle");
  var selectedItemSpan = document.querySelector(".selectedItem");

  var submitButton = document.querySelector(".submit-button");
  var container1 = document.querySelector(".container1");
  var container2 = document.querySelector(".container2");

  circles.forEach(function (circle) {
    circle.addEventListener("click", function () {
      // Remove 'selected' class from all circles
      circles.forEach(function (c) {
        c.classList.remove("selected");
      });

      // Add 'selected' class to the clicked circle
      this.classList.add("selected");
      selectedItemSpan.textContent = this.textContent;
      message.textContent = "You selected " + this.textContent + " out of 5";
    });
  });

  submitButton.addEventListener("click", function () {
    // Hide container1
    container1.style.display = "none";
    // Show container2
    container2.style.display = "block";
  });
});
