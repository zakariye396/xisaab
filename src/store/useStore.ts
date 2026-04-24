import { create } from 'zustand';

export interface Invoice {
  id: string;
  customer: string;
  amount: number;
  status: 'Paid' | 'Unpaid' | 'Overdue';
  date: string;
}

export interface BankAccount {
  id: string;
  name: string;
  type: string;
  balance: number;
  inQuickBooks: number;
}

interface CashFlowData {
  month: string;
  income: number;
  expenses: number;
}

interface StoreState {
  currentView: string;
  setCurrentView: (view: string) => void;
  invoices: Invoice[];
  addInvoice: (invoice: Omit<Invoice, 'id'>) => void;
  bankAccounts: BankAccount[];
  cashFlow: CashFlowData[];
  kpis: {
    netIncome: number;
    expenses: number;
    income: number;
    unpaidInvoices: number;
  };
}

export const useStore = create<StoreState>((set) => ({
  currentView: 'Dashboard',
  setCurrentView: (view) => set({ currentView: view }),
  invoices: [
    { id: '1', customer: 'Acme Corp', amount: 4500, status: 'Paid', date: '2026-04-18' },
    { id: '2', customer: 'Global Tech', amount: 1525.50, status: 'Overdue', date: '2026-03-15' },
    { id: '3', customer: 'Local Bakery', amount: 3756.02, status: 'Unpaid', date: '2026-04-20' },
  ],
  addInvoice: (invoice) => set((state) => ({
    invoices: [{ ...invoice, id: Date.now().toString() }, ...state.invoices]
  })),
  bankAccounts: [
    { id: '1', name: 'Checking', type: 'Checking', balance: 2435.65, inQuickBooks: 16987.43 },
    { id: '2', name: 'Savings', type: 'Savings', balance: 18267.90, inQuickBooks: 6900.02 },
  ],
  cashFlow: [
    { month: 'Jan', income: 45000, expenses: 32000 },
    { month: 'Feb', income: 52000, expenses: 31000 },
    { month: 'Mar', income: 48000, expenses: 35000 },
    { month: 'Apr', income: 61000, expenses: 38000 },
    { month: 'May', income: 59000, expenses: 40000 },
    { month: 'Jun', income: 65000, expenses: 42000 },
    { month: 'Jul', income: 72000, expenses: 45000 },
    { month: 'Aug', income: 68000, expenses: 43000 },
    { month: 'Sep', income: 75000, expenses: 48000 },
    { month: 'Oct', income: 81000, expenses: 50000 },
    { month: 'Nov', income: 84000, expenses: 52000 },
    { month: 'Dec', income: 92000, expenses: 54000 },
  ],
  kpis: {
    netIncome: 38000,
    expenses: 54000,
    income: 92000,
    unpaidInvoices: 12500,
  }
}));
