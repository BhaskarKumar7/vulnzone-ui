import React from 'react';
import {
    Rocket,
    Target,
    Zap,
    Activity,
    Monitor,
    Cpu,
    Menu,
    ChevronRight,
    Search,
    AlertTriangle,
    Bell,
    Terminal as TerminalIcon,
    RefreshCw
} from 'lucide-react';
import { motion } from 'framer-motion';
import StatCard from './StatCard';
import { MOCK_STATS } from '../../../config/navigation';

interface DashboardContentProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className={`flex-1 min-h-screen bg-bg-primary transition-all duration-500 relative overflow-hidden ${isSidebarOpen ? 'md:ml-[280px]' : 'ml-0'}`}>
            {/* Enterprise Background Layer */}
            <div className="absolute inset-0 mesh-gradient opacity-40 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

            <div className="max-w-[1500px] mx-auto p-6 md:p-10 relative z-10">
                {/* Header */}
                <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
                    <div className="flex items-center gap-6">
                        {!isSidebarOpen && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                onClick={toggleSidebar}
                                className="p-3 bg-bg-secondary/50 backdrop-blur-md border border-border/50 rounded-xl hover:bg-bg-tertiary transition-all text-text-muted hover:text-accent-primary shadow-lg"
                                title="Open Command Center"
                            >
                                <Menu size={24} />
                            </motion.button>
                        )}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-primary bg-accent-primary/5 px-2 py-0.5 rounded border border-accent-primary/10">Authorized Access</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-text-muted">Sector: 07-Alpha</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-text-primary tracking-tighter uppercase italic">Operations <span className="text-accent-primary">Center</span></h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 w-full lg:w-auto">
                        <div className="hidden sm:flex items-center bg-bg-secondary/30 backdrop-blur-md border border-border/50 rounded-xl px-4 py-2 gap-3 focus-within:border-accent-primary/50 transition-all">
                            <Search size={18} className="text-text-muted" />
                            <input
                                type="text"
                                placeholder="Search Assets..."
                                className="bg-transparent border-none outline-none text-sm font-bold uppercase tracking-widest text-text-primary placeholder:text-text-muted w-48"
                            />
                        </div>
                        <button className="p-3 bg-bg-secondary/30 backdrop-blur-md border border-border/50 rounded-xl text-text-muted hover:text-accent-primary transition-all relative">
                            <Bell size={20} />
                            <div className="absolute top-3 right-3 size-2 bg-accent-tertiary rounded-full animate-ping" />
                        </button>
                        <button className="bg-accent-primary text-bg-primary px-8 py-3 rounded-xl text-sm font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-glow flex items-center gap-3">
                            <Rocket size={18} />
                            Deploy Lab
                        </button>
                    </div>
                </header>

                {/* Stats Grid - Premium Spacing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {MOCK_STATS.map((stat, i) => (
                        <StatCard key={i} {...stat} />
                    ))}
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-8 space-y-10">
                        {/* Active Mission */}
                        <section className="bg-bg-secondary/30 backdrop-blur-2xl border border-border/50 rounded-[32px] overflow-hidden shadow-2xl relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="p-8 border-b border-border/30 flex justify-between items-center relative z-10">
                                <div className="flex items-center gap-4">
                                    <div className="size-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                                        <Monitor className="text-accent-primary" size={20} />
                                    </div>
                                    <div>
                                        <h2 className="font-black text-xl text-text-primary uppercase italic tracking-tight">Active Infiltration</h2>
                                        <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mt-1">Status: Operational</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-secondary/5 border border-accent-secondary/20">
                                    <div className="size-2 rounded-full bg-accent-secondary animate-pulse" />
                                    <span className="text-[10px] font-black text-accent-secondary uppercase tracking-[0.2em]">Encrypted Link</span>
                                </div>
                            </div>

                            <div className="p-8 lg:p-12 flex flex-col md:flex-row gap-12 items-center relative z-10">
                                <div className="relative group/machine">
                                    <div className="absolute inset-0 bg-accent-primary/20 blur-[50px] rounded-full scale-0 group-hover/machine:scale-100 transition-transform duration-700" />
                                    <div className="w-40 h-40 md:w-52 md:h-52 bg-bg-primary/50 rounded-[40px] border border-border/50 flex flex-col items-center justify-center gap-4 relative overflow-hidden group-hover:border-accent-primary/50 transition-all duration-500 shadow-xl">
                                        <Cpu size={64} className="text-text-muted group-hover:text-accent-primary transition-all duration-500" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity">Asset_XRAY</span>
                                        <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/5 to-transparent" />
                                    </div>
                                </div>

                                <div className="flex-1 w-full text-center md:text-left">
                                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 mb-8">
                                        <div>
                                            <h3 className="text-4xl font-black text-text-primary tracking-tighter mb-3 uppercase italic">Corp-Dev-01</h3>
                                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                                <div className="flex items-center gap-2 bg-bg-tertiary/50 px-3 py-1.5 rounded-lg border border-border/50">
                                                    <span className="text-[10px] font-bold text-text-muted">IP</span>
                                                    <code className="text-accent-primary font-mono text-sm font-bold tracking-widest">10.254.12.89</code>
                                                </div>
                                                <div className="flex items-center gap-2 bg-accent-tertiary/5 px-3 py-1.5 rounded-lg border border-accent-tertiary/10">
                                                    <AlertTriangle size={12} className="text-accent-tertiary" />
                                                    <span className="text-[10px] font-black text-accent-tertiary uppercase tracking-widest">High Severity</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center md:text-right">
                                            <div className="text-3xl font-black text-accent-primary flex items-end gap-1 justify-center md:justify-end">
                                                65 <span className="text-xs uppercase tracking-widest mb-2">%</span>
                                            </div>
                                            <p className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">Compromise Progress</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="w-full bg-bg-primary/50 h-3 rounded-full overflow-hidden border border-border/50 p-0.5 shadow-inner">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: '65%' }}
                                                transition={{ duration: 2, ease: 'easeOut' }}
                                                className="h-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-[length:200%_auto] animate-gradient rounded-full shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex gap-4">
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] font-black text-text-muted uppercase tracking-widest mb-1">Infiltration</span>
                                                    <span className="text-xs font-bold text-text-primary">Success (02:44)</span>
                                                </div>
                                                <div className="w-px h-8 bg-border/30" />
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] font-black text-text-muted uppercase tracking-widest mb-1">Enumeration</span>
                                                    <span className="text-xs font-bold text-accent-secondary">Complete (100%)</span>
                                                </div>
                                            </div>
                                            <button className="text-[10px] font-black text-accent-primary uppercase tracking-[0.3em] hover:underline flex items-center gap-2">
                                                View Telemetry <ChevronRight size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-bg-tertiary/30 border-t border-border/30 px-8 py-6 flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-bg-primary/50 border border-border/50 text-text-primary py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-bg-secondary transition-all flex items-center justify-center gap-3 group/btn">
                                    <RefreshCw size={14} className="group-hover/btn:rotate-180 transition-transform duration-700" />
                                    Reset Instance
                                </button>
                                <button className="flex-1 bg-accent-tertiary/10 border border-accent-tertiary/20 text-accent-tertiary py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-accent-tertiary/20 transition-all flex items-center justify-center gap-3">
                                    <Activity size={14} />
                                    Terminate Threat
                                </button>
                                <button className="flex-1 bg-accent-primary text-bg-primary py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-glow flex items-center justify-center gap-3">
                                    <TerminalIcon size={14} />
                                    Open Shell
                                </button>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex justify-between items-baseline">
                                <h2 className="font-black text-2xl flex items-center gap-4 text-text-primary uppercase italic">
                                    <Activity size={24} className="text-accent-primary" />
                                    Mission Log
                                </h2>
                                <button className="text-[10px] font-black text-accent-primary hover:underline tracking-[0.3em] uppercase">Historical Data</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="bg-bg-secondary/40 backdrop-blur-xl border border-border/50 p-6 rounded-[24px] flex flex-col group cursor-pointer hover:border-accent-primary/30 transition-all duration-500 shadow-lg"
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="size-12 rounded-xl bg-bg-primary/50 border border-border/50 flex items-center justify-center text-text-muted group-hover:text-accent-primary transition-all duration-500">
                                                <Target size={24} />
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[10px] font-black text-accent-secondary uppercase mb-1">Mission Success</p>
                                                <p className="text-xs font-bold text-text-primary">+850 XP</p>
                                            </div>
                                        </div>
                                        <h4 className="font-black text-lg text-text-primary uppercase italic tracking-tight group-hover:text-accent-primary transition-colors">VulnChain_Sector_{i}</h4>
                                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary opacity-50" />
                                            Completed 12h ago
                                        </p>
                                        <div className="mt-6 flex justify-between items-center pt-4 border-t border-border/20">
                                            <span className="text-[9px] font-black text-text-muted uppercase tracking-[0.2em]">Complexity: Hard</span>
                                            <ChevronRight size={18} className="text-text-muted group-hover:translate-x-1 group-hover:text-accent-primary transition-all" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 space-y-10">
                        {/* Feed Card */}
                        <section className="bg-bg-secondary/30 backdrop-blur-2xl border border-border/50 rounded-[32px] p-8 shadow-2xl relative overflow-hidden group">
                            <h2 className="font-black text-xl mb-8 flex items-center gap-4 text-text-primary uppercase italic">
                                <Zap size={22} className="text-accent-secondary" />
                                Global Uplink
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { user: 'K0rdel', action: 'captured flag', target: 'Vault-B', time: '1m ago' },
                                    { user: 'S3curity', action: 'exploited', target: 'Nginx-Dev', time: '4m ago' },
                                    { user: 'RootKit', action: 'initialized', target: 'S3-Bucket', time: '9m ago' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-5 group items-start">
                                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0 group-hover:scale-150 transition-transform shadow-[0_0_8px_#00E5FF]" />
                                        <div className="flex-1 border-b border-border/10 pb-4 group-last:border-0">
                                            <p className="text-sm font-medium text-text-primary leading-tight">
                                                <span className="font-black text-accent-primary hover:underline cursor-pointer uppercase italic tracking-tighter">{item.user}</span>
                                                <span className="mx-2 opacity-50 lowercase">{item.action}</span>
                                                <span className="font-black text-text-primary underline decoration-accent-primary/20 uppercase tracking-tighter italic">{item.target}</span>
                                            </p>
                                            <p className="text-[10px] text-text-muted mt-2 font-black uppercase tracking-widest opacity-60 tracking-tighter">{item.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-10 bg-bg-primary/50 border border-border/50 text-text-muted py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:text-accent-primary hover:bg-bg-secondary transition-all shadow-inner">
                                Open Secure Feed
                            </button>
                        </section>

                        {/* Weekly Telemetry */}
                        <section className="bg-bg-secondary/30 backdrop-blur-md border border-border/50 rounded-[32px] p-8 shadow-xl">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-[10px] font-black text-text-muted uppercase tracking-[0.4em]">Grid_Telemetry</h3>
                                <div className="size-2 rounded-full bg-accent-secondary shadow-[0_0_8px_#22C55E]" />
                            </div>
                            <div className="flex items-end gap-2 h-32 justify-between">
                                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                                    <div key={i} className="flex-1 group relative flex justify-center">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            className="w-full max-w-[8px] bg-bg-tertiary border border-border/50 rounded-full group-hover:bg-accent-primary transition-colors cursor-pointer"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-border/20 flex justify-between items-center font-black text-[9px] text-text-muted uppercase tracking-widest italic">
                                <span>Mon</span>
                                <span>Sun</span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardContent;
