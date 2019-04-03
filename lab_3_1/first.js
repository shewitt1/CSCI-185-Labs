var count = -1;

function hide() {
  var robert_handle = document.getElementById("robert");

  if (robert_handle.style.display == "none") {
    robert_handle.style.display = "block";
  } else {
    robert_handle.style.display = "none";
  }
}

function bgchange() {
  var backgroundArray = ["pink", "blue", "green", "red", "purple"];
  count++;

  document.body.style.backgroundColor = backgroundArray[count];

  if (count == 4) {
    count = -1;
  }
}

function changeBorder() {
  var borderChange = document.getElementById("robert");

  if ((borderChange.style.width == "100px")) {
    borderChange.style.height = "200px";
    borderChange.style.width = "200px";
  } else {
    borderChange.style.height = "100px";
    borderChange.style.width = "100px";
  }
}
