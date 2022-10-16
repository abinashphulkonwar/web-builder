import sanitize from "sanitize-html";
import { addElementCompoenet } from "./add-elemet-panel";

const addElementBtn = document.getElementById("btn-add");
const container = document.getElementById(
  "panel__left__element__add__container"
);

import { editor } from "../../builder";

let isEnable = false;

window.addEventListener("click", (e) => {
  e.stopPropagation();

  if (e.target.dataset?.component !== "panel-left") {
    container.classList.remove("add-container");
  }
});

const onAddElementBtnPress = async (e) => {
  try {
    e.stopPropagation();
    container.classList.toggle("add-container");
  } catch (err) {
    console.log(err);
    isEnable = false;
  }
};

const addElement = addElementBtn?.addEventListener(
  "click",
  onAddElementBtnPress
);

export { addElement };
