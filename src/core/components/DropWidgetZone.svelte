<script>
  import { onMount } from "svelte";
  import { selectedElementChannel } from "../stores";
  import { get } from "svelte/store";

  let draggedOver = false;

  let visible = false;
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
  }
</script>

{#if visible}
  <div class="re-add-new-section">
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
        <button class="re-add-section-area-button cta">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
            /></svg
          >
        </button>
        <div class="re-add-section-drag-title">Drag widget here</div>
      </div>
    </div>
  </div>
{/if}

<style>
  .re-add-new-section {
    margin: 60px auto;

    all: initial;
    display: flex;
    max-width: 1160px;
    position: relative;
    margin-inline: auto;
  }

  .re-add-section-inner {
    border: 2px dashed var(--e-a-border-color-bold);
    background-color: hsla(0, 0%, 100%, 0.5);
    text-align: center;
    margin: 20px;
    padding: 40px 0;
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

  .re-add-section-area-button.cta {
    background-color: var(--e-a-btn-bg-primary);
    color: var(--e-a-btn-color);
  }
  .re-add-section-area-button {
    padding: 12px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    font-size: 16px;
    display: flex;
    outline: none;
    border: none;
    background-color: var(--e-a-btn-bg);
    color: var(--e-a-btn-color-invert);
    transition: var(--e-a-transition-hover);
    cursor: pointer;

    justify-content: center;
    align-items: center;
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
