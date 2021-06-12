let topScore = 0;
let bottomScore = 0;

function updateTopDisplay(val) {
    document.getElementById("top-score").innerHTML = val;
};

function updateBottomDisplay(val) {
    document.getElementById("bottom-score").innerHTML = val;
};

function topClickHandler() {
    updateTopDisplay(++topScore);
};

function bottomClickHandler() {
    updateBottomDisplay(++bottomScore);
};

function resetScore() {
    topScore = 0;
    bottomScore = 0;
    updateTopDisplay(topScore);
    updateBottomDisplay(bottomScore);
}


var colorWindow = document.querySelector('.color-window');

function showColors() {
    //alert("YOOOOO");
    colorWindow.classList.add('color-window-active')
};

function exit() {
    colorWindow.classList.remove('color-window-active')
}

//Color Changing Functions

function colorChangeTopRed() {
    let topBox = document.getElementById("top-box")
    topBox.style.backgroundColor = "#ed3430";
}

function colorChangeTopGreen() {
    let topBox = document.getElementById("top-box")
    topBox.style.backgroundColor = "#01c756";
}

function colorChangeTopBlue() {
    let topBox = document.getElementById("top-box")
    topBox.style.backgroundColor = "#154478";
}

function colorChangeBottomRed() {
    let bottomBox = document.getElementById("bottom-box")
    bottomBox.style.backgroundColor = "#ed3430";
}

function colorChangeBottomGreen() {
    let bottomBox = document.getElementById("bottom-box")
    bottomBox.style.backgroundColor = "#01c756";
}

function colorChangeBottomBlue() {
    let bottomBox = document.getElementById("bottom-box")
    bottomBox.style.backgroundColor = "#154478";
}

function test() {
    alert("hello")
}

