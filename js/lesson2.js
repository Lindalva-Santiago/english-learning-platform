document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("answerInput");
  const checkBtn = document.getElementById("checkBtn");
  const feedback = document.getElementById("feedback");
  const nextBtn = document.getElementById("nextBtn");

  const SCORE_KEY = "elp_score";
  const LESSON2_DONE_KEY = "elp_lesson2_done";

  const correctAnswers = ["three", "3"];

  function normalize(text) {
    return text.trim().toLowerCase();
  }

  function show(message, type) {
    feedback.textContent = message;
    feedback.className = `feedback ${type}`;
  }

  checkBtn.addEventListener("click", () => {
    const userAnswer = normalize(input.value);

    if (!userAnswer) {
      show("Type an answer first.", "warn");
      nextBtn.disabled = true;
      return;
    }

    if (correctAnswers.includes(userAnswer)) {
      show("Correct! “Três” = Three.", "ok");

      if (localStorage.getItem(LESSON2_DONE_KEY) !== "1") {
        const currentScore = Number(localStorage.getItem(SCORE_KEY) || "0");
        localStorage.setItem(SCORE_KEY, String(currentScore + 10));
        localStorage.setItem(LESSON2_DONE_KEY, "1");
      }

      nextBtn.disabled = false;
      nextBtn.textContent = "Lesson 3 coming soon";
    } else {
      show("Not yet. Try again! Hint: it is a number.", "bad");
      nextBtn.disabled = true;
    }
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkBtn.click();
    }
  });

nextBtn.addEventListener("click", () => {
  window.location.href = "../lessons/lesson3.html";
});
});
