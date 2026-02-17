import React from 'react';
import { ArrowLeft } from 'lucide-react';

// Accept onNavigate as a prop
const ForgotPassword = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-10 border border-slate-100">
        {/* Update this button to use onNavigate */}
        <button 
          onClick={() => onNavigate('login')}
          className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors mb-6 font-bold text-sm"
        >
          <ArrowLeft size={16} /> BACK TO LOGIN
        </button>
        
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Recover Access</h2>
        <p className="text-slate-500 mb-8">Enter your corporate email to receive a secure recovery link.</p>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2 tracking-widest">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="identity@enterprise.com" />
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md transition-all">
            Send Reset Instructions
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;