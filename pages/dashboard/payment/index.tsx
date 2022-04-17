import React from 'react';
import DashboardLayout from 'components/DashboardLayout';
import PricingPlanSection from 'components/PricingPlanSection/PricingPlanSection';
import Breadcrumbs from 'components/BreadCrumb/index';

const index = () => {
  return (
    <>
      <DashboardLayout>
        <>
          <div>
            <Breadcrumbs breadCrumbLink={['dashboard', 'payment']} />

            <header className="text">Payment</header>

            <h3>QR CODE</h3>

            <section className="pricing__plan">
              <PricingPlanSection />
            </section>
          </div>
        </>
      </DashboardLayout>
    </>
  );
};

export default index;
