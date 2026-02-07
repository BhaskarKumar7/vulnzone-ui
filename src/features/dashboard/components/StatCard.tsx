import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import React from 'react';

interface StatCardProps {
    label: string;
    value: string | number;
    icon: LucideIcon;
    subtext?: string;
    trend?: 'up' | 'down';
    accent?: 'green' | 'cyan' | 'red';
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon: Icon, subtext, trend, accent = 'cyan' }) => {
    const accentColors = {
        cyan: 'text-accent-primary',
        green: 'text-accent-secondary',
        red: 'text-accent-tertiary'
    };

    const glowColors = {
        cyan: 'bg-accent-primary/10',
        green: 'bg-accent-secondary/10',
        red: 'bg-accent-tertiary/10'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative bg-bg-secondary/40 backdrop-blur-xl border border-border/50 p-7 rounded-[24px] transition-all duration-500 group cursor-pointer overflow-hidden shadow-xl"
        >
            {/* Background Accent Glow */}
            <div className={`absolute -right-10 -top-10 size-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${glowColors[accent]}`} />

            <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`p-4 rounded-xl bg-bg-primary/50 border border-border/50 group-hover:border-accent-primary/30 transition-all duration-500 shadow-inner`}>
                    <Icon className={`size-6 ${accentColors[accent]}`} />
                </div>
                {trend && (
                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase ${trend === 'up' ? 'bg-accent-secondary/10 text-accent-secondary' : 'bg-accent-tertiary/10 text-accent-tertiary'}`}>
                        <div className={`size-1.5 rounded-full animate-pulse ${trend === 'up' ? 'bg-accent-secondary' : 'bg-accent-tertiary'}`} />
                        {trend === 'up' ? 'Incline' : 'Decline'}
                    </div>
                )}
            </div>

            <div className="relative z-10">
                <p className="text-text-muted text-[10px] font-black uppercase tracking-[0.3em] mb-3 opacity-60 group-hover:opacity-100 transition-opacity">{label}</p>
                <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl font-black text-text-primary tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-text-primary group-hover:to-accent-primary transition-all duration-500">{value}</h3>
                </div>
                {subtext && (
                    <div className="mt-4 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-500">
                        <div className="h-px w-4 bg-border/50" />
                        <p className="text-text-secondary text-[10px] font-bold uppercase tracking-widest">{subtext}</p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default StatCard;
