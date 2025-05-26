'use client';

import { useBookSearch } from '@/books/hooks/useGetSearchBooks';
import { colors } from '@/styles/colors';
import { typography } from '@/styles/typography';
import { useState } from 'react';
import styles from './index.module.css';

export function SearchInput() {
  const [query, setQuery] = useState('');
  const { refetch } = useBookSearch({ query });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      try {
        await refetch();
      } catch (error) {
        console.error('검색 중 오류 발생:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className={styles.input} 
        placeholder='검색어를 입력하세요'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          ...typography.body1,
          backgroundColor: colors.palette.lightGray,
        }}
      />
      
    </form>
  );
}