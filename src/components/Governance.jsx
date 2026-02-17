import React from 'react';
import { ShieldAlert, FileText, CheckCircle } from 'lucide-react';

const Governance = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-slate-900">Governance & Risk</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 font-medium">Risk Level</p>
          <h3 className="text-2xl font-bold text-emerald-500">LOW</h3>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h4 className="font-bold">Audit Logs</h4>
        </div>
        <div className="p-12 text-center text-slate-400">
          Audit log data will appear here.
        </div>
      </div>
    </div>
  );
};

export default Governance;