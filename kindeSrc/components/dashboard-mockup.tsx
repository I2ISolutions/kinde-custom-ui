import React from 'react';

const DashboardMockup: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-5 w-full overflow-hidden border border-white/20 select-none pointer-events-none scale-[0.85] origin-center">
      <div className="grid grid-cols-12 gap-4">
        
        {/* Top Widgets */}
        <div className="col-span-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Sales</p>
              <h3 className="text-2xl font-bold text-slate-800">$189,374</h3>
            </div>
            <div className="p-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="flex items-center text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">
              <svg className="w-2.5 h-2.5 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              7%
            </span>
            <span className="text-[10px] font-medium text-slate-400">From last month</span>
          </div>
        </div>

        <div className="col-span-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Chat Performance</p>
              <h3 className="text-2xl font-bold text-slate-800">00:01:30</h3>
            </div>
            <div className="p-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </div>
          </div>
          <div className="h-12 w-full bg-gradient-to-t from-blue-100 to-blue-50 rounded flex items-end justify-between px-2 pb-1">
            <div className="w-2 h-6 bg-blue-400 rounded-t"></div>
            <div className="w-2 h-8 bg-blue-500 rounded-t"></div>
            <div className="w-2 h-5 bg-blue-400 rounded-t"></div>
            <div className="w-2 h-7 bg-blue-500 rounded-t"></div>
            <div className="w-2 h-4 bg-blue-400 rounded-t"></div>
            <div className="w-2 h-6 bg-blue-500 rounded-t"></div>
            <div className="w-2 h-5 bg-blue-400 rounded-t"></div>
          </div>
        </div>

        <div className="col-span-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Profit</p>
              <h3 className="text-2xl font-bold text-slate-800">$25,684</h3>
            </div>
            <div className="p-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="flex items-center text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">
              <svg className="w-2.5 h-2.5 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              5%
            </span>
            <span className="text-[10px] font-medium text-slate-400">From last month</span>
          </div>
        </div>

        {/* Middle Section: Main Charts */}
        <div className="col-span-8 bg-white p-4 rounded-xl border border-slate-100 min-h-[160px]">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-sm font-bold text-slate-800">Sales Overview</h4>
            <div className="text-[10px] px-2 py-1 bg-slate-50 rounded border border-slate-200 font-semibold text-slate-500">Weekly</div>
          </div>
          <div className="h-32 w-full flex items-end justify-between gap-1">
            <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '60%' }}></div>
            <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '45%' }}></div>
            <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '30%' }}></div>
            <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '55%' }}></div>
            <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '25%' }}></div>
            <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '40%' }}></div>
            <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '35%' }}></div>
          </div>
        </div>

        <div className="col-span-4 bg-white p-4 rounded-xl border border-slate-100 relative">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-bold text-slate-800">Sales Categories</h4>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-32 w-32 rounded-full border-8 border-blue-500 border-t-indigo-500 border-r-purple-400 flex items-center justify-center relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[8px] font-bold text-slate-400">Total Sales</span>
                <span className="text-xs font-extrabold text-slate-800">6,248 Units</span>
              </div>
            </div>
          </div>
          <div className="space-y-1.5 mt-2">
            <div className="flex items-center justify-between text-[8px] font-bold">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                <span className="text-slate-500">Smartphones</span>
              </div>
              <span className="text-slate-700">3,849 Unit</span>
            </div>
            <div className="flex items-center justify-between text-[8px] font-bold">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                <span className="text-slate-500">Laptops</span>
              </div>
              <span className="text-slate-700">750 Unit</span>
            </div>
            <div className="flex items-center justify-between text-[8px] font-bold">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                <span className="text-slate-500">Accessories</span>
              </div>
              <span className="text-slate-700">1,649 Unit</span>
            </div>
          </div>
        </div>

        {/* Transaction Table */}
        <div className="col-span-12 mt-2">
          <h4 className="text-sm font-bold text-slate-800 mb-4">Product Transaction</h4>
          <div className="overflow-hidden rounded-lg border border-slate-100 bg-slate-50/50">
            <table className="w-full text-left">
              <thead className="text-[9px] font-bold text-slate-400 uppercase bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="px-3 py-2">Order ID</th>
                  <th className="px-3 py-2">Product Name</th>
                  <th className="px-3 py-2">Date</th>
                  <th className="px-3 py-2 text-right">Price</th>
                  <th className="px-3 py-2 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="text-[9px] font-medium text-slate-600 divide-y divide-slate-100">
                {[
                  { id: '#ZOP980131-9N', name: 'Premium Plan', date: '13 Feb, 2025', price: '$449', status: 'Unpaid', statusColor: 'bg-rose-50 text-rose-500' },
                  { id: '#ZOP980130-8N', name: 'Enterprise License', date: '13 Feb, 2025', price: '$1,198', status: 'Pending', statusColor: 'bg-amber-50 text-amber-500' },
                  { id: '#ZOP980129-7N', name: 'Basic Subscription', date: '13 Feb, 2025', price: '$999', status: 'Paid', statusColor: 'bg-emerald-50 text-emerald-500' },
                ].map((row, idx) => (
                  <tr key={idx} className="bg-white">
                    <td className="px-3 py-2 font-bold text-slate-800">{row.id}</td>
                    <td className="px-3 py-2 flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-slate-100"></div>
                      {row.name}
                    </td>
                    <td className="px-3 py-2">{row.date}</td>
                    <td className="px-3 py-2 text-right font-bold">${row.price}</td>
                    <td className="px-3 py-2 text-center">
                      <span className={`px-2 py-0.5 rounded-full font-bold uppercase text-[7px] ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;