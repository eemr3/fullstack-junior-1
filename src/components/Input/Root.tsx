interface InputProps {
  className?: string;
  children: React.ReactNode;
}

export function Root({ className, children }: InputProps) {
  return <div className={className}>{children}</div>;
}
// "flex items-center gap-2 text-white"
