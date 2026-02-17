import React from 'react';
import { User, Mail, Shield, Edit3, Camera } from 'lucide-react';

const Profile = ({ user }) => {
  const data = user || {
    name: "Sarah Jenkins",
    email: "s.jenkins@sentinel-bank.com",
    role: "LLM Platform Engineer",
    dept: "AI Safety & Governance"
  };

  return (
    <div className="p-10 max-w-4xl mx-auto animate-in fade-in duration-700">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Profile Header */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-800"></div>
        
        <div className="px-10 pb-10">
          <div className="relative -mt-16 mb-6 flex justify-between items-end">
            <div className="relative">
              <div className="w-32 h-32 bg-slate-200 rounded-full border-4 border-white flex items-center justify-center text-slate-400 overflow-hidden shadow-inner">
                <User size={64} />
              </div>
              <button className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-md border border-slate-100 text-blue-600 hover:bg-blue-50">
                <Camera size={18} />
              </button>
            </div>
            <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md">
              <Edit3 size={18} /> Edit Profile
            </button>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">{data.name}</h1>
              <span className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wider">
                {data.role}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-50">
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Mail size={14} /> Email Identity
                </p>
                <p className="text-slate-800 font-semibold">{data.email}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Shield size={14} /> Organization Unit
                </p>
                <p className="text-slate-800 font-semibold">{data.dept}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;