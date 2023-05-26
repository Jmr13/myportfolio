export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;900&display=swap' },
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
  modules: ['@nuxtjs/color-mode']
})