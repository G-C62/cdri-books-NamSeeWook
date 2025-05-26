'use client';

import { useSearchBooksFormContext } from '@/books/hooks/useSearchBooksForm';
import { colors } from '@/styles/colors';
import { typography } from '@/styles/typography';
import { Controller } from 'react-hook-form';
import styles from './index.module.css';

export function SearchInput() {
  const { control } = useSearchBooksFormContext();
  return (
    <Controller
      control={control}
      name="query"
      render={({ field }) => (
        <input 
          className={styles.input} 
          placeholder='검색어를 입력하세요'
          style={{
            ...typography.body1,
            backgroundColor: colors.palette.lightGray,
          }}
          {...field}
        />
      )}
    />
  );
}