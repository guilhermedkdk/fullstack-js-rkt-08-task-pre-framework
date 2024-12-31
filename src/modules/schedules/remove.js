import { schedulesFormLoad } from "./load.js";
import { scheduleDelete } from "../../services/schedule-delete.js";

const schedules = document.querySelectorAll(".schedule");

// biome-ignore lint/complexity/noForEach: <explanation>
schedules.forEach((schedule) => {
  schedule.addEventListener("click", async (event) => {
    if (event.target.classList.contains("remove-button")) {
      const item = event.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar este agendamento?"
        );
        if (isConfirm) {
          await scheduleDelete({ id });
          schedulesFormLoad();
        }
      }
    }
  });
});
