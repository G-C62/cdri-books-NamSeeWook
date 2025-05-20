import { ArrowDown } from "@/components/icons/ArrowDown";
import { ArrowUp } from "@/components/icons/ArrowUp";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import styles from "./index.module.css";

interface LightGrayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  arrow?: "up" | "down";
}

export function LightGrayButton({ children, className = "", style, arrow, ...rest }: LightGrayButtonProps) {
  return (
    <button
      className={`${styles.button} ${className}`}
      style={{  
        backgroundColor: colors.palette.lightGray,
        color: colors.text.subtitle,
        ...typography.caption,
        ...style,
        ...(arrow && {
          backgroundImage: `url(${arrow === "up" ? ArrowUp : ArrowDown})`,
        }),
      }}
      {...rest}
    >
      {children}
      { arrow && (arrow === "up" ? <ArrowUp /> : <ArrowDown /> )}
    </button>
  );
}