<script lang="ts">
  import type { TransitionConfig } from "svelte/transition";
  import Card from "../components/Card.svelte";
  import Form from "../components/Form.svelte";
  
  let visible = false;

  let name: string = "redsylx";

  let multiplier: number = 1;
  let number: number = 1;

  $: result = multiplier * number;
  
  $: console.log(`multiplier ${multiplier}`);
  $: console.log(`number     ${number}`);

  function typewriter(node: HTMLElement, { speed = 1 }: { speed?: number }): TransitionConfig {
  if (node.childNodes.length !== 1 || node.childNodes[0].nodeType !== Node.TEXT_NODE) {
    throw new Error(`This transition only works on elements with a single text node child`);
  }

  const text = node.textContent || '';
  const duration = text.length / (speed * 0.01);

  return {
    duration,
    tick: (t: number) => {
      const i = Math.trunc(text.length * t);
      node.textContent = text.slice(0, i);
    }
  };
}
</script>

<p class="title">Welcome to SvelteKit</p>
<p class="name">{name}</p>
<p class="text">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Card text="this is only sample card" title="sample"/>
<input bind:value={multiplier}>
<input bind:value={number}>
<p class="text">{result}</p>
<Form></Form>
<label>
	<input type="checkbox" bind:checked={visible} />
	<p class="text">Visible</p>
</label>

{#if visible}
	<p transition:typewriter={{speed:4}} class="text">
		The quick brown fox jumps over the lazy dog
	</p>
{/if}
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
