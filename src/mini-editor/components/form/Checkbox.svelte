<script>
  export let value = false;
  export let label = "";
  export let placeholder = "";

  /* 
  events: {
        "input input": "change",
        "focus input": "focus",
        "blur input": "blur"
    },
  */
</script>

<label class="checkbox-label">
  <input type="checkbox" checked={value} />
  <span class="custom-input-cover js-prevent-draggable" />
  {label}
</label>

<style>
  label.checkbox-label {
    opacity: 1;
    cursor: pointer;
    position: relative;
  }

  label.checkbox-label input {
    position: absolute;
    opacity: 0;
  }

  label {
    font-weight: bold;
    position: relative;
    width: 100%;
    display: block;
    margin-bottom: var(--grid-size);
    line-height: 1.5;
  }

  input {
    font-size: var(--font-size);
    font-family: var(--font-family);
    font-weight: normal;
    color: var(--color-text);
    line-height: 1.75;
    text-rendering: geometricprecision;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  label.checkbox-label input:checked + .custom-input-cover {
    background-color: var(--color-brand);
    border-color: var(--color-brand);
  }

  label.checkbox-label input + .custom-input-cover {
    border-radius: var(--border-radius);
    transition: all 0.1s ease;
    box-sizing: border-box;
    display: inline-block;
    cursor: pointer;
    height: 24px;
    width: 24px;
    color: var(--border-color-clickable);
    border: var(--border-width) solid var(--border-color-clickable);
    background-color: var(--background-color);
    vertical-align: top;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80%;
    margin-right: 16px;
    position: relative;
  }

  label.checkbox-label input + .custom-input-cover::after {
    clip-path: path(
      "M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"
    );
    background-color: white;
    border-color: white;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    transform: scale(0.75) translateX(-1px);
  }
</style>
