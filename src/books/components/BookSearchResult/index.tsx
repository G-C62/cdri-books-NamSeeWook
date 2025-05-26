import { Book } from "@/books/apis/getSearchBooks"
import { VStack } from "@/components/VStack"
import { BookSearchResultEmpty } from "./BookSearchResultEmpty"
import { BookSearchResultItem } from "./BookSearchResultItem"

interface BookSearchResultProps {
  books?: Book[]
}
export default function BookSearchResult({books}: BookSearchResultProps) {
  if(!books || books.length === 0) return <BookSearchResultEmpty />
  
  return (
    <VStack>
    {books.map((item: Book) => (
      <BookSearchResultItem key={item.isbn} item={item} />
    ))}
  </VStack>
  )
}
