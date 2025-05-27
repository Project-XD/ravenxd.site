import * as server from '../entries/pages/_id_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.Tsvn9kAi.js","_app/immutable/chunks/D_KF6PIh.js","_app/immutable/chunks/wcAX7wfx.js","_app/immutable/chunks/C9_Fz1TR.js","_app/immutable/chunks/Bam9yGoS.js","_app/immutable/chunks/BV1DgH8B.js","_app/immutable/chunks/YwrZLpmR.js","_app/immutable/chunks/D6Va6UFI.js","_app/immutable/chunks/VSpgxKIf.js"];
export const stylesheets = [];
export const fonts = [];
