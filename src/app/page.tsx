import { LightGrayButton, PrimaryButton, TextButton } from "@/components/Button";
import { LikeIcon } from "@/components/icons";
import { EmptyBook } from "@/components/icons/EmptyBook";
import { Title1 } from "@/components/Typography";

export default function Home() {
  return (
    <div>
      <Title1 color="subtitle">CDRI frontend 과제</Title1>
      <LikeIcon variant="fill" />
      <LikeIcon variant="line" />
      <TextButton>상세검색</TextButton>
      <PrimaryButton>구매하기</PrimaryButton>
      <LightGrayButton arrow="up">상세보기</LightGrayButton>
      <LightGrayButton arrow="down">상세보기</LightGrayButton>
      <EmptyBook/>
    </div>
  );
}
