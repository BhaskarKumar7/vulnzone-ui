import React from "react";
import LandingNavbar from "../features/marketing/components/LandingNavbar";
import MarketingFooter from "../features/marketing/components/MarketingFooter";

interface MarketingLayoutProps {
    children: React.ReactNode;
}

const MarketingLayout: React.FC<MarketingLayoutProps> = ({ children }) => {
    return (
        <div className="bg-bg-primary text-text-primary min-h-screen relative mesh-gradient">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
            <LandingNavbar />
            <main>
                {children}
            </main>
            <MarketingFooter />
        </div>
    );
};

export default MarketingLayout;
