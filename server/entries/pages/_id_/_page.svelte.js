import { f as ensure_array_like, i as head, h as bind_props, c as pop, p as push } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$payload, $$props) {
  push();
  let config, anticheats;
  let data = $$props["data"];
  config = data.config;
  anticheats = Array.isArray(config.anticheat) ? config.anticheat : [config.anticheat];
  const each_array = ensure_array_like(anticheats);
  const each_array_1 = ensure_array_like(config.otherButtons);
  const each_array_2 = ensure_array_like(config.tags);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(config.name)} - Raven XD</title>`;
  });
  $$payload.out += `<nav class="bg-gray-800 p-4 sticky top-0 z-10"><div class="container mx-auto flex items-center gap-4"><a href="/" class="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg> Home</a> <span class="text-gray-400">/</span> <span class="text-white">${escape_html(config.name)}</span></div></nav> <div class="max-w-4xl mx-auto px-4 py-8"><div class="flex flex-col md:flex-row gap-8"><div class="md:w-1/3"><div class="sticky top-8"><div class="bg-gray-800 rounded-xl p-6 shadow-lg"><img${attr("src", config.cover)}${attr("alt", config.name)} class="w-full rounded-lg mb-4"/> <div class="space-y-4"><div><h2 class="text-3xl font-bold mb-4">${escape_html(config.name)}</h2> <p class="mb-2">Creator: ${escape_html(config.creator)}</p></div> <div><h3 class="font-semibold text-gray-300 mb-2">Server Info</h3> <p class="text-sm"><span class="text-gray-400">IP:</span> ${escape_html(config.ip)}</p> <p class="text-sm"><span class="text-gray-400">Updated:</span> ${escape_html(config.updated)}</p></div> <div><h3 class="font-semibold text-gray-300 mb-2">Anticheat</h3> <div class="flex flex-wrap gap-2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let ac = each_array[$$index];
    $$payload.out += `<span class="px-2 py-1 bg-gray-700 rounded text-xs">${escape_html(ac)}</span>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="pt-4 border-t border-gray-700"><a${attr("href", config.downloadLink)} target="_blank" class="block w-full py-2 px-4 text-center bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors mb-3">Download Config</a> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let [url, text] = each_array_1[$$index_1];
    $$payload.out += `<a${attr("href", url)} target="_blank" class="block w-full py-2 px-4 text-center bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors mb-3">${escape_html(text)}</a>`;
  }
  $$payload.out += `<!--]--></div></div></div></div></div> <div class="md:w-2/3"><div class="bg-gray-800 rounded-xl p-6 shadow-lg mb-6"><h2 class="text-xl font-bold mb-4">Description</h2> <div class="prose prose-invert max-w-none">${html(config.description.join("<br>"))}</div></div> <div class="bg-gray-800 rounded-xl p-6 shadow-lg"><h2 class="text-xl font-bold mb-4">Tags</h2> <div class="flex flex-wrap gap-2"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let tag = each_array_2[$$index_2];
    $$payload.out += `<span class="px-3 py-1 bg-gray-700 rounded-full">${escape_html(tag)}</span>`;
  }
  $$payload.out += `<!--]--></div></div></div></div></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
