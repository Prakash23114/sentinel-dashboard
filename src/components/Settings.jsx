import React from 'react';
import { Lock, Key, Bell, Save } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
          <p className="text-slate-500">Manage your enterprise AI portal configurations</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
          <Save size={18} /> Save Changes
        </button>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4 border-b pb-4">
            <Lock className="text-blue-600" size={20} />
            <h3 className="font-bold text-slate-800">Security</h3>
          </div>
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div>
              <p className="font-bold">Two-Factor Authentication</p>
              <p className="text-xs text-slate-500">Add an extra layer of security</p>
            </div>
            <div className="w-12 h-6 bg-blue-600 rounded-full p-1 cursor-pointer flex items-center justify-end">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4 border-b pb-4">
            <Key className="text-blue-600" size={20} />
            <h3 className="font-bold text-slate-800">API Access</h3>
          </div>
          <div className="p-4 bg-slate-900 rounded-xl flex justify-between items-center">
            <code className="text-blue-400 text-sm">sk_sentinel_••••••••••••4j2k</code>
            <button className="text-white text-xs bg-slate-700 px-3 py-1 rounded hover:bg-slate-600">Reveal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;