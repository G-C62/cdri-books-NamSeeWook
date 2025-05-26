import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getSearchBooks } from '../apis/getSearchBooks';
import { SearchBooksForm } from './useSearchBooksForm';

export function useBookSearch() {
  const [formData, setFormData] = useState<SearchBooksForm | null>(null);
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['books', formData],
    queryFn: () => getSearchBooks(formData!),
    enabled: !!formData,
  });

  const onSubmit = (newFormData: SearchBooksForm) => {
    setFormData(newFormData);
  };

  return {
    data: data || {
      documents: [],
      meta: {
        total_count: 0,
        pageable_count: 0,
        is_end: false,
      },
    },
    isLoading,
    error,
    onSubmit,
  };
} 