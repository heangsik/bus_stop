<script>
  export let bus;

  //   console.log(bus.toString());
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
    } else if (routeId.toString() === "241374009") {
      return "6-1";
    } else {
      return "error";
    }
  };
</script>

<figure class="busUnit">
  <figcaption>{cvnBusNo(bus.routeId)}번</figcaption>
  <div>
    {bus.predictTime1[0]}분 후 도착
    <span class="small-font">({bus.locationNo1[0]}번째 전)</span>
  </div>
  {#if bus.predictTime2[0] !== ""}
    <div>
      {bus.predictTime2[0]}분 후 도착
      <span class="small-font">({bus.locationNo2[0]}번째 전)</span>
    </div>
  {/if}
</figure>

<style lang="scss">
  .busUnit {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  figcaption {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 8px;
    color: #333;
  }

  div {
    margin-bottom: 4px;
    font-size: 1.1em;
    color: #555;
  }

  .busUnit div:last-child {
    margin-bottom: 0;
  }
  .small-font {
    font-size: 0.8em;
  }
</style>
