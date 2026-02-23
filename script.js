let stars = 0;
let lives = 3;
let unlockedLevel = 1;
let currentAnswer = 0;

function updateStatus() {
    document.getElementById("status").innerText =
        ` Stars: ${stars} |  Lives: ${lives}`;
}

function playLevel(level) {
    if (level > unlockedLevel) {
        alert(" Level locked! Complete previous level.");
        return;
    }

    document.getElementById("msg").innerText = "";

    if (level === 1) {
        document.getElementById("question").innerText = "2 + 2 = ?";
        document.getElementById("opt1").innerText = "3";
        document.getElementById("opt2").innerText = "4";
        currentAnswer = 2;
    }

    if (level === 2) {
        document.getElementById("question").innerText = "5 + 3 = ?";
        document.getElementById("opt1").innerText = "7";
        document.getElementById("opt2").innerText = "8";
        currentAnswer = 2;
    }
}

function checkAnswer(option) {
    if (option === currentAnswer) {
        stars++;
        document.getElementById("msg").innerText = " Correct!";
        if (unlockedLevel === 1) unlockedLevel = 2;
    } else {
        lives--;
        document.getElementById("msg").innerText = " Wrong!";
        if (lives === 0) {
            alert("Game Over ");
        }
    }
    updateStatus();
}
