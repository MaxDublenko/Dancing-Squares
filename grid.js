function createDivGrid() {
  for (let row = 0; row < NUM_ROWS; row++) {
    for (let col = 0; col < NUM_COLS; col++) {
      let divEl = document.createElement('div');

      document.getElementById("container").append(divEl);
    }
  }
}

clrs = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white', 'brown', 'grey'];


function clearGrid() {
  var elements = document.getElementById('container').children;
  for (let j = 0; j < clrs.length; j++) {
    for (let i = 0; i < NUM_ROWS * NUM_COLS; i++) {
      if (elements.item(i).classList.contains(clrs[j])) {
        elements.item(i).classList.remove(clrs[j]);
      }
    }
  }
}


function updateGrid(x, y, color) {
  var elements = document.getElementById('container').children;
  let divNum;
  if (x == 10) {
    divNum = x * y;
  } else {
    divNum = String(y-1) + String(x);
  }

  divNum = Number(divNum);

  for (let i = 0; i < 11; i++) {
    if (color == i) {
        elements.item(divNum - 1).classList.add(clrs[i - 1]);
    }
  }
}





















//
