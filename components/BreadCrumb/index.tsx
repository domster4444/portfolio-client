import React from 'react';
import styled from 'styled-components';

const BreadCrumb = styled.span`
  font-size: 2rem;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem 0.95rem;

  .breadLink {
    /* background: red; */
    /* margin: 0rem 0.25rem; */
    /* text-decoration: underline; */
  }
  a {
    color: rgb(25, 25, 112);
    text-decoration: none;
  }

  .box {
    align-items: center;
    border: 1px solid rgb(212, 212, 212);
    display: flex;
    border-radius: 3.45rem;
    padding: 0.2rem 1.5rem;
    /* background: blue; */
  }
  span {
    margin: 0rem 1rem;
    color: #a0a0a0;
  }
`;

const Index = ({ breadCrumbLink }: { breadCrumbLink: any }) => {
  return (
    <BreadCrumb className="bread-crumb">
      <span className="box">
        {(() => {
          return breadCrumbLink.map((item: String, index: Number): any => {
            return (
              <>
                {/* dont return "/" if index of array is 0 */}
                {(() => {
                  if (index > 0) {
                    return <span>/</span>;
                  }
                })()}
                <div className="breadLink">
                  <a className="poppins_regular_400" href="">
                    {item}
                  </a>
                </div>
              </>
            );
          });
        })()}
      </span>
    </BreadCrumb>
  );
};

export default Index;
