import React, { useState } from 'react';
import { 
  User, Mail, Shield, Lock, Smartphone, 
  History, Monitor, Download, Trash2, 
  Camera, CheckCircle2, ShieldCheck, 
  Fingerprint, Save, X, Loader2
} from 'lucide-react';

const Profile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  const [formData, setFormData] = useState(user || {
    name: "Sarah Jenkins",
    email: "s.jenkins@sentinel-bank.com",
    empId: "SENT-9921",
    role: "LLM Platform Engineer",
    dept: "AI Safety & Governance",
    lastLogin: "Feb 18, 2026, 08:02 AM"
  });

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API Call for Hackathon Demo
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Auto-hide toast
    }, 1200);
  };

  return (
    <div className="relative p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 🟢 WINNING TOUCH: Success Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-8 z-50 flex items-center gap-3 bg-emerald-600 text-white px-6 py-4 rounded-2xl shadow-2xl animate-in slide-in-from-right-full">
          <CheckCircle2 size={24} />
          <span className="font-black text-xs uppercase tracking-widest">Security Clearance Updated</span>
        </div>
      )}

      {/* 1️⃣ IDENTITY SECTION */}
      <section className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden">
        <div className="h-40 bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600 relative">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        
        <div className="px-10 pb-10">
          <div className="relative -mt-20 mb-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
            <div className="relative group">
              <div className="w-40 h-40 bg-white rounded-[2rem] p-1 shadow-2xl">
                <div className="w-full h-full bg-slate-50 rounded-[1.8rem] flex items-center justify-center text-slate-300 overflow-hidden border-2 border-slate-100">
                  <User size={80} />
                </div>
              </div>
              <button className="absolute -bottom-2 -right-2 bg-blue-600 p-3 rounded-2xl text-white shadow-xl border-4 border-white hover:bg-blue-700 transition-all hover:scale-110 active:scale-95">
                <Camera size={18} />
              </button>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">{formData.name}</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-xl text-[10px] font-black border border-blue-100 uppercase tracking-widest shadow-sm">
                  <ShieldCheck size={14} /> {formData.role}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl text-[10px] font-black border border-emerald-100 uppercase tracking-widest">
                  Level 4 Clearance
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              {isEditing ? (
                <>
                  <button onClick={() => setIsEditing(false)} className="px-6 py-3 text-slate-500 font-black text-xs uppercase tracking-widest hover:text-slate-800 transition-all">
                    Cancel
                  </button>
                  <button 
                    onClick={handleSave} 
                    disabled={isSaving}
                    className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-200 hover:bg-blue-700 disabled:opacity-70 transition-all"
                  >
                    {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                    {isSaving ? 'Processing...' : 'Secure Changes'}
                  </button>
                </>
              ) : (
                <button 
                    onClick={() => setIsEditing(true)} 
                    className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/20"
                >
                  Modify Identity
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Legal Designation</label>
              <input 
                type="text" 
                disabled={!isEditing}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full rounded-2xl px-5 py-4 text-slate-800 font-bold transition-all outline-none border-2 ${isEditing ? 'bg-white border-blue-200 focus:border-blue-500 shadow-inner' : 'bg-slate-50 border-transparent cursor-not-allowed'}`}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Corporate Node</label>
              <div className="flex items-center gap-4 px-5 py-4 bg-slate-50 rounded-2xl text-slate-500 font-bold border-2 border-transparent">
                <Mail size={20} className="text-slate-300" />
                {formData.email}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Governance Serial</label>
              <div className="flex items-center gap-4 px-5 py-4 bg-slate-50 rounded-2xl text-slate-500 font-bold border-2 border-transparent">
                <Fingerprint size={20} className="text-slate-300" />
                {formData.empId}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 2️⃣ SECURITY PROTOCOLS */}
        <section className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-4 uppercase tracking-tighter">
            <Lock size={24} className="text-blue-600" /> Security Matrix
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-6 bg-blue-50/50 border-2 border-blue-100 rounded-[1.5rem] group cursor-pointer hover:bg-blue-50 transition-all">
                <div className="flex items-center gap-5">
                    <div className="p-4 bg-white rounded-2xl shadow-sm text-blue-600">
                        <Smartphone size={24} />
                    </div>
                    <div>
                        <p className="font-black text-slate-800 text-sm">Biometric 2FA</p>
                        <p className="text-[10px] text-emerald-600 font-black uppercase tracking-widest mt-1">Status: Secured</p>
                    </div>
                </div>
                <div className="w-14 h-7 bg-emerald-500 rounded-full relative p-1 shadow-inner">
                    <div className="w-5 h-5 bg-white rounded-full ml-auto shadow-md"></div>
                </div>
            </div>

            <button className="w-full flex items-center justify-between p-6 bg-slate-50 border-2 border-transparent rounded-[1.5rem] hover:border-slate-200 transition-all group">
                <span className="font-black text-slate-700 text-sm uppercase tracking-widest">Update Cryptographic Key</span>
                <History size={20} className="text-slate-400 group-hover:rotate-180 transition-transform duration-500" />
            </button>
          </div>
        </section>

        {/* 3️⃣ ACTIVE TERMINALS */}
        <section className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
          <h3 className="text-xl font-black text-slate-900 flex items-center gap-4 uppercase tracking-tighter">
            <Monitor size={24} className="text-blue-600" /> Authorized Terminals
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between p-6 bg-slate-50 rounded-[1.5rem] border-l-8 border-emerald-500">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-white rounded-2xl text-blue-600 shadow-sm">
                  <Monitor size={24} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-800 tracking-wide">Workstation Sentinel-X</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{formData.lastLogin}</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-500 text-white text-[9px] font-black uppercase rounded-lg tracking-widest">Live</span>
            </div>
            
            <button className="w-full py-5 text-[10px] font-black text-red-500 border-2 border-red-50 border-dashed rounded-[1.5rem] hover:bg-red-50 hover:border-red-100 transition-all uppercase tracking-[0.2em]">
              Kill All Remote Sessions
            </button>
          </div>
        </section>
      </div>

      {/* 4️⃣ EXPORT & DESTRUCTIVE ACTIONS */}
      <section className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col lg:flex-row justify-between items-center gap-8 border border-white/10 shadow-3xl shadow-blue-900/40">
        <div className="text-center lg:text-left">
          <h4 className="font-black text-2xl uppercase tracking-tighter mb-2">Compliance Audit Export</h4>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed font-medium">Generate an encrypted PDF log of all LLM model interactions and governance approvals for your annual review.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl font-black text-xs transition-all uppercase tracking-widest shadow-xl shadow-blue-600/20">
            <Download size={20} /> Generate Audit PDF
          </button>
          <button className="flex items-center gap-3 px-10 py-5 bg-white/5 hover:bg-red-600/20 text-slate-400 hover:text-red-400 rounded-2xl font-black text-xs transition-all uppercase tracking-widest border border-white/10">
            <Trash2 size={20} /> Request Archive
          </button>
        </div>
      </section>

    </div>
  );
};

export default Profile;