import { HStack } from "@/components/HStack";
import { Space } from "@/components/Space";
import { Caption } from "@/components/Typography";
import { colors } from "@/styles/colors";

export default function BookSearchSummary() {
  return (
    <HStack>
      <Caption style={{ lineHeight: '24px' }}>도서 검색 결과</Caption>
      <Space width="16px" />
      <Caption style={{ lineHeight: '24px' }}>총 
      <span style={{ color: colors.palette.primary }}>
        {` ${0}`}
        </span>
        건
      </Caption>
    </HStack>
  );
}