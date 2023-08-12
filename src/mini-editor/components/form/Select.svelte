<script>
  export let value = "";
  export let label = "";
  export let placeholder = "";
  export let allowEmpty = false;
  /**
   * @type {any[]}
   */
  export let options = [];

  /* 
  events: {
        "input input": "change",
        "focus input": "focus",
        "blur input": "blur"
    },

    props = {"value":"Contact","label":"Call to Action","placeholder":"","allowEmpty":true,"selected":{"text":"Contact","icon":"mdi:Contact","imageAlt":"Preview image for Contact","preview":{"text":"No preview available","imageAlt":"Preview image for Contact"},"value":"Contact"},"options":[{"text":"Blog","icon":"mdi:Blog","imageAlt":"Preview image for Blog","preview":{"text":"No preview available","imageAlt":"Preview image for Blog"},"value":"Blog"},{"text":"Contact","icon":"mdi:Contact","imageAlt":"Preview image for Contact","preview":{"text":"No preview available","imageAlt":"Preview image for Contact"},"value":"Contact"}]}
  */
</script>

<select>
  {#if allowEmpty}
    <option value="" />
  {/if}

  {#each options as n}
    <option value={n.value} selected={n.value === value}>
      {n.text}
    </option>
  {/each}
</select>

<style>
  select {
    padding: var(--input-padding-vertical)
      calc(20px + var(--input-padding-horizontal)) var(--input-padding-vertical)
      var(--input-padding-horizontal);
    border-radius: var(--border-radius);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: var(--background-color);
  }

  select:not([multiple]) {
    cursor: pointer;
    background: var(--background-color)
      url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUuODggOS4yOSAxMiAxMy4xNyA4LjEyIDkuMjlhLjk5Ni45OTYgMCAxIDAtMS40MSAxLjQxbDQuNTkgNC41OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDBsNC41OS00LjU5YS45OTYuOTk2IDAgMCAwIDAtMS40MWMtLjM5LS4zOC0xLjAzLS4zOS0xLjQyIDB6Ii8+PC9zdmc+)
      calc(100% - 15px) center no-repeat;
  }

  select {
    width: 100%;
    padding: var(--input-padding-vertical) var(--input-padding-horizontal);
    border-radius: var(--border-radius);
    border: var(--border-width) solid var(--border-color-clickable);
    background: var(--background-color);
    font-size: 1rem;
    box-sizing: border-box;
    transition: var(--transition-duration) border-color ease;
  }
</style>
