import * as React from 'react';

type Props = {
  children?: React.ReactNode
};

export const DarkLayout: React.FC<Props>  = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,0,0,0.3)",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};
