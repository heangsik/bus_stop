<script>
  import "./page.css";
  import Header from "./Header.svelte";

  export let user = null;
</script>

<article>
  <Header
    {user}
    on:login={() => (user = { name: "Jane Doe" })}
    on:logout={() => (user = null)}
    on:createAccount={() => (user = { name: "Jane Doe" })}
  />

  <section class="storybook-page">
    <h2>Pages in Storybook</h2>
    <p>
      We recommend building UIs with a
      <a
        href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>component-driven</strong>
      </a>
      process starting with atomic components and ending with pages.
    </p>
  </section>
</article>
