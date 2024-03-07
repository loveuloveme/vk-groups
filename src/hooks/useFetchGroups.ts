import { getGroups } from '@/mock';
import { Group, GroupFilter } from '@/types';
import { useEffect, useState } from 'react';
import useMockFetch from './useMockFetch';

export default function useFetchGroups(filter: GroupFilter[], limit: number, skip: number) {
    const [data, setData] = useState<Group[] | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const mockFetch = useMockFetch(() => getGroups(filter, limit, skip));
    const { fetch, isLoading, error: _error } = mockFetch;

    useEffect(() => {
        const response = mockFetch.data;

        if(isLoading){
            setData(null);
        }

        if (!isLoading) {
            if (!response || response.result == 0 || !response.data || _error) {
                setData(null);
                setError(_error as Error ?? new Error(''));
                return;
            }

            setData(response.data);
        }
    }, [isLoading, mockFetch.data]);

    useEffect(() => {
        setError(null);
        fetch();
    }, [filter, limit, skip]);


    return { fetch, data: mockFetch.data, groups: data, isLoading, error } as const;
}