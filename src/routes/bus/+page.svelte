<script>
  import { onMount } from "svelte";
  import BusCard from "./BusCard.svelte";

  import BusStop from "./BusStop.svelte";
  export let data;

  console.log(data.school);
  console.log(data.schoolGate);
</script>

<div>
  <BusStop stationName="산현초" />
  {#each data.school as bus}
    <div class="busUnit">
      <BusCard {bus} />
    </div>
  {/each}
</div>
<div>--------------------</div>
<div>
  <BusStop stationName="산현초 정문" />
  {#each data.schoolGate as bus}
    <div class="busUnit">
      <BusCard {bus} />
    </div>
  {/each}
</div>

<style lang="scss">
</style>
