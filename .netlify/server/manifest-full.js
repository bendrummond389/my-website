export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ad87c44e.js","imports":["_app/immutable/entry/start.ad87c44e.js","_app/immutable/chunks/index.476f0e9c.js","_app/immutable/chunks/singletons.4ce60761.js","_app/immutable/chunks/index.e44ff12e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.b3d82119.js","imports":["_app/immutable/entry/app.b3d82119.js","_app/immutable/chunks/index.476f0e9c.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
