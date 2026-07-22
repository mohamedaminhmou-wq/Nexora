function finishLesson() {
    alert("🎉 Congratulations! You finished Lesson 1.");
}
function checkAnswer() {
    let answer = document.getElementById("answer").value;

    if (answer === "26") {
        document.getElementById("result").innerHTML = "✅ Correct!";
    } else {
        document.getElementById("result").innerHTML = "❌ Try Again!";
    }
}
