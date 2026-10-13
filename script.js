const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "ปิดเมนู" : "เปิดเมนู"
  );
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// ปิดเมนูเมื่อเลือกหน้า
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "เปิดเมนู");
    menuToggle.textContent = "☰";
  });
});

// กรองผลงานตามประเภท
const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle("active", isSelected);
      item.setAttribute("aria-pressed", isSelected);
    });

    projectCards.forEach((card) => {
      const matches =
        selected === "all" ||
        card.dataset.category === selected;

      card.hidden = !matches;
    });
  });
});
