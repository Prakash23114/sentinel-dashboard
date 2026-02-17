import React from 'react';

const Login = ({ onNavigate, onLogin }) => {
  const roles = [
    "Chief Data Officer",
    "Model Risk Manager",
    "ML Engineer",
    "LLM Platform Engineer",
    "Compliance Officer"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-black flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden p-10 border border-white/10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-blue-600 w-16 h-16 rounded-2xl shadow-lg shadow-blue-500/30 mb-4">
            <div className="w-8 h-8 border-4 border-white rounded-md rotate-45"></div>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">SENTINEL</h1>
          <p className="text-slate-500 text-sm font-medium">Enterprise AI Governance Portal</p>
        </div>

        {/* Prevent page reload and trigger the 'onLogin' function to enter dashboard */}
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Corporate Email</label>
            <input type="email" placeholder="name@enterprise.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Access Role</label>
            <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none appearance-none cursor-pointer">
              {roles.map(role => <option key={role}>{role}</option>)}
            </select>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]">
            Authorize Access
          </button>
        </form>

        <div className="mt-8 flex justify-between text-sm font-bold">
          <button 
            onClick={() => onNavigate('forgot-password')} 
            className="text-blue-600 hover:text-blue-800"
          >
            Forgot Password?
          </button>
          <button 
            onClick={() => onNavigate('signup')} 
            className="text-slate-400 hover:text-slate-600"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;