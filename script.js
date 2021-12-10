
let topScore = 0;
let bottomScore = 0;

let showSwitchModal = true;
let lastPlayerScored = []

let scoreLimit = document.querySelector('.score-limit-input').value;
let pointIncrement = document.querySelector('.point-inc-input').value;

let pointTrigger = document.querySelector('.point-trigger-input').value;
let pointTriggerCountdown = pointTrigger;
document.querySelector('.countdown-number').innerHTML = pointTrigger;

const colorWindow = document.querySelector('.color-window');
const switchServersWindow = document.querySelector('.switch-servers-modal');
const victoryWindow = document.querySelector('.victory-modal');

const track = document.querySelector(".track"); 

//Modals
function yessirButtonHandler() {
    switchServersWindow.classList.remove('modal-active');
}

function victoryButtonHandler() {
    victoryWindow.classList.remove('modal-active')
}

function victoryChecker() {
    if (topScore >= scoreLimit || bottomScore >= scoreLimit) {
        console.log('true')
        victoryWindow.classList.add('modal-active');
    }
}

//Inputs & Settings
function setScoreLimit(value) {
    scoreLimit = value;
    console.log(scoreLimit);
};

function setPointInc(value) {
    pointIncrement = value;
    console.log(pointIncrement);
};

function setPointTrigger(value) {
    pointTrigger = value;
    console.log(pointTrigger);
    document.querySelector('.countdown-number').innerHTML = value;
    resetScore();
};

function countDownUpdate() {
    pointTriggerCountdown--;
    if (pointTriggerCountdown == 0) {
        pointTriggerCountdown = pointTrigger;
        if (showSwitchModal === true) {
            switchServersWindow.classList.add('modal-active');
        }
    }
    document.querySelector('.countdown-number').innerHTML = pointTriggerCountdown;
};

function toggleSwitchModal() {
    showSwitchModal = !showSwitchModal;
}

function toggleDarkMode() {

    document.getElementById("top-box").classList.toggle('dark-1');
    document.getElementById("bottom-box").classList.toggle('dark-1');
    document.querySelector(".settings").classList.toggle('dark-1');
    document.querySelector(".main-page").classList.toggle('dark-2');
    document.querySelector(".settings-page").classList.toggle('dark-2');
    document.querySelectorAll(".setting").forEach((e) => {
        e.classList.toggle('dark-font');
    });
}

//Score Functionality
function updateTopDisplay(val) {
    document.getElementById("top-score").innerHTML = val;
    victoryChecker();
    countDownUpdate()
};

function updateBottomDisplay(val) {
    document.getElementById("bottom-score").innerHTML = val;
    victoryChecker();
    countDownUpdate()
};

function topClickHandler() {
    let val = topScore += Number(pointIncrement);
    updateTopDisplay(val);
    lastPlayerScored = document.getElementById("top-score");

};

function bottomClickHandler() {
    let val = bottomScore += Number(pointIncrement);
    updateBottomDisplay(val);
    lastPlayerScored = document.getElementById("bottom-score");
};


//Reset Button
function resetScore() {
    document.getElementById("top-score").innerHTML = 0;
    document.getElementById("bottom-score").innerHTML = 0;
    topScore = 0;
    bottomScore = 0;
    pointTriggerCountdown = pointTrigger;
    document.querySelector('.countdown-number').innerHTML = pointTriggerCountdown;
}

//Undo Button
function undo() {
    if (lastPlayerScored === document.getElementById("top-score")) {
        if (topScore != 0) {
            topScore -= Number(pointIncrement);
        }
    } else if (lastPlayerScored === document.getElementById("bottom-score")) {
        if (bottomScore != 0) {
            bottomScore -= Number(pointIncrement);
        }
    }
    if (Number(pointTriggerCountdown) != pointTrigger) {
        pointTriggerCountdown++;
        document.querySelector('.countdown-number').innerHTML = pointTriggerCountdown;
    }
    document.getElementById("top-score").innerHTML = topScore;
    document.getElementById("bottom-score").innerHTML = bottomScore;
}

//Color Changing Functionality

function showColors() {
    colorWindow.classList.add('color-window-active')
};

function changeColorTop(color) {
    const topBox = document.getElementById("top-box");
    topBox.style.backgroundColor = color;
}

function changeColorBottom(color) {
    const bottomBox = document.getElementById("bottom-box");
    bottomBox.style.backgroundColor = color;
}

function exit() {
    colorWindow.classList.remove('color-window-active')
}

//Settings Screen Swipe

function moveLeft() {
    track.style.transform = 'translateX(0%)';
};
  
function moveRight() {
    track.style.transform = 'translateX(-100%)';
};
