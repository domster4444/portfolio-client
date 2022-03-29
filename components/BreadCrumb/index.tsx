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
    margin: 0rem 0.25rem;
    text-decoration: underline;
  }
  a {
    color: rgb(25, 25, 112);
    text-decoration: none;
  }

  span {
    color: #a0a0a0;
  }
`;

const Index = ({ breadCrumbLink }: { breadCrumbLink: any }) => {
  return (
    <BreadCrumb className="bread-crumb">
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
                <a href="">{item}</a>
              </div>
            </>
          );
        });
      })()}
    </BreadCrumb>
  );
};

export default Index;
