export function alertMsg(type, message) {
  let alertContainer = document.querySelector(".alert-container");
  if (!alertContainer) {
    alertContainer = document.createElement("div");
    alertContainer.className = "alert-container";
    document.querySelector(".app").prepend(alertContainer);
  }

  const alertElement = document.createElement("div");
  alertElement.className = `alert ${type}`;

  const alertIcon = document.createElement("img");
  const msg = document.createElement("span");
  const alertIconClose = document.createElement("img");

  alertIcon.setAttribute("src", `./src/assets/${type}.svg`);
  msg.textContent = message;
  msg.classList.add("label-medium");
  alertIconClose.setAttribute("src", "./src/assets/close.svg");

  alertElement.append(alertIcon, msg, alertIconClose);
  alertElement.classList.add("reveal");

  alertContainer.appendChild(alertElement);

  alertIconClose.onclick = () => {
    alertElement.classList.remove("reveal");
    setTimeout(() => {
      alertElement.remove();
      if (alertContainer.children.length === 0) {
        alertContainer.remove();
      }
    }, 300);
  };

  setTimeout(() => {
    alertElement.classList.remove("reveal");
    setTimeout(() => {
      alertElement.remove();
      if (alertContainer.children.length === 0) {
        alertContainer.remove();
      }
    }, 300);
  }, 3000);
}
