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
import DashboardLayout from 'components/DashboardLayout';
import { toast } from 'react-toastify';
const SetPage: React.FC = () => {
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

  // const requiredFieldArr = string.split(',');

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
                <hr />
                <NameForm nextPreBtn={false} />
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
                <hr />
                <BioForm nextPreBtn={false} />
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
                <hr />
                <ContactForm />
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
                <hr />
                <EducationForm />
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
                <hr />
                <WorkForm />
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
                <hr />
                <SkillsForm />
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
                <hr />
                <ProjectsForm />
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
                <hr />
                <AchievementsForm />
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
                <hr />
                <SecondaryImgForm />
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
          <button
            style={{
              backgroundColor: '#658eff',
              border: '1px solid #f5f5f5',
              borderRadius: '5px',
              padding: '0.5rem',
              fontSize: '2rem',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            {' '}
            Visit My Portfolio
          </button>
        </div>
      </>
    </DashboardLayout>
  );
};

export default SetPage;
