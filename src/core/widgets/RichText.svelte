<script context="module">
  export const meta = {
    name: "Text Editor",
    category: "Basic",
    icon: "text", // assets/eicons
  };

  export function getInfo() {
    return meta;
  }

  const defaultConfig = new Map();
</script>

<script>
  export let content = "<span>Text goes <b>here</b></span>";
</script>

<p>{@html content}</p>
