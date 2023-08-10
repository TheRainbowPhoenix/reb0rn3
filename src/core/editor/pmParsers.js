import { DOMSerializer, DOMParser } from "prosemirror-model";

/**
 * Converts editor state to an HTML string
 * @param {{ schema: import("prosemirror-model").Schema<any, any>; doc: { content: import("prosemirror-model").Fragment; }; }} editorState
 * @returns {string}
 */
export function toHTML(editorState) {
  const serializer = DOMSerializer.fromSchema(editorState.schema);
  const fragment = serializer.serializeFragment(editorState.doc.content);
  const node = document.createElement("div");
  node.append(fragment);
  return node.innerHTML;
}

/**
 * Converts the editor state to plain text
 * @param {{ doc: { childCount: number; textContent: string; child: (arg0: number) => { (): any; new (): any; textContent: any; }; }; }} editorState
 * @return {string}
 */
export function toPlainText(editorState) {
  if (editorState.doc.childCount === 0) {
    return "";
  } else if (editorState.doc.childCount === 1) {
    return editorState.doc.textContent;
  } else {
    let paragraphs = [];
    for (let i = 0; i < editorState.doc.childCount; i++) {
      paragraphs.push(editorState.doc.child(i).textContent);
    }
    return paragraphs.join("\n");
  }
}

/**
 * @param {import("prosemirror-model").Schema<any, any>} schema
 * @param {string} content
 */
export function fromHTML(schema, content) {
  const doc = document.implementation.createHTMLDocument();
  doc.body.innerHTML = content;
  return DOMParser.fromSchema(schema).parse(doc.body);
}
