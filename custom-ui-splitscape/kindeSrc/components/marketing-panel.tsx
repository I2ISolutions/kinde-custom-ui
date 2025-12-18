import React from 'react';
import DashboardMockup from './dashboard-mockup';

const MarketingPanel: React.FC = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-[#0f172a] to-indigo-950 rounded-3xl p-6 lg:p-10 flex flex-col overflow-y-auto overflow-x-hidden relative shadow-2xl ring-1 ring-white/10">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full -mr-[250px] -mt-[250px] blur-3xl mix-blend-overlay"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full -ml-[250px] -mb-[250px] blur-3xl mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-8 px-4 pt-4">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 leading-tight">
          Effortlessly manage your team and operations.
        </h2>
        <p className="text-blue-100 text-base lg:text-lg font-medium opacity-95">
          Log in to access your CRM dashboard and manage your team.
        </p>
      </div>

      {/* Dashboard Preview Component */}
      <div className="relative  z-10 w-full flex-1 flex items-center justify-center min-h-0">
        <div className="w-full max-w-5xl  mx-auto drop-shadow-2xl">
          <DashboardMockup />
        </div>
      </div>
    </div>
  );
};

export default MarketingPanel;
