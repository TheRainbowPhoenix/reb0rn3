import { defineMiddleware } from "astro/middleware";
import kv from "../cms/data/inMemoryKv";

/**
 * @type {import("astro").MiddlewareResponseHandler}
 */
export async function onRequest(context, next) {
  let { locals } = context;

  if (!locals.cms) {
    locals.cms = {
      kv: kv,
    };
  }

  // intercept response data from a request
  // optionally, transform the response by modifying `locals`
  if (!locals.user) {
    locals.user = {
      name: "John Wick",
    };
  }

  if (!locals.orders) {
    locals.orders = new Map();
    locals.orders.set("first", { name: "test" });
  }

  if (!locals.welcomeTitle) {
    locals.welcomeTitle = () => {
      return "Welcome back " + locals.user.name;
    };
  }

  return next();
  // return a Response or the result of calling `next()`
  // const rep = await next();
  // console.log(rep);
  // const html = rep.body;

  // return new Response(html, {
  //   status: 200,
  //   headers: rep.headers,
  // });
}
