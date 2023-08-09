export const prerender = false;

let g_number = Math.random(); // this one is static SSR ?

export async function get() {
  let number = Math.random();
  return {
    body: JSON.stringify({
      g_number,
      number,
    }),
  };
}
