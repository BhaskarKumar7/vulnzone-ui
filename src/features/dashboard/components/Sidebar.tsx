import React from 'react';
import {
    Search,
    ChevronLeft,
    Shield,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { DASHBOARD_NAV_ITEMS } from '../../../config/navigation';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <>
                    {/* Overlay for mobile with sophisticated backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleSidebar}
                        className="fixed inset-0 bg-bg-primary/60 z-40 md:hidden backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ x: -280 }}
                        animate={{ x: 0 }}
                        exit={{ x: -280 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="h-screen w-[280px] bg-bg-secondary/80 backdrop-blur-2xl border-r border-border/50 flex flex-col fixed left-0 top-0 z-50 shadow-2xl overflow-hidden"
                    >
                        {/* Mesh background for sidebar */}
                        <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />

                        <div className="p-8 pb-10 flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-4">
                                <Link to="/" className="flex items-center gap-4">
                                    <div className="size-10 bg-accent-primary flex items-center justify-center rounded-xl shadow-glow">
                                        <Shield className="text-bg-primary size-6" />
                                    </div>
                                    <div>
                                        <h2 className="font-black text-2xl tracking-tighter uppercase italic text-text-primary leading-none">VULN<span className="text-accent-primary">ZONE</span></h2>
                                        <span className="text-[9px] font-black tracking-[0.4em] uppercase text-text-muted mt-1 opacity-50 block leading-none">Tactical_OS_v2</span>
                                    </div>
                                </Link>
                            </div>
                            <button
                                onClick={toggleSidebar}
                                className="p-2 hover:bg-bg-tertiary/50 rounded-xl transition-all text-text-muted hover:text-accent-primary"
                                title="Hide Sidebar"
                            >
                                <ChevronLeft size={20} />
                            </button>
                        </div>

                        <div className="px-6 mb-10 relative z-10">
                            <div className="relative group/search">
                                <div className="absolute inset-0 bg-accent-primary/5 blur-xl opacity-0 group-hover/search:opacity-100 transition-opacity" />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted size-4 transition-colors group-focus-within/search:text-accent-primary" />
                                <input
                                    type="text"
                                    placeholder="Execute Search..."
                                    className="w-full bg-bg-primary/50 border border-border/50 rounded-xl py-3.5 pl-12 pr-4 text-[10px] font-black uppercase tracking-widest text-text-primary focus:outline-none focus:border-accent-primary/50 transition-all placeholder:text-text-muted/50"
                                />
                            </div>
                        </div>

                        <nav className="flex-1 px-4 space-y-2 relative z-10">
                            {DASHBOARD_NAV_ITEMS.map((item) => (
                                <NavLink
                                    key={item.label}
                                    to={item.path}
                                    className={({ isActive }) => `
                                        flex items-center gap-4 px-6 py-4 rounded-xl cursor-pointer transition-all duration-300 relative group
                                        ${isActive
                                            ? 'bg-accent-primary/10 text-accent-primary border border-accent-primary/20 shadow-lg'
                                            : 'text-text-secondary hover:bg-bg-tertiary/30 hover:text-text-primary border border-transparent'}
                                    `}
                                >
                                    {({ isActive }) => (
                                        <>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="active-indicator"
                                                    className="absolute left-0 w-1 h-6 bg-accent-primary rounded-full shadow-[0_0_10px_#00E5FF]"
                                                />
                                            )}
                                            <item.icon size={20} className={isActive ? 'text-accent-primary animate-pulse' : 'text-text-muted group-hover:text-accent-primary transition-colors'} />
                                            <span className="font-black text-xs uppercase tracking-widest italic">{item.label}</span>
                                            {isActive && (
                                                <div className="ml-auto size-1.5 rounded-full bg-accent-primary shadow-[0_0_8px_#00E5FF]" />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </nav>

                        <div className="p-6 border-t border-border/30 relative z-10 bg-bg-primary/20 backdrop-blur-md">
                            <div className="flex items-center gap-4 p-4 hover:bg-bg-tertiary/40 rounded-2xl transition-all duration-300 cursor-pointer group border border-transparent hover:border-border/50">
                                <div className="relative">
                                    <div className="size-12 rounded-2xl bg-bg-tertiary border border-border/50 flex items-center justify-center text-xs text-accent-primary font-black shadow-inner overflow-hidden uppercase italic">
                                        BH
                                        <div className="absolute inset-x-0 bottom-0 h-1 bg-accent-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 size-4 bg-accent-secondary border-4 border-bg-secondary rounded-full" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-black text-text-primary truncate uppercase italic tracking-tighter">Bhaskar_Ops</p>
                                    <p className="text-[9px] text-accent-primary font-black uppercase tracking-[0.2em] mt-1 italic animate-pulse">Level_Elite</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
