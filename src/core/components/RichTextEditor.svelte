<script>
  import "../../styles/editor.css";
  import { onMount, onDestroy } from "svelte";

  // @ts-ignore
  import { EditorState, Plugin } from "prosemirror-state";
  import { EditorView } from "prosemirror-view";
  // @ts-ignore
  import { history } from "prosemirror-history";
  // @ts-ignore
  import { keymap } from "prosemirror-keymap";
  // @ts-ignore
  import { baseKeymap } from "prosemirror-commands";
  import { fromHTML, toHTML } from "../editor/pmParsers";
  import { currentEditorView } from "../stores";
  import {
    multiLineRichTextSchema,
    singleLineRichTextSchema,
  } from "../editor/pmSchemas";
  import { buildInputRules } from "../editor/pmInputRules";
  import RteToolbar from "./RTEToolbar.svelte";

  export let content = "";
  let realContent = content;
  export let prefix = "";
  export let type = "kv";
  export let multiLine = false;
  export let name = "changeme";
  let unsavedChanges = false;

  // ProseMirror
  /**
   * @type {any}
   */
  let prosemirrorNode;
  /**
   * @type {any}
   */
  let editorView;
  /**
   * @type {any}
   */
  let editorState;

  $: schema = multiLineRichTextSchema;

  $: {
    const doc = fromHTML(schema, realContent);
    editorState = EditorState.create({
      doc,
      schema,
      plugins: [
        buildInputRules(schema),
        // keymap(buildKeymap(schema)),
        keymap(baseKeymap),
        history(),
        onUpdatePlugin,
      ],
    });
  }

  const fetchValue = async () => {
    if (unsavedChanges) {
      console.log("TODO: warn about data loss");
      unsavedChanges = false;
    }
    try {
      const response = await fetch(`/cms/api/${type}/${name}`);
      const data = await response.json();
      realContent = data.value;
    } catch (error) {
      console.error("Error fetching initial value:", error);
    }
  };

  const updateValue = async () => {
    try {
      const response = await fetch(`/cms/api/${type}/${name}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: realContent }),
      });

      if (response.ok) {
        unsavedChanges = false;
        content = realContent;
      }

      // Handle the response if needed
    } catch (error) {
      console.error("Error updating value:", error);
    }
  };

  /**
   * @param {any} transaction
   */
  function dispatchTransaction(transaction) {
    // @ts-ignore
    const editorState = this.state.apply(transaction);
    // @ts-ignore
    this.updateState(editorState);
    if (transaction.docChanged) {
      realContent = toHTML(editorState);
      unsavedChanges = true;
    }
    this.state = editorState;
  }

  const onUpdatePlugin = new Plugin({
    view() {
      return {
        update(updatedView) {
          currentEditorView.set(updatedView);
        },
      };
    },
  });

  onMount(() => {
    editorView = new EditorView(prosemirrorNode, {
      state: editorState,
      dispatchTransaction,
    });
    currentEditorView.set(editorView);
  });

  onDestroy(() => {
    if (editorView?.destroy) {
      editorView.destroy();
    }
  });
</script>

<div class:unsavedChanges class="editable">
  <div class="editor">
    <input
      type="text"
      bind:value={realContent}
      on:change={() => {
        unsavedChanges = true;
        editorView?.updateState(editorState);
      }}
    />
    <button on:click={fetchValue} title="refresh" aria-label="refresh"
      >🔄</button
    >
    <button on:click={updateValue} title="save" aria-label="save">💾</button>
  </div>
  <RteToolbar {editorState} {editorView} />

  <div class="prosemirror-editor" bind:this={prosemirrorNode} />

  {@html realContent}
</div>

<style>
  :global(#prosemirror-editor .ProseMirror) {
    outline: none;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .unsavedChanges {
    box-shadow: hsl(54, 100%, 49%) 0px 0px 0px 2px;
    /* border: 2px solid hsl(54, 100%, 49%); */
    background-color: hsla(54, 100%, 49%, 0.2);
  }

  .editable > div {
    /* line-height: 0; */
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
  }

  .editable:hover {
    content: "";
    box-shadow: hsl(199, 100%, 69%) 0px 0px 0px 2px;
    /* border: 2px solid hsl(199, 100%, 69%); */
  }

  input[type="text"] {
    min-width: 250px;
  }

  /* TODO: make global */
  .editor input,
  .editor select,
  .editor textarea {
    color: var(--e-a-color-txt);
    border-radius: var(--e-a-border-radius);
    font-size: 12px;
    width: 100%;
    background: none;
    background-color: var(--e-a-bg-default);
    box-shadow: none;
    border: var(--e-a-border-bold);
    outline: none;
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
