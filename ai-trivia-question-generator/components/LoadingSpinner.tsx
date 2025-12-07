import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-4 border-t-sky-500 border-slate-200 rounded-full animate-spin"></div>
        <p className="text-white text-lg mt-4">Generating AI Response...</p>
    </div>
  </div>
);