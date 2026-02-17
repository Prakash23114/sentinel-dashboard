import React from 'react';
import { LayoutDashboard, Activity, Eye, ShieldCheck, LogOut, Cpu, Globe } from 'lucide-react';

const Sidebar = ({ activePage, setActivePage, onSignOut }) => { // onSignOut yahan add kiya
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={20} /> },
    { id: 'ml-monitoring', label: 'ML Monitoring', icon: <Activity size={20} /> },
    { id: 'llm-observability', label: 'LLM Observability', icon: <Eye size={20} /> },
    { id: 'governance', label: 'Governance & Risk', icon: <ShieldCheck size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Globe size={20} /> },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white flex flex-col border-r border-slate-800">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Cpu size={24} className="text-white" />
        </div>
        <h1 className="text-xl font-bold tracking-tight">SENTINEL</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activePage === item.id
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800/50 p-4 rounded-xl mb-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-emerald-500">SYSTEM STATUS: OK</span>
          </div>
          <p className="text-[10px] text-slate-500 uppercase tracking-wider">All nodes operational</p>
        </div>
        
        {/* Sign Out Button Update */}
        <button 
          onClick={onSignOut} 
          className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 transition-colors group"
        >
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;