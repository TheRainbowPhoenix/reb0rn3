/**
 * @type {Map<string, any>}
 */
const kv = new Map(); // TODO serialize-deserialize hot ?
kv.set("number", 42);
kv.set("title", "🧑‍🚀 Hello, Astronaut!");
kv.set("changeme", "Change this text !");
kv.set(
  "__rtf_welcome",
  `        <p>          Welcome to the official <a href="https://astro.build/">Astro</a> blog starter          template. This template serves as a lightweight, minimally-styled starting          point for anyone looking to build a personal website, blog, or portfolio          with Astro.        </p>        <p>          This template comes with a few integrations already configured in your          <code>astro.config.mjs</code> file. You can customize your setup with          <a href="https://astro.build/integrations">Astro Integrations</a> to add          tools like Tailwind, React, or Vue to your project.        </p>        <p>Here are a few ideas on how to get started with the template:</p>        <ul>          <li>Edit this page in <code>src/pages/index.astro</code></li>          <li>            Edit the site header items in <code>src/components/Header.astro</code>          </li>          <li>            Add your name to the footer in <code>src/components/Footer.astro</code>          </li>          <li>            Check out the included blog posts in <code>src/pages/blog/</code>          </li>          <li>            Customize the blog post page layout in <code>src/layouts/BlogPost.astro</code>          </li>        </ul>        <p>          Have fun! If you get stuck, remember to <a href="https://docs.astro.build/">read the docs          </a> or <a href="https://astro.build/chat">join us on Discord</a> to ask          questions.        </p>        <p>          Looking for a blog template with a bit more personality? Check out <a href="https://github.com/Charca/astro-blog-template">astro-blog-template          </a> by <a href="https://twitter.com/Charca">Maxi Ferreira</a>.        </p>      `
);

export default kv;
