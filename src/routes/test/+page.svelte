<script>
    import VocabularyList from "../../components/VocabularyList.svelte";
    import { englishVocabularies } from "../../data";

</script>
<h1>This is Test page</h1>

<VocabularyList data={englishVocabularies} let:sample={row}>
  <div>
    <h3>{row.name}</h3>
    <p>{row.meaning}</p>
  </div>
</VocabularyList>