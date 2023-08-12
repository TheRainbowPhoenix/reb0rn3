<script>
  import { onMount } from "svelte";

  let data = {
    title: "Editor",
    popout_uuid: "popout-f22f85e9-36bf-41c1-aa56-269f44a2c153",
  };

  export let centered = "";
  export let title = "-";
  export let size = "";
  export let popout_uuid = "";

  /**
   * @type {any}
   */
  let overlay;

  let style = `
<style id="${popout_uuid}-style">
.${popout_uuid}-box {
            top: min(calc(100% - 80px), 45px);
            left: min(calc(100% - max(200px, 400px)), 1608px);
            max-height: max(150px, 175px);
            max-width: max(200px, 400px);
        }
        .${popout_uuid}-box .yaml-editor {
            height: 100%;
        }

        @media (max-width: 740px) {
            .${popout_uuid}-box {
            top: unset;
            left: 0;
            bottom: 0;
            max-width: 100%;
            }
        }
</style>`;

  onMount(() => {
    // var styleEl = document.createElement("style");
    // styleEl.innerHTML = `
    //     .${popout_uuid}-box {
    //         top: min(calc(100% - 80px), 45px);
    //         left: min(calc(100% - max(200px, 400px)), 1608px);
    //         max-height: max(150px, 175px);
    //         max-width: max(200px, 400px);
    //     }
    //     .${popout_uuid}-box .yaml-editor {
    //         height: 100%;
    //     }
    //     @media (max-width: 740px) {
    //         .${popout_uuid}-box {
    //         top: unset;
    //         left: 0;
    //         bottom: 0;
    //         max-width: 100%;
    //         }
    //     }`;
    // document.querySelector(`${popout_uuid}-box`);
    // overlay.appendChild(styleEl);
  });
</script>

<div class="popout-overlay overlay-dark js-overlay" bind:this={overlay}>
  <div class="popout-box {popout_uuid}-box focused js-popout">
    <div class="c-popout">
      <div class="c-popout__header">
        <div class="c-popout__draggable js-popout-draggable" />
        <button class="c-popout__drag-handle"
          ><i class="material-icons">+</i></button
        >
        <h2 class="c-popout__title js-popout-title">
          {title}
        </h2>
        <button
          type="button"
          class="c-popout__close c-button c-button--plain c-button--marginless js-close"
          title="Close"><i class="material-icons">X</i></button
        >
      </div>
      <div
        class="c-popout__content js-popout-content js-context-menu-container"
      >
        <slot />
        <!-- TODO-->
      </div>
      <div class="c-popout__resizer js-popout-resizer">
        <button class="c-popout__resizer-icon js-popout-resizer-handle"
          ><i class="material-icons">/</i></button
        >
      </div>
    </div>
  </div>
  <div class="c-popout__overlay js-popout-drag-overlay" />
</div>

{@html style}

<style>
  .popout-box {
    animation-duration: var(--transition-duration);
    position: absolute;
    z-index: 9;
    height: 100%;
    width: 100%;
    background: var(--background-color);
    transition: border-color var(--transition-duration) ease;
    border: var(--border-width) solid var(--border-color);
    box-sizing: border-box;
    box-shadow: 0 8px 46px -13px rgba(53, 67, 97, 0.15);
    border-radius: var(--border-radius);
  }

  .popout-box.focused {
    z-index: 10;
    border-color: var(--color-comet);
  }

  .c-popout {
    border-radius: var(--border-radius);
    padding: 0;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 599;
    display: flex;
    flex-direction: column;
  }

  .c-popout__header {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    padding: var(--gap-half) var(--gap-half) var(--gap-half) var(--gap);
    z-index: 2;
    margin-bottom: var(--gap-negative);
  }

  .c-popout__draggable {
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    width: calc(100% - 40px - var(--gap));
    z-index: 1;
    cursor: grab;
  }

  .c-popout__drag-handle {
    font-size: 10px;
    width: 15px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: none;
    border: 0;
    color: var(--color-nimbus);
  }

  .c-popout__title {
    font-size: 21px;
    margin: 0;
    padding: 0 var(--gap);
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .c-popout__close {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    color: var(--color-nimbus);
    z-index: 1;
  }

  .c-popout__content {
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    flex: 1;
    z-index: 1;
  }

  .c-popout__resizer {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .c-popout__resizer-icon {
    cursor: nwse-resize;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 10px;
    width: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 998;
    background: none;
    border: 0;
    color: var(--color-nimbus);
    -webkit-clip-path: polygon(100% 10%, 10% 100%, 100% 100%);
    clip-path: polygon(100% 10%, 10% 100%, 100% 100%);
  }
</style>
