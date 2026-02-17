import React from 'react';
import { Zap, Coins, Clock, UserCheck, ShieldAlert } from 'lucide-react';

const Metric = ({ icon: Icon, color, label, value, subtext }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
    <div className={`p-3 rounded-xl bg-${color}-50 text-${color}-600`}>
      <Icon size={24} />
    </div>
    <div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
      <p className="text-xs text-slate-400 mt-1 font-medium italic">{subtext}</p>
    </div>
  </div>
);

const LLMObservability = () => {
  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">LLM Observability</h1>
        <p className="text-slate-500 mt-1 uppercase text-xs font-bold tracking-widest">Model: GPT-4o-Enterprise</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Metric icon={Clock} color="blue" label="Avg Latency" value="1.2s" subtext="p95: 1.8s" />
        <Metric icon={Zap} color="orange" label="Token Usage" value="4.2M" subtext="Last 24h" />
        <Metric icon={Coins} color="emerald" label="Cost/Request" value="$0.024" subtext="Optimized" />
        <Metric icon={ShieldAlert} color="red" label="Hallucination" value="0.2%" subtext="Verified" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
          <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <UserCheck size={20} className="text-blue-600" /> Prompt Success Rate
          </h4>
          <div className="flex items-center justify-center h-48">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
                <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="364.4" strokeDashoffset="36.4" className="text-blue-600" />
              </svg>
              <span className="absolute text-xl font-bold">90%</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl text-white">
          <h4 className="font-bold mb-6 flex items-center gap-2">
            <ShieldAlert size={20} className="text-red-400" /> Policy Violations
          </h4>
          <ul className="space-y-4">
            {['PII Leakage Attempt', 'Toxicity Threshold Exceeded', 'Financial Advice Guardrail'].map((violation, i) => (
              <li key={i} className="flex items-center justify-between p-3 bg-slate-800 rounded-lg border border-slate-700">
                <span className="text-sm font-medium">{violation}</span>
                <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full font-bold uppercase">Blocked</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LLMObservability;