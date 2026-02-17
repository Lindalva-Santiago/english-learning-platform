document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("answerInput");
  const checkBtn = document.getElementById("checkBtn");
  const feedback = document.getElementById("feedback");
  const nextBtn = document.getElementById("nextBtn");
  const scoreEl = document.getElementById("score");

  // Se algum ID não existir, avisamos no console (ajuda muito)
  if (!input || !checkBtn || !feedback || !nextBtn) {
    console.error("Missing element(s). Check IDs in lesson1.html");
    return;
  }

  const correctAnswers = ["good morning", "good morning!"];
  const SCORE_KEY = "elp_score";
  const LESSON1_DONE_KEY = "elp_lesson1_done";

  function normalize(text) {
    return text.trim().toLowerCase();
  }

  function getScore() {
    return Number(localStorage.getItem(SCORE_KEY) || "0");
  }

  function setScore(value) {
    localStorage.setItem(SCORE_KEY, String(value));
    if (scoreEl) scoreEl.textContent = String(value);
  }

  // inicializa score na tela
  setScore(getScore());

  function setFeedback(msg, type) {
    feedback.textContent = msg;
    feedback.className = `feedback ${type}`; // ok | bad | warn
  }

  function checkAnswer() {
    const user = normalize(input.value);

    if (!user) {
      setFeedback("Type an answer first.", "warn");
      nextBtn.disabled = true;
      return;
    }

    const ok = correctAnswers.includes(user);

    if (ok) {
      setFeedback('Correct! ✅ “Bom dia” = Good morning.', "ok");
      nextBtn.disabled = false;

      // dá 10 pontos só 1x
      const alreadyDone = localStorage.getItem(LESSON1_DONE_KEY) === "1";
      if (!alreadyDone) {
        setScore(getScore() + 10);
        localStorage.setItem(LESSON1_DONE_KEY, "1");
      }
    } else {
      setFeedback('Not yet. Try again! Hint: it starts with “Good …”.', "bad");
      nextBtn.disabled = true;
    }
  }

  checkBtn.addEventListener("click", checkAnswer);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkAnswer();
  });

  nextBtn.addEventListener("click", () => {
    alert("Next lesson will be added soon 🙂");
  });
});
