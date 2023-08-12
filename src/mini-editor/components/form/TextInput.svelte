<script>
  /**
   * @type {undefined | null | string}
   */
  export let value = "";
  export let label = "";
  export let placeholder = "";
</script>

<input type="text" {value} {placeholder} class="js-prevent-draggable" />

<style>
  input[type="text"] {
    width: 100%;
    padding: var(--input-padding-vertical) var(--input-padding-horizontal);
    border-radius: var(--border-radius);
    border: var(--border-width) solid var(--border-color-clickable);
    background: var(--background-color);
    font-size: 1rem;
    box-sizing: border-box;
    transition: var(--transition-duration) border-color ease;
  }

  input[type="text"]:focus {
    outline: 0;
    border-color: var(--border-color-clickable-focus);
    box-shadow: var(--box-shadow-clickable-focus);
  }

  input[type="text"]:hover {
    border-color: var(--border-color-clickable-hover);
  }

  input[type="text"]:last-child {
    margin-bottom: 0;
  }
</style>
