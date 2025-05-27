import { g as getConfigById } from "../../../chunks/configs.js";
import { r as redirect, e as error } from "../../../chunks/index.js";
function load({ params }) {
  const id = Number(params.id);
  if (isNaN(id)) {
    throw redirect(307, "/");
  }
  const config = getConfigById(id);
  if (!config) {
    throw error(404, "Config not found");
  }
  return { config };
}
export {
  load
};
