import React, { useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import ThemeCard from 'components/ThemeCard';

import ThemeStyles from './themes.module.scss';
// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import { NextPage } from 'next';
import { globalConstant } from 'constant/constant';
import { Input, Button } from '@nextui-org/react';

const allThemes = [
  {
    isPaid: 'full-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Modal Template',
    description: 'This is the first theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'full-premium',
    url: `${globalConstant.baseURL}/3`,
    name: 'Black Finished Designer Theme',
    description: 'This is the second theme',
    imageUrl: 'https://i.imgur.com/6zJPuJw.png',
  },
  {
    isPaid: 'full-premium',
    url: `${globalConstant.baseURL}/2`,
    name: 'Kshitiz Portfolio',
    description: 'portfolio by author kshitiz',
    imageUrl: 'https://i.imgur.com/pDTrAxx.jpg',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 4',
    description: 'This is the fourth theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 5',
    description: 'This is the fifth theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 6',
    description: 'This is the sixth theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 7',
    description: 'This is the seventh theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 8',
    description: 'This is the eighth theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 9',
    description: 'This is the ninth theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 10',
    description: 'This is the tenth theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },

  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 11',
    description: 'This is the eleventh theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 12',
    description: 'This is the twelfth theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 13',
    description: 'This is the thirteenth theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 14',
    description: 'This is the fourteenth theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 15',
    description: 'This is the fifteenth theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 16',
    description: 'This is the sixteenth theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 17',
    description: 'This is the seventeenth theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 18',
    description: 'This is the eighteenth theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 19',
    description: 'This is the nineteenth theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
  {
    isPaid: 'not-premium',
    url: `${globalConstant.baseURL}/1`,
    name: 'Theme 20',
    description: 'This is the twentieth theme',
    imageUrl: 'https://i.imgur.com/uMQLC1d_d.webp?maxwidth=760&fidelity=grand',
  },
];

const Index: NextPage = () => {
  const [filter, setFilter] = useState('');
  const inputChangeHandler = (e: any) => {
    setFilter(e.target.value);
  };

  const dataSearch = allThemes.filter((item) => {
    return Object.keys(item).some((key) =>
      // @ts-ignore
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
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
                onClick={renderAllTheme}
                type="button"
                style={{ fontSize: '2rem', margin: '0rem 1rem' }}
                color="primary"
                auto
                shadow
                size="xl"
              >
                All
              </Button>
              <Button
                onClick={renderPaidTheme}
                type="button"
                style={{ fontSize: '2rem', margin: '0rem 1rem' }}
                color="error"
                auto
                shadow
                size="xl"
              >
                Premium
              </Button>
              <Button
                onClick={renderFreeTheme}
                type="button"
                shadow
                style={{ fontSize: '2rem', margin: '0rem 1rem' }}
                color="success"
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
