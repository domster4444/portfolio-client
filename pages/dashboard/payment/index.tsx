import React from 'react';
import DashboardLayout from 'components/DashboardLayout';
import PricingPlanSection from 'components/PricingPlanSection/PricingPlanSection';
const index = () => {
  return (
    <>
      <DashboardLayout>
        <>
          <div>
            <header className="text">Payment</header>
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
