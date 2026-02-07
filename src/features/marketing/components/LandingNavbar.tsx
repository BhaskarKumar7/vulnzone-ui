import React from "react";
import { Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MARKETING_NAV_ITEMS } from "../../../config/navigation";

const LandingNavbar = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-[var(--header-height)] bg-bg-primary/80 backdrop-blur-xl border-b border-border transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 bg-accent-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                        <Shield className="text-bg-primary size-6" />
                    </div>

                    <span className="font-black text-2xl tracking-tighter uppercase">
                        VULN<span className="text-accent-primary">ZONE</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-12 text-[11px] font-black text-text-muted uppercase tracking-[0.2em]">
                    {MARKETING_NAV_ITEMS.map((item) => (
                        <a
                            key={item.label}
                            href={item.path}
                            className="hover:text-accent-primary transition-colors hover:tracking-[0.25em] duration-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to="/dashboard"
                        className="text-xs font-black uppercase tracking-widest hover:text-accent-primary transition duration-300"
                    >
                        Sign In
                    </Link>

                    <button className="bg-accent-primary text-bg-primary px-10 py-3.5 rounded-xl font-black shadow-glow hover:scale-105 active:scale-95 transition-all duration-300 uppercase text-xs tracking-[0.15em]">
                        Deploy Free
                    </button>
                </div>

                {/* Mobile */}
                <button
                    className="md:hidden p-2 hover:bg-bg-secondary rounded-lg transition-colors"
                    onClick={() => setOpen((p) => !p)}
                >
                    {open ? <X size={28} className="text-accent-primary" /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-[var(--header-height)] left-0 right-0 bg-bg-secondary border-b border-border p-10 space-y-8 md:hidden shadow-2xl overflow-hidden backdrop-blur-2xl"
                    >
                        {MARKETING_NAV_ITEMS.map((item) => (
                            <a
                                key={item.label}
                                href={item.path}
                                className="block text-2xl font-black uppercase tracking-tighter hover:text-accent-primary transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}

                        <div className="pt-10 border-t border-border flex flex-col gap-6">
                            <Link to="/dashboard" className="text-center font-black uppercase tracking-widest text-lg">
                                Sign In
                            </Link>

                            <button className="bg-accent-primary text-bg-primary py-5 rounded-2xl font-black shadow-glow text-lg uppercase tracking-widest">
                                Deploy Free
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default LandingNavbar;
