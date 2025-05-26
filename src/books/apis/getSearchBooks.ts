import { kakaoFetch } from "@/lib/kakaoFetch";

export interface BookSearchParams {
  query: string;
  page?: number;
  size?: number;
  target?: 'title' | 'isbn' | 'publisher' | 'person';
}

interface Meta {
  total_count: number;
  pageable_count: number;
  is_end: boolean;
}

export interface Book {
  title: string;
  contents: string[];
  url: string;
  isbn: string;
  datetime: Date;
  authors: string[];
  publisher: string;
  translators: string[];
  price: number;
  sale_price: number;
  thumbnail: string;
  status: string;
}

export interface BookSearchResponse {
  documents: Book[];
  meta: Meta
}

export async function getSearchBooks(params: BookSearchParams) {
  const stringParams = JSON.parse(JSON.stringify(params));
  const queryString = new URLSearchParams(stringParams).toString();
  
  const response = await kakaoFetch<BookSearchResponse>(`search/book?${queryString}`, {
    method: 'GET',
  });
  return response;
}