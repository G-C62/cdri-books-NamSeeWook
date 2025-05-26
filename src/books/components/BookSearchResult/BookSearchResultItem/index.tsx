import { Book } from "@/books/apis/getSearchBooks";
import { LightGrayButton, PrimaryButton } from "@/components/Button";
import { HStack } from "@/components/HStack";
import { Space } from "@/components/Space";
import { Spacer } from "@/components/Spacer";
import { Body2, Title3 } from "@/components/Typography";
import Image from "next/image";
import { useState } from "react";
import { BookSearchResultItemDetail } from "./BookSearchResultItemDetail";
import styles from './index.module.css';

interface BookSearchResultItemProps {
  item: Book
}

export function BookSearchResultItem({item}: BookSearchResultItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  if(isOpen){
    return (
      <div className={styles.itemContainer}>
        <BookSearchResultItemDetail book={item} onToggle={handleToggle}/>
      </div>
    )
  }  
  return (
    <div>
      <HStack className={styles.itemContainer} >
        <Image src={item.thumbnail} alt={item.title} width={48} height={68} />
        <Space width="48px" />

        <Title3>{item.title}</Title3>
        <Space width="16px" />

        <Body2 color="secondary">{item.authors.at(0)}</Body2>
        <Spacer/>
        <Title3>{item.price.toLocaleString()}원</Title3>
        <Space width="56px" />

        <PrimaryButton>구매하기</PrimaryButton>
        <Space width="8px" />
        <LightGrayButton arrow={isOpen ? "up" : "down"} onClick={handleToggle}>상세보기</LightGrayButton>
      </HStack>
    </div>

  );
}
