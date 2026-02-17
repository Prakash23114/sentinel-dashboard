import React from 'react';

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-black flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Join Sentinel</h2>
        <p className="text-slate-500 mb-8 font-medium">Register your professional identity for model oversight.</p>

        <form className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Full Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="John Doe" />
          </div>
          
          <div className="col-span-2">
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Corporate Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="j.doe@bank.com" />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Password</label>
            <input type="password" size="1" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="••••••••" />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Role</label>
            <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none cursor-pointer">
              <option>ML Engineer</option>
              <option>Compliance Officer</option>
              <option>Model Risk Manager</option>
            </select>
          </div>

          <button className="col-span-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all">
            Initialize Account
          </button>
        </form>
        
        <p className="text-center mt-6 text-sm font-medium text-slate-500">
          Already registered? <span className="text-blue-600 cursor-pointer hover:underline">Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;