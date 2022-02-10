import React from 'react';
// @ts-ignore
import KhaltiCheckout from 'khalti-checkout-web';
import config from 'lib/utilities/payment/KhaltiConfig';

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
      <h1>{priceTag}</h1>
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="priceCard__btnContainer">
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
          <strong>Buy Now</strong>
        </button>
      </div>
    </div>
  );
}
