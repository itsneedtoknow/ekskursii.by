document
  .querySelectorAll(".header__select-wrapper")
  .forEach((selectContainer) => {
    const currentTextSpan = selectContainer.querySelector(
      ".header__select-wrapper span",
    );
    const dropdownOptions = selectContainer.querySelectorAll(".dropdown li");

    dropdownOptions.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        const oldText = currentTextSpan.textContent;

        currentTextSpan.textContent = option.textContent;
        option.textContent = oldText;
        if (option.dataset.currency) {
          option.dataset.currency = oldText;
        } else if (option.dataset.lang) {
          option.dataset.lang = oldText === "Рус" ? "RUS" : oldText;
        }
        selectContainer.classList.add("is-chosen");
        setTimeout(() => selectContainer.classList.remove("is-chosen"), 300);
      });
    });
  });
