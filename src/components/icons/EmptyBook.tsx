import icon_book from "@/assets/icons/icon_book.svg";
import Image from "next/image";

interface EmptyBookProps {
  width?: number;
  height?: number;
}

export function EmptyBook({ width = 80, height = 80 }: EmptyBookProps) {
  return <Image 
  width={width}
  height={height}
  src={icon_book} alt="empty book" />;
}
