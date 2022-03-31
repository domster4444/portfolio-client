import React from 'react';

import { Grid, Collapse, Text, css } from '@nextui-org/react';
// @ts-ignore
import { Fade } from 'react-reveal';
import styled from 'styled-components';
const AccordionSection = styled.section`
  /* margin: 2rem 0rem; */
`;
const index: React.FC = () => {
  return (
    <>
      <Fade bottom>
        <AccordionSection>
          <Grid.Container gap={2} style={{ justifyContent: 'center' }}>
            <Grid>
              <Collapse.Group
                className="poppins_light_200"
                shadow
                divider={false}
              >
                <Collapse title="What are benefits of joining us ?">
                  <Text size={20}>
                    The benifits that you get when you join us are: - You get to
                    create your portfolio and showcase your skills - You get our
                    best team of developers to help you with building your
                    portfolio website. - Our best customer care team will guide
                    you through every steps.
                  </Text>
                </Collapse>
                <Collapse
                  className="poppins_regular_400"
                  title="Where can I get customer assistance?"
                >
                  <Text size={20}>
                    You can get customer assistance by clicking the chat icon
                    present in bottom right most corner of our website.
                  </Text>
                </Collapse>

                <Collapse
                  className="poppins_regular_400"
                  title="What services we provide ?"
                >
                  <Text size={20}>
                    We provide extensive services to our customers for
                    generating their desired portfolio presence & personal site
                    to crack their next job interview.
                  </Text>
                </Collapse>
              </Collapse.Group>
            </Grid>
          </Grid.Container>
        </AccordionSection>
      </Fade>
    </>
  );
};

export default index;
