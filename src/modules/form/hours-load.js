import { openHours } from "../../utils/open-hours";
import { alertMsg } from "../alerts/show";

import dayjs from "dayjs";

const hoursSelection = document.querySelector("#formTimeSelection");

export function hoursLoad({ date, dailySchedules }) {
  try {
    hoursSelection.innerHTML = "";

    const unavailableHours = dailySchedules.map((schedule) =>
      dayjs(schedule.when).format("HH:mm")
    );

    const open = openHours.map((hour) => {
      const [scheduleHour] = hour.split(":");

      const isHourPast = dayjs(date)
        .add(scheduleHour, "hour")
        .isBefore(dayjs());

      const available = !unavailableHours.includes(hour) && !isHourPast;

      return {
        hour,
        available,
      };
    });

    // biome-ignore lint/complexity/noForEach: <explanation>
    open.forEach(({ hour, available }) => {
      const div = document.createElement("div");

      div.textContent = hour;
      div.classList.add(available ? "item-available" : "item-not-available");
      hoursSelection.append(div);
    });

    const items = document.querySelectorAll(".item-available");

    if (items.length <= 0) {
      alertMsg("error", "Não há horários disponíveis nesta data.");
    } else {
      const selectedTime = document.querySelector("#formTimeSelected");

      // biome-ignore lint/complexity/noForEach: <explanation>
      items.forEach((item) => {
        item.addEventListener("click", () => {
          selectedTime.textContent = item.textContent;
        });
      });
    }
  } catch (error) {
    alertMsg("error", "Não foi possível buscar pelos horários.");
  }
}
