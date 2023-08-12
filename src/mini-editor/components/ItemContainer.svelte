<script>
  import Label from "./Label.svelte";

  let comment = "Toggles the size of the top banner.";
</script>

<div class="yaml-item-container js-context-menu-container">
  <Label label="test" />
  <div class="inline-form-explainer">
    <!-- if comment, safeize it and output its html inside -->
  </div>
  <div>
    <div>
      <slot />
    </div>
  </div>
  <div class="yaml-focus-handler not-focused" />
</div>

<style>
  .inline-form-explainer {
    margin: 0 0 var(--gap-half) 0;
    line-height: 1.5;
  }

  .inline-form-explainer:empty {
    display: none;
  }

  label {
    font-weight: bold;
    position: relative;
    width: 100%;
    display: block;
    margin-bottom: var(--grid-size);
    line-height: 1.5;
  }

  .yaml-focus-handler {
    position: absolute;
    top: 0;
    left: calc(var(--gap) * -1);
    height: 100%;
    width: var(--gap-half);
    opacity: 0;
    background: var(--color-comet);
    transition: opacity ease-in-out 0.3s;
  }

  .yaml-item-container,
  .yaml-object-link {
    position: relative;
  }

  .yaml-item-container {
    margin-top: 0;
    margin-bottom: var(--gap);
  }
</style>
