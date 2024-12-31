const main = document.querySelector("main");
const form = document.querySelector(".form-popup");
const buttonCloseForm = document.querySelector(".form-close");
const buttonNewSchedule = document.querySelector(".schedule-button");
const footer = document.querySelector("footer");

const formOwner = document.querySelector("#formOwner");
const formPet = document.querySelector("#formPet");
const formPhone = document.querySelector("#formPhone");
const formDescription = document.querySelector("#formDescription");
const formTimeSelected = document.querySelector("#formTimeSelected");
const formTimeSelection = document.querySelector("#formTimeSelection");

const handleOutsideClick = (event) => {
  const alert = document.querySelector(".alert-container");

  if (
    !form.contains(event.target) &&
    (alert ? !alert.contains(event.target) : true)
  ) {
    formTimeSelection.classList.add("display-none");
    closeForm();
  }
};

buttonNewSchedule.addEventListener("click", (event) => {
  event.stopPropagation();
  openForm();
});

buttonCloseForm.addEventListener("click", () => {
  closeForm();
});

document.addEventListener("keydown", (event) => {
  if (form.classList.contains("form-show") && event.key === "Escape") {
    closeForm();
  }
});

function openForm() {
  form.classList.add("form-show");
  main.classList.add("blurred");
  footer.classList.add("display-none");

  document.addEventListener("mousedown", handleOutsideClick);
}

export function closeForm() {
  form.classList.remove("form-show");
  main.classList.remove("blurred");
  footer.classList.remove("display-none");

  document.removeEventListener("mousedown", handleOutsideClick);

  formOwner.value = "";
  formPet.value = "";
  formPhone.value = "";
  formDescription.value = "";
  formTimeSelected.innerText = "--:--";
}
