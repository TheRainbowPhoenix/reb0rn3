<script>
  import { onMount } from "svelte";

  export let name = "number";
  export let count = 0;

  const fetchValue = async () => {
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

      // Handle the response if needed
    } catch (error) {
      console.error("Error updating value:", error);
    }
  };

  // onMount(fetchValue);
</script>

<div>
  <h1>SSR Counter</h1>
  <p>Value: {count}</p>
  <button on:click={() => (count += 1)} aria-label="increment">➕</button>
  <button on:click={() => (count -= 1)} aria-label="decrement">➖</button>
  <button on:click={updateValue} aria-label="save">💾</button>
  <button on:click={fetchValue} aria-label="refresh">🔄</button>
</div>

<style>
  div {
    text-align: center;
    margin: 2rem;
  }
</style>
