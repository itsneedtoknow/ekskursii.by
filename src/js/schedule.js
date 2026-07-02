import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Russian } from "flatpickr/dist/l10n/ru.js";
let filterForm = document.querySelector(".schedule__form");

const fpFrom = flatpickr("#date-from", {
  locale: Russian,
  dateFormat: "d.m.Y",
  minDate: "today",
  allowInput: false,
  monthSelectorType: "static",

  onChange: function (selectedDates) {
    if (selectedDates[0]) {
      fpTo.set("minDate", selectedDates[0]);
    }
  },
});

const fpTo = flatpickr("#date-to", {
  locale: Russian,
  dateFormat: "d.m.Y",
  minDate: "today",
  allowInput: false,
  monthSelectorType: "static",

  onChange: function (selectedDates) {
    if (selectedDates[0]) {
      fpFrom.set("maxDate", selectedDates[0]);
    }
  },
});

filterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const searchData = Object.fromEntries(formData.entries());
  if (
    !searchData["date-from"] ||
    !searchData["date-to"] ||
    !searchData["adults"]
  ) {
    alert("Заполните необходимые поля");
  }
  console.log(searchData);
});
