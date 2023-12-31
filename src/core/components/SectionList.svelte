<script>
  import { onMount } from "svelte";
  import BaseDropWidget from "./base/BaseDropWidget.svelte";
  import BaseWidget from "./base/BaseWidget.svelte";
  import { selectedElementChannel } from "../stores";
  import { get } from "svelte/store";

  /**
   * @type {any[]}
   */
  export let children = [];
  export let name = "section";

  let unsavedChanges = false;

  const fetchValue = async () => {
    if (unsavedChanges) {
      console.log("TODO: warn about data loss");
      unsavedChanges = false;
    }
    try {
      const response = await fetch(`/cms/api/sect/${name}`);
      const data = await response.json();
      children = data.value;
    } catch (error) {
      console.error("Error fetching initial value:", error);
    }
  };

  const updateValue = async () => {
    try {
      const response = await fetch(`/cms/api/sect/${name}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: children }),
      });

      if (response.ok) {
        unsavedChanges = false;
        // content = realContent;
      }

      // Handle the response if needed
    } catch (error) {
      console.error("Error updating value:", error);
    }
  };

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
    const selectedElement = get(selectedElementChannel);
    console.warn(selectedElement);

    const newWidget = {
      name: `${name}-child-${children.length}`,
      path: selectedElement.path,
      category: selectedElement.category,
      meta: "event.detail.element.meta",
      config: { dummy_val: "ChangeMe" },
    };
    if (index >= 0) {
      children.splice(index, 0, newWidget);
      children = [...children];
    } else {
      children = [...children, newWidget];
    }
    unsavedChanges = true;
    console.log(event.detail);
  };

  /**
   * @param {number} index
   */
  const doRemove = (index) => {
    if (index >= 0 && index < children.length) {
      children.splice(index, 1);
      children = [...children];
      unsavedChanges = true;
    }
  };
</script>

<BaseWidget {name} bind:unsavedChanges>
  <div class="editor" slot="editor">
    <button on:click={fetchValue} title="refresh" aria-label="refresh"
      >🔄</button
    >
    <button on:click={updateValue} title="save" aria-label="save">💾</button>
  </div>

  <div class="re-container">
    {#each children as child, i (i)}
      <div data-index={i}>
        <BaseDropWidget
          on:dropped={(e) => {
            console.log(i);
            handleDropped(e, i);
          }}
          mini={true}
          bind:visible
        />
        <div class="re-element">
          <BaseWidget
            name={child.name}
            addPermitted={false}
            on:elementDelete={(ev) => {
              doRemove(i);
            }}
            on:elementSelect={(ev) => {
              console.log(ev);
            }}
          >
            <!-- {JSON.stringify(child)} -->
            {#await import(child.path)}
              loading ...
            {:then Child}
              <Child.default />
            {/await}
          </BaseWidget>
        </div>
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
