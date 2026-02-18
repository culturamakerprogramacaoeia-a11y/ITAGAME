
import React from 'react';
import Card from '../components/Card';
import { DISCIPLINES } from '../constants';
import { Screen } from '../types';

interface DisciplinesProps {
  onSelect: (id: string) => void;
}

const Disciplines: React.FC<DisciplinesProps> = ({ onSelect }) => {
  return (
    <div className="p-6 space-y-6 pb-24">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">Explorar Trilhas</h1>
      </div>
      <p className="text-slate-400">Escolha um caminho e comece a ganhar XP!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DISCIPLINES.map(disc => (
          <Card 
            key={disc.id} 
            onClick={() => onSelect(disc.id)}
            className={`bg-gradient-to-br ${disc.color} border-none relative overflow-hidden h-40 flex flex-col justify-end group shadow-2xl`}
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 p-2 opacity-20 transform -translate-y-4 translate-x-4 group-hover:scale-110 transition-transform">
              <span className="text-9xl">{disc.icon}</span>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="bg-white/20 backdrop-blur-md rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-wider inline-block mb-1">
                    Nível {disc.level}
                  </div>
                  <h3 className="text-2xl font-bold drop-shadow-md leading-tight">{disc.name}</h3>
                </div>
                <div className="text-4xl drop-shadow-lg">{disc.icon}</div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest opacity-80">
                  <span>Conclusão da Trilha</span>
                  <span>{disc.progress}%</span>
                </div>
                <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ width: `${disc.progress}%` }} />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Disciplines;
