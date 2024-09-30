<script lang="ts">
  import type { IVocabulary } from "../data";

  export let data : IVocabulary[];

  let search = "";

  $: regex = search ? new RegExp(search, 'i') : null;
	$: matches = (item : IVocabulary) => regex ? regex.test(item.name) : true;
</script>

<label>
  Filter: <input bind:value={search} />
</label>
{#each data.filter(matches) as item}
  <slot sample={item} />
{/each}