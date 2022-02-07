<script>
   let searchTerm;

   const search = () => {
      searchTerm = null;
      console.log("function running ", searchTerm)
   };

$: console.log (searchTerm);
</script>

<input type="search" placeholder="Search" bind:value={searchTerm} >
<span class="search" class:searchTerm="{searchTerm}">
   <button on:click={search}>Search</button>
</span>


<style>
   input:focus::placeholder {
  color: transparent;
}
input:focus{
   outline-color: blue;
}
input {
   box-shadow: 0 0 5px #719ECE;
}
input:not(empty) + span{
   color:blue;
}

</style>