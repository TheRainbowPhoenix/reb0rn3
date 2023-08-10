/**
 * @typedef {{ (arg0: any): any; (arg0: any): any; [x: string]: any; }} Component
 * @typedef {any | {[key: string]: any}} Slot
 */

/**
 *
 * @param {string} str
 * @returns string
 */
const slotName = (str) =>
  str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());

/**
 * @param {Component} Component
 * @param {any} props
 */
async function check(
  Component,
  props,
  { default: children = null, ...slotted } = {}
) {
  if (typeof Component !== "function") return false;
  /** @type {Slot} */
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    /**@throws Error */
    const result = await Component({ ...props, ...slots, children });
    console.log(result);
    return result;
  } catch (/** @type {any}*/ e) {
    const error = e;
    throw createFormattedError({
      message: error.message,
      //   title: error.name,
      hint: `This issue often occurs when your Re3 component encounters runtime errors.`,
      name: error.name,
      stack: error.stack,
    });
  }
  return false;
}

/**
 * @param {{message: any; name: any; stack: any; hint: any }} ErrorMsg
 */
function createFormattedError({ message, name, stack, hint }) {
  const error = new Error(message);
  error.name = name;
  error.stack = stack;
  return error;
}

/**
 * @param {Component} Component
 * @param {*} props
 * @param {*} param2
 */
async function renderToStaticMarkup(
  Component,
  props = {},
  { default: children = null, ...slotted } = {}
) {
  /**@type {Slot} */
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const html = "<h1>TODO renderToStaticMarkup</h1>";
  console.log("TODO renderToStaticMarkup");
  return { html };
}

var server_default = {
  check,
  renderToStaticMarkup,
};
export { check, server_default as default, renderToStaticMarkup };
