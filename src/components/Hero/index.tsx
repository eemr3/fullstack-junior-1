import React from 'react';

interface HeroProps {
  children: React.ReactNode;
}

export function Hero({ children }: HeroProps) {
  return <div className="w-full h-screen flex">{children}</div>;
}
