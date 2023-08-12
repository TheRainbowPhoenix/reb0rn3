<script>
  export let value = "";
  export let label = "";
  export let placeholder = "";

  /* 
  events: {
        "input input": "change",
        "focus input": "focus",
        "blur input": "blur"
    },
  */
</script>

<textarea class="js-prevent-draggable" {placeholder}>{value}</textarea>

<style>
  textarea {
    display: block;
    width: 100%;
    min-width: 0;
    min-height: 132px;
    resize: vertical;
  }

  textarea {
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
