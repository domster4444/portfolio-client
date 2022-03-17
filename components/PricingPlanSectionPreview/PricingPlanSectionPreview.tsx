import React, { useEffect, useState } from 'react';

import SidePricingCard from './components/SidePricingCard';
import CenterPricingCard from './components/CenterPricingCard';
import { Switch } from '@nextui-org/react';
// @ts-ignore

import { Fade, Zoom } from 'react-reveal';

export default function PricingPlanSection(): JSX.Element {
  const [isAnnual, setAnnualSwitch] = useState(false);

  const handleAnnualSwitch = (e: any) => {
    setAnnualSwitch(e.target.checked);
  };
  return (
    <section id="pricingPlanSection">
      <div className="containerCenter">
        <div className="contentBlock">
          <main>
            <Fade bottom>
              <h2>PRICING & PLANS</h2>

              <h1
                className="source_700"
                style={{
                  letterSpacing: '0.1rem',
                  fontSize: '4rem',
                  color: '#191970',
                }}
              >
                Best Pricing & Plans
              </h1>
              <div
                style={{
                  marginBottom: '2rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <b style={{ fontSize: '2rem', margin: '0rem 0.5rem' }}>
                  Switch To Annual Subscription
                </b>

                <Switch
                  animated={false}
                  size="xl"
                  checked={false}
                  onClick={(e) => {
                    handleAnnualSwitch(e);
                  }}
                />
              </div>
            </Fade>
            <div
              className="container"
              style={{
                marginTop: '5rem',
              }}
            >
              <SidePricingCard
                priceTag={isAnnual === true ? 'रु 4800 /year' : 'रु 400 /month'}
                title="Basic"
                description="
                My lady bits and bobs cup of tea bubble and squeak brolly
                "
                priceAmount={isAnnual === true ? 4800 : 400}
              />
              <CenterPricingCard
                priceTag={isAnnual === true ? 'रु 8400 /year' : 'रु 700 /month'}
                title="Elite"
                description="
                My lady bits and bobs cup of tea bubble and squeak brolly
                
                "
                priceAmount={isAnnual === true ? 8400 : 700}
              />
              <SidePricingCard
                priceTag={isAnnual === true ? 'रु 7800 /year' : 'रु 650 /month'}
                title="Premium"
                description="
                My lady bits and bobs cup of tea bubble and squeak brolly
                "
                priceAmount={isAnnual === true ? 7800 : 650}
              />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
