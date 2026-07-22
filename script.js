function finishLesson() {function finishLesson() {
    alert("🎉 Congratulations! You finished Lesson 1.");
}
    alert("🎉 Congratulations! You finished Lesson 1.");
}function checkAnswer() {
 let score = 0;

function addPoint() {
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;
}
    let answer = document.getElementById("answer").value;

    if (answer === "26") {
        document.getElementById("result").innerHTML = "✅ Correct!";
    } else {
        document.getElementById("result").innerHTML = "❌ Try Again!";
    }
}
function checkAnswer() {
    let answer = document.getElementById("answer").value;

    if (answer === "26") {
        document.getElementById("result").innerHTML = "✅ Correct!";
    } else {
        document.getElementById("result").innerHTML = "❌ Try Again!";
    }
}
localStorage.setItem("score", 0);
localStorage.setItem("lessons", 0);

function updateProfile() {
    document.getElementById("score").innerHTML =
        localStorage.getItem("score");

    document.getElementById("lessons").innerHTML =
        localStorage.getItem("lessons");
}
