import React, { useState } from 'react';
import Sidebar from '../features/dashboard/components/Sidebar';

interface DashboardLayoutProps {
    children: (isSidebarOpen: boolean, toggleSidebar: () => void) => React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex relative min-h-screen bg-bg-primary">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            {children(isSidebarOpen, toggleSidebar)}
        </div>
    );
};

export default DashboardLayout;
