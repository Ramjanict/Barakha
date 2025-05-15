import React from "react";

const Office = ({ activeTab, office }) => {
  return (
    <div>
      {activeTab === "offices" && (
        <div className="p-6 ">
          <h2 className="mb-6 text-xl font-semibold text-gray-800">
            Global Offices
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {office.map((office, index) => (
              <div
                key={index}
                className="p-4 transition-shadow border border-gray-200 rounded-lg hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  {office.title}
                </h3>
                <p className="mb-3 text-sm text-gray-600">{office.address}</p>
                <div className="flex items-center mb-1 text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {office.cell}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {office.email}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Office;
