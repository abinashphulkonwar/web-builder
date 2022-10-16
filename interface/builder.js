import grapesjs from "grapesjs";

const Box = (editor) => {
  editor.DomComponents.addType("box", {
    isComponent: (el) => el.tagName === "DIV",

    // Model definition
    model: {
      // Default properties
      defaults: {
        tagName: "div",
        draggable: true, // Can be dropped only inside `form` elements
        droppable: true, // Can't drop other elements inside
        attributes: {
          // Default attributes
          type: "box",
          class: "box",
        },
        traits: [],
        styles: `
        .box {
     padding: 5px;
   }
      `,
      },
    },
  });
};

const editor = grapesjs.init({
  container: "#app",

  fromElement: true,

  height: "100vh",
  width: "auto",
  // Disable the storage manager for the moment
  storageManager: false,
  // Avoid any default panel

  blockManager: {
    appendTo: "#blocks",
    blocks: [
      {
        id: "section", // id is mandatory
        label: "<b>Section</b>", // You can use HTML/SVG inside labels
        attributes: { class: "gjs-block-section" },
        content: `<section>
          <h1>This is a simple title</h1>
          <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
        </section>`,
      },
      {
        id: "text",
        label: "<b>Text</b>",
        attributes: { class: "gjs-block-text" },
        content: `<p>This is a simple title</p>`,
      },
      {
        id: "box",
        label: "<b>Box</b>",
        content: `<div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>`,
      },
    ],
  },
  panels: { defaults: [] },
  plugins: [Box],
});

export { editor };
