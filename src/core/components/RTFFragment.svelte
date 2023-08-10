<script>
  import { onMount } from "svelte";
  import RichText from "./RichText.svelte";

  export let name = "";
  export let content = "";
  export let callback = () => "";
  /**
   * @type {HTMLDivElement | undefined}
   */
  let base;

  let mounted = false;

  onMount(async () => {
    console.log(content);
    if (!content) {
      content = (base && base.querySelector("astro-slot")?.innerHTML) || "";
      if (content) {
        mounted = true;
        console.log("mounted");
      }
    } else {
      mounted = true;
    }
    console.log(content);
    // content = callback();
  });
</script>

{#if !mounted}
  <div bind:this={base}>
    <slot />
  </div>
{:else}
  <RichText {name} bind:content>
    {@html content}
  </RichText>
{/if}
