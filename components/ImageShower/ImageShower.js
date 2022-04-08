import React, { useState, useEffect } from 'react';
import { Image } from 'cloudinary-react';

import { globalConstant } from '../../constant/constant';
const ImageShower = () => {
  const [imageIds, setImageIds] = useState([]);
  const loadImages = async () => {
    try {
      const res = await fetch(`${globalConstant.serverURL}/api/allimages`);
      const data = await res.json();
      console.log(data);
      setImageIds(data);
    } catch (err) {
      console.log(err);
    }
  };
  //call  this function only once when the component is mounted
  useEffect(() => {
    loadImages();
  }, []);

  return (
    <div>
      {/* <h1>YOUR IMAGES</h1> */}
      {(() => {
        if (imageIds.length > 0) {
          return imageIds.map((image, index) => {
            return (
              <Image
                key={index}
                cloudName="dzrzzuntu"
                publicId={image}
                width="500"
                height="500"
                crop="scale"
              />
            );
          });
        }
      })()}
    </div>
  );
};

export default ImageShower;

