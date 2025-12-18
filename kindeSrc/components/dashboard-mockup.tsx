import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, PieChart, Pie, Cell 
} from 'recharts';
import { MoreHorizontal, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const data = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 2000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];

const pieData = [
  { name: 'Smartphones', value: 3849, color: '#4f46e5' },
  { name: 'Laptops', value: 750, color: '#818cf8' },
  { name: 'Accessories', value: 1649, color: '#c7d2fe' },
];

const DashboardMockup: React.FC = () => {
  return (
    <div className="bg-white  rounded-2xl shadow-2xl p-5 w-full overflow-hidden border border-white/20 select-none pointer-events-none scale-[0.85] origin-center">
      <div className="grid grid-cols-12 gap-4">
        
        {/* Top Widgets */}
        <div className="col-span-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Sales</p>
              <h3 className="text-2xl font-bold text-slate-800">$189,374</h3>
            </div>
            <div className="p-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
              <MoreHorizontal size={14} className="text-slate-400" />
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="flex items-center text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">
              <ArrowUpRight size={10} className="mr-0.5" /> 7%
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
              <MoreHorizontal size={14} className="text-slate-400" />
            </div>
          </div>
          <div className="h-12 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <Area type="monotone" dataKey="sales" stroke="#3b82f6" fillOpacity={1} fill="url(#colorSales)" />
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Profit</p>
              <h3 className="text-2xl font-bold text-slate-800">$25,684</h3>
            </div>
            <div className="p-1.5 bg-white rounded-lg shadow-sm border border-slate-100">
              <MoreHorizontal size={14} className="text-slate-400" />
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="flex items-center text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">
              <ArrowUpRight size={10} className="mr-0.5" /> 5%
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
          <div className="h-32 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-4 bg-white p-4 rounded-xl border border-slate-100 relative">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-bold text-slate-800">Sales Categories</h4>
          </div>
          <div className="flex items-center justify-center">
             <div className="h-32 w-full flex items-center justify-center">
                <PieChart width={120} height={120}>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={50}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="absolute inset-0 flex flex-col items-center justify-center mt-6">
                  <span className="text-[8px] font-bold text-slate-400">Total Sales</span>
                  <span className="text-xs font-extrabold text-slate-800">6,248 Units</span>
                </div>
             </div>
          </div>
          <div className="space-y-1.5 mt-2">
            {pieData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-[8px] font-bold">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-slate-500">{item.name}</span>
                </div>
                <span className="text-slate-700">{item.value.toLocaleString()} Unit</span>
              </div>
            ))}
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
