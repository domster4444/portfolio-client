import React, { useState, useEffect } from 'react';
import ImageShower from 'components/ImageShower/ImageShower';
import Image from 'next/image';
import { axiosInstance } from 'lib/utilities/api/api';
import { useUser } from '@auth0/nextjs-auth0';
import { globalConstant } from 'constant/constant';

import { Button, Textarea, Container, Card, Spacer } from '@nextui-org/react';
import { ChevronLeft, ChevronRight, TickSquare } from 'react-iconly';

// @ts-ignore
import DashboardLayout from 'components/DashboardLayout';
import { toast } from 'react-toastify';
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

export const BioFormImagePreviewer = styled.img`
  border-radius: 1rem;
  width: 50%;
  transform: translateX(-50%);
  margin-left: 50%;
  border-top-right-radius: 10rem;
  border-top-left-radius: 10rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const ImageUploadWrapper = styled.div`
  margin: 1rem 0rem 3rem 0rem;
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

const Index = ({ nextPreBtn }: { nextPreBtn: boolean }) => {
  const { user, error, isLoading } = useUser();
  const [imageUrl, setImageUrl] = useState('');
  const [bioFieldData, setBioFieldData] = useState('');

  const updateBioFormHander = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    if (imageUrl === '' || bioFieldData === '') {
      if (imageUrl === '') {
        toast('Image should be uploaded & submitted', {
          position: 'top-center',
        });
      } else {
        toast('All fields are required', {
          position: 'top-center',
        });
      }
    } else {
      console.log('🉐imageUrl, bioFieldData');
      console.log(imageUrl, bioFieldData);

      if (user) {
        const dataToSend = {
          profilePhoto: imageUrl,
          bio: bioFieldData,
          email: user.email,
        };

        axiosInstance
          .patch('/api/v1/users/bioform', dataToSend)

          .then((res: any) => {
            console.log('💚axios BioForm update Success', res.data);
            toast(res.data.message, {
              position: 'top-center',
            });
          })
          .catch((error) => {
            console.log(' 🟠axios BioForm error', error);
            toast(error, {
              position: 'top-center',
            });
          });
      }
    }
  };

  // * UPLOAD IMAGE START

  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [previewSource, setPreviewSource] = useState();
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const changeHandler = (e: any) => {
    // for singleFileUpload the file will be in 0th index
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

  // ===
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
    if (user) {
      const dataToSend: any = {
        email: user.email,
      };

      axiosInstance
        .post('/api/v1/users/alldetails', dataToSend)

        .then((res: any) => {
          console.log('💚axios NameForm update Success', res.data);
          setImageUrl(res.data.detailExist.profilePhoto);
          setBioFieldData(res.data.detailExist.bio);
        })
        .catch((error) => {
          console.log(' 🟠axios NameForm error', error);
          toast(error, {
            position: 'top-center',
          });
        });
    }
  }, []);

  return (
    <>
      <Container
        css={{
          justifyContent: 'center',
          width: '100%',
          display: 'flex',
        }}
      >
        <Card className={BioStyles.card}>
          <form
            className="bio"
            onSubmit={(e) => {
              updateBioFormHander(e);
            }}
          >
            {/* <h2>
              URL:{' '}
              {(() => {
                if (imageUrl) {
                  return imageUrl;
                }
                return 'No Image Currently Selected';
              })()}
            </h2> */}
            {/* @ts-ignore */}
            <BioFormImagePreviewer src={imageUrl ? imageUrl : null} alt="" />
            {/* //* preview the image if previewSource is not empty */}
            {previewSource && <img src={previewSource} alt="preview" />}
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
                className={BioStyles.bio_fileBtn}
                type="file"
                value={fileInputState}
                onChange={changeHandler}
              />
            </ImageUploadWrapper>

            <p
              style={{
                fontSize: '2rem',
              }}
            >
              {/* URL:{' '} */}
              {(() => {
                if (imageUrl) {
                  return 'Image Has Been Successfully Uploaded';
                }
                return 'Image Not Uploaded Yet';
              })()}
            </p>
            {/* submit image btn start */}

            <Button
              color="secondary"
              bordered
              size="xl"
              onClick={submitImageHandler}
            >
              Upload Image
            </Button>

            {/* submit image btn  end */}

            <Spacer y={1.5} />
            <label htmlFor="bio__info">
              <Textarea
                name="bio__info"
                helperText="Please enter your bio information"
                id="bio__info"
                label="Bio info"
                placeholder='"I am a full stack developer with a passion for building things that make a difference"'
                status="default"
                width="100%"
                value={bioFieldData}
                onChange={(e) => {
                  setBioFieldData(e.target.value);
                }}
                style={{ minHeight: '20rem', fontSize: '2rem' }}
              />
            </label>
            <Spacer y={1.5} />
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
            <Spacer y={0.5} />
          </form>

          {/* btn container */}

          {nextPreBtn === true && (
            <>
              <div className={BioStyles.prevNext__btnContainer}>
                <Button
                  shadow
                  color="secondary"
                  size="xl"
                  className={BioStyles.btnContainer__btn}
                >
                  <ChevronLeft set="bold" primaryColor="white" />
                  Previous Page
                </Button>
                <Button
                  shadow
                  color="primary"
                  size="xl"
                  className={BioStyles.btnContainer__btn}
                >
                  Next Page
                  <ChevronRight set="bold" primaryColor="white" />
                </Button>
              </div>
            </>
          )}
        </Card>
      </Container>
    </>
  );
};

export default Index;
