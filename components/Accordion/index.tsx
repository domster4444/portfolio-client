import React from 'react';

import { Grid, Collapse, Text, css } from '@nextui-org/react';
// @ts-ignore
import { Zoom } from 'react-reveal';
import styled from 'styled-components';
const AccordionSection = styled.section`
  margin: 10rem 0rem;
`;
const index: React.FC = () => {
  return (
    <>
      <AccordionSection>
        <Grid.Container gap={2} style={{ justifyContent: 'center' }}>
          <Grid>
            <Collapse.Group
              className="poppins_light_200"
              shadow
              divider={false}
            >
              <Zoom>
                <Collapse title="What are benefits of joining us ?">
                  <Text size={20}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                </Collapse>
              </Zoom>
              <Zoom>
                <Collapse
                  className="poppins_regular_400"
                  title="Where can I get customer assistance?"
                >
                  <Text size={20}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                </Collapse>
              </Zoom>

              <Zoom>
                <Collapse
                  className="poppins_regular_400"
                  title="What services we provide ?"
                >
                  <Text size={20}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                </Collapse>
              </Zoom>
            </Collapse.Group>
          </Grid>
        </Grid.Container>
      </AccordionSection>
    </>
  );
};

export default index;
