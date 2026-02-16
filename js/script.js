function checkAnswer(question, correctAnswer) {

    let userAnswer = document.getElementById(question).value.toLowerCase().trim();

    if(userAnswer === correctAnswer.toLowerCase()){
        alert("Correct! 🎉");
    } else {
        alert("Try again!");
    }

}
