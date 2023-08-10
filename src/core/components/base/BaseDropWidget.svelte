<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { selectedElementChannel } from "../../stores";
  import { get } from "svelte/store";

  let draggedOver = false;

  const dispatch = createEventDispatcher();

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
   *
   * @param {DragEvent} event
   * @param {number} elemIndex
   */
  function drop(event, elemIndex) {
    event.preventDefault();
    const json = event.dataTransfer?.getData("text/plain") || "{}";
    const data = JSON.parse(json);

    const selectedElement = get(selectedElementChannel);
    console.log(selectedElement);

    dispatch("dropped", {
      element: selectedElement,
    });
  }
</script>

{#if visible}
  <div class="re-add-new-widget">
    <div
      class="re-add-section-inner"
      class:hovering={/*hoveringOverBasket === basket.name*/ false}
      on:dragenter={() => (draggedOver = true)}
      on:dragleave={() => (draggedOver = false)}
      on:drop={(event) => drop(event, 0)}
      on:dragover={(event) => event.preventDefault()}
      role="region"
    >
      <div class="re-add-new-call">
        <div class="re-add-section-drag-title">Drag widget here</div>
      </div>
    </div>
  </div>
{/if}

<style>
  .re-add-new-widget {
    margin: 0;
    width: 100%;

    all: initial;
    display: flex;
    flex: 1;
    position: relative;
  }

  .re-add-section-inner {
    border: 2px dashed var(--e-a-border-color-bold);
    background-color: hsla(0, 0%, 100%, 0.5);
    text-align: center;
    margin: 10px 0;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }

  .re-add-new-call {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
  }

  .re-add-section-drag-title {
    font-family: var(--e-a-font-family);
    font-size: 13px;
    line-height: 1;
    color: var(--e-a-color-txt);

    font-style: italic;
    font-weight: 400;
    -webkit-margin-before: 10px;
    margin-block-start: 10px;
    width: 100%;
  }
</style>
