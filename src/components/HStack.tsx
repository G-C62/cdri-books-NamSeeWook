import { ComponentPropsWithoutRef } from "react";

type DivProps = ComponentPropsWithoutRef<'div'>

export function HStack({ children, ...rest }: DivProps) {
  return <div style={{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  }}
  {...rest}
  >{children}</div>;
}
