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

  let item = "";
  /**
   * @type {HTMLDivElement | undefined}
   */
  let base;

  onMount(async () => {
    // content = (base && base.querySelector("astro-slot")?.innerHTML) || "";
  });

  //   $: astroSlot = base && base.querySelector("astro-slot");
</script>

<!-- {JSON.stringify(base)} -->
<!-- {JSON.stringify(astroSlot?.innerHTML)} -->

<div bind:this={base}>
  {#if editable}
    {#await import("./RichTextEditor.svelte")}
      <slot {item} />
    {:then PlainTextEditor}
      <PlainTextEditor.default
        {multiLine}
        bind:content
        bind:name
        prefix="__rtf_"
        type="rtf"
      />
    {:catch error}
      <p style="color: red">{error.message}</p>
      <slot {item} />
    {/await}
  {:else}
    <slot {item} />
  {/if}
</div>
