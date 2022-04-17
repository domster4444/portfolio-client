import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { globalConstant } from 'constant/constant';
import axios from 'axios';
import { useUser } from '@auth0/nextjs-auth0';
import { axiosInstance } from 'lib/utilities/api/api';
import { toast } from 'react-toastify';

const InputRowContainer = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: red; */
  flex-wrap: wrap;

  input {
    width: 32%;
    &:focus {
      border: 1px solid #440ccc;
    }

    /*  when row becomes colument */

    @media only screen and (max-width: 1200px) {
      width: 90%;
      margin-top: 2rem;
    }
    @media only screen and (max-width: 415px) {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;
const Index: React.FC = () => {
  const { user, error, isLoading } = useUser();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [middleName, setMiddleName] = useState<string>('');
  const [contactNumber, setContactNumber] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [organizationName, setOrganizationName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  const fetchAllDataAndSet = () => {
    if (user) {
      //   const dataToSend: any = {
      //     email: user.email,
      //   };

      if (user.email !== '') {
        axios
          .post(`${globalConstant.serverURL}/api/v1/users/accountdata`, {
            data: {
              email: user.email,
            },
          })
          .then((res: any) => {
            console.log(res.data.allUserData);
            const {
              age,
              city,
              contactNumber,
              country,
              firstName,
              lastName,
              middleName,
              organizationName,
              // zipCode,
              // address,
            } = res.data.allUserData;
            setAge(age);
            setCity(city);
            setContactNumber(contactNumber);
            setCountry(country);
            setFirstName(firstName);
            setLastName(lastName);
            setMiddleName(middleName);
            setOrganizationName(organizationName);
          })
          .catch((error: any) => console.log(error));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (user) {
      await axiosInstance
        .patch('/api/v1/users/accountdata', {
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          middleName: middleName,
          contactNumber: contactNumber,
          city: city,
          country: country,
          age: age,
          organizationName: organizationName,
        })

        .then((res: any) => {
          console.log('💚axios NameForm update Success', res.data);
          //   fetchAllDataAndSet();
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
    <>
      <div>
        <InputRowContainer>
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Middle name"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </InputRowContainer>
        <InputRowContainer>
          <input
            type="text"
            placeholder="Organization Name "
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Phone Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </InputRowContainer>
        <InputRowContainer>
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />

          <input
            onChange={(e) => {
              alert('email cannot be changed');
            }}
            type="email"
            placeholder="Email"
            // @ts-ignore
            value={user.email ? user.email : ''}
          />
        </InputRowContainer>
      </div>
      {/* @ts-ignore */}
      <button onClick={handleSubmit} className="primary-btn poppins_medium_500">
        Update
      </button>
    </>
  );
};

export default Index;
