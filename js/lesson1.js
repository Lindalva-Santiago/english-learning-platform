document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("answerInput");
  const checkBtn = document.getElementById("checkBtn");
  const feedback = document.getElementById("feedback");
  const nextBtn = document.getElementById("nextBtn");

  const correctAnswers = ["good morning"]; // aceitaremos variações simples

function normalize(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[.!?,"']/g, ""); // remove pontuação básica
}

  function checkAnswer() {
    const user = normalize(input.value);

    if (!user) {
      feedback.textContent = "Type an answer first.";
      feedback.className = "feedback warn";
      return;
    }

    const ok = correctAnswers.includes(user);

    if (ok) {
      feedback.textContent = "Correct! ✅ “Bom dia” = Good morning.";
      feedback.className = "feedback ok";
      nextBtn.disabled = false;
    } else {
      feedback.textContent = "Not yet. Try again! Hint: it starts with “Good …”.";
      feedback.className = "feedback bad";
      nextBtn.disabled = true;
    }
  }

  checkBtn.addEventListener("click", checkAnswer);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkAnswer();
  });

nextBtn.addEventListener("click", () => {
  // salva progresso simples
  localStorage.setItem("lesson1_done", "true");
  window.location.href = "../lessons/lesson2.html";
});

