const owner = document.querySelector("#formOwner");
const pet = document.querySelector("#formPet");
const formPhone = document.querySelector("#formPhone");

const regex = /[^a-zA-ZÀ-ÿ\s]/g;

owner.oninput = () => {
  owner.value = owner.value.replace(regex, "");
};

pet.oninput = () => {
  pet.value = pet.value.replace(regex, "");
};

formPhone.oninput = () => {
  // Remove todos os caracteres que não são números
  let value = formPhone.value.replace(/\D/g, "");

  // Aplica a formatação: (XX) XXXXX-XXXX
  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (value.length > 6) {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  } else {
    value = value.replace(/^(\d*)/, "($1");
  }

  // Atualiza o valor do input
  formPhone.value = value;
};
