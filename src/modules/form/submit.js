import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

import { closeForm } from "./show.js";
import { newSchedule } from "../../services/schedule-new.js";
import { schedulesFormLoad } from "../schedules/load.js";
import { alertMsg } from "../alerts/show.js";

const scheduleDate = document.querySelector("#scheduleDate");

const form = document.querySelector(".form-popup");
const formOwner = document.querySelector("#formOwner");
const formPet = document.querySelector("#formPet");
const formPhone = document.querySelector("#formPhone");
const formDescription = document.querySelector("#formDescription");
const formDate = document.querySelector("#formDate");
const formTimeSelected = document.querySelector("#formTimeSelected");

const today = dayjs(new Date()).format("YYYY-MM-DD");
formDate.value = today;
formDate.min = today;

scheduleDate.value = today;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const owner = formOwner.value.trim();
    const pet = formPet.value.trim();
    const contact = formPhone.value.trim();
    const description = formDescription.value.trim();
    const time = formTimeSelected.innerText;

    if (!owner) {
      return alertMsg("error", "Informe o nome do dono.");
    }
    if (owner.length < 3) {
      return alertMsg(
        "error",
        "Nome do dono deve possuir no mínimo 3 caracteres."
      );
    }
    if (!pet) {
      return alertMsg("error", "Informe o nome do pet.");
    }
    if (!contact || contact.length < 15) {
      return alertMsg("error", "Insira um contato válido.");
    }
    if (!description) {
      return alertMsg("error", "Informe a descrição do serviço.");
    }
    if (description.length < 5) {
      return alertMsg("error", "A descrição do serviço deve ser maior.");
    }
    if (time === "" || time === "--:--") {
      return alertMsg("error", "Selecione o horário para agendamento.");
    }

    const [hour] = formTimeSelected.innerText.split(":");
    const when = dayjs(formDate.value).add(hour, "hour");
    const id = uuidv4();

    closeForm();

    const schedule = {
      id,
      owner,
      pet,
      description,
      contact,
      when,
    };

    await newSchedule({ schedule });
    await schedulesFormLoad();
  } catch (error) {
    alertMsg("error", "Ocorreu um erro ao realizar o agendamento.");
  }
};
