
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("[data-search]");
  const cards = Array.from(document.querySelectorAll("[data-chapter-card]"));
  const counter = document.querySelector("[data-results-count]");
  const empty = document.querySelector("[data-empty]");

  if (!input || !cards.length) return;

  const update = () => {
    const term = input.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach(card => {
      const hay = (card.dataset.search || "").toLowerCase();
      const show = !term || hay.includes(term);
      card.style.display = show ? "" : "none";
      if (show) visible++;
    });

    if (counter) {
      counter.textContent = `${visible} capitoli visibili`;
    }
    if (empty) {
      empty.hidden = visible !== 0;
    }
  };

  input.addEventListener("input", update);
  update();
});
