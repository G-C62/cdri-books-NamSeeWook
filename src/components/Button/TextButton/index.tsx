import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import styles from "./index.module.css";

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function TextButton({ children, className = "", style, ...rest }: TextButtonProps) {
  return (
    <button
      className={`${styles.button} ${className}`}
      style={{  
        backgroundColor: colors.palette.white,
        color: colors.text.subtitle,
        border: `solid 1px ${colors.text.subtitle}`,
        ...typography.body2,
        ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}