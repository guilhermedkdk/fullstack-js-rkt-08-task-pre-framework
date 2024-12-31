import dayjs from "dayjs";

import { fetchSchedule } from "../../services/schedule-fetch";

import { scheduleShow } from "./show";
import { hoursLoad } from "../form/hours-load";

const selectedDateForm = document.querySelector("#formDate");
const selectedDateSchedule = document.querySelector("#scheduleDate");

export async function schedulesLoad() {
  const date = selectedDateSchedule.value;
  const dailySchedules = await fetchSchedule({ date });

  const currentDate = dayjs();

  if (!dayjs(date).isBefore(currentDate, "day")) {
    selectedDateForm.value = date;
  }

  scheduleShow({ dailySchedules });
  hoursLoad({ date, dailySchedules });
}

export async function schedulesFormLoad() {
  const date = selectedDateForm.value;
  const dailySchedules = await fetchSchedule({ date });

  selectedDateSchedule.value = date;

  scheduleShow({ dailySchedules });
  hoursLoad({ date, dailySchedules });
}
