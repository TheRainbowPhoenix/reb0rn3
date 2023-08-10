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

<div class:unsavedChanges>
  <h1>SSR Counter</h1>
  <p>Value: {count}</p>
  {#if editable}
    <button
      on:click={() => {
        count += 1;
        unsavedChanges = true;
      }}
      aria-label="increment">➕</button
    >
    <button
      on:click={() => {
        count -= 1;
        unsavedChanges = true;
      }}
      aria-label="decrement">➖</button
    >
    <button on:click={updateValue} aria-label="save">💾</button>
    <button on:click={fetchValue} aria-label="refresh">🔄</button>
  {/if}
</div>

<style>
  div {
    text-align: center;
    margin: 2rem;
  }

  .unsavedChanges {
    border: 2px solid hsl(54, 100%, 49%);
    background-color: hsla(54, 100%, 49%, 0.2);
  }
</style>
