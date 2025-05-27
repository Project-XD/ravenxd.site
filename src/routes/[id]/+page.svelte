<script lang="ts">
    export let data;
    $: config = data.config;
    $: anticheats = Array.isArray(config.anticheat) ? config.anticheat : [config.anticheat];
</script>

<svelte:head>
    <title>{config.name} - Raven XD</title>
</svelte:head>

<nav class="bg-gray-800 p-4 sticky top-0 z-10">
    <div class="container mx-auto flex items-center gap-4">
        <a
                href="/"
                class="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
        </a>
        <span class="text-gray-400">/</span>
        <span class="text-white">{config.name}</span>
    </div>
</nav>

<div class="max-w-4xl mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row gap-8">
        <!-- Sidebar -->
        <div class="md:w-1/3">
            <div class="sticky top-8">
                <div class="bg-gray-800 rounded-xl p-6 shadow-lg">
                    <img
                            src={config.cover}
                            alt={config.name}
                            class="w-full rounded-lg mb-4"
                    />

                    <div class="space-y-4">
                        <div>
                            <h2 class="text-3xl font-bold mb-4">{config.name}</h2>
                            <p class="mb-2">Creator: {config.creator}</p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-300 mb-2">Server Info</h3>
                            <p class="text-sm"><span class="text-gray-400">IP:</span> {config.ip}</p>
                            <p class="text-sm"><span class="text-gray-400">Updated:</span> {config.updated}</p>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-300 mb-2">Anticheat</h3>
                            <div class="flex flex-wrap gap-2">
                                {#each anticheats as ac}
                                    <span class="px-2 py-1 bg-gray-700 rounded text-xs">
                                        {ac}
                                    </span>
                                {/each}
                            </div>
                        </div>

                        <div class="pt-4 border-t border-gray-700">
                            <a
                                    href={config.downloadLink}
                                    target="_blank"
                                    class="block w-full py-2 px-4 text-center bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors mb-3"
                            >
                                Download Config
                            </a>

                            {#each config.otherButtons as [url, text]}
                                <a
                                        href={url}
                                        target="_blank"
                                        class="block w-full py-2 px-4 text-center bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors mb-3"
                                >
                                    {text}
                                </a>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="md:w-2/3">
            <div class="bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
                <h2 class="text-xl font-bold mb-4">Description</h2>
                <div class="prose prose-invert max-w-none">
                    {@html config.description.join('<br>')}
                </div>
            </div>

            <div class="bg-gray-800 rounded-xl p-6 shadow-lg">
                <h2 class="text-xl font-bold mb-4">Tags</h2>
                <div class="flex flex-wrap gap-2">
                    {#each config.tags as tag}
                        <span class="px-3 py-1 bg-gray-700 rounded-full">
                            {tag}
                        </span>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>