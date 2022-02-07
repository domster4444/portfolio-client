import Image from 'next/image';
import Link from 'next/link';
import NotFoundIllustrator from 'public/images/pages/pageNotFound/PageNotFound.svg';
import { Button } from '@nextui-org/react';

const PageNotFound = () => {
  return (
    <>
      <div className="PNF__illustrator__container">
        <Image
          src={NotFoundIllustrator}
          alt="page not found"
          width={500}
          height={500}
        />
      </div>
      <h1 className="PNF__title">Page not found</h1>
      <div className="PNF__btn__container">
        <Link passHref href="/">
          <Button className="PNF__button" color="primary" size="xl">
            Go Back
          </Button>
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
