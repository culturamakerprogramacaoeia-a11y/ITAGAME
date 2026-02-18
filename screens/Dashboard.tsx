
import React from 'react';
import Card from '../components/Card';
import Mascot from '../components/Mascot';
import { MISSIONS, DISCIPLINES } from '../constants';
import { UserStats, Screen } from '../types';

interface DashboardProps {
  stats: UserStats;
  onNavigate: (screen: Screen) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ stats, onNavigate }) => {
  return (
    <div className="p-6 space-y-6 pb-24">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-400 font-medium">Olá, {stats.name}! 👋</h2>
          <h1 className="text-3xl font-bold">Nível {stats.level}</h1>
        </div>
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-3xl shadow-lg border border-white/20">
          {stats.avatar}
        </div>
      </div>

      {/* Progress Card */}
      <Card className="bg-gradient-to-br from-indigo-900/40 to-violet-900/40 border-violet-500/30">
        <div className="flex justify-between items-end mb-2">
          <span className="text-sm font-bold text-violet-300 uppercase tracking-widest">Progresso XP</span>
          <span className="text-xs text-white/60">{stats.xp} / {stats.maxXp} XP</span>
        </div>
        <div className="h-4 bg-slate-950 rounded-full overflow-hidden border border-white/5">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 rounded-full transition-all duration-1000"
            style={{ width: `${(stats.xp / stats.maxXp) * 100}%` }}
          />
        </div>
      </Card>

      {/* Daily Mascot Tip */}
      <div className="flex gap-4 items-center bg-cyan-900/20 border border-cyan-500/20 p-4 rounded-3xl">
        <Mascot size="sm" animate={true} />
        <div className="flex-1">
          <p className="text-sm text-cyan-100 italic">"Ei! Você tem 2 novas missões hoje. Vamos completá-las para ganhar bônus!"</p>
        </div>
      </div>

      {/* Section: Missions */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            🎯 Missões do Dia
          </h3>
          <button className="text-violet-400 text-sm font-bold">Ver todas</button>
        </div>
        <div className="space-y-3">
          {MISSIONS.map(mission => (
            <Card key={mission.id} className="flex items-center gap-4 py-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${mission.completed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
                {mission.completed ? '✓' : mission.rewardType === 'coins' ? '💰' : '⚡'}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm">{mission.title}</h4>
                <p className="text-xs text-slate-400">{mission.objective}</p>
                <div className="mt-2 h-1.5 bg-slate-950 rounded-full overflow-hidden w-full max-w-[120px]">
                  <div className="h-full bg-indigo-500" style={{ width: `${(mission.progress / mission.maxProgress) * 100}%` }} />
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-indigo-300">+{mission.reward}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Section: Quick Jump to Subjects */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            📚 Disciplinas
          </h3>
          <button onClick={() => onNavigate(Screen.DISCIPLINES)} className="text-violet-400 text-sm font-bold">Explorar</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {DISCIPLINES.slice(0, 4).map(disc => (
            <Card key={disc.id} onClick={() => {}} className="relative overflow-hidden group">
              <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform`}>
                <span className="text-5xl">{disc.icon}</span>
              </div>
              <div className="relative z-10">
                <span className="text-2xl mb-2 block">{disc.icon}</span>
                <h4 className="font-bold text-sm leading-tight">{disc.name}</h4>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1 h-1 bg-slate-950 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400" style={{ width: `${disc.progress}%` }} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">{disc.progress}%</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
