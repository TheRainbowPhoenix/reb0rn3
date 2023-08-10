import { writable } from "svelte/store";

/**
 * @typedef { import("prosemirror-view").EditorView} EditorView
 * @typedef {import("svelte/store").Writable<any>} WritableAny
 * @typedef {import("svelte/store").Writable<EditorView | undefined>} WritableEditorView
 */

/** @type {WritableEditorView} */
export const currentEditorView = writable(undefined);
