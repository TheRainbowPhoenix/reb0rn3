/**
 * @typedef {import('astro').AstroCookies} AstroCookies
 * @typedef {import('astro').APIContext} APIContext
 */

export const prerender = false;

let g_number = Math.random(); // this one is static SSR ?

/**
 * @type String
 */
let CMSTest;

/**
 * @param {APIContext} ctx
 */
export async function get(ctx) {
  // cookies: AstroCookies, request: Request, params: any, site: URL, generator: string /* Astro v2.10.3 */, props: any, redirect: function, url: URL, clientAddress, locals
  let { params, request } = ctx;
  console.log(ctx.locals);
  let number = Math.random();

  //   const title = ctx.locals.welcomeTitle();
  //   const orders = Array.from(ctx.locals.orders.entries());

  return {
    body: JSON.stringify({
      g_number,
      number,
      locals: ctx.locals,
      CMSTest: CMSTest || "CMSTest",
      //   title,
      //   orders,
    }),
  };
}
