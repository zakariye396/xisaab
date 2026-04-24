import React from 'react';
import { cn } from '../lib/utils';
import { useStore } from '../store/useStore';

const navItems = [
  'Dashboard', 'Banking', 'Sales', 'Expenses', 'Workers', 'Reports', 
  'Taxes', 'Accounting', 'My Accountant', 'Apps'
];

export function Sidebar() {
  const { currentView, setCurrentView } = useStore();

  return (
    <div className="w-[190px] bg-white border-r border-gray-200 shrink-0 h-full overflow-y-auto flex flex-col pt-3 shadow-[1px_0_5px_rgba(0,0,0,0.02)]">
      {navItems.map((item) => (
        <div key={item}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentView(item);
            }}
            className={cn(
              "block px-5 py-[12px] text-[13px] font-medium transition-colors border-l-4",
              currentView === item 
                ? "bg-slate-50 border-[#2ca01c] text-[#393a3d]" 
                : "border-transparent text-[#393a3d] hover:bg-slate-50 hover:text-black"
            )}
          >
            {item}
          </a>
          {item === 'Apps' && (
            <div className="mt-8 px-5">
              <a href="#" className="text-[13px] text-blue-600 hover:underline">Card Reader</a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
