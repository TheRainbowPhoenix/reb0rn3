<script>
  import { onMount } from "svelte";
  import "../../../styles/editor.css";

  export let name = "changeme";

  export let editable = false;

  let unsavedChanges = false;

  export let content = "editMe";

  const fetchValue = async () => {};

  const updateValue = async () => {};

  // fetch and updateValue

  /**
   * @param {any} event - The `cms_edit` custom event
   */
  const handleCmsEditEvent = (event) => {
    editable = event.detail;
  };

  onMount(() => {
    window.addEventListener("cms_edit", handleCmsEditEvent);

    return () => {
      window.removeEventListener("cms_edit", handleCmsEditEvent);
    };
  });
</script>

<div class:unsavedChanges class="editable">
  {#if editable}
    <div class="re-editor-element-handles">
      <div class="re-editor-element-handle-left"><!-- --></div>
      <div class="re-editor-element-handle-middle">
        <slot name="handle-middle">
          <ul class="re-editor-element-handle-list">
            <li class="re-editor-element-handle-action">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  ><path
                    fill="currentColor"
                    d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                  /></svg
                >
              </i>
            </li>

            <li class="re-editor-element-handle-action">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  ><path
                    fill="currentColor"
                    d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
                  /></svg
                >
              </i>
            </li>

            <li class="re-editor-element-handle-action">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  ><path
                    fill="currentColor"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                  /></svg
                >
              </i>
            </li>
          </ul>
        </slot>
      </div>
      <div class="re-editor-element-handle-right"><!-- --></div>
    </div>

    <slot name="editor">
      <div class="editor">
        <input
          type="text"
          bind:value={content}
          on:change={() => {
            unsavedChanges = true;
          }}
        />
        <button on:click={fetchValue} title="refresh" aria-label="refresh"
          >🔄</button
        >
        <button on:click={updateValue} title="save" aria-label="save">💾</button
        >
      </div>
    </slot>
  {/if}

  <slot>{content}</slot>
</div>

<style>
  .editable .re-editor-element-handles {
    opacity: 0;
    visibility: hidden;
  }

  .editable:hover .re-editor-element-handles {
    opacity: 1;
    visibility: visible;
  }

  .re-editor-element-handles {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
  }

  .re-editor-element-handle-middle {
    position: absolute;
    display: flex;
    justify-content: center;
    left: 50%;
    right: 50%;
    overflow: visible;
    bottom: 0;
  }

  .re-editor-element-handle-list {
    background: aqua;
    display: flex;

    margin: 0;
    padding: 0;

    height: 24px;
    top: 1px;
    left: 50%;
    /* transform: translateX(-50%) translateY(-100%); */
    background-color: var(--e-p-border-section);
    border-radius: 5px 5px 0 0;
  }

  .re-editor-element-handle-action {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    font-size: 11px;
    color: var(--e-p-border-widget-invert);
    width: 25px;
    transition: var(--e-a-transition-hover);

    position: relative;
  }

  .re-editor-element-handle-action:hover {
    background-color: var(--e-p-border-section-hover);
  }

  .re-editor-element-handle-list .re-editor-element-handle-action:first-child {
    border-radius: 5px 0 0 0;
  }

  .re-editor-element-handle-list
    .re-editor-element-handle-action:first-child:before {
    content: "";
    position: absolute;
    border-block-start: 22px solid transparent;
    border-block-end: 0 none transparent;
    border-inline-start: 0 none transparent;
    border-inline-end: 15px solid var(--e-p-border-section);
    left: -13px;
    top: 1px;
  }

  .re-editor-element-handle-list
    .re-editor-element-handle-action:first-child:hover:before {
    border-inline-end-color: var(--e-p-border-section-hover);
  }

  .re-editor-element-handle-list .re-editor-element-handle-action:last-child {
    border-radius: 0 5px 0 0;
  }
  .re-editor-element-handle-list
    .re-editor-element-handle-action:last-child:before {
    content: "";
    position: absolute;
    border-block-start: 22px solid transparent;
    border-block-end: 0 none transparent;
    border-inline-start: 15px solid var(--e-p-border-section);
    border-inline-end: 0 none transparent;
    right: -13px;
    top: 1px;
  }

  .re-editor-element-handle-list
    .re-editor-element-handle-action:last-child:hover:before {
    border-inline-start-color: var(--e-p-border-section-hover);
  }

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
    box-shadow: var(--e-p-border-section) 0px 0px 0px 2px;
    /* border: 2px solid hsl(199, 100%, 69%); */
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
