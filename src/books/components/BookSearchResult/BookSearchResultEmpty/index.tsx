import { EmptyBook } from "@/components/icons/EmptyBook";
import { Caption } from "@/components/Typography";
import { VStack } from "@/components/VStack";

export function BookSearchResultEmpty() {
  return (
    <VStack style={{marginTop: '120px', alignItems: 'center', gap: '8px'}} >
      <EmptyBook/>
      <Caption color="secondary">검색 결과가 없습니다.</Caption>
    </VStack>
  );
}
