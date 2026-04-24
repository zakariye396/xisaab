import React from 'react';
import { useStore } from '../store/useStore';
import { TrendingUp, TrendingDown, DollarSign, FileText } from 'lucide-react';
import { cn } from '../lib/utils';

export function KPIStats() {
  const kpis = useStore((state) => state.kpis);

  const stats = [
    { 
      name: 'Total Income', 
      value: kpis.income, 
      change: '+12.5%', 
      isPositive: true,
      borderColor: 'border-l-emerald-500'
    },
    { 
      name: 'Total Expenses', 
      value: kpis.expenses, 
      change: '+4.2%', 
      isPositive: false,
      borderColor: 'border-l-red-500'
    },
    { 
      name: 'Net Income', 
      value: kpis.netIncome, 
      change: '+18.1%', 
      isPositive: true,
      borderColor: 'border-l-indigo-500'
    },
    { 
      name: 'Unpaid Invoices', 
      value: kpis.unpaidInvoices, 
      change: '-2.4%', 
      isPositive: true,
      borderColor: 'border-l-border-main'
    },
  ];

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat) => (
        <div key={stat.name} className={cn("bg-card border-y border-r border-border-main border-l-4 rounded-xl p-5 flex flex-col justify-center", stat.borderColor)}>
          <div className="text-[12px] text-text-dim uppercase tracking-[0.5px] mb-2">{stat.name}</div>
          <div className="font-mono text-[24px] font-semibold text-text-main">{formatCurrency(stat.value)}</div>
          <div className={cn("text-[12px] mt-2", stat.isPositive ? "text-positive" : "text-negative" )}>
            {stat.change} <span className="text-text-dim ml-1">vs last month</span>
          </div>
        </div>
      ))}
    </div>
  );
}
