let score = 0;
let answered = false;

function checkAnswer(correctOption, selectedOption, feedbackId) {

    if(answered) return;

    const feedback = document.getElementById(feedbackId);

    if(selectedOption === correctOption) {
        feedback.innerHTML = "Correct! 🎉";
        feedback.style.color = "#4CAF50";
        score++;
    } else {
        feedback.innerHTML = "Not quite. Try again!";
        feedback.style.color = "#FF5252";
    }

    document.getElementById("score").innerText = score;
    answered = true;
}

function nextQuestion() {
    answered = false;
}

function finishLesson() {

    let message = "";

    if(score === 3) {
        message = "Excellent! Perfect score! 🌟";
    }
    else if(score === 2) {
        message = "Great job! Almost perfect!";
    }
    else if(score === 1) {
        message = "Good effort! Review greetings and try again.";
    }
    else {
        message = "Let's practice more greetings!";
    }

    alert("Final score: " + score + "/3\n" + message);
}

