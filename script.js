
// ==========================
// Nexora Script
// ==========================

// Load saved data
let score = Number(localStorage.getItem("score")) || 0;
let lessons = Number(localStorage.getItem("lessons")) || 0;

// --------------------------
// Finish Lesson
// --------------------------
function finishLesson() {

    lessons++;

    localStorage.setItem("lessons", lessons);

    alert("🎉 Congratulations! Lesson Completed!");

}

// --------------------------
// Quiz
// --------------------------
function checkAnswer() {

    const answer = document.getElementById("answer").value;
    const result = document.getElementById("result");

    if(answer === "26"){

        score++;

        localStorage.setItem("score", score);

        result.innerHTML = "✅ Correct!";

    }else{

        result.innerHTML = "❌ Wrong Answer";

    }

}

// --------------------------
// Profile
// --------------------------
function updateProfile(){

    const scoreElement = document.getElementById("score");
    const lessonsElement = document.getElementById("lessons");

    if(scoreElement){
        scoreElement.textContent = localStorage.getItem("score") || 0;
    }

    if(lessonsElement){
        lessonsElement.textContent = localStorage.getItem("lessons") || 0;
    }

}

// --------------------------
// Progress Bar
// --------------------------
function updateProgress(){

    const progress = document.getElementById("progress");
    const progressText = document.getElementById("progressText");

    if(progress){

        progress.value = lessons;

    }

    if(progressText){

        progressText.textContent = lessons;

    }

}
function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "" || password === ""){

        document.getElementById("loginMessage").innerHTML =
        "❌ Please fill all fields.";

    }else{

        document.getElementById("loginMessage").innerHTML =
        "✅ Login Successful!";

    }

}
