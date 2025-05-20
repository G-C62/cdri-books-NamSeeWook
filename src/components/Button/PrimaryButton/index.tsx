import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";
import styles from "./index.module.css";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function PrimaryButton({ children, className = "",style, ...rest }: PrimaryButtonProps) {
  return (
    <button className={`${styles.button} ${className}`}
    style={{  
      backgroundColor: colors.palette.primary,
      color: colors.palette.white,
      ...typography.caption,
      ...style }}
     {...rest}>
      {children}
    </button>
  );
}