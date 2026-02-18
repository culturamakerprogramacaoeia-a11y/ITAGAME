
import React from 'react';
import Card from '../../components/Card';

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Alunos Ativos" value="1.240" trend="+12%" icon="👥" color="cyan" />
        <StatCard label="Missões Concluídas" value="4.821" trend="+5%" icon="🎯" color="violet" />
        <StatCard label="Média de Engajamento" value="84%" trend="+3%" icon="⚡" color="emerald" />
        <StatCard label="Moedas em Circulação" value="154k" trend="-2%" icon="💰" color="amber" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Feed */}
        <Card className="lg:col-span-2 p-0 overflow-hidden">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-lg font-bold">Atividades Recentes</h3>
            <button className="text-violet-400 text-xs font-bold uppercase tracking-widest">Ver Todas</button>
          </div>
          <div className="divide-y divide-white/5">
            {[
              { user: 'Ana Luiza', action: 'submeteu uma evidência para', item: 'Lógica Python', time: 'Há 5 min', color: 'bg-cyan-500' },
              { user: 'Alexia M.', action: 'conquistou a badge', item: 'Mestre Maker', time: 'Há 12 min', color: 'bg-amber-500' },
              { user: 'André Anuzzi', action: 'resgatou item na loja:', item: 'Skin Robô Dourado', time: 'Há 1 hora', color: 'bg-violet-500' },
              { user: 'Sandra C.', action: 'subiu para o nível', item: 'Level 10 (Júnior)', time: 'Há 3 horas', color: 'bg-emerald-500' },
            ].map((row, i) => (
              <div key={i} className="p-6 flex items-center gap-4 hover:bg-white/[0.02] transition-colors">
                <div className={`w-10 h-10 rounded-full ${row.color} flex items-center justify-center text-sm font-bold text-white shadow-lg`}>
                  {row.user[0]}
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-bold text-white">{row.user}</span> {row.action} <span className="font-bold text-cyan-400">{row.item}</span>
                  </p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">{row.time}</p>
                </div>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <span className="text-xl">→</span>
                </button>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Performers */}
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-6">Alunos em Destaque</h3>
          <div className="space-y-6">
            {[
              { name: 'Alexia Mirella', xp: '12.450 XP', level: 15, avatar: '👧' },
              { name: 'Ana Luiza', xp: '10.996 XP', level: 12, avatar: '👩' },
              { name: 'André Anuzzi', xp: '8.130 XP', level: 10, avatar: '👦' },
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-2xl border border-white/5">
                  {p.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm">{p.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                     <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-md font-bold">Lvl {p.level}</span>
                     <span className="text-[10px] text-slate-500 font-bold">{p.xp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-3 bg-slate-800 rounded-xl font-bold text-xs hover:bg-slate-700 transition-colors uppercase tracking-widest">
            Ranking Completo
          </button>
        </Card>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, trend, icon, color }: any) => {
  const colorMap: any = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  };

  return (
    <Card className={`p-6 border-none ${colorMap[color]} group hover:-translate-y-1 transition-transform`}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl">{icon}</span>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${trend.startsWith('+') ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
          {trend}
        </span>
      </div>
      <h3 className="text-3xl font-black mb-1">{value}</h3>
      <p className="text-xs font-bold uppercase tracking-widest opacity-60">{label}</p>
    </Card>
  );
};

export default AdminDashboard;
