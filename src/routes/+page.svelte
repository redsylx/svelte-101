<script lang="ts">
  import Card from "../components/Card.svelte";

  let name: string = "redsylx";

  let multiplier: number = 1;
  let number: number = 1;

  $: result = multiplier * number;
  
  $: console.log(`multiplier ${multiplier}`);
  $: console.log(`number     ${number}`);
</script>

<p class="title">Welcome to SvelteKit</p>
<p class="name">{name}</p>
<p class="text">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Card text="this is only sample card" title="sample"/>
<input bind:value={multiplier}>
<input bind:value={number}>
<p class="text">{result}</p>
<style>
  :root {
    background-color: hsl(0, 80%, 5%);
    padding: 20px 40px;
  }

  .title {
    font-size: large;
    font-family: 'Helvetica';
    font-weight: 600;
    color: hsl(0, 80%, 60%);
  }

  .name {
    font-size: medium;
    font-family: 'Helvetica';
    font-weight: 900;
    color: hsl(0, 80%, 40%);
  }

  .text {
    font-size: small;
    font-family: 'Helvetica';
    font-weight: 300;
    color: hsl(0, 80%, 80%);
  }
</style>
