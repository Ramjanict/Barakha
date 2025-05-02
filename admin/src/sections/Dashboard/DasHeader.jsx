import React from "react";

const DasHeader = () => {
  return (
    <header className="p-4 text-white bg-blue-800 shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-2xl font-bold">Barakha Enterprise Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm">Admin</span>
          <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
            <span className="text-xs">A</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DasHeader;
