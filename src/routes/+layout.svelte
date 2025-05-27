<script lang="ts">
    import '../app.css';
    import { base } from '$app/paths';
</script>

<a href="{base}/">Home</a>
<div class="min-h-screen bg-gray-900 text-white">
    <slot />
</div>