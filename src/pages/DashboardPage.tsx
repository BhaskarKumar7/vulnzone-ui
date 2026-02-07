import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import DashboardContent from '../features/dashboard/components/DashboardContent';

const DashboardPage: React.FC = () => {
    return (
        <DashboardLayout>
            {(isSidebarOpen, toggleSidebar) => (
                <DashboardContent isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            )}
        </DashboardLayout>
    );
};

export default DashboardPage;
