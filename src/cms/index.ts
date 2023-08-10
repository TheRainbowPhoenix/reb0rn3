import type { AstroIntegration } from "astro";

export default function (options?: any): AstroIntegration {
  const resolvedOptions = {
    useCustomApi: false,
    bridge: true,
    componentsDir: "src",
    enableFallbackComponent: false,
    ...options,
  };
  return {
    name: "Re3_CMS",
    hooks: {
      "astro:config:setup": async ({
        command,
        addRenderer,
        addWatchFile,
        injectScript,
        injectRoute,
        addClientDirective,
        updateConfig,
      }) => {
        // TODO
        /*
        updateConfig({
          vite: {
            plugins: [
              vitePluginStoryblokInit(
                resolvedOptions.accessToken,
                resolvedOptions.useCustomApi,
                resolvedOptions.apiOptions
              ),
              vitePluginStoryblokComponents(
                resolvedOptions.componentsDir,
                resolvedOptions.components,
                resolvedOptions.enableFallbackComponent,
                resolvedOptions.customFallbackComponent
              ),
              vitePluginStoryblokOptions(resolvedOptions),
            ],
          },
        });
        */
        // injectScript(
        //   "page-ssr",
        //   `
        //   console.log(global);
        //   global.cms = "test";
        //     `
        // );
        /* injectScript(
          "page-ssr",
          `
          import { storyblokApiInstance } from "virtual:storyblok-init";
          globalThis.storyblokApiInstance = storyblokApiInstance;
          `
        );*/

        // addRenderer({
        //   name: "astro-re3",
        //   clientEntrypoint: "src/cms/re3/client.js",
        //   serverEntrypoint: "src/cms/re3/server.js",
        //   jsxImportSource: "re3",
        //   jsxTransformOptions: async () => {
        //     return {
        //       plugins: [],
        //     };
        //   },
        // });

        /*
        const renderer = {
            name: "astro:jsx",
            serverEntrypoint: "astro/jsx/server.js",
            jsxImportSource: "astro",
            jsxTransformOptions: async () => {
                const {
                default: { default: jsx }
                // @ts-expect-error
                } = await import("@babel/plugin-transform-react-jsx");
                const { default: astroJSX } = await import("./babel.js");
                return {
                plugins: [
                    astroJSX(),
                    jsx({}, { throwIfNamespace: false, runtime: "automatic", importSource: "astro" })
                ]
                };
            }
            };
            var renderer_default = renderer;
            export {
            renderer_default as default
        };
        */

        injectRoute({
          // Use Astro’s pattern syntax for dynamic routes.
          pattern: "/cms/[dynamic]",
          // Use relative path syntax for a local route.
          entryPoint: "./src/cms/routes/[dynamic].astro",
        });

        injectRoute({
          // Use Astro’s pattern syntax for dynamic routes.
          pattern: "/cms/api/kv/[name]",
          // Use relative path syntax for a local route.
          entryPoint: "./src/cms/routes/kv.js",
        });

        injectRoute({
          // Use Astro’s pattern syntax for dynamic routes.
          pattern: "/cms/api/rtf/[name]",
          // Use relative path syntax for a local route.
          entryPoint: "./src/cms/routes/rtf.js",
        });

        if (resolvedOptions.bridge) {
          injectScript(
            "page", // before-hydration, head-inline, page, page-ssr
            `
            // import { loadStoryblokBridge } from "@storyblok/astro";
            // loadStoryblokBridge().then(() => {
                const { CMSBridge, location } = window;
                const cmsBridge = /* new CMSBridge(*/ ${JSON.stringify(
                  resolvedOptions.bridge /* TODO: custom conf here*/
                )} /*)*/;

                window.__CMS__ = ${JSON.stringify(
                  resolvedOptions.bridge /* TODO: custom conf here*/
                )};

                /* 
                storyblokInstance.on(["published", "change"], (event) => {
                  if (!event.slugChanged) {
                    location.reload(true);
                  } 
                });
                */
            `
          );
        }

        console.log(`[CMS]astro:config:setup - ${command}`);
      },
      "astro:config:done": async ({ config }) => {
        console.log(`[CMS]astro:config:done - ${config}`);
      },
      "astro:server:setup": async ({ server }) => {
        console.log(`[CMS]astro:server:setup - ${server}`);
        server.middlewares.use(function middleware(req, res, next) {
          // handle requests
          return next();
        });
      },
      "astro:build:ssr": async ({
        manifest,
        entryPoints,
        middlewareEntryPoint,
      }) => {
        console.log(`[CMS]astro:build:ssr - ${manifest} - ${entryPoints}`);
      },
    },
  };
}
