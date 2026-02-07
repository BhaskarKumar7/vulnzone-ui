import React from 'react';
import MarketingLayout from '../layouts/MarketingLayout';
import EnterpriseSolutions from '../features/marketing/components/EnterpriseSolutions';

const SolutionsPage: React.FC = () => {
    return (
        <MarketingLayout>
            <EnterpriseSolutions />
        </MarketingLayout>
    );
};

export default SolutionsPage;
