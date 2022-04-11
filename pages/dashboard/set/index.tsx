import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button,
  Textarea,
  Container,
  Card,
  Spacer,
  css,
} from '@nextui-org/react';
import { ChevronLeft, ChevronRight, TickSquare } from 'react-iconly';
import SetCard from 'components/Set/SetCard';
import NameForm from 'components/Set/NameForm';
import BioStyles from './bio.module.scss';
import ContactForm from 'components/Set/ContactForm';
import EducationForm from 'components/Set/EducationForm';
import WorkForm from 'components/Set/WorkForm';
import SkillsForm from 'components/Set/SkillsForm';
import ProjectsForm from 'components/Set/ProjectsForm';
import AchievementsForm from 'components/Set/AchievementsForm';
import SecondaryImgForm from 'components/Set/SecondaryImgForm';
import BioForm from 'components/Set/BioForm';
// @ts-ignore

import { Zoom } from 'react-reveal';

// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import { toast } from 'react-toastify';
const SetPage: React.FC = () => {
  const [VisitBtnUrl, setVisitBtnUrl] = useState('');

  //  bio update submit handler
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    toast('successfully updated', {
      position: 'top-center',
    });
  };

  const router = useRouter();
  console.log(router.query);
  console.log(router.query.info);
  // @ts-ignore
  console.log(typeof router.query.info);
  // @ts-ignore
  const string = router.query.info;
  // @ts-ignore

  console.log(string);

  useEffect((): void => {
    setTimeout(() => {
      // get theme user selected
      const windowUrlString = window.location.href;

      // @ts-ignore
      const requiredFieldArr = windowUrlString.split(',');
      const userSelectedTheme = requiredFieldArr.at(-1);
      // const themeNo = requiredFieldArr[7];
      // ? get user name
      const bioUserEle = document.getElementById(
        'bioUserName'
      ) as HTMLInputElement;
      if (bioUserEle) {
        // @ts-ignore
        const bioUserNameVal = bioUserEle.value;
        setVisitBtnUrl(`/${userSelectedTheme}/${bioUserNameVal}`);
      }
    }, 2000);
  });

  const getUserName = () => {
    // log value of input with bioUserName id
    // @ts-ignore
  };
  return (
    <DashboardLayout>
      <>
        {/*//*______________bio___________ */}
        {(() => {
          if (
            string &&
            // @ts-ignore
            string.split(',').includes('bio')
          ) {
            return (
              <>
                {/* <hr /> */}
                <Zoom>
                  <NameForm nextPreBtn={false} />
                </Zoom>
                <br />
              </>
            );
          }
        })()}

        {/*//*______________bio___________ */}
        {(() => {
          if (
            string &&
            // @ts-ignore
            string.split(',').includes('bio')
          ) {
            return (
              <>
                {/* <hr /> */}
                <Zoom>
                  <BioForm nextPreBtn={false} />
                </Zoom>
              </>
            );
          }
        })()}
        {/*//*______________contacts___________ */}
        {(() => {
          if (
            string &&
            // @ts-ignore
            string.split(',').includes('contacts')
          ) {
            return (
              <>
                {/* <hr /> */}
                <Zoom>
                  <ContactForm nextPreBtn={false} />
                </Zoom>
              </>
            );
          }
        })()}

        {/*//*______________Education___________ */}
        {(() => {
          if (
            string &&
            // @ts-ignore
            string.split(',').includes('education')
          ) {
            return (
              <>
                {/* <hr /> */}
                <Zoom>
                  <EducationForm nextPreBtn={false} />
                </Zoom>
              </>
            );
          }
        })()}
        {/*//*______________Work___________ */}
        {(() => {
          if (
            string &&
            // @ts-ignore
            string.split(',').includes('education')
          ) {
            return (
              <>
                {/* <hr /> */}
                <Zoom>
                  <WorkForm nextPreBtn={false} />
                </Zoom>
              </>
            );
          }
        })()}
        {/*//*______________Skills___________ */}
        {(() => {
          if (
            string &&
            // @ts-ignore
            string.split(',').includes('education')
          ) {
            return (
              <>
                {/* <hr /> */}
                <Zoom>
                  <SkillsForm nextPreBtn={false} />
                </Zoom>
              </>
            );
          }
        })()}

        {/*//*______________Projects___________ */}
        {(() => {
          if (
            string &&
            // @ts-ignore
            string.split(',').includes('education')
          ) {
            return (
              <>
                {/* <hr /> */}
                <Zoom>
                  <ProjectsForm nextPreBtn={false} />
                </Zoom>
              </>
            );
          }
        })()}
        {/*//*______________Achievements___________ */}
        {(() => {
          if (
            string &&
            // @ts-ignore
            string.split(',').includes('education')
          ) {
            return (
              <>
                {/* <hr /> */}
                <Zoom>
                  <AchievementsForm nextPreBtn={false} />
                </Zoom>
              </>
            );
          }
        })()}
        {/*//*______________Secondary Image___________ */}
        {(() => {
          if (
            string &&
            // @ts-ignore
            string.split(',').includes('simg')
          ) {
            return (
              <>
                {/* <hr /> */}
                <Zoom>
                  <SecondaryImgForm />
                </Zoom>
              </>
            );
          }
        })()}
        <div
          style={{
            display: 'flex',
            margin: '2rem',
            fontSize: '1.5rem',
            justifyContent: 'center',
          }}
        >
          <a
            className="button-63"
            type="button"
            href={VisitBtnUrl}
            onClick={getUserName}
          >
            {' '}
            Visit My Portfolio
          </a>
        </div>
      </>
    </DashboardLayout>
  );
};

export default SetPage;
