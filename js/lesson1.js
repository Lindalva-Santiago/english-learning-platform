<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lesson 1 — Greetings</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>

<div class="lesson-container">
  <h1>Lesson 1 — Greetings</h1>
  <p>Choose the correct translation:</p>

  <form id="quizForm">

    <div class="question">
      <p>1) Hello</p>
      <label><input type="radio" name="q1" value="a"> Obrigado</label><br>
      <label><input type="radio" name="q1" value="b"> Olá</label><br>
      <label><input type="radio" name="q1" value="c"> Tchau</label>
    </div>

    <div class="question">
      <p>2) Good morning</p>
      <label><input type="radio" name="q2" value="a"> Boa noite</label><br>
      <label><input type="radio" name="q2" value="b"> Boa tarde</label><br>
      <label><input type="radio" name="q2" value="c"> Bom dia</label>
    </div>

    <div class="question">
      <p>3) Thank you</p>
      <label><input type="radio" name="q3" value="a"> Obrigado</label><br>
      <label><input type="radio" name="q3" value="b"> Desculpa</label><br>
      <label><input type="radio" name="q3" value="c"> Por favor</label>
    </div>

    <br>
    <button type="button" onclick="checkAnswers()">Check Answers</button>

  </form>

  <div id="result"></div>

  <br>
  <a href="../index.html">⬅ Back to Home</a>

</div>

<script src="../js/lesson1.js"></script>

</body>
</html>
