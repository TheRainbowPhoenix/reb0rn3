<script>
  import ContextMenu from "../fragments/ContextMenu.svelte";
  import UrlSummary from "../fragments/URLSummary.svelte";

  /**
   * @type {undefined | null | string}
   */
  export let value = "";
  export let label = "";
  export let placeholder = "";

  let contextMenuOpen = false; // TODO remove this

  const contextMenuActions = [
    {
      name: "Link to a file",
      handler: "openFileModal",
      icon: "description",
    },
    {
      name: "Link to a page",
      handler: "openPageModal",
      icon: "book",
    },
    {
      name: "Link to an email address",
      handler: "openMailtoModal",
      icon: "email",
    },
  ];

  const toggleContextMenu = () => {
    console.log("TODO contextMenuOpen");
    contextMenuOpen = !contextMenuOpen;
    // TODO: signal and stuff to tell it had been opened then hook the base ContextMenu to it
  };

  function handleClick() {
    alert("no more alerts");
  }
</script>

<div class="yaml-url-input-container">
  <input
    type="text"
    {value}
    {placeholder}
    class="yaml-url-input js-prevent-draggable"
  />
  <button
    tabindex="-1"
    class="url-menu-toggle js-prevent-draggable"
    on:click={toggleContextMenu}
    ><cc-icon name="mdi:more_vert" />
  </button>
  {#if contextMenuOpen}
    <ContextMenu {contextMenuActions} />
  {/if}
</div>

<div class="url-summary"><UrlSummary /></div>

<style>
  .yaml-url-input-container {
    position: relative;
  }
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

  .yaml-url-input-container .yaml-url-input {
    margin: 0;
    padding-right: 45px;
    border-radius: var(--border-radius) var(--border-radius) 0 0 !important;
  }

  div.url-summary {
    background-color: var(--background-color);
    border: var(--border-width) solid var(--border-color-clickable);
    border-top: 0;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    transition: var(--transition-duration) border-color ease;
    display: flex;
    padding: 10px;
    height: 104px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  }

  .url-menu-toggle {
    position: absolute;
    border: 0;
    background: rgba(0, 0, 0, 0);
    right: 5px;
    top: 5px;
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 0;
    opacity: 0.3;
    transition: opacity ease var(--transition-duration);
  }

  .url-menu-toggle:hover {
    cursor: pointer;
    opacity: 1;
  }

  :global(cc-icon) {
    background-color: rgba(0, 0, 0, 0.2);
    display: grid;
    place-items: first baseline;

    width: 24px;
    height: 24px;
  }
</style>
