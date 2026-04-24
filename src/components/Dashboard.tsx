import React from 'react';
import { ChevronDown } from 'lucide-react';
import { PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis } from 'recharts';

export function Dashboard() {
  const expensesData = [
    { name: 'Meal & Entertainment', value: 1456654, color: '#00778b' },
    { name: 'Rent & Mortgage', value: 302654, color: '#0097a7' },
    { name: 'Automotive', value: 189342, color: '#00bcc2' },
    { name: 'Travel Expenses', value: 14598, color: '#33d6db' },
  ];

  const salesData = [
    { month: 'Jan', value: 30000 },
    { month: 'Feb', value: 25000 },
    { month: 'Mar', value: 45000 },
  ];

  const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
    <div className={`bg-white border border-[#eceef1] shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] flex flex-col p-6 h-[340px] ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="p-8 h-full flex flex-col bg-[#f4f5f8] text-[#393a3d] min-w-[700px] font-sans">
      
      {/* Header Area */}
      <div className="flex items-center justify-between mb-8 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-[#8d9096] rounded-full flex items-center justify-center mr-4 shrink-0 overflow-hidden relative shadow-inner">
            <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-white/30 rounded-full transform -translate-y-1/2"></div>
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-white/40 rounded-full"></div>
            <div className="text-white font-bold opacity-0">C</div>
          </div>
          <h1 className="text-[26px] tracking-tight font-semibold text-[#393a3d]">Caplener Construction</h1>
        </div>
        
        <div className="flex items-center text-sm font-medium">
          <div className="flex items-center cursor-pointer group">
            <span className="text-blue-600 mr-4 group-hover:underline text-[13px]">Resume setup</span>
            <div className="w-10 h-[3px] bg-gray-300 rounded mr-6 relative overflow-hidden"><div className="w-1/3 h-full bg-blue-600 absolute left-0 top-0"></div></div>
          </div>
          <div className="flex items-center border-l border-gray-300 pl-6 cursor-pointer">
            <span className="mr-3 text-[#393a3d] text-[11px] font-semibold tracking-wide uppercase">PRIVACY</span>
            <div className="w-10 h-5 rounded-full relative transition-colors bg-[#6b6c72]">
              <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.2)]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pb-8">
        
        {/* Invoices */}
        <Card>
          <h3 className="text-[17px] font-medium text-[#393a3d] mb-4">Invoices</h3>
          
          <div className="flex flex-col flex-1 pb-4 border-b border-[#eceef1]">
            <div className="flex justify-between items-end mb-1">
              <span className="text-[12px] font-bold text-[#393a3d]">$5,281.52 UNPAID</span>
              <span className="text-[11px] text-gray-400 uppercase tracking-wide">Last 365 Days</span>
            </div>
            <div className="flex justify-between mb-3 mt-1">
              <div>
                <div className="text-[28px] font-[500] leading-none mb-1 text-[#393a3d]">$1,525.50</div>
                <div className="text-[12px] text-gray-400 uppercase tracking-wide">OVERDUE</div>
              </div>
              <div className="text-right">
                <div className="text-[28px] font-[500] leading-none mb-1 text-[#393a3d]">$3,756.02</div>
                <div className="text-[12px] text-gray-400 uppercase tracking-wide">NOT DUE YET</div>
              </div>
            </div>
            <div className="flex h-[22px] w-full mt-auto">
              <div className="bg-[#e98300] h-full" style={{ width: '40%' }}></div>
              <div className="bg-[#d4d7dc] h-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          
          <div className="flex flex-col flex-1 pt-4">
            <div className="flex justify-between items-end mb-1">
              <span className="text-[12px] font-bold text-[#393a3d]">$3,692.22 PAID</span>
              <span className="text-[11px] text-gray-400 uppercase tracking-wide">Last 30 Days</span>
            </div>
            <div className="flex justify-between mb-3 mt-1">
              <div>
                <div className="text-[28px] font-[500] leading-none mb-1 text-gray-400">$2,062.52</div>
                <div className="text-[12px] text-gray-400 uppercase tracking-wide">NOT DEPOSITED</div>
              </div>
              <div className="text-right">
                <div className="text-[28px] font-[500] leading-none mb-1 text-[#393a3d]">$1,629.70</div>
                <div className="text-[12px] text-gray-400 uppercase tracking-wide">DEPOSITED</div>
              </div>
            </div>
            <div className="flex h-[22px] w-full gap-1 mt-auto">
              <div className="bg-[#78d300] h-full" style={{ width: '55%' }}></div>
              <div className="bg-[#46a31d] h-full" style={{ width: '45%' }}></div>
            </div>
          </div>
        </Card>

        {/* Expenses */}
        <Card>
          <div className="flex justify-between items-center mb-4">
             <h3 className="text-[17px] font-medium text-[#393a3d]">Expenses</h3>
             <div className="text-[12px] text-gray-500 flex items-center cursor-pointer hover:text-[#393a3d] transition-colors">Last month <ChevronDown className="w-3.5 h-3.5 ml-1" /></div>
          </div>
          <div className="text-[34px] font-[500] leading-none mb-1.5 text-[#393a3d]">$467,121</div>
          <div className="text-[12px] text-gray-400 uppercase tracking-wide mb-6">LAST MONTH</div>
          
          <div className="flex items-center -ml-4 flex-1">
            <div className="w-[180px] h-full relative">
               <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                   <Pie
                     data={expensesData}
                     cx="50%"
                     cy="50%"
                     innerRadius={45}
                     outerRadius={65}
                     paddingAngle={2}
                     dataKey="value"
                     stroke="none"
                   >
                     {expensesData.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={entry.color} />
                     ))}
                   </Pie>
                 </PieChart>
               </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-4">
               {expensesData.map((item, idx) => (
                 <div key={idx} className="flex flex-col">
                   <div className="flex items-start">
                     <div className="w-3 h-3 mt-1 mr-2 shrink-0" style={{ backgroundColor: item.color }}></div>
                     <div className="text-[15px] font-[500] text-[#393a3d] leading-none">${(item.value).toLocaleString()}</div>
                   </div>
                   <div className="text-[11px] text-gray-400 pl-5 leading-none mt-1 line-clamp-1">{item.name}</div>
                 </div>
               ))}
            </div>
          </div>
        </Card>

        {/* Bank accounts */}
        <Card>
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-[17px] font-medium text-[#393a3d]">Bank accounts</h3>
          </div>
          <div className="mb-8">
            <div className="font-semibold text-[13px] text-[#393a3d] mb-3">Checking</div>
            <div className="flex justify-between text-[13px] text-[#6b6c72] mb-1.5"><span>Bank Balance</span><span>$2,435.65</span></div>
            <div className="flex justify-between text-[13px] text-[#393a3d]"><span>In QuickBooks</span><span>$16,987.43</span></div>
          </div>
          <div className="mb-6">
            <div className="font-semibold text-[13px] text-[#393a3d] mb-3">Savings</div>
            <div className="flex justify-between text-[13px] text-[#6b6c72] mb-1.5"><span>Bank Balance</span><span>$18,267.90</span></div>
            <div className="flex justify-between text-[13px] text-[#393a3d]"><span>In QuickBooks</span><span>$6,900.02</span></div>
          </div>
          <div className="border-t border-[#eceef1] mt-auto pt-4 flex justify-between items-center">
             <a href="#" className="text-[#0077c5] text-[13px] font-medium hover:underline">Connect accounts</a>
             <a href="#" className="text-[#393a3d] flex items-center text-[13px] font-medium hover:underline">Go to registers <ChevronDown className="w-3.5 h-3.5 ml-1" /></a>
          </div>
        </Card>

        {/* Profit and Loss */}
        <Card>
          <div className="flex justify-between items-center mb-3">
             <h3 className="text-[17px] font-medium text-[#393a3d]">Profit and Loss</h3>
             <div className="text-[12px] text-gray-500 flex items-center cursor-pointer hover:text-[#393a3d] transition-colors">Last month <ChevronDown className="w-3.5 h-3.5 ml-1" /></div>
          </div>
          <div className="text-[34px] font-[500] leading-none mb-1.5 text-[#393a3d]">$23,876</div>
          <div className="text-[12px] text-gray-400 uppercase tracking-wide mb-8">NET INCOME FOR MARCH</div>
          
          <div className="space-y-6 mt-auto mb-2">
            <div className="flex items-end mb-1">
              <div className="w-24 shrink-0 flex flex-col justify-end pr-2">
                <div className="text-[16px] font-[500] text-[#393a3d] leading-tight mb-1">$763,432</div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wide">INCOME</div>
              </div>
              <div className="flex-1 flex h-[28px] mb-0.5">
                <div className="bg-[#78d300] h-full relative z-10" style={{ width: '68%' }}>
                   <div className="absolute top-0 bottom-0 right-[-8px] w-4 bg-[#78d300] transform skew-x-[-15deg]"></div>
                </div>
                <div className="h-full w-[20%] ml-[2px] border-y-2 border-r-2 border-[#78d300] border-dashed opacity-50 relative"></div>
              </div>
            </div>
            
            <div className="flex items-end mb-1">
              <div className="w-24 shrink-0 flex flex-col justify-end pr-2">
                <div className="text-[16px] font-[500] text-[#393a3d] leading-tight mb-1">$724,654</div>
                <div className="text-[11px] text-gray-400 uppercase tracking-wide">EXPENSES</div>
              </div>
              <div className="flex-1 flex h-[28px] mb-0.5">
                <div className="bg-[#0097a7] h-full relative z-10" style={{ width: '70%' }}>
                  <div className="absolute top-0 bottom-0 right-[-8px] w-4 bg-[#0097a7] transform skew-x-[15deg]"></div>
                </div>
                <div className="h-full w-[12%] ml-[2px] banner-stripes-teal opacity-60"></div>
              </div>
            </div>
          </div>
        </Card>

        {/* Sales */}
        <Card>
          <div className="flex justify-between items-center mb-3">
             <h3 className="text-[17px] font-medium text-[#393a3d]">Sales</h3>
             <div className="text-[12px] text-gray-500 flex items-center cursor-pointer hover:text-[#393a3d] transition-colors">Last month <ChevronDown className="w-3.5 h-3.5 ml-1" /></div>
          </div>
          <div className="text-[34px] font-[500] leading-none mb-1.5 text-[#393a3d]">$467,121</div>
          <div className="text-[12px] text-gray-400 uppercase tracking-wide mb-6">THIS QUARTER</div>
          
          <div className="flex-1 w-[105%] -ml-2 -mb-2">
             <ResponsiveContainer width="100%" height="100%">
               <LineChart data={salesData} margin={{ top: 20, right: 10, left: -20, bottom: 5 }}>
                 <CartesianGrid vertical={false} stroke="#eceef1" />
                 <XAxis dataKey="month" hide />
                 <YAxis 
                   axisLine={false} 
                   tickLine={false} 
                   tick={{ fill: '#6b6c72', fontSize: 11 }}
                   tickFormatter={(val) => `${val/1000}K`}
                 />
                 <Line 
                   type="linear" 
                   dataKey="value" 
                   stroke="#78d300" 
                   strokeWidth={2} 
                   dot={{ r: 3.5, fill: '#fff', stroke: '#78d300', strokeWidth: 2 }} 
                   activeDot={{ r: 5 }} 
                   isAnimationActive={false}
                 />
               </LineChart>
             </ResponsiveContainer>
          </div>
        </Card>

        {/* Discover */}
        <Card>
          <h3 className="text-[17px] font-medium text-[#393a3d] mb-4">Discover</h3>
          <div className="flex flex-col items-center justify-center py-5">
            <svg className="w-[120px] h-[80px]" viewBox="0 0 100 70" fill="none">
               <rect x="20" y="10" width="60" height="42" rx="2" stroke="#d4d7dc" strokeWidth="2" fill="none" />
               <path d="M15 58 L85 58 C87 58 87 62 85 62 L15 62 C13 62 13 58 15 58 Z" stroke="#d4d7dc" strokeWidth="2" fill="none" />
               <circle cx="50" cy="31" r="11" stroke="#78d300" strokeWidth="1.5" fill="#f4f5f8" />
               <polygon points="47,26 47,36 55,31" fill="#78d300" />
            </svg>
          </div>
          <div className="mt-auto">
            <h4 className="text-[15px] text-[#393a3d] font-semibold mb-1 tracking-tight">Is QuickBooks Payroll for you?</h4>
            <p className="text-[13px] text-[#6b6c72] leading-snug mb-3">Learn more about how QuickBooks Payroll works in this short one minute video.</p>
            <a href="#" className="text-[#0077c5] text-[13px] font-semibold hover:underline">Watch now</a>
          </div>
        </Card>

      </div>
    </div>
  );
}