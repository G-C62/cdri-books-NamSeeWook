import { BookSearchInput } from "@/books/components/BookSearchInput";
import BookSearchResult from "@/books/components/BookSearchResult";
import BookSearchSummary from "@/books/components/BookSearchSummary";
import { Space } from "@/components/Space";
import { Title2 } from "@/components/Typography";
import { VStack } from "@/components/VStack";

export default function Books() {
  return (
    <VStack>
      <Title2>도서 검색</Title2>
      <Space height="16px" />
      <BookSearchInput />
      <Space height="25px" />
      <BookSearchSummary />
      <Space height="36px" />
      <BookSearchResult />
    </VStack>
  );
}
