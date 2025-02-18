import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
           Welcome To <br/>
           My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Full Stack developer 
        </SectionText>
        <Button onClick={() => window.location = "mailto:matiasseisdedosg@gmail.com"}>Contact Me</Button>
      </LeftSection>
    </Section>
);

export default Hero;