/**
 *
 * @param {string} link
 * @returns
 */
const isExternal = (link) => {
  if (!link) return false;
  const matches = link.match(
    /^([^:/?#]+:)?(?:\/\/([^/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/
  );

  if (!matches) return false;

  return (
    ("string" == typeof matches[1] &&
      matches[1].length > 0 &&
      matches[1].toLowerCase() !== window.location.protocol) ||
    (matches[2].length > 0 &&
      matches[2].replace(
        new RegExp(
          `:(${
            {
              "http:": 80,
              "https:": 443,
            }[window.location.protocol]
          })?$`
        ),
        ""
      ) !== window.location.host)
  );
};

const e = {
  css: false,
  whiteList: {
    a: ["href", "title", "data-cms-editor-link-style", "data-cms-bind-style"],
    em: [],
    strong: [],
    sub: [],
    sup: [],
    code: [],
  },
  /**
   *
   * @param {string} tag
   * @param {string} attr
   * @param {string} link
   * @returns
   */
  onTagAttr: (tag, attr, link) => {
    if ("a" === tag && "href" === attr) {
      if (link.startsWith("cloudcannon:")) return `href="${link}"`;
      if (isExternal(link))
        return `href="${link}" target='_blank' rel='noopener noreferrer'`;
    }
  },
};
// t = "<h1>user text</h1>";
// a.filterXSS(t, e); // https://jsxss.com/en/index.html
