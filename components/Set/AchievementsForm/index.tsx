import React, { useState, useEffect } from 'react';
import ImageShower from 'components/ImageShower/ImageShower';
import Image from 'next/image';
import { axiosInstance } from 'lib/utilities/api/api';
import { useUser } from '@auth0/nextjs-auth0';
import { toast } from 'react-toastify';
import { globalConstant } from 'constant/constant';
import styled from 'styled-components';
import { Spacer, Button } from '@nextui-org/react';

import SetCard from 'components/Set/SetCard';
import { TickSquare } from 'react-iconly';

import { ChevronLeft, ChevronRight } from 'react-iconly';
import BioStyles from './bio.module.scss';
import Link from 'next/link';
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

/**
 * @description:Styles For AchievementCards
 * @param {uiElement}
 */

const AchievementCardListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const AchievementCardList = styled.li`
  list-style: none;
`;

const AchievementCards = styled.div`
  background: #f9f9f9b2;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 0.5rem 0.5rem;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  text-overflow: ellipsis;
  overflow: hidden;
  min-height: 25rem;

  img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
  }
  dt {
    margin: 1rem 0rem;
    line-height: 1.1;
    font-size: 1.8rem;
  }

  dd {
    height: 5rem;
    display: block; /* Fallback for non-webkit */
    display: -webkit-box;
    max-width: 400px;
    height: 45px; Fallback for non-webkit
    margin: 0 auto;
    font-size: 1.6rem;
    line-height: 1.5;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.6rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 12rem;
  overflow: hidden;
`;

const ImageUploadWrapper = styled.div`
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

const Index = ({ nextPreBtn = true }: { nextPreBtn: boolean }) => {
  const { user, error, isLoading } = useUser();
  const [imageUrl, setImageUrl] = useState<string>('');
  const [achievementName, setAchievementName] = useState<string>('');
  const [achievementDescription, setAchievementDescription] =
    useState<string>('');

  const [achievements, setAchievements] = useState<any>([]);

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
          setAchievements(res.data.detailExist.achievements);
          console.log(res.data.detailExist.achievements);
        })
        .catch((error) => {
          console.log(' 🟠axios NameForm error', error);
          toast(error, {
            position: 'top-center',
          });
        });
    }
  };

  // !_____________________ UPDATE FORM

  const updateAchievementField = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();

    if (
      imageUrl === '' ||
      achievementName === '' ||
      achievementDescription === ''
    ) {
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
      if (user) {
        const dataToSend = {
          achievementImage: imageUrl,
          achievementName: achievementName,
          achievementDescription: achievementDescription,
          email: user.email,
        };

        axiosInstance
          .patch('/api/v1/users/achievementform', dataToSend)

          .then((res: any) => {
            console.log('💚axios BioForm update Success', res.data);
            toast(res.data.message, {
              position: 'top-center',
            });

            fetchAllDataAndSet();
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

  return (
    <SetCard>
      <form
        style={{
          width: '100%',
        }}
        onSubmit={(e) => {
          updateAchievementField(e);
        }}
      >
        <AchievementCardListContainer>
          {(() => {
            return achievements.map((item: any, index: number) => {
              return (
                <AchievementCardList key={index}>
                  <AchievementCards>
                    <ImageContainer>
                      <img
                        src={item.achievementImage}
                        height="50"
                        width="50"
                        alt=""
                      />
                    </ImageContainer>

                    <dl>
                      <dt className="poppins_medium_500">
                        {item.achievementName}
                      </dt>
                      <dd className="poppins_regular_400">
                        {item.achievementDescription}
                      </dd>
                    </dl>
                    <hr />
                  </AchievementCards>
                </AchievementCardList>
              );
            });
          })()}
        </AchievementCardListContainer>

        <Lable htmlFor="">
          {/* Achievement Image : */}
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
          {/* @ts-ignore */}
          <img src={imageUrl ? imageUrl : null} alt="" />
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
        </Lable>

        <br />

        <Lable htmlFor="">
          Achievement name :
          <br />
          <Input
            type="text"
            onChange={(e) => {
              setAchievementName(e.target.value);
            }}
          />
        </Lable>
        <br />

        <Lable htmlFor="">
          Achievement description :
          <br />
          <Textarea
            onChange={(e) => {
              setAchievementDescription(e.target.value);
            }}
          />
        </Lable>
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
        {nextPreBtn === true && (
          <>
            <div className={BioStyles.prevNext__btnContainer}>
              <Link passHref href="/dashboard/projects">
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
              {/* <Button
                shadow
                color="primary"
                size="xl"
                className={BioStyles.btnContainer__btn}
              >
                Next Page
                <ChevronRight set="bold" primaryColor="white" />
              </Button> */}
            </div>
          </>
        )}
      </form>
    </SetCard>
  );
};

export default Index;
