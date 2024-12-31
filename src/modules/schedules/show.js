import dayjs from "dayjs";

const periodMorning = document.querySelector("#periodMorning");
const periodAfternoon = document.querySelector("#periodAfternoon");
const periodNight = document.querySelector("#periodNight");

export function scheduleShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // biome-ignore lint/complexity/noForEach: <explanation>
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      item.setAttribute("data-id", schedule.id);

      const div = document.createElement("div");

      const time = document.createElement("strong");
      time.classList.add("label-medium", "schedule-time");
      time.innerText = dayjs(schedule.when).format("HH:mm");

      const pet = document.createElement("strong");
      pet.classList.add("label-small", "schedule-pet");
      pet.innerText = schedule.pet;

      const owner = document.createElement("p");
      owner.classList.add("paragraph-small", "schedule-owner");
      owner.innerText = `/ ${schedule.owner}`;

      const description = document.createElement("p");
      description.classList.add("paragraph-small", "schedule-description");
      description.innerText = schedule.description;

      const button = document.createElement("p");
      button.classList.add("paragraph-small", "remove-button");
      button.innerText = "Remover agendamento";

      div.append(time, pet, owner);
      item.append(div, description, button);

      const hour = dayjs(schedule.when).hour();

      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
