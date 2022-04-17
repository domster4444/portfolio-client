/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import DashboardLayout from 'components/DashboardLayout';
import PricingPlanSection from 'components/PricingPlanSection/PricingPlanSection';
import Breadcrumbs from 'components/BreadCrumb/index';
// import esewa from 'public/images/logo/esewa.png';
// import khalti from 'public/images/logo/khalti.png';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import PricingPlanSectionPreview from 'components/PricingPlanSectionPreview/PricingPlanSectionPreview';
const Index = () => {
  const { user, error, isLoading } = useUser();
  const [currentPaymentMethod, setPaymentMethod] = useState('esewa');

  return (
    <>
      <DashboardLayout>
        <>
          <div>
            <Breadcrumbs breadCrumbLink={['dashboard', 'payment']} />
            {/* //? plan section */}
            <section className="pricing__plan">
              {/* <PricingPlanSection /> */}
              <PricingPlanSectionPreview />
            </section>

            {/* //? qr code section */}

            <div className="qr-code-section">
              <div className="containerCenter">
                <div className="contentBlock">
                  <header className="text">Pay With QR</header>
                  <form action="">
                    <input
                      type="email"
                      disabled
                      // @ts-ignore

                      value={user ? user.email : ''}
                      placeholder="Enter your email here"
                    />

                    <div className="payment-method">
                      <h3 className="poppins_regular_400">
                        Select Payment Method
                      </h3>
                      <div className="payment-method_container">
                        {/* @ts-ignore */}

                        <div
                          className="payment-icon_block"
                          // @ts-ignore
                          style={
                            currentPaymentMethod === 'esewa'
                              ? { border: '1px solid #440ccc' }
                              : null
                          }
                          onClick={() => {
                            setPaymentMethod('esewa');
                          }}
                        >
                          <img
                            id="esewa"
                            src="https://i.imgur.com/NmsQnbc.png"
                            alt=""
                          />
                        </div>

                        {/* @ts-ignore */}
                        <div
                          className="payment-icon_block"
                          onClick={() => {
                            setPaymentMethod('khalti');
                          }}
                          // @ts-ignore
                          style={
                            currentPaymentMethod === 'khalti'
                              ? { border: '1px solid #440ccc' }
                              : null
                          }
                        >
                          <img
                            id="khalti"
                            src="https://i.imgur.com/zMZTyvo_d.webp?maxwidth=760&fidelity=grand"
                            alt=""
                          />
                        </div>
                      </div>
                      <p className="poppins_regular_400">
                        Scan below QR code image using your internet banking
                        app.
                      </p>

                      <p className="poppins_regular_400">
                        Paying on mobile? Use your phone to save or take a
                        screenshot of the QR code and upload QR code using your
                        mobile banking app
                      </p>

                      <div className="qr_container">
                        <span>
                          <img
                            id="qr"
                            src={
                              currentPaymentMethod === 'esewa'
                                ? 'https://i.imgur.com/w4TGLkb.jpg'
                                : 'https://i.imgur.com/iLntIJT.png'
                            }
                            alt=""
                          />
                        </span>
                        <button className="primary-btn poppins_medium_500">
                          Yes I Have Paid
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      </DashboardLayout>
    </>
  );
};

export default Index;
