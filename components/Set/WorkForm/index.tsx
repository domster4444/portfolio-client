import React, { useState, useEffect } from 'react';

import SetCard from 'components/Set/SetCard';
import { TickSquare } from 'react-iconly';
import { Spacer, Button } from '@nextui-org/react';
import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { axiosInstance } from 'lib/utilities/api/api';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const WorkBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WorkBox = styled.div`
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

const Index: React.FC = () => {
  const { user, error, isLoading } = useUser();
  const [companyName, setCompanyName] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [dateOfJoining, setDateOfJoining] = useState<string>('');
  const [workDescription, setWorkDescription] = useState<string>('');
  const [workExperience, setWorkExperience] = useState<any[]>([]);

  const fetchAllDataAndSet = () => {
    if (user) {
      const dataToSend: any = {
        email: user.email,
      };

      axiosInstance
        .post('/api/v1/users/alldetails', dataToSend)

        .then((res: any) => {
          console.log('💚axios work experience update Success', res.data);
          console.log(
            '💚axios work experience update Success',
            res.data.detailExist.workExperience
          );

          setWorkExperience(res.data.detailExist.workExperience);
        })
        .catch((error) => {
          console.log(' 🟠axios work error', error);
          toast(error, {
            position: 'top-center',
          });
        });
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('submitted successfully ');

    if (user) {
      axiosInstance
        .patch('/api/v1/users/workform', {
          // organizationName: organizationName,
          // dateOfJoining: dateOfJoining,
          // dateOfLeaving: dateOfLeaving,
          email: user.email,
          companyName,
          destination,
          dateOfJoining,
          workDescription,
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
      <WorkBoxContainer>
        {(() => {
          return workExperience.map((item, index) => {
            return (
              <WorkBox key={index}>
                <Lable>
                  {item.dateOfJoining}
                  <h4
                    className="poppins_semibold_600"
                    style={{
                      marginTop: '1rem',
                      margin: '0rem',
                      padding: '0rem',
                      fontSize: '1.8rem',
                    }}
                  >
                    {item.companyName}
                  </h4>
                  {item.destination}
                  {/* <br /> */}
                  {/* <br /> */}
                  {/* Work Description : {item.workDescription} */}
                </Lable>
                {/* <hr /> */}
              </WorkBox>
            );
          });
        })()}
      </WorkBoxContainer>

      <form
        onSubmit={submitHandler}
        style={{
          width: '100%',
        }}
      >
        <Lable htmlFor="">
          Company Name :
          <br />
          <Input
            type="text"
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
          />
        </Lable>
        <Lable htmlFor="">
          Work Short Description :
          <br />
          <Input
            type="text"
            onChange={(e) => {
              setWorkDescription(e.target.value);
            }}
          />
        </Lable>
        <Lable htmlFor="">
          Company Destination :
          <br />
          <Input
            type="text"
            onChange={(e) => {
              setDestination(e.target.value);
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
