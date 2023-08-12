<script>
  /**
   * @type {string | null}
   */
  export let imageUrl = null;
  /**
   * @type {string | null}
   */
  export let iconUrl = null;
  export let title = "";
  export let description = "";

  let imgError = false;
</script>

{#if imageUrl || title || description}
  {#if imageUrl}
    <div
      class="url-summary-image-container"
      style={!imgError ? "display: none;" : ""}
    >
      <img
        src={imageUrl}
        on:error={(ev) => {
          imgError = true;
        }}
        alt="img"
      />
    </div>
  {/if}

  <div class="url-summary-text-container">
    <h4>
      {#if iconUrl}
        <img
          src={iconUrl}
          on:error={() => {
            iconUrl = null; // this.style.display = 'none';
          }}
          alt="img"
        />
      {/if}

      <span>{title}</span>
    </h4>
    <p>{description}</p>
  </div>
{:else}
  <div class="url-summary-empty">No preview available</div>
{/if}

<style>
  .url-summary-empty {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    line-height: 1;

    opacity: 0.7;
  }
</style>
