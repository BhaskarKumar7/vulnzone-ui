import React, { useState } from 'react';
import {
    Monitor,
    Zap,
    Users,
    ChevronRight,
    Search,
    Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RANGES = [
    {
        id: 'web-01',
        title: 'OWASP Top 10 Gauntlet',
        category: 'Web',
        difficulty: 'Intermediate',
        xp: '1,200',
        players: '12.4k',
        status: 'Operational',
        color: 'cyan'
    },
    {
        id: 'pwn-01',
        title: 'Buffer Overflow Mastery',
        category: 'Binary',
        difficulty: 'Advanced',
        xp: '2,500',
        players: '4.2k',
        status: 'Operational',
        color: 'red'
    },
    {
        id: 'ad-01',
        title: 'Active Directory Breach',
        category: 'Infra',
        difficulty: 'Elite',
        xp: '5,000',
        players: '1.8k',
        status: 'Operational',
        color: 'green'
    },
    {
        id: 'rev-01',
        title: 'Malware Analysis X',
        category: 'Reverse',
        difficulty: 'Intermediate',
        xp: '1,500',
        players: '3.1k',
        status: 'Maintenance',
        color: 'amber'
    },
    {
        id: 'cloud-01',
        title: 'AWS S3 Infiltration',
        category: 'Cloud',
        difficulty: 'Beginner',
        xp: '800',
        players: '15.2k',
        status: 'Operational',
        color: 'cyan'
    },
    {
        id: 'crypto-01',
        title: 'Quantum Crack',
        category: 'Crypto',
        difficulty: 'Expert',
        xp: '3,000',
        players: '900',
        status: 'Operational',
        color: 'purple'
    }
];

const CATEGORIES = ['All', 'Web', 'Binary', 'Infra', 'Reverse', 'Cloud', 'Crypto'];

const AttackRanges: React.FC<{ isSidebarOpen: boolean }> = ({ isSidebarOpen }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredRanges = selectedCategory === 'All'
        ? RANGES
        : RANGES.filter(r => r.category === selectedCategory);

    return (
        <div className={`flex-1 min-h-screen bg-bg-primary transition-all duration-500 relative overflow-hidden ${isSidebarOpen ? 'md:ml-[280px]' : 'ml-0'}`}>
            <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

            <div className="max-w-[1500px] mx-auto p-6 md:p-10 relative z-10">
                {/* Header */}
                <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-primary bg-accent-primary/5 px-2 py-0.5 rounded border border-accent-primary/10">Tactical Training</span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-text-muted">Module: AR-01</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-text-primary tracking-tighter uppercase italic">Attack <span className="text-accent-primary">Ranges</span></h1>
                    </div>

                    <div className="flex items-center gap-4 w-full lg:w-auto">
                        <div className="flex-1 lg:flex-none flex items-center bg-bg-secondary/30 backdrop-blur-md border border-border/50 rounded-xl px-4 py-3 gap-3 focus-within:border-accent-primary/50 transition-all">
                            <Search size={18} className="text-text-muted" />
                            <input
                                type="text"
                                placeholder="Search Ranges..."
                                className="bg-transparent border-none outline-none text-sm font-bold uppercase tracking-widest text-text-primary placeholder:text-text-muted w-full lg:w-64"
                            />
                        </div>
                        <button className="p-3 bg-bg-secondary/30 backdrop-blur-md border border-border/50 rounded-xl text-text-muted hover:text-accent-primary transition-all">
                            <Filter size={20} />
                        </button>
                    </div>
                </header>

                {/* Categories */}
                <div className="flex gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2.5 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap
                                ${selectedCategory === cat
                                    ? 'bg-accent-primary text-bg-primary border-accent-primary shadow-glow'
                                    : 'bg-bg-secondary/30 border-border/50 text-text-muted hover:border-accent-primary/50'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Range Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredRanges.map((range) => (
                            <motion.div
                                layout
                                key={range.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                whileHover={{ y: -8 }}
                                className="bg-bg-secondary/20 backdrop-blur-xl border border-border/50 rounded-[32px] overflow-hidden group hover:border-accent-primary/30 transition-all duration-500 shadow-xl"
                            >
                                <div className="p-8 pb-4 flex justify-between items-start">
                                    <div className="size-14 rounded-2xl bg-bg-primary/50 border border-border/50 flex items-center justify-center text-accent-primary group-hover:scale-110 transition-transform duration-500">
                                        <Monitor size={28} />
                                    </div>
                                    <div className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border
                                        ${range.status === 'Operational'
                                            ? 'bg-accent-secondary/5 text-accent-secondary border-accent-secondary/20'
                                            : 'bg-accent-tertiary/5 text-accent-tertiary border-accent-tertiary/20'}`}>
                                        <div className={`inline-block size-1.5 rounded-full mr-2 ${range.status === 'Operational' ? 'bg-accent-secondary animate-pulse' : 'bg-accent-tertiary'}`} />
                                        {range.status}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-black text-text-primary mb-2 uppercase italic tracking-tight group-hover:text-accent-primary transition-colors">{range.title}</h3>
                                    <div className="flex gap-3 mb-8">
                                        <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{range.category}</span>
                                        <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">•</span>
                                        <span className={`text-[10px] font-bold uppercase tracking-widest
                                            ${range.difficulty === 'Expert' || range.difficulty === 'Elite' ? 'text-accent-tertiary' : range.difficulty === 'Advanced' ? 'text-amber-500' : 'text-accent-secondary'}`}>
                                            {range.difficulty}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        <div className="bg-bg-primary/30 rounded-2xl p-4 border border-border/30">
                                            <p className="text-[9px] font-black text-text-muted uppercase tracking-widest mb-1">Potential XP</p>
                                            <div className="flex items-center gap-2">
                                                <Zap size={14} className="text-accent-primary" />
                                                <span className="text-lg font-black text-text-primary tracking-tight">{range.xp}</span>
                                            </div>
                                        </div>
                                        <div className="bg-bg-primary/30 rounded-2xl p-4 border border-border/30">
                                            <p className="text-[9px] font-black text-text-muted uppercase tracking-widest mb-1">Active Ops</p>
                                            <div className="flex items-center gap-2">
                                                <Users size={14} className="text-text-secondary" />
                                                <span className="text-lg font-black text-text-primary tracking-tight">{range.players}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className={`w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all
                                        ${range.status === 'Operational'
                                            ? 'bg-accent-primary text-bg-primary hover:scale-[1.02] shadow-glow'
                                            : 'bg-bg-tertiary text-text-muted cursor-not-allowed opacity-50'}`}>
                                        {range.status === 'Operational' ? 'Initialize Lab' : 'Under Service'}
                                        {range.status === 'Operational' && <ChevronRight size={16} />}
                                    </button>
                                </div>

                                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default AttackRanges;
