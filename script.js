const tabButtons = document.querySelectorAll(".tab-button");
const tabContent = document.getElementById("tab-content");

const loadTabContent = (tab) => {
  fetch(`tabs/${tab}.html`)
    .then((res) => res.text())
    .then((html) => {
      tabContent.innerHTML = html;
    })
    .catch(() => (tabContent.innerHTML = "<p>Error loading tab.</p>"));
};

loadTabContent("experience");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dataLink = button.getAttribute("data-link");
    tabButtons.forEach((button) =>
      button.classList.toggle(
        "active",
        button.getAttribute("data-link") === dataLink,
      ),
    );

    loadTabContent(dataLink);
  });
});
