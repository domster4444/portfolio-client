import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
// import styles from '../../styles/Post.module.css';
// @ts-ignore
import BlockContent from '@sanity/block-content-to-react';
// import { Toolbar } from '../../components/toolbar';
import Layout from 'components/Layout';
// @ts-ignore
import { Fade } from 'react-reveal';
export const Post = ({
  title,
  body,
  image,
}: {
  title: string;
  body: any;
  image: any;
}) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: '57ezol1e',
      dataset: 'production',
    });
    // @ts-ignore
    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <Layout>
      {/* <Toolbar /> */}
      <article className="blog__article">
        <Fade top>
          <h1
            className="poppins_medium_500"
            style={{
              paddingTop: '0rem',
              paddingBottom: '0rem',
              paddingLeft: '1rem',
              borderLeft: '5px solid #000b387a',
              margin: '2rem 0rem',
              fontSize: '4.5rem',
            }}
          >
            {title}
          </h1>
        </Fade>

        {imageUrl && (
          <img
            style={{ width: '100%', maxHeight: '70rem', borderRadius: '1rem' }}
            src={imageUrl}
          />
        )}

        <div className="poppins_bold_700">
          <BlockContent blocks={body} />
        </div>
      </article>
    </Layout>
  );
};

export const getServerSideProps = async (pageContext: any) => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );
  const url = `https://57ezol1e.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      },
    };
  }
};

export default Post;
