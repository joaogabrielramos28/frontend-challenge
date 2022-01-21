import useSWR from 'swr';
import {apiLocal} from '../services/api';
import { CardProps } from '../types/card';



export function useFetch<Data = CardProps[], Error = any>(url: string) {
    const { data, error, mutate } = useSWR<Data, Error>(url, async (url) => {
        const response = await apiLocal.get(url);
        return response.data;
    });

    return { data, error, mutate };
}