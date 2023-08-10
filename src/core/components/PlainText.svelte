<script>
  export let name = "changeme";
  export let editable = true;
  export let content = "";
  export let multiLine = false;
</script>

{#await import("./PlainTextEditor.svelte")}
  {content} - load
{:then PlainTextEditor}
  <PlainTextEditor.default {multiLine} bind:content bind:name />
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
