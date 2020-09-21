let grid;
let NUM_ROWS = 10;
let NUM_COLS = 10;

let lvl = 1;

let running1 = false;
let running2 = false;

createDivGrid(grid);

// Setting Up Start Background
function startUpBkgrnd() {
  clearGrid();

  for (let i = 0; i < NUM_COLS - 2; i++) {
    updateGrid(5, i + 1, 4);
    updateGrid(6, i + 1, 4);
  }

  for (let i = 0; i < 4; i++) {
    updateGrid(i + 2, i + 6, 4)
    updateGrid(i + 1, i + 6, 4)
    updateGrid(i + 7, -i + 9, 4)
    updateGrid(i + 6, -i + 9, 4)
  }

  updateGrid(5, 10, 4);
  updateGrid(6, 10, 4);
}

startUpBkgrnd();

document.getElementById('stop').addEventListener('click', stopAnimation);

function stopAnimation() {
  if (running1 === true) {
    clearInterval(dance1Interval);
    running1 = false;
  } else if (running2 === true) {
    clearInterval(dance2Interval);
    running2 = false;
  }
  console.log('stopped');
  startUpBkgrnd();
  setTimeout(startUpBkgrnd, 100);
  lvl = 1;
}

document.getElementById('dance1').addEventListener('click', dance1Handler)

function dance1Handler() {
  dance1Interval = setInterval(dance1, 200);
  running1 = true;
}

function dance1() {
  console.log(lvl)
  if (lvl === 3) {
    setTimeout(img3, 50);
    lvl = 4;
  } else if (lvl === 2) {
    setTimeout(img2, 50);
    lvl = 3;
  } else if (lvl === 4) {
    setTimeout(img4, 50);
    lvl = 1
  } else {
    setTimeout(img1, 50);
    lvl = 2;
  }
}

document.getElementById('dance2').addEventListener('click', dance2Handler)

function dance2Handler() {
  dance2Interval = setInterval(dance2, 100);
  running2 = true;
}

function dance2() {
  if (lvl === 2) {
    setTimeout(img2_2, 100);
    lvl = 3;
  } else if (lvl === 3) {
    setTimeout(img3_2, 100);
    lvl = 4;
  } else if (lvl === 4) {
    setTimeout(img4_2, 100);
    lvl = 5;
  } else if (lvl === 5) {
    setTimeout(img5_2, 100);
    lvl = 6;
  } else if (lvl === 6) {
    setTimeout(img6_2, 100);
    lvl = 7;
  } else if (lvl === 7) {
    setTimeout(img7_2, 100);
    lvl = 8;
  } else if (lvl === 8) {
    setTimeout(img8_2, 100);
    lvl = 9;
  } else if (lvl === 9) {
    setTimeout(img9_2, 100);
    lvl = 10;
  } else if (lvl === 10) {
    setTimeout(img10_2, 100);
    lvl = 11;
  } else if (lvl === 11) {
    setTimeout(img11_2, 100);
    lvl = 1;
  } else {
    setTimeout(img1_2, 100);
    lvl = 2;
  }
}

// Image Functions For Dance 2

function img1_2() {
  clearGrid();
  for (let i = 0; i < NUM_COLS - 2; i++) {
    updateGrid(5, i + 1, 4);
    updateGrid(6, i + 1, 4);
  }

  for (let i = 0; i < 4; i++) {
    updateGrid(i + 2, i + 6, 4)
    updateGrid(i + 1, i + 6, 4)
    updateGrid(i + 7, -i + 9, 4)
    updateGrid(i + 6, -i + 9, 4)
  }

  updateGrid(5, 10, 4);
  updateGrid(6, 10, 4);
}

function img2_2() {
  clearGrid();
  for (let i = 1; i < NUM_COLS; i++) {
    updateGrid(5, i + 1, 4);
    updateGrid(6, i + 1, 4);
  }

  for (let i = 1; i < 5; i++) {
    updateGrid(i, i + 6, 4);
    updateGrid(i + 1, i + 6, 4);
    updateGrid(-i + 11, i + 6, 4);
    updateGrid(-i + 10, i + 6, 4);
  }
}

function img3_2() {
  clearGrid();
  for (let i = 2; i < NUM_COLS; i++) {
    updateGrid(5, i + 1, 4);
    updateGrid(6, i + 1, 4);
  }

  for (let i = 1; i < 4; i++) {
    updateGrid(i, i + 7, 4);
    updateGrid(i + 1, i + 7, 4);
    updateGrid(-i + 11, i + 7, 4);
    updateGrid(-i + 10, i + 7, 4);
  }

  updateGrid(5, 1, 4);
  updateGrid(6, 1, 4);
}

function img4_2() {
  clearGrid();
  for (let i = 3; i < NUM_COLS; i++) {
    updateGrid(5, i + 1, 4);
    updateGrid(6, i + 1, 4);
  }

  for (let i = 1; i < 3; i++) {
    updateGrid(i, i + 8, 4);
    updateGrid(i + 1, i + 8, 4);
    updateGrid(-i + 11, i + 8, 4);
    updateGrid(-i + 10, i + 8, 4);
  }

  updateGrid(4, 1, 4);
  updateGrid(7, 1, 4);
  updateGrid(5, 1, 4);
  updateGrid(6, 1, 4);
  updateGrid(5, 2, 4);
  updateGrid(6, 2, 4);
}

function img5_2() {
  clearGrid();
  for (let i = 4; i < NUM_COLS; i++) {
    updateGrid(5, i + 1, 4);
    updateGrid(6, i + 1, 4);
  }

  for (let i = 1; i < 3; i++) {
    updateGrid(i, 10, 4);
    updateGrid(i + 8, 10, 4);
  }

  for (let i = 1; i < 7; i++) {
    updateGrid(i + 2, 1, 4);
  }

  updateGrid(4, 2, 4);
  updateGrid(7, 2, 4);
  updateGrid(5, 2, 4);
  updateGrid(6, 2, 4);
  updateGrid(5, 3, 4);
  updateGrid(6, 3, 4);
}

function img6_2() {
  clearGrid();
  for (let i = 5; i < NUM_COLS; i++) {
    updateGrid(5, i + 1, 4);
    updateGrid(6, i + 1, 4);
  }

  for (let i = 1; i < 7; i++) {
    updateGrid(i + 2, 2, 4);
  }

  updateGrid(5, 1, 4);
  updateGrid(6, 1, 4);
  updateGrid(3, 1, 4);
  updateGrid(8, 1, 4);
  updateGrid(2, 1, 4);
  updateGrid(9, 1, 4);

  updateGrid(4, 3, 4);
  updateGrid(7, 3, 4);
  updateGrid(5, 3, 4);
  updateGrid(6, 3, 4);
  updateGrid(5, 4, 4);
  updateGrid(6, 4, 4);
}

function img7_2() {
  clearGrid();
  for (let i = 6; i < NUM_COLS; i++) {
    updateGrid(5, i + 1, 4);
    updateGrid(6, i + 1, 4);
  }

  for (let i = 1; i < 5; i++) {
    updateGrid(i, i, 4)
    updateGrid(i + 1, i, 4)
    updateGrid(i + 5, -i + 5, 4)
    updateGrid(i + 6, -i + 5, 4)
  }

  for (let i = 1; i < 6; i++) {
    updateGrid(5, i, 4);
    updateGrid(6, i, 4);
  }

  updateGrid(5, 4, 4);
  updateGrid(6, 4, 4);
  updateGrid(5, 5, 4);
  updateGrid(6, 5, 4);
}

function img8_2() {
  clearGrid();
  for (let i = 7; i < NUM_COLS; i++) {
    updateGrid(5, i + 1, 4);
    updateGrid(6, i + 1, 4);
  }

  for (let i = 1; i < 5; i++) {
    updateGrid(i, i + 1, 4)
    updateGrid(i + 1, i + 1, 4)
    updateGrid(i + 5, -i + 6, 4)
    updateGrid(i + 6, -i + 6, 4)
  }

  for (let i = 1; i < 7; i++) {
    updateGrid(5, i, 4);
    updateGrid(6, i, 4);
  }
}

function img9_2() {
  clearGrid();
  for (let i = 8; i < NUM_COLS; i++) {
    updateGrid(5, i + 1, 4);
    updateGrid(6, i + 1, 4);
  }

  for (let i = 1; i < 5; i++) {
    updateGrid(i, i + 2, 4)
    updateGrid(i + 1, i + 2, 4)
    updateGrid(i + 5, -i + 7, 4)
    updateGrid(i + 6, -i + 7, 4)
  }

  for (let i = 1; i < 8; i++) {
    updateGrid(5, i, 4);
    updateGrid(6, i, 4);
  }
}

function img10_2() {
  clearGrid();
  for (let i = 9; i < NUM_COLS; i++) {
    updateGrid(5, i + 1, 4);
    updateGrid(6, i + 1, 4);
  }

  for (let i = 1; i < 5; i++) {
    updateGrid(i, i + 3, 4)
    updateGrid(i + 1, i + 3, 4)
    updateGrid(i + 5, -i + 8, 4)
    updateGrid(i + 6, -i + 8, 4)
  }

  for (let i = 1; i < 9; i++) {
    updateGrid(5, i, 4);
    updateGrid(6, i, 4);
  }
}

function img11_2() {
  clearGrid();
  for (let i = 1; i < 5; i++) {
    updateGrid(i, i + 4, 4)
    updateGrid(i + 1, i + 4, 4)
    updateGrid(i + 5, -i + 9, 4)
    updateGrid(i + 6, -i + 9, 4)
  }

  for (let i = 1; i < 10; i++) {
    updateGrid(5, i, 4);
    updateGrid(6, i, 4);
  }
}


// Image Functions For Dance 1

function img1() {
  clearGrid();
  for (let i = 1; i < 10 + 1; i++) {
    updateGrid(i, 1, 8);
    if (i > 1) {
      updateGrid(10, i, 8);
    }
    if (i > 2) {
      updateGrid(-i + 12, 10, 8);
      updateGrid(2, i, 8);
    }
    if (i > 3) {
      updateGrid(i - 2, 3, 8);
    }
    if (i > 4) {
      updateGrid(8, i - 2, 8);
    }
    if (i > 5) {
      updateGrid(i - 2, 8, 8);
    }
    if (i > 6) {
      updateGrid(4, i - 2, 8);
    }
    if (i > 7) {
      updateGrid(i - 4, 5, 8);
    }
  }
  updateGrid(6, 6, 8);
}

function img2() {
  clearGrid();
  for (let i = 1; i < 10 + 1; i++) {
    updateGrid(10, i, 8);
    if (i > 1) {
      updateGrid(i - 1, 10, 8);
    }
    if (i > 2) {
      updateGrid(1, i - 1, 8);
    }
    if (i > 3) {
      updateGrid(i - 2, 2, 8);
    }
    if (i > 4) {
      updateGrid(8, i - 2, 8);
      updateGrid(i - 2, 8, 8);
    }
    if (i > 6) {
      updateGrid(3, i - 3, 8);
    }
    if (i > 7) {
      updateGrid(i - 4, 4, 8);
      updateGrid(6, i - 4, 8);
    }
  }
  updateGrid(5, 6, 8);
}

function img3() {
    clearGrid();
    for (let i = 1; i < 10 + 1; i++) {
      updateGrid(i, 10, 8);
      updateGrid(1, i, 8);
      if (i > 1) {
        updateGrid(i - 1, 10, 8);
      }
      if (i > 2) {
        updateGrid(i - 1, 1, 8);
      }
      if (i > 3) {
        updateGrid(9, i - 2, 8)
      }
      if (i > 4) {
        updateGrid(i - 2, 8, 8);
      }
      if (i > 5) {
        updateGrid(3, i - 3, 8);
      }
      if (i > 6) {
        updateGrid(i - 3, 3, 8);
      }
      if (i > 7) {
        updateGrid(7, i - 4, 8);
      }
      if (i > 8) {
        updateGrid(i - 4, 6, 8)
      }
    }
    updateGrid(5, 5, 8);
}

function img4() {
  clearGrid();
  for (let i = 1; i < 10 + 1; i++) {
    updateGrid(i, 1, 8);
    updateGrid(1, i, 8);
    if (i > 1) {
      updateGrid(10, i - 1, 8);
    }
    if (i > 2) {
      updateGrid(i, 9, 8);
    }
    if (i > 3) {
      updateGrid(3, i - 1, 8);
    }
    if (i > 4) {
      updateGrid(i - 2, 3, 8);
    }
    if (i > 5) {
      updateGrid(8, i - 3, 8);
    }
    if (i > 6) {
      updateGrid(i - 2, 7, 8);
    }
    if (i > 7) {
      updateGrid(5, i - 3, 8);
    }
  }
  updateGrid(6, 5, 8);
}





































































































//end
