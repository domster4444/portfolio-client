import React from 'react';
// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import ContactForm from 'components/Set/ContactForm';

const index = () => {
  return (
    <>
      <DashboardLayout>
        <>
          <ContactForm />
        </>
      </DashboardLayout>
    </>
  );
};

export default index;
