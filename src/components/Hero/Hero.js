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
      <SectionText>
        I strive to meet the goals of my projects. I can build fully functioning single page applications. I can contribute by adding features, styles, and making new endpoints.
      </SectionText>
      <Button onClick={() => window.open('https://docs.google.com/document/d/14KddRFHUSh1fuLH37H0VYJxRrw2ktBt35meR5fa0CMg/edit?usp=sharing')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;