<script>
  export let bus;

  console.log(bus.toString());
  const cvnBusNo = (routeId) => {
    if (routeId.toString() === "213000014") {
      return "11-3";
    } else if (routeId.toString() === "217000009") {
      return "32";
    } else if (routeId.toString() === "208000009") {
      return "81";
    } else if (routeId.toString() === "224000066") {
      return "5601";
    } else if (routeId.toString() === "241374008") {
      return "6";
    } else {
      return "error";
    }
  };
</script>

<main class="busUnit">
  <div>{cvnBusNo(bus.routeId)}번</div>
  <div>{bus.predictTime1[0]}분 후 도착</div>
  {#if bus.predictTime2[0] !== ""}
    <div>{bus.predictTime2[0]}분 후 도착</div>
  {/if}
  <div>{bus.locationNo1[0]}번째 전</div>
  {#if bus.locationNo2[0] !== ""}
    <div>{bus.locationNo2[0]}번째 전</div>
  {/if}
</main>

<style lang="scss">
  .busUnit {
    border: 1px solid black;
    padding-bottom: 10px;
  }
</style>
