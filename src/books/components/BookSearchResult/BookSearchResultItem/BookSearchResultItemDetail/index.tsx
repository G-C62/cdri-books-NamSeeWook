import { Book } from "@/books/apis/getSearchBooks";
import { LightGrayButton, PrimaryButton } from "@/components/Button";
import { HStack } from "@/components/HStack";
import { Space } from "@/components/Space";
import { Spacer } from "@/components/Spacer";
import { Body2, Caption, Small, Title3 } from "@/components/Typography";
import { VStack } from "@/components/VStack";
import Image from "next/image";
import styles from './index.module.css';

interface BookSearchResultItemDetailProps {
  book: Book
  onToggle: () => void
}

export function BookSearchResultItemDetail({book, onToggle}: BookSearchResultItemDetailProps) {
  return (
    <HStack>
      <Image src={book.thumbnail} alt={book.title} width={210} height={280} />
      <Space width="32px" />
      <VStack>
        <HStack style={{height: '68px'}}>
          <Title3>{book.title}</Title3>
          <Space width="16px" />
          <Caption color="subtitle">{book.authors.at(0)}</Caption>
        </HStack>
        <Body2 color="primary">책 소개</Body2>
        <Space width="12px" />
        <small color="primary">{book.contents}</small>
      </VStack>
      <Space width="48px" />
      <VStack>
        <HStack style={{height: '68px'}}>
          <Spacer />
          <LightGrayButton arrow="up" onClick={onToggle}>상세보기</LightGrayButton>
        </HStack>
        <Spacer/>
        <HStack>
          <Spacer/>
          <Small color="subtitle" className={styles.priceLabel}>원가</Small>
          <Space width="8px" />
          <Title3 className={book.sale_price ? styles.hasDisCount : ''}>{book.price.toLocaleString()}원</Title3>
        </HStack>
        {
          book.sale_price && (
            <HStack>
              <Spacer/>
              <Small color="subtitle" className={styles.priceLabel}>할인가</Small>
              <Space width="8px" />
              <Title3>{book.sale_price.toLocaleString()}원</Title3>
            </HStack>
          )
        }
        <HStack>
          <Spacer/>
          <PrimaryButton style={{width: '240px'}}>구매하기</PrimaryButton>
        </HStack>
      </VStack>
    </HStack>
  )
}