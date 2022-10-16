import sanitize from "sanitize-html";
import { addElementCompoenet } from "./add-elemet-panel";

const addElementBtn = document.getElementById("btn-add");
const container = document.getElementById("panel__left__element__container");

let isEnable = false;

const onAddElementBtnPress = async () => {
  try {
    if (isEnable) {
      container.innerHTML = null;
      isEnable = false;
      return;
    }
    container.innerHTML = sanitize(addElementCompoenet);
    isEnable = true;
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
