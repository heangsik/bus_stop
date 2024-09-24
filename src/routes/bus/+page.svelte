<script>
  import { onMount } from "svelte";
  import BusCard from "./BusCard.svelte";

  import BusStop from "./BusStop.svelte";
  export let data;
  //   console.log(data.mschool);
</script>

<div class="station">
  <BusStop stationName="산현초" />
  {#each data.school as bus}
    <div class="busUnit">
      <BusCard {bus} />
    </div>
  {/each}
</div>
<div class="station">
  <BusStop stationName="산현초 정문" />
  {#each data.schoolGate as bus}
    <div class="busUnit">
      <BusCard {bus} />
    </div>
  {/each}
</div>

<style lang="scss">
  .station {
    // border: 1px solid #ccc;
    padding: 20px;
    margin: 2px;
    width: 100%;
  }
</style>
