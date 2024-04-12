import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string;
  id: string;
  text?: string;
}

export function InputCustom({ className, id, text, ...rest }: Props) {
  return (
    <div className="flex items-center gap-2 text-white">
      <input id={id} {...rest} className={className} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}
