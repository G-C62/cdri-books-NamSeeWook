import { ComponentPropsWithoutRef } from "react";

type DivProps = ComponentPropsWithoutRef<'div'>

export function VStack({ children, style, ...rest }: DivProps) {
  return <div 
  style={{
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    ...style
  }}
  {...rest}
  >{children}</div>;
}
