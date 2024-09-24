<script>
  /**
   * button exist 123erf
   */
  export let isButton = false;
  /**
   * @type {string}
   * Button name safdsgfdsrtfe4rdfvfdstfwaefesr
   */
  export let label = undefined;

  /**
   * @type {string} Button contents
   */
  export let btnLabel = "btns";

  /**
   * @type {string} What background color to use
   */
  export let backgroundColor = undefined;
</script>

<main class="container">
  <div class="outterCard">{label}</div>
  {#if isButton}
    <button>{btnLabel}</button>
  {/if}
</main>

<style lang="scss">
  .outterCard {
    border: 1px solid #ccc;
    width: 300px;
    height: 300px;
  }
</style>
