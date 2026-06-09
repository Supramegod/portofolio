import React from "react";

export const Loading = () => {
  return (
    <div className="bg-linear-to-r from-gray-950 via-slate-800 to-blue-950 flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-cyan-400 border-t-white"></div>
      </div>
    </div>
  );
};
