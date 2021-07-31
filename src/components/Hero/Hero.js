import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello I am Zachary Cooremans <br />
        Welcome to my Portfolio
      </SectionTitle>
      <SectionTitle>
        I dont know yet
      </SectionTitle>
      <Button onClick={() => window.location = 'https:google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;