import React from 'react';

export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

export const TestButton: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button onClick= { onClick } >
        { children }
        </button>
  );
};

