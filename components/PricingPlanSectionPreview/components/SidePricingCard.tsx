import React from 'react';
// @ts-ignore
import KhaltiCheckout from 'khalti-checkout-web';
// @ts-ignore
import config from 'lib/utilities/payment/KhaltiConfig';
import Link from 'next/link';

type PropType = {
  priceTag: string;
  title: string;
  description: string;
  priceAmount: number | null;
};

export default function SidePricingCard({
  priceTag,
  title,
  description,
  priceAmount,
}: PropType) {
  const checkout = new KhaltiCheckout(config);
  return (
    <div className="priceCard">
      <h2
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          letterSpacing: '0.15rem',
        }}
        className="source_700"
      >
        {title}
      </h2>
      <h1>{priceTag}</h1>
      <p>{description}</p>

      <div className="priceCard__btnContainer">
        {/* <Link passHref href="/api/auth/login">
          <button
            type="button"
            onClick={() => {
              if (priceAmount) {
                checkout.show({ amount: priceAmount * 100 });
              } else {
                alert('something went wrong');
              }
            }}
            className="cursor"
          >
            <strong>Get It</strong>
          </button>
        </Link> */}
      </div>
    </div>
  );
}
