function moveDown() {
  let top = 0;
  let egg = document.createElement("img");
  egg.style.height = "50px";
  egg.style.width = "50px";

  egg.setAttribute("src", "images/egg6.png");
  document.body.append(egg);

  let newfallingegg = setInterval(function () {
    top += 30;
    if (top < window.innerHeight - egg.height) {
      egg.style.top = top + "px";
    } else {
      top = 0;
      egg.style.top = "0px";
      egg.style.left = Math.floor(Math.random() * innerWidth) + "px";
    }

    if (
      egg.offsetTop > window.innerHeight - 150 &&
      (egg.offsetLeft - myBasket.offsetLeft > 50 ||
        egg.offsetLeft - myBasket.offsetLeft < -50)
    ) {
      egg.src = "images/broken.png";
    } else {
      egg.setAttribute("src", "images/egg6.png");
    }
  }, 100);
}

let myBasket = document.querySelector(".basket");
myBasket.style.top = window.innerHeight - myBasket.height + "px";

let x = 0;

document.addEventListener("keydown", function (event) {
  if (
    event.key == "ArrowRight" &&
    myBasket.offsetLeft < window.innerWidth - myBasket.width
  ) {
    x += 25;
    myBasket.style.left = x + "px";
  } else if (event.key == "ArrowLeft" && myBasket.offsetLeft > 0) {
    x -= 25;
    myBasket.style.left = x + "px";
  }
});

moveDown();
//end game

//start bird
let birdObject = document.images[0];
let left = 0;
function moveRight() {
  let timerID = setInterval(() => {
    left += 10;
    if (left < window.innerWidth - birdObject.width)
      birdObject.style.left = left + "px";
    else {
      birdObject.classList.add("flip");
      clearInterval(timerID);
      moveLeft();
    }
  }, 50);
}
moveRight();

function moveLeft() {
  let timerID = setInterval(() => {
    left -= 10;
    if (left > 0) birdObject.style.left = left + "px";
    else {
      birdObject.classList.remove("flip");

      clearInterval(timerID);
      moveRight();
    }
  }, 50);
}
