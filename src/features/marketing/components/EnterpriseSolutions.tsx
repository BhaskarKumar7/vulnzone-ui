import { motion } from 'framer-motion';
import {
    Users,
    Cpu,
    BarChart3,
    Layers,
    ArrowRight,
    CheckCircle2,
    Shield,
    Globe,
    Zap
} from 'lucide-react';

const SOLUTIONS = [
    {
        title: "Enterprise Team Management",
        icon: Users,
        hero: "Manage elite teams at scale.",
        description: "Comprehensive workforce analytics, progress tracking, and hierarchical user management designed for global security organizations.",
        features: [
            "Advanced Role-Based Access Control (RBAC)",
            "Scalable Team Hierarchy Support",
            "Real-time Performance Dashboards",
            "Skill Gap Analysis Engine"
        ],
        accent: "cyan"
    },
    {
        title: "Custom Lab Architecture",
        icon: Cpu,
        hero: "Your infrastructure, our range.",
        description: "Design and deploy proprietary network topologies that mirror your organization's unique infrastructure for hyper-realistic training.",
        features: [
            "Visual Lab Designer",
            "Proprietary OS Image Support",
            "Isolated VPN Connection Layer",
            "Snapshot & Reset Capabilities"
        ],
        accent: "green"
    },
    {
        title: "Precision Reporting",
        icon: BarChart3,
        hero: "Data-driven security insights.",
        description: "Automated executive briefings and performance metrics aligned with industry frameworks like NIST and MITRE ATT&CK.",
        features: [
            "Framework Alignment Mapping",
            "Automated Executive Summaries",
            "Exportable Technical Logs",
            "Historical Benchmarking"
        ],
        accent: "red"
    },
    {
        title: "Platform Integration",
        icon: Layers,
        hero: "Connect your entire stack.",
        description: "Synchronize VulnZone with your existing SIEM, SOAR, or HRIS systems via our robust Tactical API.",
        features: [
            "Tactical REST API Access",
            "Webhooks for Task Events",
            "Pre-built SIEM Connectors",
            "SCIM User Provisioning"
        ],
        accent: "purple"
    }
];

const EnterpriseSolutions = () => {
    return (
        <div className="pt-32 pb-40">
            {/* Hero Section */}
            <section className="px-6 mb-32">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-accent-primary font-black uppercase text-xs tracking-[0.4em] mb-8 block">Strategic Systems</span>
                        <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tight uppercase leading-[0.9]">
                            Enterprise <br /> <span className="text-gradient">Grade Defense</span>
                        </h1>
                        <p className="text-text-secondary text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed mb-16">
                            Tailored solutions for high-performing security teams who require precision, scalability, and hyper-realistic simulations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Solutions Grid */}
            <section className="px-6 space-y-32">
                {SOLUTIONS.map((sol, i) => (
                    <motion.div
                        key={sol.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`max-w-7xl mx-auto flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
                    >
                        <div className="flex-1 space-y-10 text-center lg:text-left">
                            <div className={`size-20 bg-bg-secondary rounded-[24px] border border-border flex items-center justify-center mx-auto lg:mx-0 shadow-xl`}>
                                <sol.icon className="size-10 text-accent-primary" />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight italic">{sol.title}</h2>
                                <p className="text-accent-primary uppercase text-xs font-black tracking-[0.3em] mb-8">{sol.hero}</p>
                                <p className="text-text-secondary text-lg md:text-xl font-medium leading-relaxed opacity-80">
                                    {sol.description}
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {sol.features.map(f => (
                                    <div key={f} className="flex items-center gap-4 text-left">
                                        <CheckCircle2 className="text-accent-secondary shrink-0" size={20} />
                                        <span className="text-sm font-bold uppercase tracking-widest opacity-70">{f}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-8">
                                <button className="bg-bg-tertiary/30 border border-border px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-border transition-all flex items-center gap-4 mx-auto lg:mx-0 group">
                                    Full Tech Specs <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 w-full relative group">
                            <div className="absolute inset-0 bg-accent-primary/10 blur-[100px] rounded-full scale-50 group-hover:scale-100 transition-transform duration-1000" />
                            <div className="relative aspect-[4/3] bg-bg-secondary/50 backdrop-blur-xl border border-border rounded-[40px] overflow-hidden shadow-2xl flex items-center justify-center">
                                {/* Visual Representation placeholder */}
                                <div className="absolute inset-x-0 top-0 h-10 bg-bg-tertiary/50 border-b border-border flex items-center px-6 gap-2">
                                    <div className="flex gap-1.5 font-mono text-[8px] opacity-30">
                                        <span>SYSTEM_REPORT</span>
                                        <span>//</span>
                                        <span>ENCRYPTED_STREAM</span>
                                    </div>
                                </div>
                                <div className="p-10 w-full h-full flex flex-col justify-center gap-8">
                                    {[1, 2, 3].map(j => (
                                        <div key={j} className="h-4 bg-bg-primary/50 rounded-full w-full overflow-hidden border border-border/20">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${30 + j * 20}%` }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                                className="h-full bg-accent-primary opacity-30 shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                                            />
                                        </div>
                                    ))}
                                    <div className="mt-8 flex justify-center">
                                        <div className="size-24 rounded-full border-4 border-dashed border-accent-primary/20 flex items-center justify-center animate-spin-slow">
                                            <Shield className="text-accent-primary opacity-20" size={32} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Trust Section */}
            <section className="py-40 bg-bg-secondary/30 border-y border-border px-6 mt-40">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-black mb-16 uppercase italic">Operational <span className="text-accent-primary">Excellence</span></h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { label: "Compliance", val: "SOC2 TYPE II", icon: Shield },
                            { label: "Availability", val: "99.9% UPTIME", icon: Zap },
                            { label: "Deployment", val: "ON-PREM / CLOUD", icon: Globe },
                            { label: "Support", val: "24/7 ELITE OPS", icon: Users },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-4">
                                <stat.icon className="size-8 mx-auto text-accent-primary opacity-50" />
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">{stat.label}</p>
                                <p className="text-xl font-black">{stat.val}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EnterpriseSolutions;
