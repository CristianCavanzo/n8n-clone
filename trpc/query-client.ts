import {
    defaultShouldDehydrateQuery,
    QueryClient,
} from '@tanstack/react-query';

/**
 * Create a QueryClient configured with the application's React Query defaults.
 *
 * The client sets queries to a 30-second stale time and dehydrate behavior that
 * includes queries considered dehydration-worthy by the default policy or those
 * whose state status is `'pending'`.
 *
 * @returns A configured QueryClient instance
 */
export function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 30 * 1000,
            },
            dehydrate: {
                // serializeData: superjson.serialize,
                shouldDehydrateQuery: (query) =>
                    defaultShouldDehydrateQuery(query) ||
                    query.state.status === 'pending',
            },
            hydrate: {
                // deserializeData: superjson.deserialize,
            },
        },
    });
}