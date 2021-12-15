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
          <LinkItem href="tel: 512-589-7488"> 512-589-7488</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:zcooremans@gmail.com"> zcooremans@gmail.com</LinkItem>
        </LinkColumn>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Just trying to get it right</Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com/ZacharyCooremans">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/zachary-cooremans-a26065208/">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
