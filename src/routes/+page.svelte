<script lang="ts">
    import { searchConfigs } from '$lib/configs';
    import ConfigCard from '$lib/components/ConfigCard.svelte';

    let searchTerm = '';
    let hideOutdated = true;

    $: displayedConfigs = hideOutdated
        ? searchConfigs(searchTerm).filter(c => !c.tags.includes('outdated'))
        : searchConfigs(searchTerm);
</script>

<svelte:head>
    <title>Home - Raven XD</title>
    <link rel="icon" href="/icons/logo.png" type="image/x-icon" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-6 mb-8 items-center">
        <div class="flex-1 w-full">
            <input
                    bind:value={searchTerm}
                    type="text"
                    placeholder="Search configs..."
                    class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
        </div>
        <button
                on:click={() => hideOutdated = !hideOutdated}
                class="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors whitespace-nowrap"
        >
            {hideOutdated ? 'Show Outdated' : 'Hide Outdated'}
        </button>
    </div>

    {#if displayedConfigs.length === 0}
        <div class="text-center py-12">
            <h2 class="text-2xl font-bold text-gray-400">No configs found</h2>
            <p class="mt-2 text-gray-500">Try adjusting your search or filters</p>
        </div>
    {:else}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each displayedConfigs as config}
                <ConfigCard {config} />
            {/each}
        </div>
    {/if}
</div>