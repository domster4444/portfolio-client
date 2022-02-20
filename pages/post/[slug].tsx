import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
// import styles from '../../styles/Post.module.css';
import BlockContent from '@sanity/block-content-to-react';
// import { Toolbar } from '../../components/toolbar';

export const Post = ({ title, body, image }) => {
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
    <div>
      {/* <Toolbar /> */}
      <div>
        <h1>{title}</h1>
        {imageUrl && (
          <img
            style={{
              width: '100%',
              height: '50rem',
            }}
            src={imageUrl}
          />
        )}

        <div className="poppins_bold_700">
          <BlockContent blocks={body} />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
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
