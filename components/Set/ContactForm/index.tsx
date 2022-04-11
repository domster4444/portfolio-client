import React, { useState, useEffect } from 'react';
import SetCard from 'components/Set/SetCard';
import { TickSquare } from 'react-iconly';
import { Spacer, Button } from '@nextui-org/react';
import { axiosInstance } from 'lib/utilities/api/api';
import { useUser } from '@auth0/nextjs-auth0';
import { toast } from 'react-toastify';
import Link from 'next/link';

import { ChevronLeft, ChevronRight } from 'react-iconly';
import BioStyles from './bio.module.scss';

import styled from 'styled-components';
export const Lable = styled.label`
  font-size: 1.8rem;
`;
export const Input = styled.input`
  height: 5rem;
  font-size: 2.4rem;
  width: 100%;
  border: none;
  border-radius: 1rem;
  outline: none;
  padding-left: 1rem;
  background: #f4f4f4;
`;

const Index = ({ nextPreBtn = true }: { nextPreBtn: boolean }) => {
  const { user, error, isLoading } = useUser();
  const [twitter, setTwitter] = useState<string>('');
  const [facebook, setFacebook] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [linkedin, setLinkedin] = useState<string>('');
  const [github, setGithub] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  // Update on every change
  useEffect(() => {
    if (user) {
      const dataToSend: any = {
        email: user.email,
      };

      axiosInstance
        .post('/api/v1/users/alldetails', dataToSend)

        .then((res: any) => {
          console.log('💚axios NameForm update Success', res.data);
          setTwitter(res.data.detailExist.twitter);
          setFacebook(res.data.detailExist.facebook);
          setInstagram(res.data.detailExist.instagram);
          setLinkedin(res.data.detailExist.linkedin);
          setGithub(res.data.detailExist.github);
          setWebsite(res.data.detailExist.website);
        })
        .catch((error) => {
          console.log(' 🟠axios NameForm error', error);
          toast(error, {
            position: 'top-center',
          });
        });
    }
  }, []);

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (user) {
      const dataToSend: {
        email: string | null | undefined;
        twitter: string;
        facebook: string;
        instagram: string;
        linkedin: string;
        github: string;
        website: string;
      } = {
        email: user.email,
        twitter,
        facebook,
        instagram,
        linkedin,
        github,
        website,
      };

      axiosInstance
        .post('/api/v1/users/contactform', dataToSend)

        .then((res: any) => {
          console.log('💚axios NameForm update Success', res.data);
          toast(res.data.message, {
            position: 'top-center',
          });
        })
        .catch((error) => {
          console.log(' 🟠axios NameForm error', error);
          toast(error, {
            position: 'top-center',
          });
        });
    }
  };
  return (
    <SetCard>
      <form
        onSubmit={submitHandler}
        action=""
        style={{
          width: '100%',
        }}
      >
        <Lable htmlFor="">
          Twitter Profile Url :
          <br />
          <Input
            type="text"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </Lable>
        <br />
        <Lable htmlFor="">
          Facebook Profile Url :
          <br />
          <Input
            type="text"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </Lable>
        <br />
        <Lable htmlFor="">
          Instagram Profile Url :
          <br />
          <Input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </Lable>
        <br />

        <Lable htmlFor="">
          Linked In Profile Url :
          <br />
          <Input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </Lable>
        <br />

        <Lable htmlFor="">
          Github Profile Url :
          <br />
          <Input
            type="text"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
        </Lable>
        <br />

        <Lable htmlFor="">
          Website/Youtube Profile Url :
          <br />
          <Input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </Lable>
        <Spacer y={0.5} />

        <button
          style={{
            width: '100%',
          }}
          type="submit"
          className="button-69 "
        >
          <span
            style={{
              fontSize: '1.8rem',
            }}
            className="poppins_regular_400 "
          >
            Update
          </span>
          {/* <TickSquare set="bold" primaryColor="white" /> */}
        </button>
        {nextPreBtn === true && (
          <>
            <div className={BioStyles.prevNext__btnContainer}>
              <Link passHref href="/dashboard/bio">
                <Button
                  shadow
                  color="secondary"
                  size="xl"
                  className={BioStyles.btnContainer__btn}
                >
                  <ChevronLeft set="bold" primaryColor="white" />
                  Previous Page
                </Button>
              </Link>
              <Link passHref href="/dashboard/education">
                <Button
                  shadow
                  color="primary"
                  size="xl"
                  className={BioStyles.btnContainer__btn}
                >
                  Next Page
                  <ChevronRight set="bold" primaryColor="white" />
                </Button>
              </Link>
            </div>
          </>
        )}
      </form>
    </SetCard>
  );
};

export default Index;
