import {
    LayoutDashboard,
    Monitor,
    Target,
    Flag,
    Globe,
    Terminal,
    Settings,
    Zap,
    ShieldCheck
} from 'lucide-react';

export const DASHBOARD_NAV_ITEMS = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Monitor, label: 'Attack Ranges', path: '/dashboard/ranges' },
    { icon: Target, label: 'Active Targets', path: '/dashboard/targets' },
    { icon: Flag, label: 'Operational CTF', path: '/dashboard/ctf' },
    { icon: Globe, label: 'Global Intel', path: '/dashboard/intel' },
    { icon: Terminal, label: 'Cyber Academy', path: '/dashboard/academy' },
    { icon: Settings, label: 'Command Config', path: '/dashboard/settings' },
];

export const MARKETING_NAV_ITEMS = [
    { label: "Intelligence", path: "#" },
    { label: "Solutions", path: "/solutions" },
    { label: "Enterprise", path: "#" },
    { label: "Partners", path: "#" },
    { label: "HQ", path: "#" },
];

export const MOCK_STATS = [
    { label: "Global Dominance", value: "42", icon: Globe, subtext: "Next Promotion: Level 45", trend: "up" as const },
    { label: "Vulnerabilities ID", value: "128", icon: Target, subtext: "+4 Found Today", accent: "cyan" as const },
    { label: "Tactical XP", value: "14,250", icon: Zap, subtext: "World Rank #1.2K", accent: "green" as const, trend: "up" as const },
    { label: "Operator Rank", value: "Elite", icon: ShieldCheck, subtext: "Guru Status Confirmed", accent: "red" as const },
];
