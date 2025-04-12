const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    faqQuestions.forEach((item) => {
      if (item !== btn) {
        item.classList.remove("active");
        item.nextElementSibling.style.display = "none";
      }
    });

    btn.classList.toggle("active");
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});
