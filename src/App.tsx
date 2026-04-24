/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sidebar } from "./components/Sidebar";
import { TopNav } from "./components/TopNav";
import { Dashboard } from "./components/Dashboard";
import { Banking } from "./components/Banking";
import { Sales } from "./components/Sales";
import { Expenses } from "./components/Expenses";
import { Reports } from "./components/Reports";
import { useStore } from "./store/useStore";

export default function App() {
  const currentView = useStore((state) => state.currentView);

  const renderView = () => {
    switch (currentView) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Banking':
        return <Banking />;
      case 'Sales':
        return <Sales />;
      case 'Expenses':
        return <Expenses />;
      case 'Reports':
        return <Reports />;
      default:
        return (
          <div className="p-8 h-full bg-slate-50 text-[#393a3d]">
            <h1 className="text-[26px] font-semibold tracking-tight mb-8">{currentView}</h1>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-gray-500">This module is under construction.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 text-[#393a3d] overflow-hidden font-sans">
      <TopNav />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          {renderView()}
        </main>
      </div>
    </div>
  );
}
