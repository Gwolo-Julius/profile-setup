const settingEl = document.querySelector(".main__setup");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () =>
  settingEl.classList.toggle("main__setup")
);
