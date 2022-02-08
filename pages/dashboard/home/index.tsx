import React from 'react';
import DashboardLayout from 'components/DashboardLayout';
import { Avatar } from '@nextui-org/react';
const index = () => {
  return (
    <>
      <DashboardLayout>
        <>
          <header>
            <nav>
              <Avatar
                size="lg"
                src="https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png"
                zoomed
                bordered
                color="gradient"
              />
            </nav>
          </header>

          <h1>this is dashboard</h1>
        </>
      </DashboardLayout>
    </>
  );
};

export default index;
