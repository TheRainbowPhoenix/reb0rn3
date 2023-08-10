<script>
  import "../../../styles/editor.css";

  export let data = { data: "todo" };

  const widgets = Array.from(Array(42)).map((_, x) => ({
    name: `Widget ${x}`,
  }));
</script>

<main id="re-panel-content-wrapper">
  <nav class="re-panel-page-elements">
    <div class="re-panel-elements-top">
      <p>TODO search {data?.data || "data"}</p>
    </div>
    <div class="re-panel-elements-wrapper scroller thin">
      <ul class="re-panel-elements-list">
        {#each widgets as widget}
          <li class="re-element-wrapper" draggable="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="re-element-icon"
              ><path
                fill="currentColor"
                fill-rule="evenodd"
                d="M10.47 3.554a4 4 0 1 1 3.06 7.391a4 4 0 0 1-3.06-7.39ZM12 4.75a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Zm-6.53 7.805a4 4 0 1 1 3.061 7.391a4 4 0 0 1-3.062-7.392ZM7 13.75a2.5 2.5 0 1 0 0 5.001a2.5 2.5 0 0 0 0-5.001Zm10-1.5a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-.957 1.69a2.5 2.5 0 1 1 1.914 4.62a2.5 2.5 0 0 1-1.914-4.62Z"
                clip-rule="evenodd"
              /></svg
            >
            <div class="re-element-title-wrapper">
              <span>{widget.name}</span>
            </div>
          </li>
        {/each}
      </ul>
    </div>
    <div class="re-panel-elements-bottom">
      <p>TODO search {data?.data || "data"}</p>
    </div>
  </nav>
</main>

<style>
  #re-panel-content-wrapper {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    overflow: hidden;
    user-select: none;
    flex: 1;
    flex-direction: column;
  }

  .re-panel-page-elements {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    /* box-sizing: border-box; */
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .re-panel-elements-top {
    position: relative;
    display: flex;

    z-index: 2;
    flex: 0 0 auto;
    padding: 0 10px;
    height: 48px;
    align-items: center;
  }

  .re-panel-elements-bottom {
  }

  .re-panel-elements-wrapper {
    overflow: hidden auto;
    padding-right: 0;

    position: relative;
    box-sizing: border-box;
    min-height: 0;
    flex: 1 1 auto;
  }

  .re-element-wrapper {
    text-align: center;
    border: var(--e-a-border-bold);
    border-radius: 3px;
    cursor: move;
    position: relative;
    transition: var(--e-a-transition-hover);
  }

  .re-element-wrapper:hover {
    background-color: var(--e-a-bg-hover);
    border-color: var(--e-a-border-color-bold);
  }

  .re-element-wrapper:active {
    background-color: var(--e-a-bg-hover);
    border-color: var(--e-a-border-color-accent);
    color: var(--e-a-color-txt-accent);
  }

  .re-element-icon {
    padding-top: 0.5rem;
    width: 48px;
    height: 48px;
  }
  .re-element-title-wrapper {
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: center;
    padding: 0 0.25rem;
  }
  .re-element-title-wrapper span {
    font-size: 12px;
  }

  .re-panel-elements-list {
    padding: 0 15px;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(
      auto-fill,
      minmax(min(150px, 50% - 5px), 1fr)
    );
  }
</style>
