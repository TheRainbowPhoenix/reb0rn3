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

export async function getWidgetsMap() {
  /**
   * @type {Record<string, any>}
   */
  // @ts-ignore
  const files = import.meta.glob("/src/core/widgets/*.svelte");

  /**
   * @type {Record<string, any>}
   */
  let widgetsMap = {};
  console.log(files);

  for await (const filePath of Object.keys(files)) {
    console.log(filePath);
    const module = await import(filePath);
    console.log(module);
    const { name, icon, category } = module.meta;

    widgetsMap[name] = {
      path: filePath,
      name,
      category,
      icon: getIcon(icon),
      // Add other metadata properties you need here
    };
  }

  console.log(widgetsMap);
  return widgetsMap;
}

export async function getAllWidgets() {
  /**
   * @type {Record<string, () => Promise<WidgetModule>>}
   */
  // @ts-ignore
  const files = import.meta.glob("../widgets/*.svelte");

  console.log("files");
  console.log(files);

  const imports = Object.keys(files).map(async (file) => await import(file));
  const componentsData = await Promise.all(imports);
  console.log(componentsData);

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

  //   return categories;
  return componentsData;
}
