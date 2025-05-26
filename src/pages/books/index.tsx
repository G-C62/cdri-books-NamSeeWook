import { BookSearchInput } from "@/books/components/BookSearchInput";
import BookSearchResult from "@/books/components/BookSearchResult";
import BookSearchSummary from "@/books/components/BookSearchSummary";
import { useBookSearch } from "@/books/hooks/useGetSearchBooks";
import { useSearchBooksForm } from "@/books/hooks/useSearchBooksForm";
import { Space } from "@/components/Space";
import { Title2 } from "@/components/Typography";
import { VStack } from "@/components/VStack";
import { FormProvider } from "react-hook-form";

export default function Books() {
  const form = useSearchBooksForm();
  const { data, onSubmit } = useBookSearch();

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <VStack>
          <Title2>도서 검색</Title2>
          <Space height="16px" />

          <BookSearchInput />
          <Space height="25px" />

          <BookSearchSummary totalCount={data?.meta.total_count} />
          <Space height="36px" />
          
          <BookSearchResult books={data?.documents} />
        </VStack>
      </form>
    </FormProvider>
  );
}
