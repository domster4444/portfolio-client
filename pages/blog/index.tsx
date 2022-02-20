import React, { useState } from 'react';
import { NextPage } from 'next';
import Layout from 'components/Layout';
import styled from 'styled-components';
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import { useRouter } from 'next/router';

const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const BlogCard = styled.div`
  overflow: hidden;
  width: 400px;
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

  return (
    <Layout>
      <section className="blog">
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          Welcome To Our Blog Page
        </h1>

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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Unde facilis magni temporibus praesentium, at
                        corrupti!
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
