import { TextButton } from "@/components/Button";
import styles from './index.module.css';
import { SearchInput } from "./SearchInput";

/**
 * 추후 검색내역 8건까지 캐싱 필요 ( 브라우저 재시작 시에도 유지 )
 */
export function BookSearchInput() {
  return (
    <div className={styles.wrapper}>
      <SearchInput/>
      <TextButton>상세검색</TextButton> 
    </div>
  );
}