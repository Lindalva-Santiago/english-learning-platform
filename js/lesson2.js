document.addEventListener("DOMContentLoaded", () => {
  const scoreEl = document.getElementById("score");
  const finishBtn = document.getElementById("finishBtn");

  let score = 0;
  const solved = new Set();

  function normalize(text) {
    return text.trim().toLowerCase().replace(/\s+/g, " ");
  }

  function setFeedback(id, msg, cls) {
    const el = document.getElementById(id);
    el.textContent = msg;
    el.className = `feedback ${cls}`;
  }

  function updateScore() {
    scoreEl.textContent = String(score);
    finishBtn.disabled = score < 3;
  }

  document.querySelectorAll("button[data-check]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const inputId = btn.dataset.check;
      const answer = btn.dataset.answer;

      const input = document.getElementById(inputId);
      const user = normalize(input.value);

      const feedbackId = inputId === "q1" ? "f1" : inputId === "q2" ? "f2" : "f3";

      if (!user) {
        setFeedback(feedbackId, "Type an answer first.", "warn");
        return;
      }

      if (solved.has(inputId)) {
        setFeedback(feedbackId, "Already correct ✅", "ok");
        return;
      }

      if (user === normalize(answer)) {
        solved.add(inputId);
        score += 1;
        setFeedback(feedbackId, "Correct ✅", "ok");
        updateScore();
      } else {
        setFeedback(feedbackId, "Not yet. Try again.", "bad");
      }
    });
  });

  finishBtn.addEventListener("click", () => {
    localStorage.setItem("lesson2_done", "true");
    localStorage.setItem("total_score", String(Number(localStorage.getItem("total_score") || "0") + score));
    window.location.href = "../index.html";
  });

  updateScore();
});
