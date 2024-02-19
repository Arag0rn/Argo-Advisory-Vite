import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          entry: 'main.js',
          filename: 'index.html',
          template: 'index.html',
          injectOptions: {
            data: {
              title: 'index',
              injectScript: `<script type="module" src="./inject.js"></script>`,
            },
            tags: [
              {
                injectTo: 'body-prepend',
                tag: 'div',
                attrs: {
                  id: 'tag1',
                },
              },
            ],
          },
        },
        {
          entry: 'other-main.js',
          filename: 'insihts-and-resourses.html',
          template: 'insihts-and-resourses.html',
          injectOptions: {
            data: {
              title: 'insihts and resourses',
              injectScript: `<script type="module" src="./inject.js"></script>`,
            },
            tags: [
              {
                injectTo: 'body-prepend',
                tag: 'div',
                attrs: {
                  id: 'tag2',
                },
              },
            ],
          },
        },
      ],
    }),
  ],
})