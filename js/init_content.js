
import { plants, templates } from "./db.js"

function fragmentTemplate(frag) {
  let fragment = document.createElement('template')

  fragment.innerHTML = frag;

  return fragment.content;
};

// add content
function addContent(content, id) {
  const el = document.querySelector(id);

  el.append(content);
};

// Create a document fragment to handle all html that we want to render and add it to website.
function initContent(arr, id, contentFunctionName) {

  const fragment = document.createDocumentFragment();

  arr.forEach((item) => fragment.append(contentFunctionName(item)));

  addContent(fragment, id);
};

export { initContent, addContent, fragmentTemplate }

