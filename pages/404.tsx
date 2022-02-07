import Image from 'next/image';
import NotFoundIllustrator from 'public/images/pages/pageNotFound/PageNotFound.svg';
import { Button } from '@nextui-org/react';
const PageNotFound = () => {
  return (
    <>
      <Image
        src={NotFoundIllustrator}
        alt="page not found"
        width={500}
        height={500}
      />
      <h1 style={{ textAlign: 'center' }}>Page not found</h1>
      <Button color="primary" size="xl">
        Go Back
      </Button>
    </>
  );
};

export default PageNotFound;
