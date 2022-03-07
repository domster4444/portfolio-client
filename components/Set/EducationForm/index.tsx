import React, { useState, useEffect } from 'react';
import SetCard from 'components/Set/SetCard';
import { TickSquare } from 'react-iconly';
import { Spacer, Button } from '@nextui-org/react';
import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios';
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
  const [organizationName, setOrganizationName] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [dateOfLeaving, setDateOfLeaving] = useState('');
  const [education, setEducation] = useState<any[]>([]);

  const fetchAllDataAndSet = () => {
    if (user) {
      const dataToSend: any = {
        email: user.email,
      };

      axiosInstance
        .post('/api/v1/users/alldetails', dataToSend)

        .then((res: any) => {
          console.log('💚axios Education Form update Success', res.data);
          console.log(
            '💚axios Education form update Success',
            res.data.detailExist.skills
          );

          setEducation(res.data.detailExist.education);
        })
        .catch((error) => {
          console.log(' 🟠axios Skills error', error);
          toast(error, {
            position: 'top-center',
          });
        });
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('submitted successfully ');
    window.alert(organizationName);
    window.alert(dateOfJoining);
    window.alert(dateOfLeaving);

    if (user) {
      axiosInstance
        .patch('/api/v1/users/educationform', {
          organizationName: organizationName,
          dateOfJoining: dateOfJoining,
          dateOfLeaving: dateOfLeaving,
          email: user.email,
        })

        .then((res: any) => {
          console.log('💚axios Education Form update Success', res.data);
          fetchAllDataAndSet();
          toast(res.data.message, {
            position: 'top-center',
          });
        })
        .catch((error) => {
          console.log(' 🟠axios Education Form error', error);
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
        return education.map((item, index) => {
          return (
            <div key={index}>
              <Lable>
                organization Name: {item.organizationName}
                <br />
                date of joining : {item.dateOfJoining}
                <br />
                date of Leaving : {item.dateOfLeaving}
              </Lable>
              <hr />
            </div>
          );
        });
      })()}

      <form
        action=""
        style={{
          width: '100%',
        }}
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <Lable htmlFor="">
          Organization/Institution/College/School Name
          <br />
          <Input
            type="text"
            onChange={(e) => {
              setOrganizationName(e.target.value);
            }}
          />
        </Lable>
        <br />
        <Lable htmlFor="">
          Date of Joining :
          <br />
          <Input
            type="date"
            onChange={(e) => {
              setDateOfJoining(e.target.value);
            }}
          />
        </Lable>
        <Lable htmlFor="">
          Date of Leaving :
          <br />
          <Input
            type="date"
            onChange={(e) => {
              setDateOfLeaving(e.target.value);
            }}
          />
        </Lable>

        <Button type="submit" color="success" size="xl">
          Add To List
          <Spacer x={0.5} />
          <TickSquare set="bold" primaryColor="white" />
        </Button>
      </form>
    </SetCard>
  );
};

export default Index;
