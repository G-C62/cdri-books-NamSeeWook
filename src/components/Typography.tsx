import { colors, TextKey } from '@/styles/colors';
import { typography } from '@/styles/typography';
import { ElementType, ReactNode } from 'react';

interface BaseTypographyProps {
  color?: TextKey;
  children: ReactNode;
  className?: string;
  as?: ElementType;
  style?: React.CSSProperties;
}

interface Body2Props extends BaseTypographyProps {
  bold?: boolean;
}

const createTypographyComponent = (
  variant: keyof typeof typography,
  defaultElement: ElementType
) => {
  const TypographyComponent = ({
    color = 'primary',
    children,
    className = '',
    as,
    style,
  }: BaseTypographyProps) => {
    const Component = as || defaultElement;
    const typographyStyle = typography[variant];

    return (
      <Component
        className={className}
        style={{
          color: colors.text[color],
          ...typographyStyle,
          ...style,
        }}
      >
        {children}
      </Component>
    );
  };

  return TypographyComponent;
};

const createBody2Component = (defaultElement: ElementType) => {
  const Body2Component = ({
    color = 'primary',
    children,
    className = '',
    as,
    bold,
  }: Body2Props) => {
    const Component = as || defaultElement;
    const style = {
      ...typography.body2,
      ...(bold && { fontWeight: 700 }),
    };

    return (
      <Component
        className={className}
        style={{
          ...style,
          color: colors.text[color],
        }}
      >
        {children}
      </Component>
    );
  };

  return Body2Component;
};

export const Title1 = createTypographyComponent('title1', 'h1');
export const Title2 = createTypographyComponent('title2', 'h2');
export const Title3 = createTypographyComponent('title3', 'h3');
export const Body1 = createTypographyComponent('body1', 'p');
export const Body2 = createBody2Component('p');
export const Caption = createTypographyComponent('caption', 'p');
export const Small = createTypographyComponent('small', 'span'); 