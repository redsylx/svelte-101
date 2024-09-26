<script lang="ts">
  export let title : string;
  export let text : string;
</script>

<div class="card">
  <p class="card-title">{title}</p>
  <p class="card-text">{text}</p>
</div>

<style>
  .card {
    background-color: hsl(0, 80%, 5%);
    padding: 20px;
    border: 2px solid hsl(0, 80%, 40%);
    justify-content: space-between;
  }

  .card-title {
    font-family: 'Helvetica';
    color: hsl(0, 80%, 60%);
    padding: 0px;
    margin: 0px 0px 8px 0px;
  }

  .card-text {
    font-family: 'Helvetica';
    color: hsl(0, 80%, 80%);
    padding: 0px;
    margin: 0px;
  }
</style>