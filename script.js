const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dataLink = button.getAttribute("data-link");
    tabButtons.forEach((button) =>
      button.classList.toggle(
        "active",
        button.getAttribute("data-link") === dataLink
      )
    );

    tabContents.forEach((content) =>
      content.classList.toggle("active", content.id === dataLink)
    );
  });
});
