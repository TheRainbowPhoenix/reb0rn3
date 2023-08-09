<script>
  import { onMount, onDestroy } from "svelte";

  export let content = "";
  export let multiLine = false;

  let editorChange = false;

  let doSave = () => {};
</script>

<div>
  <div>
    <input type="text" bind:value={content} />
    <button on:click={doSave}>Save</button>
  </div>

  {@html content}
</div>
