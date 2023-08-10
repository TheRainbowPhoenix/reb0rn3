import kv from "../data/inMemoryKv";

export const prerender = false;

/**
 * @typedef {import('astro').APIContext} APIContext
 */

/**
 * @param {APIContext} ctx
 */
export async function get(ctx) {
  if (ctx.params?.name) {
    /** @type {any | {name: string}} */
    const { name } = ctx.params;

    const value = kv.get(name);
    if (value !== undefined) {
      return new Response(JSON.stringify({ value: value }));
    }
  }
  return new Response("Key not found", {
    status: 404,
    statusText: "Not Found",
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

/**
 *
 * @param {APIContext} ctx
 */
export async function post(ctx) {
  if (ctx.params?.name) {
    /** @type {any | {name: string}} */
    const { name } = ctx.params;

    const { value } = await ctx.request.json();

    kv.set(name, value);
    return new Response("OK.");
  }
  return new Response("Key not found", {
    status: 404,
    statusText: "Not Found",
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
