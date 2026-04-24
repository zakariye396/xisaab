import React from 'react';
import { useStore } from '../store/useStore';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

export function CashFlowChart() {
  const data = useStore((state) => state.cashFlow);

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="bg-card p-6 rounded-xl border border-border-main flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[12px] text-text-dim uppercase tracking-[0.5px]">Cash Flow: Income vs Expenses</div>
        <select className="text-[13px] bg-bg border border-border-main text-text-dim rounded-md focus:ring-accent py-1.5 pl-3 pr-8 focus:border-accent">
          <option>Last 12 Months</option>
          <option>Year to Date</option>
          <option>Previous Year</option>
        </select>
      </div>
      <div className="flex-1 mt-2 min-h-[300px] border-b border-l border-border-main">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272A" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#A1A1AA', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#A1A1AA', fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}k`}
              dx={-10}
            />
            <Tooltip 
              formatter={(value: number) => formatCurrency(value)}
              contentStyle={{ borderRadius: '8px', border: '1px solid #27272A', backgroundColor: '#1C1C1F', color: '#FFF' }}
              itemStyle={{ color: '#FFF' }}
            />
            <Legend verticalAlign="top" height={36} iconType="circle" />
            <Area 
              type="monotone" 
              dataKey="income" 
              name="Income"
              stroke="#6366F1" 
              strokeWidth={3}
              fillOpacity={0.1} 
              fill="#6366F1" 
            />
            <Area 
              type="monotone" 
              dataKey="expenses" 
              name="Expenses"
              stroke="#4B5563" 
              strokeWidth={2}
              strokeDasharray="4"
              fillOpacity={0} 
              fill="none" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
