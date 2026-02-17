import React from 'react';
import { Bell, User, Sun, Search } from 'lucide-react';

const Navbar = ({ title, user, onProfileClick }) => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
      <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
      
      <div className="flex items-center gap-6">
        <div className="relative group hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search models..." 
            className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 w-64 transition-all"
          />
        </div>
        
        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
          <Bell size={22} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div 
          onClick={onProfileClick}
          className="flex items-center gap-3 pl-6 border-l border-slate-200 cursor-pointer group"
        >
          <div className="text-right">
            <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{user.name}</p>
            <p className="text-xs text-slate-500 font-medium">{user.role}</p>
          </div>
          <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold border-2 border-white shadow-sm">
            {user.name.charAt(0)}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;