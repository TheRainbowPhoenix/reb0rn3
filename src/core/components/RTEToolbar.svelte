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

  const unsubscribe = currentEditorView.subscribe((value) => {
    editorView = value;
    editorState = value?.state;
  });

  // MARK
  import { toggleMark } from "prosemirror-commands";
  import { currentEditorView } from "../stores";
  import PmMark from "../editor/PmMark.svelte";

  $: schema = editorState?.schema;
  $: markType = schema?.marks["strong"];

  $: command = toggleMark(markType);
  // @ts-ignore
  $: disabled = !markType || !command(editorState, null);

  const doSave = () => {
    console.log("TODO: save broadcast");
  };
</script>

<div class="editor toolbar">
  <PmMark {editorView} {editorState} type="strong">🅱️old</PmMark>
  <PmMark {editorView} {editorState} type="em">Em</PmMark>
  <div class="spacer" />
  <!-- <button on:click={doSave}>💾</button> -->
</div>

<style>
  .spacer {
    width: auto;
    display: flex;
    flex: 1;
  }
  .editor.toolbar {
    margin-bottom: 0.25rem;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    display: flex;
    gap: 0.125rem;
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
