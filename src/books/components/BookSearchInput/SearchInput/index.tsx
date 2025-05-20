import { colors } from '@/styles/colors';
import { typography } from '@/styles/typography';
import styles from './index.module.css';

export function SearchInput() {
  return (
    <input className={styles.input} placeholder='검색어를 입력하세요' 
    style={{
      ...typography.body1,
      backgroundColor: colors.palette.lightGray,
    }}/>
  );
}