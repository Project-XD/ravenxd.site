import { f as ensure_array_like, h as bind_props, c as pop, p as push, i as head } from "../../chunks/index2.js";
import { s as searchConfigs } from "../../chunks/configs.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
function ConfigCard($$payload, $$props) {
  push();
  let config = $$props["config"];
  const each_array = ensure_array_like(config.tags);
  $$payload.out += `<div class="h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"><div class="h-48 overflow-hidden"><img${attr("src", config.cover)}${attr("alt", config.name)} class="w-full h-full object-cover"/></div> <div class="p-6"><div class="flex justify-between items-start mb-4"><h3 class="text-xl font-bold truncate">${escape_html(config.name)}</h3> <span class="px-3 py-1 bg-gray-700 rounded-full text-sm">${escape_html(config.creator)}</span></div> <div class="flex flex-wrap gap-2 mb-4"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tag = each_array[$$index];
    $$payload.out += `<span class="px-2 py-1 bg-gray-700 rounded text-xs">${escape_html(tag)}</span>`;
  }
  $$payload.out += `<!--]--></div> <div class="flex items-center gap-2 text-sm text-gray-400 mb-4"><span class="flex items-center"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> ${escape_html(config.updated)}</span> <span class="flex items-center"><svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> ${escape_html(config.ip)}</span></div> <a${attr("href", `/${config.id}`)}>View Config</a></div></div>`;
  bind_props($$props, { config });
  pop();
}
function _page($$payload, $$props) {
  push();
  let displayedConfigs;
  let searchTerm = "";
  displayedConfigs = searchConfigs().filter((c) => !c.tags.includes("outdated"));
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Home - Raven XD</title>`;
  });
  $$payload.out += `<div class="max-w-7xl mx-auto px-4 py-8"><div class="flex flex-col md:flex-row gap-6 mb-8 items-center"><div class="flex-1 w-full"><input${attr("value", searchTerm)} type="text" placeholder="Search configs..." class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"/></div> <button class="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors whitespace-nowrap">${escape_html("Show Outdated")}</button></div> `;
  if (displayedConfigs.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="text-center py-12"><h2 class="text-2xl font-bold text-gray-400">No configs found</h2> <p class="mt-2 text-gray-500">Try adjusting your search or filters</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    const each_array = ensure_array_like(displayedConfigs);
    $$payload.out += `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let config = each_array[$$index];
      ConfigCard($$payload, { config });
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  _page as default
};
