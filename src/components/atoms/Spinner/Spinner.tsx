import React from 'react';

export const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
};
