import React, { useEffect } from 'react';
import SetCard from 'components/Set/SetCard';
import { TickSquare } from 'react-iconly';
import { Spacer, Button } from '@nextui-org/react';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0';
import { axiosInstance } from 'lib/utilities/api/api';
import { toast } from 'react-toastify';

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
      {(() => {
        return skills.map((item, index) => {
          return (
            <div key={index}>
              <Lable>
                Skill Name: {item.skillName}
                <br />
                Skill Level: {item.skillLevel}
              </Lable>
              <hr />
            </div>
          );
        });
      })()}

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
