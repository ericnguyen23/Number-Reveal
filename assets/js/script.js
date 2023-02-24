var container = document.querySelector(".container");
// create an array of container's children, which are the boxes to iterate
var boxArr = container.children;

container.addEventListener("click", function (event) {
  var element = event.target;

  // TODO: Complete function
  // store elements data-number in a var
  var elementNumber = element.getAttribute("data-number");
  // loop through each clicked box, if elementNumber matches array index +1, then add text to that box element
  for (var i = 0; i < boxArr.length; i++) {
    if (elementNumber == i + 1) {
      boxArr[i].textContent = elementNumber;
    }
  }
});
