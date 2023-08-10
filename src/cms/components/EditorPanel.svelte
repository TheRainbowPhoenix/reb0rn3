<script>
  import "../../styles/editor.css";
  import { onMount } from "svelte";
  import PanelHeader from "./EditorPanel/PanelHeader.svelte";
  import PanelMain from "./EditorPanel/PanelMain.svelte";

  export let visible = true;

  /**
   * @param {any} event - The `cms_edit` custom event
   */
  const handleCmsEditEvent = (event) => {
    visible = event.detail;
  };

  onMount(() => {
    window.addEventListener("cms_edit", handleCmsEditEvent);

    return () => {
      window.removeEventListener("cms_edit", handleCmsEditEvent);
    };
  });

  async function simulateLoading() {
    // The idea is to cache the non-critical data to a store for later re-use
    await new Promise((resolve) =>
      setTimeout(() => resolve({ data: "sample" }), 2500)
    ); // Simulate loading delay
  }
</script>

<aside class="re-panel" id="re-editor-suspense" class:visible>
  <div id="re-panel-inner">
    {#await simulateLoading()}
      <div id="re-panel-state-loading">
        <svg
          class="animation-glow"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M15.086 12.531a.75.75 0 0 0-1.055-.117L12.75 13.44V10a.75.75 0 1 0-1.5 0v3.44l-1.282-1.026a.75.75 0 0 0-.937 1.172l2.498 1.998a.747.747 0 0 0 .946-.003l2.494-1.995a.75.75 0 0 0 .117-1.055Z"
          /><path
            fill="currentColor"
            fill-rule="evenodd"
            d="M8.46 7.284a5.296 5.296 0 0 1 9.734 2.543a4.386 4.386 0 1 1 .17 8.77H7A5.75 5.75 0 1 1 8.46 7.284Zm4.45-.922a3.796 3.796 0 0 0-3.422 2.15a.75.75 0 0 1-.947.372A4.25 4.25 0 1 0 7 17.096h11.362a2.887 2.887 0 1 0-.747-5.675a.75.75 0 0 1-.938-.812a3.795 3.795 0 0 0-3.769-4.247Z"
            clip-rule="evenodd"
          /></svg
        >
        <p>Loading ...</p>
      </div>
    {:then data}
      <PanelHeader />
      <PanelMain {data} />
    {/await}
  </div>
</aside>

<style>
  #re-editor-suspense {
    opacity: 0;
    animation: suspense 0.25s 0.025s linear forwards;
  }

  .re-panel {
    /* position: fixed; */
    left: 0;
    top: 0;
    max-width: 400px;
    min-width: 250px;
    height: 100%;
    margin-inline-start: calc(
      -1 * var(--e-editor-panel-width) * var(--e-is-preview-mode)
    );
    width: var(--e-editor-panel-width);
    overflow: visible;
    background-color: var(--e-a-bg-default);
    z-index: 1;
    font-family: var(--e-a-font-family);
    font-size: 13px;
    left: 0;
    border-right: 1px solid hsla(197, 67%, 24%, 0.2);
  }

  #re-panel-inner {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  }

  #re-panel-state-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
  }

  .animation-glow {
    animation: glow 2s infinite linear;
  }

  @keyframes suspense {
    0% {
      transform: translateX(-250px);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes glow {
    0% {
      transform: translateY(0);
    }

    25% {
      transform: translateY(-2px);
    }
    75% {
      transform: translateY(2px);
    }

    to {
      transform: translateY(0);
    }
  }
</style>
