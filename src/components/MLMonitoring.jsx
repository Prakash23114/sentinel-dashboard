import React from 'react';
import { TrendingDown, Download, RefreshCw, AlertTriangle, ShieldCheck } from 'lucide-react';

const StatCard = ({ label, value, trend, isNegative }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
    <p className="text-sm font-medium text-slate-500 mb-1">{label}</p>
    <div className="flex items-end justify-between">
      <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
      <span className={`text-xs font-bold px-2 py-1 rounded-lg ${isNegative ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'}`}>
        {trend}
      </span>
    </div>
  </div>
);

const MLMonitoring = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Traditional ML Dashboard</h1>
          <p className="text-slate-500 mt-1">Monitoring Fraud Detection & Credit Scoring Pipelines</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50">
            <Download size={18} /> Export Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-xl font-semibold text-white hover:bg-blue-700 shadow-lg shadow-blue-200">
            <RefreshCw size={18} /> Retrain Model
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Model Accuracy" value="94.2%" trend="+0.4%" />
        <StatCard label="Precision" value="91.8%" trend="-1.2%" isNegative />
        <StatCard label="Recall" value="89.5%" trend="+2.1%" />
        <StatCard label="F1 Score" value="90.6%" trend="+0.8%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm min-h-[400px]">
          <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <TrendingDown size={20} className="text-blue-500" /> Model Accuracy Decay (30 Days)
          </h4>
          <div className="w-full h-64 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">
            [Interactive Chart Component Integration Area]
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm border-l-4 border-l-orange-400">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-slate-800 flex items-center gap-2">
                <AlertTriangle size={18} className="text-orange-500" /> Drift Detection
              </h4>
              <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Moderate</span>
            </div>
            <p className="text-sm text-slate-500 mb-4">Feature "transaction_amount" showing 12% covariate shift.</p>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-orange-400 h-full w-[65%]"></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm border-l-4 border-l-blue-600">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <ShieldCheck size={18} className="text-blue-600" /> Bias Score
            </h4>
            <div className="flex items-center justify-between text-2xl font-black text-slate-800">
              <span>0.98</span>
              <span className="text-xs text-emerald-500 uppercase">Within Compliance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLMonitoring;