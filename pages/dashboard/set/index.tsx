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
                <h1>Name FIELD REQUIRED</h1>
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
                <h1>BIO FIELD REQUIRED</h1>
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
                <h1>Contact FIELD REQUIRED</h1>
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
                <h1>Education FIELD REQUIRED</h1>
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
                <h1>Work FIELD REQUIRED</h1>
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
                <h1>SKILLS FIELD REQUIRED</h1>
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
                <h1>PROJECTS FIELD REQUIRED</h1>
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
                <h1>Achievements FIELD REQUIRED</h1>
                <AchievementsForm />
              </>
            );
          }
        })()}
      </>
    </DashboardLayout>
  );
};

export default SetPage;
