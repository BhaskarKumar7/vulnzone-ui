import React from 'react';
import MarketingLayout from '../layouts/MarketingLayout';
import LandingContent from '../features/marketing/components/LandingContent';

const LandingPage: React.FC = () => {
    return (
        <MarketingLayout>
            <LandingContent />
        </MarketingLayout>
    );
};

export default LandingPage;
