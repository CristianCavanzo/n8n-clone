import { getQueryClient, trpc } from '@/trpc/server';
import { Client } from './client';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';

/**
 * Server-side page component that prefetches user data and returns a hydrated client-rendered UI.
 *
 * Prefetches TRPC `getUsers` into a query client, serializes that state for hydration, and renders
 * the `Client` component inside a `HydrationBoundary` and `Suspense` fallback.
 *
 * @returns A React element that renders the hydrated `Client` component wrapped in a `HydrationBoundary` and `Suspense`.
 */
async function Page() {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.getUsers.queryOptions());
    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Client />
                </Suspense>
            </HydrationBoundary>
        </div>
    );
}

export default Page;