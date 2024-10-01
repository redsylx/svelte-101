<script>
  import { page } from '$app/stores';
  $: id = $page.params.id;
</script>

<h1>This Page {id}</h1>