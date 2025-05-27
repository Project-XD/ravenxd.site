import { getConfigById } from '$lib/configs';
import { error, redirect } from '@sveltejs/kit';

export function load({ params }) {
    const id = Number(params.id);

    // Validate ID is a number
    if (isNaN(id)) {
        throw redirect(307, '/');
    }

    const config = getConfigById(id);

    // If config not found, return 404
    if (!config) {
        throw error(404, 'Config not found');
    }

    return { config };
}