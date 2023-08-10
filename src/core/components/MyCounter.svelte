<script>
  import { onMount } from "svelte";

  let editable = false;
  let unsavedChanges = false;

  export let name = "number";
  export let count = 0;

  const fetchValue = async () => {
    if (unsavedChanges) {
      console.log("TODO: warn about data loss");
      unsavedChanges = false;
    }
    try {
      const response = await fetch(`/cms/api/kv/${name}`);
      const data = await response.json();
      count = data.value;
    } catch (error) {
      console.error("Error fetching initial value:", error);
    }
  };

  const updateValue = async () => {
    try {
      const response = await fetch(`/cms/api/kv/${name}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: count }),
      });

      if (response.ok) {
        unsavedChanges = false;
      }

      // Handle the response if needed
    } catch (error) {
      console.error("Error updating value:", error);
    }
  };

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

  // onMount(fetchValue);
</script>

<div class:unsavedChanges class="counter">
  <h1>SSR Counter</h1>
  <p>Value: {count}</p>
  {#if editable}
    <div class="editor">
      <button
        on:click={() => {
          count += 1;
          unsavedChanges = true;
        }}
        title="increment"
        aria-label="increment">➕</button
      >
      <button
        on:click={() => {
          count -= 1;
          unsavedChanges = true;
        }}
        title="decrement"
        aria-label="decrement">➖</button
      >
      <button on:click={updateValue} title="save" aria-label="save">💾</button>
      <button on:click={fetchValue} title="refresh" aria-label="refresh"
        >🔄</button
      >
    </div>
  {/if}
</div>

<style>
  .counter {
    text-align: center;
  }

  div {
    text-align: center;
    margin: 2rem;
  }

  .unsavedChanges {
    box-shadow: hsl(54, 100%, 49%) 0px 0px 0px 2px;
    /* border: 2px solid hsl(54, 100%, 49%); */
    background-color: hsla(54, 100%, 49%, 0.2);
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
