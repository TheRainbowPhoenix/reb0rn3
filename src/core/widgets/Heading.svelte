<script context="module">
  export const meta = {
    name: "heading",
    category: "Basic",
    icon: "heading", // assets/eicons
  };

  export function getInfo() {
    return meta;
  }

  const defaultConfig = new Map();
</script>

<script>
  export let title = "Title";
</script>

<h1>{title}</h1>
