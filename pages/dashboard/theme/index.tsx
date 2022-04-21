import React, { useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import ThemeCard from 'components/ThemeCard';

import ThemeStyles from './themes.module.scss';
// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import { NextPage } from 'next';
import { globalConstant } from 'constant/constant';
import { Input, Button } from '@nextui-org/react';
import Breadcrumbs from 'components/BreadCrumb/index';

const allThemes = [
  // *seventh
  {
    price: 'free',
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/7`,
    useUrl: `${globalConstant.baseURL}/dashboard/set/?info=name,bio,contact,education,work,skill,project,achievement,simg,7`,
    name: 'Violet Theme',
    description: 'Poison theme',
    imageUrl: 'https://i.imgur.com/ARjoptJ.png',
  },
  // *eighth
  {
    price: 'free',
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/8`,
    useUrl: `${globalConstant.baseURL}/dashboard/set/?info=name,bio,contact,education,work,skill,project,achievement,simg,8`,

    name: 'Venom Theme',
    description: 'African theme',
    imageUrl: 'https://i.imgur.com/S8jb1NW.png',
  },
  // *tenth
  {
    price: 'free',
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/10`,
    useUrl: `${globalConstant.baseURL}/dashboard/set/?info=name,bio,contact,education,work,skill,project,achievement,simg,10`,

    name: 'Venom Theme',
    description: 'Manly theme',
    imageUrl: 'https://i.imgur.com/t4QZWZo.png',
  },
  // *first
  {
    price: '200',
    isPaid: 'full-premium',
    url: `${globalConstant.baseURL}/1`,
    useUrl: `${globalConstant.baseURL}/dashboard/set/?info=bio,contact,education,work,skill,project,achievement,simg,1`,
    name: 'Tarzan Theme',
    description: 'This is the first theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  // *third
  {
    price: '220',
    isPaid: 'full-premium',
    url: `${globalConstant.baseURL}/3`,
    useUrl: `${globalConstant.baseURL}/dashboard/set/?info=bio,contact,education,work,skill,project,achievement,simg,3`,

    name: 'Deep Thought Theme',
    description: 'This is the third theme',
    imageUrl: 'https://i.imgur.com/6zJPuJw.png',
  },
  // *second
  {
    price: '300',
    isPaid: 'full-premium',
    url: `${globalConstant.baseURL}/2`,

    useUrl: `${globalConstant.baseURL}/dashboard/set/?info=bio,contact,education,work,skill,project,achievement,simg,2`,

    name: 'Black Finished Theme',
    description: 'portfolio by author kshitiz',
    imageUrl: 'https://i.imgur.com/pDTrAxx.jpg',
  },
  // *fourth
  {
    price: 'free',
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/4`,
    useUrl: `${globalConstant.baseURL}/dashboard/set/?info=bio,contact,education,work,skill,project,achievement,simg,4`,

    name: 'Basic Theme',
    description: 'This is the fourth theme',
    imageUrl: 'https://i.imgur.com/AaQy0W5.png',
  },
  // *fifth
  {
    price: 'free',
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/5`,
    useUrl: `${globalConstant.baseURL}/dashboard/set/?info=bio,contact,education,work,skill,project,achievement,simg,5`,

    name: 'Minimal Theme',
    description: 'This is the clean girl theme',
    imageUrl: 'https://i.imgur.com/yzoKUuj.png',
  },

  // *ninth
  {
    price: 'free',
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/9`,

    useUrl: `${globalConstant.baseURL}/dashboard/set/?info=bio,contact,education,work,skill,project,achievement,simg,9`,

    name: 'Purple Theme',
    description: 'This is the purble blakish theme',
    imageUrl: 'https://i.imgur.com/Pag5efi.png',
  },
];

const Index: NextPage = () => {
  const [filter, setFilter] = useState('');
  const inputChangeHandler = (e: any) => {
    setFilter(e.target.value);
  };

  const dataSearch = allThemes.filter((item) => {
    console.log();
    return Object.keys(item).some((key) => {
      // @ts-ignore
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase());
    });
  });
  const renderAllTheme = () => {
    setFilter('');
  };
  const renderPaidTheme = () => {
    setFilter('full-premium');
  };
  const renderFreeTheme = () => {
    setFilter('not-premium');
  };

  return (
    <>
      <DashboardLayout>
        <>
          <div>
            <ScrollToTop smooth />
            <Breadcrumbs breadCrumbLink={['dashboard', 'theme']} />

            <header className="text">Themes</header>
            <div className={ThemeStyles.input_container}>
              {/* <h1>{filter}</h1> */}

              <Input
                value={filter}
                onChange={(e) => {
                  inputChangeHandler(e);
                }}
                type="text"
                clearable
                bordered
                css={{ background: 'white' }}
                placeholder="Search"
                size="xl"
                style={{ fontSize: '2rem' }}
              />

              <Button
                className="poppins_regular_400"
                onClick={renderAllTheme}
                type="button"
                style={{
                  fontSize: '2rem',
                  margin: '0rem 1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #c7c7c7',

                  color: '#5a5a5a',
                }}
                color="primary"
                auto
                bordered
                size="xl"
              >
                All
              </Button>
              <Button
                className="poppins_regular_400"
                onClick={renderPaidTheme}
                type="button"
                style={{
                  fontSize: '2rem',
                  margin: '0rem 1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #c7c7c7',
                  color: '#5a5a5a',
                }}
                color="secondary"
                auto
                size="xl"
                bordered
              >
                Premium
              </Button>
              <Button
                className="poppins_regular_400"
                onClick={renderFreeTheme}
                type="button"
                style={{
                  fontSize: '2rem',
                  margin: '0rem 1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #c7c7c7',

                  color: '#5a5a5a',
                }}
                color="success"
                bordered
                auto
                size="xl"
              >
                Free
              </Button>
            </div>
            <div className={ThemeStyles.cardContainer}>
              {(() => {
                return dataSearch.map((item) => (
                  <ThemeCard
                    key={item.name}
                    url={item.url}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    useUrl={item.useUrl}
                    price={item.price}
                  />
                ));
              })()}
            </div>
          </div>
        </>
      </DashboardLayout>
    </>
  );
};

export default Index;
