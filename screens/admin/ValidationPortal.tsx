
import React from 'react';
import Card from '../../components/Card';
import { MOCK_SUBMISSIONS } from '../../constants';

const ValidationPortal: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-amber-500/10 border border-amber-500/20 p-6 rounded-3xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-4xl">🚀</div>
          <div>
            <h3 className="text-lg font-bold text-amber-400">Você tem 3 submissões pendentes!</h3>
            <p className="text-sm text-amber-200/60">Valide agora para que os alunos recebam suas recompensas instantaneamente.</p>
          </div>
        </div>
        <button className="px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-amber-500/20">
          Validar Todas
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {MOCK_SUBMISSIONS.map(sub => (
          <Card key={sub.id} className="p-6 flex gap-6 group hover:border-cyan-500/30 transition-all">
            <div className="w-32 h-32 bg-slate-800 rounded-3xl shrink-0 flex items-center justify-center text-4xl border border-white/5 group-hover:bg-slate-700 transition-colors">
              {sub.evidenceType === 'image' ? '🖼️' : sub.evidenceType === 'video' ? '🎥' : '📝'}
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-md">
                    {sub.evidenceType}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500">{sub.timestamp}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{sub.missionTitle}</h3>
                <p className="text-sm text-slate-400">Enviado por <span className="text-white font-bold">{sub.studentName}</span></p>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="flex-1 py-2.5 bg-emerald-600/20 text-emerald-400 border border-emerald-500/20 rounded-xl font-bold text-xs hover:bg-emerald-600 hover:text-white transition-all">
                  Aprovar
                </button>
                <button className="flex-1 py-2.5 bg-rose-600/20 text-rose-400 border border-rose-500/20 rounded-xl font-bold text-xs hover:bg-rose-600 hover:text-white transition-all">
                  Recusar
                </button>
                <button className="p-2.5 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all">
                  💬
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ValidationPortal;
