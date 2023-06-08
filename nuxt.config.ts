// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["nuxt-directus", "@nuxtjs/tailwindcss"],
	directus: {
		url: "http://localhost:8055",
	},
	app: {
		rootId: 'app',
		head: {
			htmlAttrs: {
				lang: 'es'
			},
			bodyAttrs: {
				style: 'overflow-y: overlay;'
			}
		}
	}
})
