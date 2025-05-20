interface Props {
  width?: string
  height?: string
}

export function Space({width, height}: Props) {
  return <div style={{ width, height }} />;
}