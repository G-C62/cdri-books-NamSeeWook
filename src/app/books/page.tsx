import BookSearchInput from "@/books/components/BookSearchInput";
import BookSearchResult from "@/books/components/BookSearchResult";
import BookSearchSummary from "@/books/components/BookSearchSummary";
import { Title2 } from "@/components/Typography";

export default function Books() {
  return (
    <>
      <Title2>도서 검색</Title2>
      <BookSearchInput/>
      <BookSearchSummary/>
      <BookSearchResult/>
    </>
  );
}
