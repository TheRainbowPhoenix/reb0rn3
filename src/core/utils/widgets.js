import "svelte";

/**
 * @typedef {Object} WidgetModuleMeta
 * @property {string} category - The widget category.
 * @property {string} name - The widget name.
 * @property {string} icon - The widget asset icon name.
 */

/**
 * Represents a person with a name and age.
 * @typedef {Object} WidgetModule
 * @property {any} default - Proxy<Heading> ProxyComponent
 * @property {WidgetModuleMeta} meta - The widget category.
 * @property {() => WidgetModuleMeta} getInfo - The widget name.
 */

/**
 * @typedef {Object} EIcon
 * @property {string} path
 * @property {string} width
 * @property {string} height
 */

/**
 * @type {{[name: string]: EIcon}}
 */
var eicons;

/**
 * @param {string | number} name
 */
async function getIcon(name) {
  if (!eicons) {
    // @ts-ignore
    eicons = await import("../assets/eicons.json");
  }

  return eicons[name] || eicons["warning"];
}

export async function getAllWidgets() {
  /**
   * @type {Record<string, () => Promise<WidgetModule>>}
   */
  // @ts-ignore
  const files = import.meta.glob("../widgets/*.svelte");

  const imports = Object.values(files).map((file) => file());
  const componentsData = await Promise.all(imports);

  const componentDataCategory = componentsData.map((componentData) => {
    return {
      default: componentData,
      category: componentData.meta.category,
      name: componentData.meta.name,
      icon: getIcon(componentData.meta.icon),
    };
  });

  console.log(componentDataCategory);

  /**
   * @type {{[category: string] : any}}
   */
  let categories = {};

  componentDataCategory.map(
    (c) =>
      (categories[c.category ?? "default"] = [
        ...(categories[c.category ?? "default"] || []),
        c,
      ])
  );

  console.log(categories);

  //   console.log(await categories["category-one"][0].icon);

  return categories;
}
