import { useQuery } from '@tanstack/react-query';
import { BookSearchParams, getSearchBooks } from '../apis/getSearchBooks';

export function useBookSearch(params: BookSearchParams) {
  return useQuery({
    queryKey: ['books', params],
    queryFn: () => getSearchBooks(params),
    enabled: false,
  });
} 