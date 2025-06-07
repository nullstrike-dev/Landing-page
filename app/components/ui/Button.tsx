// app/components/ui/button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${props.className ?? ''}`}
    >
      {children}
    </button>
  );
}
