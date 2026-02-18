
import React from 'react';
import Card from '../../components/Card';
import { MOCK_STUDENTS } from '../../constants';

const StudentManager: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="relative w-96">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40">🔍</span>
          <input 
            type="text" 
            placeholder="Buscar por nome, turma ou nível..." 
            className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-white/5 rounded-2xl text-sm focus:border-cyan-500/50 outline-none transition-all"
          />
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-slate-800 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-colors">Exportar CSV</button>
          <button className="px-6 py-3 bg-violet-600 rounded-2xl font-bold text-sm hover:bg-violet-500 transition-colors">Adicionar Aluno</button>
        </div>
      </div>

      <Card className="p-0 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-900/50 border-b border-white/5">
            <tr className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              <th className="px-6 py-4">Estudante</th>
              <th className="px-6 py-4">Turma</th>
              <th className="px-6 py-4">Nível / XP</th>
              <th className="px-6 py-4">Economia</th>
              <th className="px-6 py-4">Progresso</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {MOCK_STUDENTS.map(student => (
              <tr key={student.id} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-xl">
                      {student.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{student.name}</p>
                      <p className="text-[10px] text-slate-500">{student.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs font-bold text-slate-300 bg-white/5 px-2 py-1 rounded-md">{student.class}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-cyan-400">Lvl {student.level}</span>
                    <span className="text-[10px] text-slate-500">{student.xp.toLocaleString()} XP</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-amber-500">💰 {student.coins.toLocaleString()}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                   <div className="w-32">
                      <div className="flex justify-between text-[8px] font-bold uppercase mb-1">
                        <span>{student.missionsCompleted} missões</span>
                        <span>{(student.missionsCompleted / 80 * 100).toFixed(0)}%</span>
                      </div>
                      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-violet-500" style={{ width: `${student.missionsCompleted / 80 * 100}%` }} />
                      </div>
                   </div>
                </td>
                <td className="px-6 py-4">
                   <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">{student.lastActive}</span>
                   </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-violet-600/20 hover:text-violet-400 rounded-lg transition-all">
                    <span>👁️</span>
                  </button>
                  <button className="p-2 hover:bg-cyan-600/20 hover:text-cyan-400 rounded-lg transition-all ml-1">
                    <span>✏️</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default StudentManager;
