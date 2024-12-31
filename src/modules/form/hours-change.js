const form = document.querySelector(".form-popup");
const formTime = document.querySelector("#formTime");
const hoursSelection = document.querySelector("#formTimeSelection");

const handleOutsideClick = (event) => {
  if (!hoursSelection.contains(event.target)) {
    closeHoursSelection();
  }
};

formTime.addEventListener("click", (event) => {
  if (!hoursSelection.classList.contains("display-none")) {
    closeHoursSelection();
  } else {
    event.stopPropagation();
    openHoursSelection();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hoursSelection.classList.add("display-none");
  }
});

function openHoursSelection() {
  hoursSelection.classList.remove("display-none");

  const items = document.querySelectorAll(".item-available");

  // biome-ignore lint/complexity/noForEach: <explanation>
  items.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      closeHoursSelection();
    });
  });

  form.addEventListener("click", handleOutsideClick);
}

function closeHoursSelection() {
  hoursSelection.classList.add("display-none");

  form.removeEventListener("click", handleOutsideClick);
}
