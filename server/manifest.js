export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["icons/any.png","icons/BlocksMC.png","icons/discord.png","icons/github.png","icons/HylexMC.png","icons/logo.png","icons/pika.png","icons/stardix.png","icons/VimeMC.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DEbgemrC.js",app:"_app/immutable/entry/app.Cvxz2PyS.js",imports:["_app/immutable/entry/start.DEbgemrC.js","_app/immutable/chunks/DYwg7v77.js","_app/immutable/chunks/wcAX7wfx.js","_app/immutable/chunks/CKgP9aU-.js","_app/immutable/chunks/DikBAI2e.js","_app/immutable/entry/app.Cvxz2PyS.js","_app/immutable/chunks/wcAX7wfx.js","_app/immutable/chunks/Bam9yGoS.js","_app/immutable/chunks/D_KF6PIh.js","_app/immutable/chunks/DikBAI2e.js","_app/immutable/chunks/Cp4H_DuK.js","_app/immutable/chunks/VSpgxKIf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[id]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
