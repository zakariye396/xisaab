import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { Plus, X } from 'lucide-react';

export function Sales() {
  const invoices = useStore(state => state.invoices);
  const addInvoice = useStore(state => state.addInvoice);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    customer: '',
    amount: '',
    status: 'Unpaid' as 'Paid' | 'Unpaid' | 'Overdue',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.customer && formData.amount) {
      addInvoice({
        customer: formData.customer,
        amount: parseFloat(formData.amount),
        status: formData.status,
        date: formData.date
      });
      setIsModalOpen(false);
      setFormData({ customer: '', amount: '', status: 'Unpaid', date: new Date().toISOString().split('T')[0] });
    }
  };

  return (
    <div className="p-8 h-full bg-slate-50 text-[#393a3d]">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[26px] font-semibold tracking-tight">Sales & Invoices</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-[#2ca01c] hover:bg-[#1f7214] text-white rounded-full text-sm font-medium transition-colors"
        >
          <Plus className="w-4 h-4 mr-1" /> Create New Invoice
        </button>
      </div>

      <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="py-3 px-6 text-[13px] font-semibold text-gray-600">Date</th>
              <th className="py-3 px-6 text-[13px] font-semibold text-gray-600">Customer</th>
              <th className="py-3 px-6 text-[13px] font-semibold text-gray-600">Status</th>
              <th className="py-3 px-6 text-[13px] font-semibold text-gray-600 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map(invoice => (
              <tr key={invoice.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-sm text-gray-500">{invoice.date}</td>
                <td className="py-4 px-6 text-sm font-medium text-[#393a3d]">{invoice.customer}</td>
                <td className="py-4 px-6 text-sm">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide
                    ${invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                      invoice.status === 'Overdue' ? 'bg-orange-100 text-orange-800' : 'bg-gray-100 text-gray-800'}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-right font-medium text-[#393a3d]">
                  ${invoice.amount.toLocaleString('en-US', {minimumFractionDigits: 2})}
                </td>
              </tr>
            ))}
            {invoices.length === 0 && (
              <tr>
                <td colSpan={4} className="py-8 text-center text-gray-500 text-sm">No invoices found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-[#393a3d]">Create Invoice</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                <input 
                  type="text" required 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ca01c] focus:border-transparent" 
                  value={formData.customer} onChange={e => setFormData({...formData, customer: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount ($)</label>
                <input 
                  type="number" step="0.01" required 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ca01c] focus:border-transparent" 
                  value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input 
                    type="date" required 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ca01c] focus:border-transparent" 
                    value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2ca01c] focus:border-transparent"
                    value={formData.status} onChange={e => setFormData({...formData, status: e.target.value as any})}
                  >
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                    <option value="Overdue">Overdue</option>
                  </select>
                </div>
              </div>
              <div className="pt-4 mt-2 flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-[#2ca01c] hover:bg-[#1f7214] text-white rounded-full text-sm font-medium transition-colors">
                  Save Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
