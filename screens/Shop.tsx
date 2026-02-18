
import React from 'react';
import Card from '../components/Card';
import { SHOP_ITEMS } from '../constants';

interface ShopProps {
  coins: number;
}

const Shop: React.FC<ShopProps> = ({ coins }) => {
  return (
    <div className="p-6 space-y-6 pb-24">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Loja ITA</h1>
        <div className="bg-amber-500/20 border border-amber-500/30 rounded-2xl px-4 py-2 flex items-center gap-2">
          <span className="text-2xl">💰</span>
          <span className="font-bold text-amber-400">{coins}</span>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {['Todos', 'Avatar', 'Poderes', 'Reais'].map((cat, i) => (
          <button 
            key={i} 
            className={`px-6 py-2 rounded-full whitespace-nowrap font-bold text-sm ${i === 0 ? 'bg-violet-600' : 'bg-slate-900 border border-white/10'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {SHOP_ITEMS.map(item => (
          <Card key={item.id} className="flex flex-col items-center text-center p-4">
            <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="font-bold text-sm h-10 flex items-center">{item.name}</h3>
            <p className="text-[10px] text-slate-400 mb-4 line-clamp-2">{item.description}</p>
            <button className="w-full py-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all">
              <span className="text-xs font-bold">{item.price}</span>
              <span className="text-xs">💰</span>
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
