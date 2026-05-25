document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("answerInput");
  const checkBtn = document.getElementById("checkBtn");
  const feedback = document.getElementById("feedback");
  const nextBtn = document.getElementById("nextBtn");

  const SCORE_KEY = "elp_score";
  const LESSON3_DONE_KEY = "elp_lesson3_done";

  const correctAnswers = ["monday"];

  function normalize(text) {
    return text.trim().toLowerCase();
  }

  function getScore() {
    return Number(localStorage.getItem(SCORE_KEY) || "0");
  }

  function setScore(value) {
    localStorage.setItem(SCORE_KEY, String(value));
  }

  function show(message, type) {
    feedback.textContent = message;
    feedback.className = `feedback ${type}`;
  }

  function checkAnswer() {
    const user = normalize(input.value);

    if (!user) {
      show("Type an answer first.", "warn");
      return;
    }

    const ok = correctAnswers.includes(user);

    if (ok) {
      const alreadyDone = localStorage.getItem(LESSON3_DONE_KEY) === "1";

      if (!alreadyDone) {
        setScore(getScore() + 10);
        localStorage.setItem(LESSON3_DONE_KEY, "1");
      }

      show("Correct! “Segunda-feira” = Monday.", "ok");
      nextBtn.disabled = false;
    } else {
      show("Not yet. Try again! Hint: it is the first day in this list.", "bad");
      nextBtn.disabled = true;
    }
  }

  checkBtn.addEventListener("click", checkAnswer);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkAnswer();
  });

  nextBtn.addEventListener("click", () => {
    alert("Lesson 4 will be added soon.");
  });
});
