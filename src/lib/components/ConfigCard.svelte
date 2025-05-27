<script lang="ts">
    import type { Config } from '$lib/types';

    export let config: Config;
</script>

<div class="h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <div class="h-48 overflow-hidden">
        <img
                src={config.cover}
                alt={config.name}
                class="w-full h-full object-cover"
        />
    </div>

    <div class="p-6">
        <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-bold truncate">{config.name}</h3>
            <span class="px-3 py-1 bg-gray-700 rounded-full text-sm">
                {config.creator}
            </span>
        </div>

        <div class="flex flex-wrap gap-2 mb-4">
            {#each config.tags as tag}
                <span class="px-2 py-1 bg-gray-700 rounded text-xs">
                    {tag}
                </span>
            {/each}
        </div>

        <div class="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <span class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {config.updated}
            </span>
            <span class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {config.ip}
            </span>
        </div>

        <a href={`/${config.id}`}>View Config</a>
    </div>
</div>