import { useAsyncData, useNuxtData } from '#imports';
import type { AsyncDataOptions } from '#app';

export const useCachedAsyncData = <T>(key: string, cb: () => Promise<T>, options?: AsyncDataOptions<T, any, any>) => {
    return useAsyncData<T>(key, () => {
        const { data } = useNuxtData(key);

        if (!data.value) console.log('no data found for key, loading again', key)
        return data.value ?? cb();
    }, options);
}
