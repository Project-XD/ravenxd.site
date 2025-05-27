import { d as slot, e as stringify } from "../../chunks/index2.js";
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
function _layout($$payload, $$props) {
  $$payload.out += `<a${attr("href", `${stringify(base)}/`)}>Home</a> <div class="min-h-screen bg-gray-900 text-white"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
