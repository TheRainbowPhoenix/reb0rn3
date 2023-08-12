<script>
  export let label = "";
  export let showLabel = true; // viewHasLabel && this.options.showLabel
</script>

{#if showLabel}
  <label class="js-block-label">{label}</label>
{/if}

<style>
  label {
    font-weight: bold;
    position: relative;
    width: 100%;
    display: block;
    margin-bottom: var(--grid-size);
    line-height: 1.5;
  }
</style>
