let images = document.getElementsByClassName("game-card-thumb-container");

for (let i = 0; i < images.length; i++) {
  let child = images[i].children[0];
  child.style.border = "5px solid";
  child.style["border-image"] =
    "linear-gradient(45deg, #13c6d8 1%, #DB33FF 100%)";
  child.style["border-image-slice"] = "1";
}
