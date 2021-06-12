
let topScore = 0;
let bottomScore = 0;
var colorWindow = document.querySelector('.color-window');
var switchServersWindow = document.querySelector('.switch-servers-modal');

//Switching Servers

function switchServers() {
    switchServersWindow.classList.add('switch-modal-active');
}

function yessirButtonHandler() {
    switchServersWindow.classList.remove('switch-modal-active');
}

function serverSwitchChecker() {
    let total = topScore + bottomScore;
    if (total % 5 === 0) {
        switchServers();
    }
}

//Score Functionality

function updateTopDisplay(val) {
    document.getElementById("top-score").innerHTML = val;
};

function updateBottomDisplay(val) {
    document.getElementById("bottom-score").innerHTML = val;
};

function topClickHandler() {
    updateTopDisplay(++topScore);
    serverSwitchChecker();
};

function bottomClickHandler() {
    updateBottomDisplay(++bottomScore);
    serverSwitchChecker();
};

function resetScore() {
    topScore = 0;
    bottomScore = 0;
    updateTopDisplay(topScore);
    updateBottomDisplay(bottomScore);
}

//Color Changing Functionality

function showColors() {
    colorWindow.classList.add('color-window-active')
};

function exit() {
    colorWindow.classList.remove('color-window-active')
}

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

