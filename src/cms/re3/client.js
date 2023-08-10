//@ts-ignore
export default (rootEl) =>
  //@ts-ignore
  async (Component, props, { default: children, ...slotted }, { client }) => {
    // TODO;
    console.log("TODO Client Re3");
    if (!rootEl.hasAttribute("ssr")) {
      return;
    }
  };
