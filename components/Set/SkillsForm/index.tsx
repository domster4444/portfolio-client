import React, { useEffect } from 'react';
import SetCard from 'components/Set/SetCard';
import { TickSquare } from 'react-iconly';
import { Spacer, Button } from '@nextui-org/react';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0';
import { axiosInstance } from 'lib/utilities/api/api';
import { toast } from 'react-toastify';

import styled from 'styled-components';

const SkillBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SkillBox = styled.div`
  border-radius: 2rem;
  background: #f9f9f9b2;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  margin: 0.5rem 0.5rem;
  border-radius: 1rem;
  padding: 1rem;
  width: 30%;
  margin-bottom: 1rem;
`;

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

export const Textarea = styled.textarea`
  height: 18rem;
  width: 100%;
  border: none;
  border-radius: 1rem;
  padding-left: 1rem;
  background: #f4f4f4;

  font-size: 2.4rem;
`;

const Index: React.FC = () => {
  const { user, error, isLoading } = useUser();
  const [skillName, setSkillName] = React.useState('');
  const [skillLevel, setSkillLevel] = React.useState('');
  const [skills, setSkills] = React.useState<any[]>([]);

  const fetchAllDataAndSet = () => {
    if (user) {
      const dataToSend: any = {
        email: user.email,
      };

      axiosInstance
        .post('/api/v1/users/alldetails', dataToSend)

        .then((res: any) => {
          console.log('💚axios Skills update Success', res.data);
          console.log(
            '💚axios Skills update Success',
            res.data.detailExist.skills
          );

          setSkills(res.data.detailExist.skills);
        })
        .catch((error) => {
          console.log(' 🟠axios Skills error', error);
          toast(error, {
            position: 'top-center',
          });
        });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (user) {
      await axiosInstance
        .patch('/api/v1/users/skillsform', {
          skillName: skillName,
          skillLevel: skillLevel,
          email: user.email,
        })

        .then((res: any) => {
          console.log('💚axios NameForm update Success', res.data);
          fetchAllDataAndSet();
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

  useEffect(() => {
    fetchAllDataAndSet();
  }, []);
  return (
    <SetCard>
      <SkillBoxContainer>
        {(() => {
          return skills.map((item, index) => {
            return (
              <SkillBox key={index}>
                <Lable>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{
                      fill: '#b3b3b3',
                      transform: '',
                      msFilter: '',
                    }}
                  >
                    <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"></path>
                  </svg>

                  <h4
                    className="poppins_semibold_600"
                    style={{
                      margin: '0rem',
                      padding: '0rem',
                      fontSize: '1.8rem',
                    }}
                  >
                    {item.skillName}
                  </h4>

                  <span className="poppins_regular_400">{item.skillLevel}</span>
                </Lable>
              </SkillBox>
            );
          });
        })()}
      </SkillBoxContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (skillName !== '' && skillLevel !== '') {
            handleSubmit(e);
          } else {
            toast('Please fill all the fields', {
              position: 'top-center',
            });
          }
        }}
        style={{
          width: '100%',
        }}
      >
        <Lable htmlFor="">
          Skill Name :
          <br />
          <Input
            type="text"
            value={skillName}
            onChange={(e) => {
              setSkillName(e.target.value);
            }}
          />
        </Lable>
        <br />
        <Lable htmlFor="">
          Skill Level :
          <br />
          <Input
            type="text"
            value={skillLevel}
            onChange={(e) => {
              setSkillLevel(e.target.value);
            }}
          />
        </Lable>

        <Button type="submit" color="success" size="xl">
          Add to list
          <Spacer x={0.5} />
          <TickSquare set="bold" primaryColor="white" />
        </Button>
      </form>
    </SetCard>
  );
};

export default Index;
