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

function showColors() {
    alert("YOOOOO")
}

function test() {
    alert("hello")
}