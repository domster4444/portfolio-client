import React, { useState, useEffect } from 'react';
import SetCard from 'components/Set/SetCard';
import styled from 'styled-components';
import { TickSquare } from 'react-iconly';
import { Input, Lable } from '../Form.style';
import { Spacer, Button } from '@nextui-org/react';
import { axiosInstance } from 'lib/utilities/api/api';
import { useUser } from '@auth0/nextjs-auth0';
import { toast } from 'react-toastify';

const Index: React.FC = () => {
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
        <br />

        <Button type="submit" color="success" size="xl">
          Update
          <Spacer x={0.5} />
          <TickSquare set="bold" primaryColor="white" />
        </Button>
      </form>
    </SetCard>
  );
};

export default Index;
