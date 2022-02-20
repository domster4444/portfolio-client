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
  width: 300px;
  height: 300px;
  background-color: #f5f5f5;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;
  p {
    font-size: 1.8rem;
  }
  &:hover {
    cursor: pointer;
    border: 2px solid grey;
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
          Welcome To Blog Page
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
                      onClick={() => {
                        router.push(`/post/${p.slug.current}`);
                      }}
                    >
                      <h4
                        style={{
                          fontSize: '1.8rem',
                        }}
                      >
                        {p.title}
                      </h4>
                      <Image
                        src={`${p.mainImage}`}
                        alt="blog"
                        height={500}
                        width={500}
                      />
                      <p>{p._createdAt}</p>
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
