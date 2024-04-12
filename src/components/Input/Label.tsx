import React from 'react';

interface LabelProps {
  htmlFor: string;
  text: string;
  className?: string;
}

export default function Label({ htmlFor, text, className }: LabelProps) {
  return (
    <label className={className} htmlFor={htmlFor}>
      {text}
    </label>
  );
}
