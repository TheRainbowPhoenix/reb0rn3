<script>
  import { onMount } from "svelte";

  export let name = "changeme";
  export let editable = false;
  export let content = "";
  export let multiLine = false;

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
</script>

{#if editable}
  {#await import("./PlainTextEditor.svelte")}
    {content}
  {:then PlainTextEditor}
    <PlainTextEditor.default {multiLine} bind:content bind:name />
  {:catch error}
    <p style="color: red">{error.message}</p>
    {content}
  {/await}
{:else}
  {content}
{/if}
