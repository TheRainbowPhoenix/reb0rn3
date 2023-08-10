<script>
  /**
   * @typedef { import("prosemirror-view").EditorView} EditorView
   */

  /**
   * @type {any}
   */
  export let editorState;

  /**
   * @type {EditorView | undefined}
   */
  export let editorView;

  export let type = "strong";

  import { toggleMark } from "prosemirror-commands";

  $: schema = editorState?.schema;
  $: markType = schema?.marks[type];

  $: command = toggleMark(markType);
  // @ts-ignore
  $: disabled = !markType || !command(editorState, null);

  const doMark = () => {
    command(editorState, editorView?.dispatch, editorView);
    editorView?.focus && editorView.focus();
  };
</script>

<div class="editor toolbar">
  <button on:click={doMark}><slot /></button>
</div>

<style>
  .editor.toolbar {
    margin-bottom: 0.25rem;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .editor button {
    height: auto;
    line-height: 24px;
    font-size: 10px;
    color: var(--e-a-color-txt);
    border-color: var(--e-a-border-color-bold);
    background-color: var(--e-a-bg-default);
    border: var(--e-a-border-bold);
    border-radius: var(--e-a-border-radius);
    min-height: 0;
    cursor: pointer;
  }

  .editor button:hover {
    background-color: var(--e-a-bg-hover);
  }

  .editor button:active {
    background-color: var(--e-a-bg-active);
  }
</style>
