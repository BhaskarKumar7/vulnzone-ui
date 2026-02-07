import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import AttackRanges from '../features/dashboard/components/AttackRanges';

const AttackRangesPage: React.FC = () => {
    return (
        <DashboardLayout>
            {(isSidebarOpen) => (
                <AttackRanges isSidebarOpen={isSidebarOpen} />
            )}
        </DashboardLayout>
    );
};

export default AttackRangesPage;
