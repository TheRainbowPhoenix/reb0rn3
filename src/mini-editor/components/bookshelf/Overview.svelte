<script>
  let spec = {
    structures: ["content_blocks"],
    label: "Hero",
    description: "Hero section",
    icon: "lock",
    tags: ["hero"],
  };

  let yaml_spec = `spec:
  structures:
    - content_blocks
  label: Hero
  description: Hero section
  icon: "lock"
  tags: ["hero"]`;
</script>

<div class="content-pane">
  <div class="component-title">
    <span class="bookshop-icon-string">
      <svg
        style="font-size: inherit;height: 1em;"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        ><path
          d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
        /></svg
      >
      {spec.label}
    </span>
  </div>
  <div class="component-data">
    <p class="description">{spec.description}</p>
    <p class="title">Frameworks</p>
    <p class="label buttons">
      <button class="selected">Astro</button>
    </p>
    <p class="title">Structures</p>
    <p class="label">
      {#each spec.structures as structure}
        {structure}
      {/each}
    </p>
    <p class="title">Tags</p>
    <p class="label">
      {#each spec.tags as tag}
        {tag}
      {/each}
    </p>
  </div>
  <pre>
# Metadata about this component, to be used in the CMS
spec:
  structures:
    - content_blocks
  label: Hero
  description: Hero section
  icon: "lock"
  tags: ["hero"]

# Defines the structure of this component, as well as the default values
blueprint:
  title: Terms & Condition

# Overrides any fields in the blueprint when viewing this component in the component browser
preview:

# Any extra CloudCannon inputs configuration to apply to the blueprint
_inputs: {"{}"}
  </pre>
  <br />
  <h2>Extras, for example</h2>
  <pre>
# Any extra CloudCannon inputs configuration to apply to the blueprint
_inputs:
  description:
    type: markdown
  placement:
    type: select
    options:
      values:
        - front_bottom
        - back_top_right
        - back_top_left

  </pre>
</div>

<style>
  .content-pane {
    box-sizing: border-box;
    padding: 14px;
    width: 100%;
  }

  .component-title {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 228px;
  }

  .bookshop-icon-string {
    display: flex;
    align-items: center;
  }

  .component-data p {
    margin: 0;
  }

  .component-data .description {
    font-size: 12px;
    color: rgb(65, 65, 65);
    margin: 10px 0 16px 0;
    max-width: 160px;
  }

  .component-data .title {
    font-size: 12px;
    font-weight: bold;
  }

  .component-data .label {
    font-size: 12px;
    font-weight: 600;
    font-family: monospace;
    color: rgb(176, 61, 0);
    margin-bottom: 10px;
  }

  .component-data .label.buttons {
    display: flex;
  }

  .component-data .label.buttons button {
    padding: 0 5px 0 0;
    appearance: none;
    -webkit-appearance: none;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    font-family: monospace;
    color: rgb(0, 135, 176);
  }

  pre {
    border: 1px solid #ccc;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 4px 8px;
  }
</style>
