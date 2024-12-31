import { schedulesFormLoad, schedulesLoad } from "../schedules/load";

const scheduleDate = document.querySelector("#scheduleDate");
const formDate = document.querySelector("#formDate");
const hour = document.querySelector("#formTimeSelected");
const hours = document.querySelector("#formTimeSelection");

formDate.onchange = () => {
  hour.innerHTML = "--:--";
  hours.innerHTML = "";
  schedulesFormLoad();
};

scheduleDate.onchange = () => {
  schedulesLoad();
};
