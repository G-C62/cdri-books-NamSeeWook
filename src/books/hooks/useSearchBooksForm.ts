import { useForm, useFormContext } from "react-hook-form";
import { BookSearchParams } from "../apis/getSearchBooks";

export type SearchBooksForm = Pick<BookSearchParams, 'query' | 'target'>;

export function useSearchBooksForm() {
  const form = useForm<SearchBooksForm>({
    defaultValues: {
      query: '',
    },
  });

  return form;
}

export function useSearchBooksFormContext() {
  const form = useFormContext<SearchBooksForm>();
  return form
}