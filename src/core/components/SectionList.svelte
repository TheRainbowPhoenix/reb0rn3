<script>
  import { onMount } from "svelte";
  import BaseDropWidget from "./base/BaseDropWidget.svelte";
  import BaseWidget from "./base/BaseWidget.svelte";

  /**
   * @type {any[]}
   */
  let children = [];
  export let name = "section";

  let unsavedChanges = false;

  const fetchValue = async () => {};

  const updateValue = async () => {};

  export let visible = false;

  /**
   * @param {any} event - The `cms_edit` custom event
   */
  const handleCmsEditEvent = (event) => {
    visible = event.detail;
  };

  onMount(() => {
    window.addEventListener("cms_edit", handleCmsEditEvent);

    return () => {
      window.removeEventListener("cms_edit", handleCmsEditEvent);
    };
  });

  /**
   * @param {CustomEvent} event
   */
  const handleDropped = (event, index = -1) => {
    const newWidget = {
      name: `${name}-child-${children.length}`,
      data: event.detail.element.default,
      meta: event.detail.element.meta,
      config: { dummy_val: "ChangeMe" },
    };
    if (index >= 0) {
      children.splice(index, 0, newWidget);
      children = [...children];
    } else {
      children = [...children, newWidget];
    }
    console.log(event.detail);
  };
</script>

<BaseWidget {name}>
  <div class="editor" slot="editor">
    <button on:click={fetchValue} title="refresh" aria-label="refresh"
      >🔄</button
    >
    <button on:click={updateValue} title="save" aria-label="save">💾</button>
  </div>

  <div class="re-container">
    {#each children as child, i (i)}
      <div>
        <span>{i}</span>
        <BaseDropWidget
          on:dropped={(e) => {
            console.log(i);
            handleDropped(e, i);
          }}
          bind:visible
        />
        <div class="re-element">{JSON.stringify(child)}</div>
      </div>
    {/each}
    <BaseDropWidget on:dropped={handleDropped} bind:visible />
  </div>
</BaseWidget>

<style>
  .re-container {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    flex-direction: column;
    gap: 20px;
  }

  .re-element {
    position: relative;
  }
</style>
