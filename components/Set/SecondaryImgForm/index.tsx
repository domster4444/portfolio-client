/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import ImageShower from 'components/ImageShower/ImageShower';
import Image from 'next/image';
import { axiosInstance } from 'lib/utilities/api/api';
import { useUser } from '@auth0/nextjs-auth0';
import { toast } from 'react-toastify';
import { globalConstant } from 'constant/constant';
import styled from 'styled-components';
import SetCard from 'components/Set/SetCard';
import { TickSquare } from 'react-iconly';

const SecondaryImgWrapper = styled.div`
  /* background: red; */
  display: flex;
  justify-content: center;
  img {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    border-bottom-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-top-right-radius: 10rem;
    border-top-left-radius: 10rem;
  }
`;

const ImageUploadWrapper = styled.div`
  /* background: red; */
  margin: 0rem 0rem 3rem 0rem;
  position: relative;
  border: 0.3rem dashed #ccc;
  span {
    font-size: 2rem;
    position: absolute;
    color: #c1c1c1;
    width: 100%;
    text-align: center;
    i {
      font-size: 6rem;
      color: #1c8adb;
    }
  }
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

import { Spacer, Button } from '@nextui-org/react';
import axios from 'axios';

const Index: React.FC = () => {
  const { user, error, isLoading } = useUser();
  const [imageUrl, setImageUrl] = useState<string>('');

  // !___________________FETCH ALL DATA & SET
  const fetchAllDataAndSet = () => {
    if (user) {
      const dataToSend: any = {
        email: user.email,
      };

      axiosInstance
        .post('/api/v1/users/alldetails', dataToSend)

        .then((res: any) => {
          console.log('💚axios NameForm update Success', res.data);
          console.log('🌂🌂🌂🌂🌂🌂🌂🌂🌂🌂🌂🌂🌂🌂');
          console.log(res.data.detailExist.secondaryPicture);
          setImageUrl(res.data.detailExist.secondaryPicture);
        })
        .catch((error) => {
          console.log(' 🟠axios NameForm error', error);
          toast(error, {
            position: 'top-center',
          });
        });
    }
  };

  // *___________________ UPLOAD IMAGE START

  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState();
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  //! ___________config for preview image
  const changeHandler = (e: any) => {
    // for singleFileUpload the file will be in 0th Index
    //* store file in variable
    const file = e.target.files[0];

    previewFile(file);
  };
  const previewFile = (file: any) => {
    // FileReader is builtIn Js object class
    //* create instance of FileReader to convert our image to base64String
    const reader = new FileReader();
    //*convert file to base64String using js object class "FielsReader"
    reader.readAsDataURL(file);
    //* when file is converted to base64String, call the onload function
    reader.onloadend = () => {
      //* set the previewSource to the base64String
      // @ts-ignore
      setPreviewSource(reader.result);
    };
  };

  //! __________onSubmission of Image to cloudinary
  const submitImageHandler = (e: any) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage: any) => {
    console.log('uploadImage' + base64EncodedImage);
    try {
      const data = await fetch(`${globalConstant.serverURL}/api/upload`, {
        method: 'POST',
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { 'Content-Type': 'application/json' },
      });
      const response = await data.json();
      console.log(response);
      setImageUrl(response.url);
      setFileInputState('');
      // @ts-ignore
      setPreviewSource('');

      setSuccessMsg('Image uploaded successfully');
    } catch (err) {
      console.error(err);
      setErrMsg('Something went wrong!');
    }
  };

  // * UPLOAD IMAGE END

  // ? GET ALL DATA

  useEffect(() => {
    fetchAllDataAndSet();
  }, []);

  const submitSecondaryImageForm = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    alert('submitted');
    if (imageUrl == '' || imageUrl == undefined) {
      toast.error('image should be uploaded and submitted');
    } else {
      if (user) {
        const dataToSend = {
          secondaryPicture: imageUrl,
          email: user.email,
        };
        alert('request sent');

        axiosInstance
          .patch('/api/v1/users/secondaryimg', dataToSend)

          .then((res: any) => {
            console.log('💚axios SecondaryImageForm update Success', res.data);
            toast(res.data.message, {
              position: 'top-center',
            });
          })
          .catch((error) => {
            console.log(' 🟠axios SecondaryImageForm error', error);
            toast(error, {
              position: 'top-center',
            });
          });
      }
    }
  };

  return (
    <SetCard>
      <form
        style={{
          width: '100%',
        }}
        onSubmit={(e) => {
          // UPLOOAD FOR TO SERVER
          e.preventDefault();

          // window.alert('secondary image successfully submitted');
          submitSecondaryImageForm(e);
        }}
      >
        <Lable htmlFor="">
          {/* Secondary Image : */}
          {/* <br /> */}
          {/* <h2>
            URL:{' '}
            {(() => {
              if (imageUrl) {
                return imageUrl;
              }
              return 'No Image Currently Selected';
            })()}
          </h2> */}

          <SecondaryImgWrapper>
            {/*  //? SERVER IMAGE */}
            <img
              id="secondaryImage"
              // {/* @ts-ignore */}
              src={imageUrl ? imageUrl : undefined}
              alt=""
            />
          </SecondaryImgWrapper>
          <Spacer y={1} />
          <Spacer y={1} />

          <div
            className="container-previe-img"
            style={{
              transform: 'translateX(-50%)',
              marginLeft: '50%',
              // background: 'red',
              width: '50%',
              borderRadius: '1rem',
              // height: '35rem',
              overflow: 'hidden',
            }}
          >
            {/* //* preview the image if previewSource is not empty */}

            {previewSource && <img src={previewSource} alt="preview" />}
          </div>
          <ImageShower />
          <ImageUploadWrapper>
            <span>
              <i className="bx bx-cloud-upload" />
              <br />
              Upload Your File Here
            </span>

            <input
              style={{
                opacity: '0',
                cursor: 'pointer',
                width: '100%',
                height: '10rem',
              }}
              name="bio__img"
              type="file"
              value={fileInputState}
              onChange={changeHandler}
            />
          </ImageUploadWrapper>
          {/* submit image btn start */}
          <Button
            color="secondary"
            bordered
            size="xl"
            onClick={submitImageHandler}
          >
            submit Image
            <Spacer x={0.5} />
          </Button>
        </Lable>

        <br />

        <br />

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
          {/* <Spacer x={0.5} /> */}
          {/* <TickSquare set="bold" primaryColor="white" /> */}
        </button>
      </form>
    </SetCard>
  );
};

export default Index;
