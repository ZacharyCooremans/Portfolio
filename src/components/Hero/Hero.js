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
        I strive to meet the goals of my projects. I can build fully functioning single page applications and add new features to existing ones.
      </SectionText>
      <Button onClick={() => window.open('https://docs.google.com/document/d/1eF0B_mCzs7kqV2le3vkUYgyu2xrPa_t7ZF40EAp_ZZg/edit?usp=sharing')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;