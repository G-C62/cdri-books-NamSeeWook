import { VStack } from "@/components/VStack"
import { BookSearchResultEmpty } from "./BookSearchResultEmpty"
import { BookSearchResultItem } from "./BookSearchResultItem"

interface BookSearchResultProps {
  data: any
}
export default function BookSearchResult({data}: BookSearchResultProps) {
  if(!data) return <BookSearchResultEmpty />
  
  return (
    <VStack>
    {data.map((item: any) => (
      <BookSearchResultItem key={item.id} item={item} />
    ))}
  </VStack>
  )
}
