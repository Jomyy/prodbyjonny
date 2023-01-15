<svelte:head>
    <title>Releases</title>
</svelte:head>
<script>
// @ts-nocheck

    import ReleaseItem from '../../lib/releaseItem.svelte';
       /** @type {import('./$types').PageData} */
        export let data;
      
</script>
<div>
{#each data.releases as release}
    <ReleaseItem data={release}></ReleaseItem>
{/each}
</div>
<style>
    div{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @media only screen and (max-width: 1600px) {
        div{
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
    @media only screen and (max-width: 1200px) {
        div{
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media only screen and (max-width: 800px) {
        div{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media only screen and (max-width: 600px) {
        div{
            grid-template-columns: 1fr ;
        }
    }
</style>