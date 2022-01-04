import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:786-627-9797'>786-627-9797</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Gmail</LinkTitle>
          <LinkItem href='mailto:matiasseisdedosg@gmail.com'>matiasseisdedosg@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://wwww.github.com/matiseisdedos'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://wwww.linkedin.com/in/matiasseisdedosgiletta'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
