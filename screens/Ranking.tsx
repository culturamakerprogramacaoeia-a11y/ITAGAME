
import React from 'react';
import Card from '../components/Card';
import { RANKING } from '../constants';

const Ranking: React.FC = () => {
  return (
    <div className="p-6 space-y-6 pb-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Hall da Fama</h1>
        <p className="text-slate-400">Top exploradores do CEITEC</p>
      </div>

      <div className="flex items-end justify-center gap-4 mb-8 pt-10">
        {/* 2nd Place */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border-4 border-slate-400 bg-slate-800 flex items-center justify-center text-3xl relative">
            {RANKING[1].avatar}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-slate-400 font-bold text-xl">2º</div>
          </div>
          <div className="h-16 w-16 bg-slate-700 mt-2 rounded-t-lg flex items-center justify-center text-white/50 text-xs">
            🥈
          </div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center scale-110">
          <div className="w-20 h-20 rounded-full border-4 border-amber-500 bg-slate-800 flex items-center justify-center text-4xl relative">
            {RANKING[0].avatar}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-amber-500 font-bold text-2xl animate-bounce">👑</div>
          </div>
          <div className="h-24 w-20 bg-amber-600/50 border-t-4 border-amber-500 mt-2 rounded-t-lg flex items-center justify-center text-white/50 text-xs shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            🥇
          </div>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border-4 border-orange-700 bg-slate-800 flex items-center justify-center text-3xl relative">
            {RANKING[2].avatar}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-orange-700 font-bold text-xl">3º</div>
          </div>
          <div className="h-12 w-16 bg-orange-900/40 mt-2 rounded-t-lg flex items-center justify-center text-white/50 text-xs">
            🥉
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {RANKING.map(entry => (
          <div 
            key={entry.rank} 
            className={`flex items-center gap-4 p-4 rounded-3xl ${entry.isCurrentUser ? 'bg-violet-600/30 border border-violet-500/50 shadow-lg' : 'bg-slate-900/50 border border-white/5'}`}
          >
            <span className={`w-6 font-bold text-center ${entry.rank === 1 ? 'text-amber-500' : entry.rank === 2 ? 'text-slate-400' : 'text-slate-600'}`}>
              {entry.rank}
            </span>
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-xl">
              {entry.avatar}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-sm">{entry.name} {entry.isCurrentUser && <span className="text-[10px] bg-violet-600 px-2 py-0.5 rounded-full ml-1">VOCÊ</span>}</h4>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Estudante Sênior</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-white">{entry.score.toLocaleString()}</span>
              <span className="text-xs">⚡</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
