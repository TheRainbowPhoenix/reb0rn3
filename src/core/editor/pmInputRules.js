import {
  inputRules,
  wrappingInputRule,
  textblockTypeInputRule,
  smartQuotes,
  emDash,
  ellipsis,
} from "prosemirror-inputrules";

/**
 * @typedef {import("prosemirror-model").NodeType} NodeType
 */

// Given a blockquote node type, returns an input rule that turns `"> "`
// at the start of a textblock into a blockquote.
/**
 * @param {NodeType} nodeType
 */
export function blockQuoteRule(nodeType) {
  return wrappingInputRule(/^\s*>\s$/, nodeType);
}

// Given a list node type, returns an input rule that turns a number
// followed by a dot at the start of a textblock into an ordered list.
/**
 * @param {NodeType} nodeType
 */
export function orderedListRule(nodeType) {
  return wrappingInputRule(
    /^(\d+)\.\s$/,
    nodeType,
    (match) => ({ order: +match[1] }),
    (match, node) => node.childCount + node.attrs.order == +match[1]
  );
}

// Given a list node type, returns an input rule that turns a bullet
// (dash, plush, or asterisk) at the start of a textblock into a
// bullet list.
/**
 * @param {NodeType} nodeType
 */
export function bulletListRule(nodeType) {
  return wrappingInputRule(/^\s*([-+*])\s$/, nodeType);
}

// Given a code block node type, returns an input rule that turns a
// textblock starting with three backticks into a code block.
/**
 * @param {NodeType} nodeType
 */
export function codeBlockRule(nodeType) {
  return textblockTypeInputRule(/^```$/, nodeType);
}

// Given a node type and a maximum level, creates an input rule that
// turns up to that number of `#` characters followed by a space at
// the start of a textblock into a heading whose level corresponds to
// the number of `#` signs.
/**
 *
 * @param {NodeType} nodeType
 * @param {number} maxLevel
 * @returns
 */
export function headingRule(nodeType, maxLevel) {
  return textblockTypeInputRule(
    new RegExp("^(#{1," + maxLevel + "})\\s$"),
    nodeType,
    (match) => ({
      level: match[1].length,
    })
  );
}

// A set of input rules for creating the basic block quotes, lists,
// code blocks, and heading.
/**
 * @param {{ nodes: { blockquote: any; ordered_list: any; bullet_list: any; code_block: any; heading: any; }; }} schema
 */
export function buildInputRules(schema) {
  let rules = smartQuotes.concat(ellipsis, emDash),
    type;
  if ((type = schema.nodes.blockquote)) rules.push(blockQuoteRule(type));
  if ((type = schema.nodes.ordered_list)) rules.push(orderedListRule(type));
  if ((type = schema.nodes.bullet_list)) rules.push(bulletListRule(type));
  if ((type = schema.nodes.code_block)) rules.push(codeBlockRule(type));
  if ((type = schema.nodes.heading)) rules.push(headingRule(type, 6));
  return inputRules({ rules });
}
