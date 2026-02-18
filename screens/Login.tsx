
import React from 'react';
import Mascot from '../components/Mascot';

interface LoginProps {
  onLogin: (isAdmin: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
      <div className="mb-8 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-5xl font-extrabold tracking-tighter text-white">ITA</span>
          <span className="text-5xl font-extrabold tracking-tighter text-cyan-400">GAME</span>
        </div>
        <div className="px-4 py-1 bg-violet-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-1">
          <span className="opacity-70">CEITEC</span>
          <span className="w-1 h-1 bg-white rounded-full mx-1"></span>
          <span>SYSTEM</span>
        </div>
      </div>

      <div className="relative group mb-12">
        <div className="absolute inset-0 bg-violet-600 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <Mascot size="lg" />
      </div>

      <div className="text-center mb-10 max-w-sm">
        <h1 className="text-3xl font-bold mb-4 text-white">Escolha seu Acesso</h1>
        <p className="text-slate-400">Bem-vindo à plataforma de gamificação tecnológica do CEITEC.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 w-full max-w-xs">
        <button 
          onClick={() => onLogin(false)}
          className="group relative overflow-hidden py-5 px-8 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl font-bold text-lg shadow-2xl active:scale-95 transition-all flex flex-col items-center gap-1"
        >
          <div className="flex items-center gap-3">
            <span>ÁREA DO ALUNO</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
          <span className="text-[10px] opacity-60 font-medium">ESTUDE, JOGUE E GANHE</span>
        </button>

        <button 
          onClick={() => onLogin(true)}
          className="group relative overflow-hidden py-5 px-8 bg-slate-800/80 border border-white/10 rounded-3xl font-bold text-lg hover:bg-slate-800 transition-all flex flex-col items-center gap-1"
        >
          <div className="flex items-center gap-3">
            <span>PAINEL GESTOR</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-40 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span className="text-[10px] opacity-60 font-medium">PROFESSORES E ADMIN</span>
        </button>
      </div>

      <div className="mt-12 text-[10px] text-slate-500 font-bold uppercase tracking-widest text-center">
        Versão 2.5.0 • © 2025 CEITEC Educacional
      </div>
    </div>
  );
};

export default Login;
