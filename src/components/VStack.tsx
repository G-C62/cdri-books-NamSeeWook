import { ComponentPropsWithoutRef } from "react";

type DivProps = ComponentPropsWithoutRef<'div'>

export function VStack({ children, ...rest }: DivProps) {
  return <div 
  style={{
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    
  }}
  {...rest}
  >{children}</div>;
}
