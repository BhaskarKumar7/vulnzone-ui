import { motion, useScroll, useTransform } from "framer-motion";
import {
    Terminal,
    Target,
    Users,
    ShieldCheck,
    ArrowRight,
    Zap,
    Globe,
    Lock,
    Cpu,
    BarChart3,
    Layers,
    ChevronDown,
} from "lucide-react";
import { useRef } from "react";

const LandingContent = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

            {/* HERO */}
            <section ref={heroRef} className="relative pt-[calc(var(--header-height)+8rem)] pb-48 overflow-hidden">
                <motion.div style={{ y: y1, opacity }} className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] bg-accent-primary/10 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-accent-secondary/5 blur-[150px] rounded-full" />
                </motion.div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block mb-8 px-6 py-2 rounded-full bg-bg-secondary/50 backdrop-blur-md border border-border text-accent-primary text-xs font-black uppercase tracking-[0.3em] shadow-lg">
                            Institutional Cyber Readiness
                        </span>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-10 leading-[0.95] tracking-tight">
                            Elevate Your <br />
                            <span className="text-gradient">Security Posture</span>
                        </h1>

                        <p className="text-text-secondary text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
                            The definitive platform for enterprise-grade tactical training.
                            Deploy advanced cyber ranges and cultivate an elite workforce of defenders.
                        </p>

                        <div className="flex justify-center gap-6 flex-wrap">
                            <button className="bg-accent-primary text-bg-primary px-12 py-6 rounded-2xl shadow-glow font-black text-lg flex items-center gap-4 hover:scale-105 transition-all duration-300 active:scale-95">
                                Deploy Platform <ArrowRight size={22} />
                            </button>

                            <button className="bg-bg-tertiary/30 backdrop-blur-md border border-border px-12 py-6 rounded-2xl font-bold text-lg hover:bg-border transition-all duration-300 flex items-center gap-3">
                                <Terminal className="text-accent-primary" size={22} />
                                Technical Demo
                            </button>
                        </div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-32 flex flex-col items-center gap-4 text-text-muted"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Initialize Infiltration</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <ChevronDown size={20} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* PREVIEW IMAGE / TERMINAL */}
            <section className="py-20 relative px-6">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-6xl mx-auto rounded-[32px] border border-border bg-bg-secondary overflow-hidden shadow-2xl relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5" />
                    <div className="h-12 bg-bg-tertiary border-b border-border flex items-center px-6 gap-2">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-accent-tertiary" />
                            <div className="w-3 h-3 rounded-full bg-amber-500" />
                            <div className="w-3 h-3 rounded-full bg-accent-secondary" />
                        </div>
                        <div className="flex-1 text-center font-mono text-[10px] font-bold tracking-widest uppercase opacity-40">Tactical_Operations_Console</div>
                    </div>
                    <div className="p-8 md:p-12 aspect-video flex flex-col justify-center bg-bg-primary/50 relative overflow-hidden backdrop-blur-sm">
                        <div className="space-y-6 font-mono text-xs md:text-sm lg:text-base text-text-secondary">
                            <p className="flex gap-4"><span className="text-accent-primary font-bold">[ROOT]</span> # vulnzone-deploy --target corp-hq-range</p>
                            <p className="flex gap-4 opacity-70"><span>[INFO]</span> Initializing advanced persistent threat simulation...</p>
                            <p className="flex gap-4 opacity-70"><span>[SCAN]</span> Network topology mapped: 4,120 nodes detected.</p>
                            <p className="flex gap-4 opacity-70"><span>[EXPLOIT]</span> Zero-day payload successfully injected into subsystem alpha.</p>
                            <div className="w-full h-1 bg-border rounded-full overflow-hidden mt-8">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="h-full bg-accent-primary shadow-[0_0_10px_#00E5FF]"
                                />
                            </div>
                            <p className="text-accent-secondary font-black animate-pulse">[SUCCESS] INFILTRATION COMPLETE - DOMAIN ADMIN PRIVILEGES GRANTED</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* STATS SECTION */}
            <section className="py-40 bg-bg-secondary/30 backdrop-blur-xl border-y border-border overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24 relative">
                    {[
                        { icon: Users, value: "2.5M+", label: "Elite Operators", desc: "Forging the world's most resilient cyber force." },
                        { icon: Target, value: "1,400+", label: "Attack Vectors", desc: "Hyper-realistic environments updated daily." },
                        { icon: ShieldCheck, value: "ISO-27001", label: "Certified", desc: "Enterprise-grade compliance and security." },
                        { icon: Globe, value: "Top 500", label: "Partners", desc: "Trusted by the world's leading organizations." },
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="mb-8 relative inline-block">
                                <div className="absolute inset-0 bg-accent-primary/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                                <s.icon className="mx-auto size-14 text-accent-primary relative z-10 transition-transform duration-500 group-hover:rotate-12" />
                            </div>
                            <div className="text-5xl font-black mb-4 tracking-tighter">{s.value}</div>
                            <p className="text-accent-primary uppercase text-xs font-black tracking-[0.2em] mb-4">
                                {s.label}
                            </p>
                            <p className="text-text-secondary text-sm leading-relaxed max-w-[200px] mx-auto opacity-70">
                                {s.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ENTERPRISE SOLUTIONS SECTION */}
            <section className="py-40 relative px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-32">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase"
                        >
                            Tactical <span className="text-accent-primary">Solutions</span>
                        </motion.h2>
                        <p className="text-text-secondary text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
                            Engineered for high-performing security teams who demand precision and scalability.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Team Management",
                                icon: Users,
                                desc: "Comprehensive workforce analytics, progress tracking, and hierarchical user management for global organizations.",
                            },
                            {
                                title: "Custom Lab Architecture",
                                icon: Cpu,
                                desc: "Design and deploy proprietary network topologies that mirror your organization's unique infrastructure.",
                            },
                            {
                                title: "Precision Reporting",
                                icon: BarChart3,
                                desc: "Automated executive briefings, skill gap analysis, and performance metrics aligned with NIST and MITRE ATT&CK frameworks.",
                            },
                            {
                                title: "Enterprise SSO / SCIM",
                                icon: Lock,
                                desc: "Seamlessly integrate with Okta, Azure AD, and Ping Identity. Full SOC2 Type II and GDPR compliance included.",
                            },
                            {
                                title: "Gamified Cyber Ranges",
                                icon: Target,
                                desc: "Increase engagement through internal CTF competitions, team-based battles, and competitive leaderboards.",
                            },
                            {
                                title: "Tactical API Integration",
                                icon: Layers,
                                desc: "Connect VulnZone directly to your SIEM, SOAR, or LMS for a truly integrated security ecosystem.",
                            },
                        ].map((solution, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -15 }}
                                className="p-10 rounded-[32px] bg-bg-secondary/50 border border-border backdrop-blur-md hover:bg-bg-secondary transition-all duration-500 group flex flex-col h-full"
                            >
                                <div className="size-16 rounded-[20px] bg-bg-primary border border-border flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-accent-primary/10 transition-all duration-500">
                                    <solution.icon className="size-8 text-accent-primary" />
                                </div>
                                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight group-hover:text-accent-primary transition-colors">{solution.title}</h3>
                                <p className="text-text-secondary leading-relaxed text-lg font-medium opacity-80 flex-1">{solution.desc}</p>
                                <div className="mt-10 pt-8 border-t border-border/50 flex items-center justify-between group/btn cursor-pointer">
                                    <span className="text-xs font-black uppercase tracking-[0.2em]">Learn More</span>
                                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-2" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="py-40 bg-bg-secondary border-y border-border">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="text-accent-primary font-black uppercase text-xs tracking-[0.4em] mb-8 block">Infiltration Workflow</span>
                            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tight leading-none uppercase">From Zero to <br /> <span className="text-gradient">Total Defense</span></h2>
                            <p className="text-text-secondary text-xl font-medium mb-12 leading-loose">
                                Our battle-tested methodology ensures your team moves from theory to technical mastery in record time.
                            </p>
                            <div className="space-y-10">
                                {[
                                    { step: "01", title: "Intelligence Gathering", desc: "Benchmark your team's current skill set across all security domains." },
                                    { step: "02", title: "Tactical Execution", desc: "Deployment of realistic threat scenarios and attack simulations." },
                                    { step: "03", title: "Performance Review", desc: "Data-driven analysis of infiltration success and response times." },
                                ].map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.2 }}
                                        viewport={{ once: true }}
                                        className="flex gap-8 group"
                                    >
                                        <div className="text-4xl font-black text-accent-primary opacity-20 group-hover:opacity-100 transition-opacity">{step.step}</div>
                                        <div>
                                            <h4 className="text-xl font-black uppercase mb-2 tracking-tight">{step.title}</h4>
                                            <p className="text-text-muted font-medium italic opacity-70 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-accent-primary/20 blur-[100px] rounded-full" />
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative rounded-[40px] border border-border bg-bg-primary p-12 shadow-2xl overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8">
                                    <Zap size={64} className="text-accent-primary opacity-10" />
                                </div>
                                <h3 className="text-3xl font-black mb-8 italic">Range Commander™</h3>
                                <div className="space-y-6">
                                    {[75, 92, 45, 88].map((w, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="flex justify-between text-xs font-black uppercase tracking-widest opacity-60">
                                                <span>Subsystem {i + 1}</span>
                                                <span>{w}%</span>
                                            </div>
                                            <div className="h-2 bg-border rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${w}%` }}
                                                    transition={{ duration: 1.5, delay: i * 0.1 }}
                                                    className="h-full bg-accent-primary"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-12 p-6 rounded-2xl bg-bg-tertiary border border-border flex items-center justify-between">
                                    <span className="text-xs font-black uppercase tracking-widest">Readiness Level: HIGH</span>
                                    <div className="size-4 rounded-full bg-accent-secondary animate-pulse" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-40 text-center relative px-6">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <div className="w-[800px] h-[800px] bg-accent-primary/20 blur-[200px] rounded-full" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] uppercase">
                        The Future of <br /> <span className="text-gradient">Defense</span> is Here.
                    </h2>
                    <p className="text-text-secondary text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
                        Secure your organization's infrastructure with the world's most advanced tactical platform.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="bg-accent-primary text-bg-primary px-16 py-7 rounded-[24px] shadow-glow font-black text-xl hover:scale-105 transition-all duration-300 active:scale-95 uppercase tracking-widest">
                            Request HQ Access
                        </button>
                        <button className="bg-bg-tertiary border border-border text-text-primary px-16 py-7 rounded-[24px] font-black text-xl hover:bg-border transition-all duration-300 uppercase tracking-widest">
                            Consult Specialist
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingContent;
