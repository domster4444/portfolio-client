import React, { useState, useEffect } from 'react';
import ImageShower from 'components/ImageShower/ImageShower';
import Image from 'next/image';
import { axiosInstance } from 'lib/utilities/api/api';
import { useUser } from '@auth0/nextjs-auth0';
import { toast } from 'react-toastify';
import { globalConstant } from 'constant/constant';

import SetCard from 'components/Set/SetCard';
import { TickSquare } from 'react-iconly';
import { Spacer, Button } from '@nextui-org/react';

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
  const [imageUrl, setImageUrl] = useState<string>('');
  const [projects, setProjects] = useState<any>([]);

  // local state
  const [projectName, setProjectName] = useState<string>('');
  const [projectDescription, setProjectDescription] = useState<string>('');
  const [projectVideoLink, setProjectVideoLink] = useState<string>('');
  const [projectGithubLink, setProjectGithubLink] = useState<string>('');
  const [projectWebsiteLink, setProjectWebsiteLink] = useState<string>('');
  const [projectDocLink, setProjectDocLink] = useState<string>('');

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
          setProjects(res.data.detailExist.projects);
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

  const updateProjectForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (imageUrl === '' || projectName === '' || projectDescription === '') {
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
          projectImage: imageUrl,
          projectName,
          projectDescription,
          projectVideoLink,
          projectGithubLink,
          projectWebsiteLink,
          projectDocLink,
          email: user.email,
        };

        axiosInstance
          .patch('/api/v1/users/projectform', dataToSend)

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
      {(() => {
        return projects.map((item: any, index: any) => {
          return (
            <li key={index}>
              <img src={item.projectImage} height="100" alt="" />
              <h4>{item.projectName && item.projectName}</h4>
              <h4>{item.projectDescription && item.projectDescription}</h4>
              <h4>{item.projectVideoLink}</h4>
              <h4>{item.projectGithubLink && item.projectGithubLink}</h4>
              <h4>{item.projectWebsiteLink && item.projectWebsiteLink}</h4>
              <h4>{item.projectDocLink && item.projectDocLink}</h4>

              <hr />
            </li>
          );
        });
      })()}

      <form
        onSubmit={(e) => {
          updateProjectForm(e);
        }}
        action=""
        style={{
          width: '100%',
        }}
      >
        <Lable htmlFor="">
          Achievement Image :
          <br />
          <h2>
            URL:{' '}
            {(() => {
              if (imageUrl) {
                return imageUrl;
              }
              return 'No Image Currently Selected';
            })()}
          </h2>
          {/* @ts-ignore */}
          <img src={imageUrl ? imageUrl : null} alt="" />
          <Spacer y={1} />
          <Spacer y={1} />
          {/* //* preview the image if previewSource is not empty */}
          {previewSource && <img src={previewSource} alt="preview" />}
          <ImageShower />
          <input
            name="bio__img"
            type="file"
            value={fileInputState}
            onChange={changeHandler}
          />
          {/* submit image btn start */}
          <Button color="success" size="xl" onClick={submitImageHandler}>
            submit Image
            <Spacer x={0.5} />
          </Button>
        </Lable>

        <Lable htmlFor="">
          Project Name
          <br />
          <Input
            type="text"
            onChange={(e) => {
              setProjectName(e.target.value);
            }}
          />
        </Lable>
        <br />
        <Lable htmlFor="">
          Project Description
          <br />
          <Textarea
            onChange={(e) => {
              setProjectDescription(e.target.value);
            }}
          />
        </Lable>
        <br />

        <Lable htmlFor="">
          Project Video Link
          <br />
          <Input
            type="text"
            onChange={(e) => {
              setProjectVideoLink(e.target.value);
            }}
          />
        </Lable>
        <Lable htmlFor="">
          Project github Link
          <br />
          <Input
            type="text"
            onChange={(e) => {
              setProjectGithubLink(e.target.value);
            }}
          />
        </Lable>

        <Lable htmlFor="">
          Project website Link
          <br />
          <Input
            type="text"
            onChange={(e) => {
              setProjectWebsiteLink(e.target.value);
            }}
          />
        </Lable>
        <Lable htmlFor="">
          Project Docs Link
          <br />
          <Input
            type="text"
            onChange={(e) => {
              setProjectDocLink(e.target.value);
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
