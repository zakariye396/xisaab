import React from 'react';
import { Search, Plus, Bell, Settings, HelpCircle, Menu } from 'lucide-react';

export function TopNav() {
  return (
    <header className="flex flex-shrink-0 items-center justify-between h-[56px] px-5 bg-[#393a3d] text-white">
      <div className="flex items-center space-x-6 min-w-[200px] h-full">
        <div className="flex items-center font-medium tracking-tight h-full">
          <div className="w-[24px] h-[24px] rounded-full bg-[#2ca01c] flex items-center justify-center text-white text-[12px] font-bold mr-2 ring-[1px] ring-white">qb</div>
          <span className="font-medium text-[20px] tracking-tight">quickbooks<span className="text-[10px] align-super">®</span></span>
        </div>
        <Menu className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
      </div>
      <div className="flex items-center space-x-6">
        <button className="w-7 h-7 rounded-full bg-[#515357] flex items-center justify-center hover:bg-gray-600 transition-colors">
          <Plus className="w-4 h-4 text-white" />
        </button>
        <Search className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
        <Settings className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
        <button className="flex items-center text-gray-300 hover:text-white group">
          <HelpCircle className="w-5 h-5 mr-1 group-hover:text-white" />
          <span className="text-[14px]">Help</span>
        </button>
        <Bell className="w-5 h-5 text-gray-300 cursor-pointer hover:text-white" />
      </div>
    </header>
  );
}
