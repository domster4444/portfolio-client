import React, { useState } from 'react';
import { NextPage } from 'next';
import Layout from 'components/Layout';
import styled from 'styled-components';
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import { useRouter } from 'next/router';
// @ts-ignore
import { Fade, Zoom } from 'react-reveal';

const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const BlogCard = styled.div`
  overflow: hidden;
  width: 400px;
  @media only screen and (max-width: 430px) {
    width: 95%;
  }
  min-height: 450px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  p {
    font-size: 1.8rem;
  }
  &:hover {
    h4 {
      color: #001e97;
    }
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 40px;
  }
  &:active {
    transform: scale(0.99);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BlogPage: NextPage = ({ posts }: any) => {
  const router = useRouter();
  console.log(posts);
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: '57ezol1e',
        dataset: 'production',
      });

      setMappedPosts(
        posts.map((p: { mainImage: string }) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(500),
          };
        })
      );
      console.log('MAPPED POSTS', mappedPosts);
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  const ContactHeaderWrapper = styled.header`
    margin-top: 20px;
    /* background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='131' height='131' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(154)'%3E%3Crect width='100%25' height='100%25' fill='rgba(226, 233, 250,1)'/%3E%3Cpath d='M-10 19.5h 60v1h-60zM-10-21h60v1h-60' fill='rgba(232, 239, 252,1)'/%3E%3Ccircle r='0.5' cx='0' cy='20' fill='rgba(203, 218, 246,1)'/%3E%3Ccircle r='0.5' cx='40' cy='20' fill='rgba(203, 218, 246,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E "); */
    min-height: 10vh;
    background-size: cover;
    background-position: center;
    padding: 5rem 2rem;
    border-radius: 1.5rem;
  `;

  return (
    <Layout>
      <section className="blog">
        <ContactHeaderWrapper>
          <Fade bottom>
            <h2
              className="source_700"
              style={{
                fontSize: '3.5rem',
                color: '#1c2444',
                letterSpacing: '0.1rem',
                textAlign: 'center',
              }}
            >
              Blogs & Articles
            </h2>
            <p
              className="poppins_regular_400"
              style={{
                fontSize: '1.8rem',
                textAlign: 'center',
                color: '#1c2444',
              }}
            >
              Expand your knowledge by reading our blogs.
            </p>
          </Fade>
        </ContactHeaderWrapper>
        <BlogContainer className="blog__container">
          {mappedPosts.length >= 0 ? (
            mappedPosts.map(
              (
                p: {
                  slug: { current: string };
                  mainImage: string;
                  title: string;
                  _createdAt: string;
                },
                index
              ) => {
                return (
                  <div key={index}>
                    <BlogCard
                      style={{
                        position: 'relative',
                        paddingBottom: '1.5rem',
                      }}
                      onClick={() => {
                        router.push(`/post/${p.slug.current}`);
                      }}
                    >
                      <Image
                        src={`${p.mainImage}`}
                        alt="blog"
                        height={300}
                        width={500}
                      />
                      <h4
                        className="poppins_medium_500"
                        style={{
                          marginTop: '1.5rem',
                          padding: '0rem 1.25rem',
                          fontSize: '2.0rem',
                        }}
                      >
                        {p.title}
                      </h4>
                      <p
                        style={{
                          color: '#838fa0',
                          padding: '0rem 1.25rem',
                          fontSize: '1.8rem',
                        }}
                      >
                        {/* @ts-ignore */}
                        {p.body[0].children[0].text}
                      </p>
                      <span
                        style={{
                          padding: '0.25rem',
                          borderRadius: '0.45rem',
                          background: 'white',
                          bottom: '0',
                          color: 'black',
                          position: 'absolute',
                          right: '0',
                          fontSize: '1.4rem',
                        }}
                        className="poppins_regular_400"
                      >
                        Date : {p._createdAt.slice(0, 10)}
                      </span>
                    </BlogCard>
                  </div>
                );
              }
            )
          ) : (
            <>NO POSTS YET</>
          )}
        </BlogContainer>
      </section>
    </Layout>
  );
};

export const getServerSideProps = async (pageContext: any) => {
  const query = encodeURIComponent(`*[ _type == "post" ]`);
  const url = `https://57ezol1e.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};

export default BlogPage;
