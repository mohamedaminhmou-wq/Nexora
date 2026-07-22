// ===== Nexora JavaScript =====

// Score & Lessons
let score = Number(localStorage.getItem("score")) || 0;
let lessons = Number(localStorage.getItem("lessons")) || 0;

// Finish Lesson
function finishLesson() {
    lessons++;
    localStorage.setItem("lessons", lessons);

    alert("🎉 Congratulations! You finished the lesson!");
}

// Check Quiz Answer
function checkAnswer() {

    const answer = document.getElementById("answer").value;

    if (answer === "26") {

        score++;
        localStorage.setItem("score", score);

        document.getElementById("result").innerHTML =
        "✅ Correct!";

    } else {

        document.getElementById("result").innerHTML =
        "❌ Try Again!";

    }

}

// Update Profile
function updateProfile() {

    const scoreElement = document.getElementById("score");
    const lessonsElement = document.getElementById("lessons");

    if(scoreElement){
        scoreElement.textContent = localStorage.getItem("score") || 0;
    }

    if(lessonsElement){
        lessonsElement.textContent = localStorage.getItem("lessons") || 0;
    }

}
