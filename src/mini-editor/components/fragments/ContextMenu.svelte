<script>
  /**
   * @type {any[]}
   */
  export let contextMenuActions = [];
</script>

<div
  class="context-menu has-icons has-selected animate-from-top-left"
  style="top: 8px; left: 48px; right: auto; max-height: 1072.4px;"
>
  <ul class="context-menu-list">
    {#each contextMenuActions as action, i (i)}
      <li>
        <a href="#" data-action={i} data-action-name={action.name}>
          <cc-icon name="mdi:{action.icon}" />

          <span class="context-menu-content">{action.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .context-menu.has-icons {
    --context-menu-icon-width: 24px;
  }

  .context-menu.animate-from-top-left {
    transform-origin: top left;
  }

  .context-menu {
    display: inline-block;
    box-sizing: border-box;
    animation: fade-in-up ease 0.2s;
    transform-origin: top right;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 12;
    min-width: 250px;
    max-width: 300px;
    overflow: visible;
    --context-menu-box-shadow: 0 0 16px rgb(0 0 0 / 10%);
  }

  .context-menu .context-menu-list {
    max-height: inherit;
    box-sizing: border-box;
    overflow: auto;
    box-shadow: var(--context-menu-box-shadow);
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    border: var(--border-width) solid var(--border-color);
    padding: var(--gap) 6px;
    margin: 0 0 20px;
  }

  .context-menu .context-menu-list ul,
  .context-menu .context-menu-list li {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    font-weight: normal;
  }

  .context-menu .context-menu-list a {
    line-height: 24px;
    padding: var(--gap-half);
    gap: var(--gap-half);
    max-width: 100%;
    display: flex;
    align-items: center;
  }

  .context-menu .context-menu-list a:hover {
    background-color: var(--color-brand);
    border-radius: var(--border-radius-inner);
    color: var(--background-color);
  }

  .context-menu .context-menu-list a,
  .context-menu .context-menu-list a:link,
  .context-menu .context-menu-list a:visited {
    transition: none;
    color: var(--color-text);
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .context-menu .context-menu-list cc-icon + .context-menu-content {
    max-width: calc(100% - (var(--context-menu-icon-width) + var(--gap-half)));
  }

  .context-menu .context-menu-list a:hover .context-menu-content {
    color: var(--background-color);
  }

  .context-menu .context-menu-list .context-menu-content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1 0 auto;
    max-width: 100%;
  }

  .context-menu .context-menu-list cc-icon + .context-menu-content {
    max-width: calc(100% - (var(--context-menu-icon-width) + var(--gap-half)));
  }
</style>
