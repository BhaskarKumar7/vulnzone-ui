import { ShieldCheck } from "lucide-react";

const MarketingFooter = () => {
    return (
        <footer className="py-24 bg-bg-primary border-t border-border relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-16 md:gap-24 mb-24">
                    <div className="col-span-2">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center shadow-lg">
                                <ShieldCheck className="text-bg-primary size-6" />
                            </div>
                            <span className="font-black text-2xl tracking-tighter uppercase">VULN<span className="text-accent-primary">ZONE</span></span>
                        </div>
                        <p className="text-text-muted text-base leading-loose max-w-xs font-medium">
                            Empowering global organizations through tactical excellence and hyper-realistic cyber range simulations.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-accent-primary">Intelligence</h4>
                        <div className="space-y-5 text-sm font-bold opacity-60">
                            <p className="hover:text-accent-primary cursor-pointer transition-colors">Academy</p>
                            <p className="hover:text-accent-primary cursor-pointer transition-colors">Shadow Labs</p>
                            <p className="hover:text-accent-primary cursor-pointer transition-colors">Pro Labs</p>
                            <p className="hover:text-accent-primary cursor-pointer transition-colors">Tactical API</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-accent-primary">HQ</h4>
                        <div className="space-y-5 text-sm font-bold opacity-60">
                            <p className="hover:text-accent-primary cursor-pointer transition-colors">Our Ops</p>
                            <p className="hover:text-accent-primary cursor-pointer transition-colors">Specialists</p>
                            <p className="hover:text-accent-primary cursor-pointer transition-colors">Intelligence</p>
                            <p className="hover:text-accent-primary cursor-pointer transition-colors">Protocols</p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">© 2026 VulnZone Strategic Systems. All Rights Reserved.</p>
                    <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                        <span className="hover:text-accent-primary cursor-pointer transition-colors">Transmission: AES-GCM</span>
                        <span className="hover:text-accent-primary cursor-pointer transition-colors">Grid: Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MarketingFooter;
