import React from 'react';
import { useStore } from '../store/useStore';
import { Plus } from 'lucide-react';

export function Banking() {
  const bankAccounts = useStore(state => state.bankAccounts);

  return (
    <div className="p-8 h-full bg-slate-50 text-[#393a3d]">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[26px] font-semibold tracking-tight">Bank accounts</h1>
        <button className="flex items-center px-4 py-2 bg-[#2ca01c] hover:bg-[#1f7214] text-white rounded-full text-sm font-medium transition-colors">
          <Plus className="w-4 h-4 mr-1" /> Connect Bank
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {bankAccounts.map(account => (
          <div key={account.id} className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 flex flex-col">
            <h3 className="text-[18px] font-medium text-[#393a3d] mb-4">{account.name}</h3>
            
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">Bank Balance</span>
              <span className="text-sm font-medium text-gray-500">${account.balance.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
            </div>
            
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-sm text-[#393a3d] font-medium">In QuickBooks</span>
              <span className="text-sm text-[#393a3d] font-medium">${account.inQuickBooks.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
            </div>
            
            <div className="pt-4 mt-auto">
              <a href="#" className="text-[#0077c5] hover:underline text-sm font-medium">Update</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
