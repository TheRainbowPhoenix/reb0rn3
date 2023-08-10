<script>
  import "../../styles/editor.css";
  import { onMount, onDestroy } from "svelte";

  export let content = "";
  let realContent = content;
  export let prefix = "";
  export let type = "kv";
  export let multiLine = false;
  export let name = "changeme";
  let unsavedChanges = false;

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
</script>

<div class:unsavedChanges class="editable">
  <div class="editor">
    <input
      type="text"
      bind:value={realContent}
      on:change={() => {
        unsavedChanges = true;
      }}
    />
    <button on:click={fetchValue} title="refresh" aria-label="refresh"
      >🔄</button
    >
    <button on:click={updateValue} title="save" aria-label="save">💾</button>
  </div>

  {@html realContent}
</div>

<style>
  .unsavedChanges {
    box-shadow: hsl(54, 100%, 49%) 0px 0px 0px 2px;
    /* border: 2px solid hsl(54, 100%, 49%); */
    background-color: hsla(54, 100%, 49%, 0.2);
  }

  .editable > div {
    line-height: 0;
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
