interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id?: string;
}
export function InputCustom({ className, id, ...rest }: Props) {
  return <input id={id} {...rest} className={className} />;
}
