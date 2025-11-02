// Handles tab switching
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");
    document.querySelectorAll(".tab-content").forEach((sec) => {
      sec.classList.remove("active");
    });
    document.getElementById(target).classList.add("active");
  });
});
