import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from 'astro-netlify-cms';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    NetlifyCMS({
      config: {
        backend: {
          name: "github",
          repo: "brnkgabriel/astro-linktree",
          branch: "main"
        },
        collections: [
          {
            label: "Links",
            name: "links",
            slug: "{{title}}",
            folder: "src/pages/links",
            create: true,
            delete: true,
            fields: [
              {
                label: "Link Title",
                name: "title",
                widget: "string"
              },
              {
                label: "Link Description",
                name: "description",
                widget: "string"
              },
              {
                label: "Link URL",
                name: "url",
                widget: "string"
              }
            ]
          }
        ]
      }
    })
  ],
  output: "server",
  adapter: netlify()
});