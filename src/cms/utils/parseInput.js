/**
 * Sanitizes input HTML by allowing only specific tags and attributes.
 * Allowed tags: 'div', 'a' with 'href', 'class', 'ul', and 'li'.
 *
 * @param {string} inputHTML - The input HTML to be sanitized.
 * @returns {string} The sanitized HTML with allowed tags and attributes.
 */
export function sanitizeHTML(inputHTML) {
  const allowedTags = ["div", "a", "ul", "li"];

  const parser = new DOMParser();
  const doc = parser.parseFromString(inputHTML, "text/html");

  /**
   * Recursively cleans a DOM node by removing disallowed tags and attributes.
   *
   * @param {Element} node - The DOM node to clean.
   */
  function cleanNode(node) {
    if (!allowedTags.includes(node.tagName.toLowerCase())) {
      node.remove();
      return;
    }

    if (node.tagName.toLowerCase() === "a") {
      if (!node.getAttribute("href")) {
        node.remove();
        return;
      }
    }

    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        cleanNode(node.children[i]);
      }
    }

    for (const attr of node.attributes) {
      if (attr.name !== "href" && attr.name !== "class") {
        node.removeAttribute(attr.name);
      }
    }
  }

  cleanNode(doc.body);

  return doc.body.innerHTML;
}
